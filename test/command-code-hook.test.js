const { describe, it } = require("node:test");
const assert = require("node:assert");
const {
  AGENT_ID,
  HOOK_MAP,
  isCommandCodeAgentCommandLine,
  normalizeSessionId,
  buildStateBody,
  pidCacheContext,
  shouldResolvePid,
  sendHookEvent,
} = require("../hooks/command-code-hook");

describe("Command Code hook runtime (Phase 1 state-only)", () => {
  it("maps the four documented events", () => {
    assert.strictEqual(HOOK_MAP.SessionStart.state, "idle");
    assert.strictEqual(HOOK_MAP.SessionStart.event, "SessionStart");
    assert.strictEqual(HOOK_MAP.PreToolUse.state, "working");
    assert.strictEqual(HOOK_MAP.PreToolUse.event, "PreToolUse");
    assert.strictEqual(HOOK_MAP.PostToolUse.state, "working");
    assert.strictEqual(HOOK_MAP.PostToolUse.event, "PostToolUse");
    // Stop is turn completion → attention, like the other Claude-style agents.
    assert.strictEqual(HOOK_MAP.Stop.state, "attention");
    assert.strictEqual(HOOK_MAP.Stop.event, "Stop");
    // There is no SessionEnd / Notification / PermissionRequest event.
    assert.strictEqual(HOOK_MAP.SessionEnd, undefined);
    assert.strictEqual(HOOK_MAP.Notification, undefined);
    assert.strictEqual(HOOK_MAP.PermissionRequest, undefined);
  });

  it("namespaces session ids as command-code:<raw> and drops placeholders", () => {
    assert.strictEqual(normalizeSessionId("abc"), "command-code:abc");
    assert.strictEqual(normalizeSessionId("  abc  "), "command-code:abc");
    assert.strictEqual(normalizeSessionId(""), "");
    assert.strictEqual(normalizeSessionId(null), "");
    assert.strictEqual(normalizeSessionId("default"), "");
    assert.strictEqual(normalizeSessionId("command-code:default"), "");
    assert.strictEqual(normalizeSessionId("x".repeat(201)), "");
    assert.strictEqual(normalizeSessionId("bad\nid"), "");
  });

  it("builds a state body with agent_id, namespaced session, tool metadata, and pid fields", () => {
    const body = buildStateBody({
      hook_event_name: "PreToolUse",
      session_id: "s1",
      cwd: "/work",
      tool_name: "shell_command",
      permission_mode: "default",
      tool_input: { command: "npm test" },
    }, { pidMeta: { stablePid: 123, agentPid: 456 } });

    assert.strictEqual(body.agent_id, AGENT_ID);
    assert.strictEqual(body.state, "working");
    assert.strictEqual(body.event, "PreToolUse");
    assert.strictEqual(body.session_id, "command-code:s1");
    assert.strictEqual(body.cwd, "/work");
    assert.strictEqual(body.tool_name, "shell_command");
    assert.strictEqual(body.source_pid, 123);
    assert.strictEqual(body.agent_pid, 456);
    // No prompt, tool input, or free-form content is ever forwarded.
    assert.strictEqual(body.tool_input, undefined);
    assert.strictEqual(body.prompt, undefined);
  });

  it("does not attach tool_name to lifecycle events", () => {
    const start = buildStateBody({ hook_event_name: "SessionStart", session_id: "s1" }, {});
    assert.strictEqual(start.state, "idle");
    assert.strictEqual(start.tool_name, undefined);

    const stop = buildStateBody({ hook_event_name: "Stop", session_id: "s1", stop_hook_active: false }, {});
    assert.strictEqual(stop.state, "attention");
    assert.strictEqual(stop.tool_name, undefined);
  });

  it("returns null for unmapped events, malformed payloads, and missing sessions", () => {
    assert.strictEqual(buildStateBody({ hook_event_name: "UserPromptSubmit", session_id: "s1" }, {}), null);
    assert.strictEqual(buildStateBody({ hook_event_name: "SessionEnd", session_id: "s1" }, {}), null);
    assert.strictEqual(buildStateBody({ hook_event_name: "PreToolUse" }, {}), null);
    assert.strictEqual(buildStateBody({ hook_event_name: "PreToolUse", session_id: "default" }, {}), null);
    assert.strictEqual(buildStateBody(null, {}), null);
    assert.strictEqual(buildStateBody([], {}), null);
    assert.strictEqual(buildStateBody("payload", {}), null);
  });

  it("uses host instead of local pid fields in remote mode", () => {
    const body = buildStateBody({ hook_event_name: "Stop", session_id: "s1" }, { remote: true, host: "myhost" });
    assert.strictEqual(body.host, "myhost");
    assert.strictEqual(body.source_pid, undefined);
    assert.strictEqual(body.agent_pid, undefined);
  });

  it("narrows command-line detection to the command-code package entry", () => {
    assert.strictEqual(
      isCommandCodeAgentCommandLine("node C:\\Users\\me\\AppData\\Roaming\\npm\\node_modules\\command-code\\dist\\index.mjs"),
      true
    );
    assert.strictEqual(
      isCommandCodeAgentCommandLine("/usr/local/lib/node_modules/command-code/dist/index.mjs"),
      true
    );
    assert.strictEqual(
      isCommandCodeAgentCommandLine("NODE /home/me/.bun/install/global/node_modules/command-code/dist/index.mjs"),
      true
    );
    // Must NOT match other executables or unrelated mentions.
    assert.strictEqual(isCommandCodeAgentCommandLine("node /home/me/command-code-notes/index.js"), false);
    assert.strictEqual(isCommandCodeAgentCommandLine("node /home/me/command-code/src/app.js"), false);
    assert.strictEqual(isCommandCodeAgentCommandLine("cmd.exe /c dir"), false);
    assert.strictEqual(isCommandCodeAgentCommandLine(""), false);
    assert.strictEqual(isCommandCodeAgentCommandLine(null), false);
  });

  it("builds the #634 resolver cache context from the raw session id and cwd", () => {
    assert.deepStrictEqual(pidCacheContext({ hook_event_name: "SessionStart", session_id: "s1", cwd: "D:/repo" }), {
      namespace: "command-code",
      sessionId: "command-code:s1",
      cacheCwd: "D:/repo",
      lifecycle: "start",
      cacheable: true,
    });
    assert.deepStrictEqual(pidCacheContext({ hook_event_name: "Stop", session_id: "s1", cwd: "D:/repo" }), {
      namespace: "command-code",
      sessionId: "command-code:s1",
      cacheCwd: "D:/repo",
      lifecycle: "event",
      cacheable: true,
    });
    // Placeholder / missing ids and missing cwd must never key a shared cache.
    assert.strictEqual(pidCacheContext({ hook_event_name: "Stop", session_id: "default", cwd: "D:/repo" }).cacheable, false);
    assert.strictEqual(pidCacheContext({ hook_event_name: "Stop", session_id: "s1" }).cacheable, false);
    assert.strictEqual(pidCacheContext({ hook_event_name: "Stop" }).cacheable, false);
  });

  it("resolves a pid only for mapped events and never in remote mode", () => {
    assert.strictEqual(shouldResolvePid({ hook_event_name: "Stop" }, {}), true);
    assert.strictEqual(shouldResolvePid({ hook_event_name: "PreToolUse" }, {}), true);
    assert.strictEqual(shouldResolvePid({ hook_event_name: "Stop" }, { CLAWD_REMOTE: "1" }), false);
    assert.strictEqual(shouldResolvePid({ hook_event_name: "UserPromptSubmit" }, {}), false);
    assert.strictEqual(shouldResolvePid(null, {}), false);
  });

  it("sendHookEvent always writes {} and posts the mapped Stop body", async () => {
    const posted = [];
    const result = await sendHookEvent(
      { hook_event_name: "Stop", session_id: "s1", cwd: "D:/repo" },
      {
        env: {},
        resolvePid: () => ({ stablePid: 7 }),
        postState: (bodyStr, _opts, cb) => { posted.push(JSON.parse(bodyStr)); cb(true, 23333); },
      }
    );
    assert.strictEqual(result.stdout, "{}\n");
    assert.strictEqual(result.posted, true);
    assert.strictEqual(posted.length, 1);
    assert.strictEqual(posted[0].state, "attention");
    assert.strictEqual(posted[0].agent_id, "command-code");
    assert.strictEqual(posted[0].session_id, "command-code:s1");
    assert.strictEqual(posted[0].source_pid, 7);
  });

  it("sendHookEvent returns {} and does not post for unmapped events or missing sessions", async () => {
    let postedCount = 0;
    for (const payload of [
      { hook_event_name: "UserPromptSubmit", session_id: "s1" },
      { hook_event_name: "PreToolUse" },
    ]) {
      const result = await sendHookEvent(payload, {
        env: {},
        postState: () => { postedCount++; },
      });
      assert.strictEqual(result.stdout, "{}\n");
      assert.strictEqual(result.posted, false);
    }
    assert.strictEqual(postedCount, 0);
  });
});
