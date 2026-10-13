# Open a local OpenCode serve session in a new terminal

On Windows, a local OpenCode v1 `serve` session can offer **Open in new terminal** on its Dashboard card. This is a separate action: **Jump to terminal** keeps its existing behavior.

Requirements:
- OpenCode v1 running with the explicit `serve` command and the current Clawd v1 plugin.
- A loopback HTTP(S) listener, an existing local session directory, and a root session.
- Windows Terminal and an OpenCode v1 native executable discoverable through PATH. The official v1 Windows npm installation is supported through its native `opencode-ai/bin/opencode.exe`; `.cmd` shims are never executed by this action.

The new terminal runs `opencode attach` with the session's raw ID and directory. Wildcard IPv4/IPv6 listeners are rewritten to loopback. The action does not send a prompt, make a permission decision, or switch to a new session if attach fails. A successful launch means Windows Terminal started, not that authentication or the attach connection completed successfully.

Ordinary TUI internal URLs, v2 daemon, MiMo, headless child sessions, WSL, Remote SSH, macOS and Linux do not offer this first implementation. LAN-bound non-loopback URLs and URL-embedded credentials are not supported. This action does not copy credentials; servers requiring authentication may still require the native client's normal authentication setup.

## Validation status for the first contribution

- Capability regressions were demonstrated failing before implementation, then passing.
- Focused plugin, target/launcher, routing/state, snapshot, trusted IPC and translation suite: 300 passed, zero failed.
- Full Windows suite: 13,113 passed, 24 failed, 125 skipped. The failing files are being compared with clean main; this is not a claim that the full suite is green.
- OpenCode 1.18.31 was installed in an isolated directory and its native executable and `attach --session --dir` help were checked.
- Real serve/attach smoke is **pending**: the isolated server start was denied by the environment's permission check. Neither real host argv/SDK endpoint identity nor actual session selection in Windows Terminal has been proven. This work should remain a draft until that verification is completed.
