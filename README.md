<p align="center">
  <img src="assets/icon.png" width="128" alt="Clawd">
</p>

<div align="center">
  <h1>Clawd on Desk</h1>
  <p><b>A pixel desktop pet that reacts to your AI coding agent in real time.</b></p>
  <p>English · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko-KR.md">한국어</a> · <a href="README.ja-JP.md">日本語</a> · <a href="README.es.md">Español</a></p>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/stargazers"><img src="https://img.shields.io/github/stars/rullerzhou-afk/clawd-on-desk?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/releases"><img src="https://img.shields.io/github/v/release/rullerzhou-afk/clawd-on-desk?label=version&style=flat-square" alt="Version"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/hesreallyhim/awesome-claude-code"><img src="https://awesome.re/mentioned-badge-flat.svg" alt="Mentioned in Awesome Claude Code"></a>
</div>

<p align="center">
  <img src="assets/hero.gif" alt="Clawd on Desk — a pixel desktop pet that reacts to your AI coding agent in real time. Animated demo: the crab cycles through sleeping, thinking while the model reads the codebase, typing as edit/bash tools run, grooving for one subagent, juggling when multiple subagents run, raising a permission bubble, and celebrating when 14 files / 312 tests are complete. Works with Claude Code, Codex, Cursor, Copilot, Gemini, Antigravity, Qwen, CodeWhale, Pi, OMP, OpenClaw and more.">
</p>

Start a long task, walk away, and come back when the crab tells you it's done. Clawd thinks while you prompt, types while tools run, juggles when subagents pile up, pops a card when a tool needs your approval, and dozes off when you step away.

## Features

- **Live agent status**: 12 animated states driven by agent hooks and logs, plus eye tracking, a sleep sequence, click reactions, and a mini mode that peeks from the screen edge
- **Works with your tools**: Claude Code, Codex, Copilot, Gemini, Cursor, opencode, Kiro, Qwen and 20+ more, each session tracked side by side
- **Permission bubbles**: Allow or Deny tool requests from a floating card or a global hotkey, or switch to auto-approve
- **Sessions at a glance**: a HUD next to the pet, a dashboard of every live session with one-click jump to its terminal, quota rings, and a private local recap
- **Away from your desk**: approve from Telegram or Feishu/Lark, get Slack notifications, or follow sessions on your phone with the read-only mobile PWA
- **Make it yours**: Clawd, Calico and Cloudling built in, official themes to download, Codex Pet imports, or a theme of your own
- **Runs where you code**: Windows (x64 and ARM64), macOS and Linux, plus Remote SSH and WSL, with the UI in 7 languages

Every feature in detail: **[docs/guides/features.md](docs/guides/features.md)**

## Quick Start

Download the latest installer from **[GitHub Releases](https://github.com/rullerzhou-afk/clawd-on-desk/releases/latest)**:

| Platform | Download |
|---|---|
| Windows | `Clawd-on-Desk-Setup-<version>-x64.exe` or `-arm64.exe` |
| macOS | `.dmg`, or `brew install --cask clawd-on-desk` |
| Linux | `.AppImage` or `.deb` (Homebrew also works on x86_64) |

Launch Clawd and it starts reacting right away: Claude Code and Codex are connected on first launch. Every other agent is one click away in **Settings → AI Coding Tools**.

<details>
<summary><strong>Run from source</strong></summary>
<br/>

Only needed for contributing, testing unreleased code, or debugging integrations. Source installs download Electron and build tooling, so `node_modules` gets large.

```bash
# Clone the repo
git clone https://github.com/rullerzhou-afk/clawd-on-desk.git
cd clawd-on-desk

# Install dependencies
npm install

# Start Clawd (auto-registers Claude Code and Codex hooks on launch)
npm start
```

Prerequisites, Remote SSH, WSL, and macOS / Linux notes: **[setup guide](docs/guides/setup-guide.md)**

</details>

## Supported Agents

> **Claude Code** · **Codex CLI** · **Copilot CLI** · **Gemini CLI** · **Antigravity CLI (agy)** · **Cursor Agent** · **CodeBuddy** · **WorkBuddy** · **Grok Build** · **Kiro CLI** · **KiroCrew** · **Kimi Code CLI (Kimi-CLI)** · **Qwen Code** · **ZCode** · **CodeWhale** · **opencode** · **MiMo Code** · **Pi** · **OMP** · **OpenClaw** · **Hermes Agent** · **Qoder** · **QoderWork** · **QwenWork (千问办公)** · **Reasonix CLI** · **DeepSeek Harness** · **TraeCode (Trae CN)** · **MiniMax Code**

Claude Code and Codex CLI are set up on first launch; install any other integration from **Settings → AI Coding Tools** and Clawd keeps it synced. Other local tools can report through the [custom HTTP agent](docs/guides/custom-agent-http.md) endpoint. Per-agent details are in **[supported agents](docs/guides/supported-agents.md)**, and gaps such as agents without permission bubbles are in **[known limitations](docs/guides/known-limitations.md)**.

## Themes

<table>
  <tr>
    <td align="center"><img src="assets/gif/clawd-idle.gif" width="100"><br><sub>Idle</sub></td>
    <td align="center"><img src="assets/gif/clawd-thinking.gif" width="100"><br><sub>Thought Bubble</sub></td>
    <td align="center"><img src="assets/gif/clawd-typing.gif" width="100"><br><sub>Typing</sub></td>
    <td align="center"><img src="assets/gif/clawd-building.gif" width="100"><br><sub>Building</sub></td>
    <td align="center"><img src="assets/gif/clawd-headphones-groove.gif" width="100"><br><sub>1 Subagent</sub></td>
    <td align="center"><img src="assets/gif/clawd-juggling.gif" width="100"><br><sub>2+ Subagents</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/calico-idle.gif" width="80"><br><sub>Calico Idle</sub></td>
    <td align="center"><img src="assets/gif/calico-thinking.gif" width="80"><br><sub>Calico Thinking</sub></td>
    <td align="center"><img src="assets/gif/calico-typing.gif" width="80"><br><sub>Calico Typing</sub></td>
    <td align="center"><img src="assets/gif/calico-building.gif" width="80"><br><sub>Calico Building</sub></td>
    <td align="center"><img src="assets/gif/calico-juggling.gif" width="80"><br><sub>Calico Juggling</sub></td>
    <td align="center"><img src="assets/gif/calico-conducting.gif" width="80"><br><sub>Calico Conducting</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/cloudling-idle.gif" width="120"><br><sub>Cloudling Idle</sub></td>
    <td align="center"><img src="assets/gif/cloudling-thinking.gif" width="120"><br><sub>Cloudling Thinking</sub></td>
    <td align="center"><img src="assets/gif/cloudling-typing.gif" width="120"><br><sub>Cloudling Typing</sub></td>
    <td align="center"><img src="assets/gif/cloudling-building.gif" width="120"><br><sub>Cloudling Building</sub></td>
    <td align="center"><img src="assets/gif/cloudling-juggling.gif" width="120"><br><sub>Cloudling Juggling</sub></td>
    <td align="center"><img src="assets/gif/cloudling-conducting.gif" width="120"><br><sub>Cloudling Conducting</sub></td>
  </tr>
</table>

Clawd ships with **Clawd** (pixel crab), **Calico** (三花猫) and **Cloudling** (云宝). **Hash Sage** (哈希仙人) and **Whale-chan** (鲸鱼娘) are optional official themes in **Settings → Theme**, where you can also import a Codex Pet zip. To draw your own, run `npm run create-theme -- my-theme` and follow the **[theme creation guide](docs/guides/guide-theme-creation.md)**. Which event plays which animation: [state mapping](docs/guides/state-mapping.md).

## Guides

| Guide | What it covers |
|---|---|
| [Features](docs/guides/features.md) | Every feature in detail |
| [Setup guide](docs/guides/setup-guide.md) | Source builds, agent setup, Windows / macOS / Linux notes |
| [Permission handling](docs/guides/setup-guide.md#permission-handling-automation) | Ask every time, question prompts only, or auto-approve |
| [Remote SSH](docs/guides/guide-remote-ssh.md) | State and permission bubbles from agents on a remote server |
| [Codex + WSL](docs/guides/codex-wsl-clarification.md) | What Clawd supports for Codex inside WSL |
| [Remote approval](docs/guides/telegram-approval.md) | Telegram, plus [Feishu / Lark](docs/guides/feishu-lark-remote-approval.md) and [Slack notifications](docs/guides/slack-notifications.md) |
| [Recap](docs/guides/recap.md) | Private local activity review |
| [Custom HTTP agents](docs/guides/custom-agent-http.md) | Connect a tool Clawd doesn't integrate with yet |
| [Known limitations](docs/guides/known-limitations.md) | Per-agent feature gaps |
| [Theme creation](docs/guides/guide-theme-creation.md) | Build and validate your own theme |

## Contributing

Clawd on Desk is a community-driven project. Bug reports, feature ideas, and pull requests are all welcome — open an [issue](https://github.com/rullerzhou-afk/clawd-on-desk/issues) to discuss or submit a PR directly. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to run from source, add a translation, or integrate a new agent.

### Maintainers

<table>
  <tr>
    <td align="center" valign="top" width="140"><a href="https://github.com/rullerzhou-afk"><img src="https://github.com/rullerzhou-afk.png" width="72" style="border-radius:50%" /><br /><sub><b>@rullerzhou-afk</b><br />鹿鹿 · creator</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="72" style="border-radius:50%" /><br /><sub><b>@YOIMIYA66</b><br />maintainer</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="72" style="border-radius:50%" /><br /><sub><b>@Bynlk</b><br />core contributor · Mobile / PWA</sub></a></td>
  </tr>
</table>

### Contributors

Thanks to everyone who has helped make Clawd better:

<table>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/PixelCookie-zyf"><img src="https://github.com/PixelCookie-zyf.png" width="50" style="border-radius:50%" /><br /><sub>PixelCookie-zyf</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/yujiachen-y"><img src="https://github.com/yujiachen-y.png" width="50" style="border-radius:50%" /><br /><sub>yujiachen-y</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/AooooooZzzz"><img src="https://github.com/AooooooZzzz.png" width="50" style="border-radius:50%" /><br /><sub>AooooooZzzz</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/purefkh"><img src="https://github.com/purefkh.png" width="50" style="border-radius:50%" /><br /><sub>purefkh</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Tobeabellwether"><img src="https://github.com/Tobeabellwether.png" width="50" style="border-radius:50%" /><br /><sub>Tobeabellwether</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Jasonhonghh"><img src="https://github.com/Jasonhonghh.png" width="50" style="border-radius:50%" /><br /><sub>Jasonhonghh</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/crashchen"><img src="https://github.com/crashchen.png" width="50" style="border-radius:50%" /><br /><sub>crashchen</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/hongbigtou"><img src="https://github.com/hongbigtou.png" width="50" style="border-radius:50%" /><br /><sub>hongbigtou</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/InTimmyDate"><img src="https://github.com/InTimmyDate.png" width="50" style="border-radius:50%" /><br /><sub>InTimmyDate</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/NeizhiTouhu"><img src="https://github.com/NeizhiTouhu.png" width="50" style="border-radius:50%" /><br /><sub>NeizhiTouhu</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/xu3stones-cmd"><img src="https://github.com/xu3stones-cmd.png" width="50" style="border-radius:50%" /><br /><sub>xu3stones-cmd</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/androidZzT"><img src="https://github.com/androidZzT.png" width="50" style="border-radius:50%" /><br /><sub>androidZzT</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Ye-0413"><img src="https://github.com/Ye-0413.png" width="50" style="border-radius:50%" /><br /><sub>Ye-0413</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/WanfengzzZ"><img src="https://github.com/WanfengzzZ.png" width="50" style="border-radius:50%" /><br /><sub>WanfengzzZ</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/TaoXieSZ"><img src="https://github.com/TaoXieSZ.png" width="50" style="border-radius:50%" /><br /><sub>TaoXieSZ</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/ssly"><img src="https://github.com/ssly.png" width="50" style="border-radius:50%" /><br /><sub>ssly</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/stickycandy"><img src="https://github.com/stickycandy.png" width="50" style="border-radius:50%" /><br /><sub>stickycandy</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Rladmsrl"><img src="https://github.com/Rladmsrl.png" width="50" style="border-radius:50%" /><br /><sub>Rladmsrl</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="50" style="border-radius:50%" /><br /><sub>YOIMIYA66</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Kevin7Qi"><img src="https://github.com/Kevin7Qi.png" width="50" style="border-radius:50%" /><br /><sub>Kevin7Qi</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sefuzhou770801-hub"><img src="https://github.com/sefuzhou770801-hub.png" width="50" style="border-radius:50%" /><br /><sub>sefuzhou770801-hub</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/Tonic-Jin"><img src="https://github.com/Tonic-Jin.png" width="50" style="border-radius:50%" /><br /><sub>Tonic-Jin</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/seoki180"><img src="https://github.com/seoki180.png" width="50" style="border-radius:50%" /><br /><sub>seoki180</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sophie-haynes"><img src="https://github.com/sophie-haynes.png" width="50" style="border-radius:50%" /><br /><sub>sophie-haynes</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/PeterShanxin"><img src="https://github.com/PeterShanxin.png" width="50" style="border-radius:50%" /><br /><sub>PeterShanxin</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/CHIANGANGSTER"><img src="https://github.com/CHIANGANGSTER.png" width="50" style="border-radius:50%" /><br /><sub>CHIANGANGSTER</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/JaeHyeon-KAIST"><img src="https://github.com/JaeHyeon-KAIST.png" width="50" style="border-radius:50%" /><br /><sub>JaeHyeon-KAIST</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/hhhzxyhhh"><img src="https://github.com/hhhzxyhhh.png" width="50" style="border-radius:50%" /><br /><sub>hhhzxyhhh</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/TVpoet"><img src="https://github.com/TVpoet.png" width="50" style="border-radius:50%" /><br /><sub>TVpoet</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/zeus6768"><img src="https://github.com/zeus6768.png" width="50" style="border-radius:50%" /><br /><sub>zeus6768</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/anhtrinh919"><img src="https://github.com/anhtrinh919.png" width="50" style="border-radius:50%" /><br /><sub>anhtrinh919</sub></a></td>
    <td align="center" valign="top" width="110"><sub>tomaioo</sub></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/v-avuso"><img src="https://github.com/v-avuso.png" width="50" style="border-radius:50%" /><br /><sub>v-avuso</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/livlign"><img src="https://github.com/livlign.png" width="50" style="border-radius:50%" /><br /><sub>livlign</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/tongguang2"><img src="https://github.com/tongguang2.png" width="50" style="border-radius:50%" /><br /><sub>tongguang2</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/Ziy1-Tan"><img src="https://github.com/Ziy1-Tan.png" width="50" style="border-radius:50%" /><br /><sub>Ziy1-Tan</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/tatsuyanakanogaroinc"><img src="https://github.com/tatsuyanakanogaroinc.png" width="50" style="border-radius:50%" /><br /><sub>tatsuyanakanogaroinc</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/yeonhub"><img src="https://github.com/yeonhub.png" width="50" style="border-radius:50%" /><br /><sub>yeonhub</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/joshua-wu"><img src="https://github.com/joshua-wu.png" width="50" style="border-radius:50%" /><br /><sub>joshua-wu</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/nmsn"><img src="https://github.com/nmsn.png" width="50" style="border-radius:50%" /><br /><sub>nmsn</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sunnysonx"><img src="https://github.com/sunnysonx.png" width="50" style="border-radius:50%" /><br /><sub>sunnysonx</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/YuChenYunn"><img src="https://github.com/YuChenYunn.png" width="50" style="border-radius:50%" /><br /><sub>YuChenYunn</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/jhseo-b"><img src="https://github.com/jhseo-b.png" width="50" style="border-radius:50%" /><br /><sub>jhseo-b</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Hwasowl"><img src="https://github.com/Hwasowl.png" width="50" style="border-radius:50%" /><br /><sub>Hwasowl</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/XiangZheng2002"><img src="https://github.com/XiangZheng2002.png" width="50" style="border-radius:50%" /><br /><sub>XiangZheng2002</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/keiyo118"><img src="https://github.com/keiyo118.png" width="50" style="border-radius:50%" /><br /><sub>keiyo118</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/pan93412"><img src="https://github.com/pan93412.png" width="50" style="border-radius:50%" /><br /><sub>pan93412</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/taehwanis"><img src="https://github.com/taehwanis.png" width="50" style="border-radius:50%" /><br /><sub>taehwanis</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/linnin233"><img src="https://github.com/linnin233.png" width="50" style="border-radius:50%" /><br /><sub>linnin233</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/xiyouMc"><img src="https://github.com/xiyouMc.png" width="50" style="border-radius:50%" /><br /><sub>xiyouMc</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="50" style="border-radius:50%" /><br /><sub>Bynlk</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/zxypro1"><img src="https://github.com/zxypro1.png" width="50" style="border-radius:50%" /><br /><sub>zxypro1</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/NeroAyase"><img src="https://github.com/NeroAyase.png" width="50" style="border-radius:50%" /><br /><sub>NeroAyase</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/divergentD"><img src="https://github.com/divergentD.png" width="50" style="border-radius:50%" /><br /><sub>divergentD</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Ne9roni"><img src="https://github.com/Ne9roni.png" width="50" style="border-radius:50%" /><br /><sub>Ne9roni</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/QingXB"><img src="https://github.com/QingXB.png" width="50" style="border-radius:50%" /><br /><sub>QingXB</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/29206394"><img src="https://github.com/29206394.png" width="50" style="border-radius:50%" /><br /><sub>藤知</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Tsdsj"><img src="https://github.com/Tsdsj.png" width="50" style="border-radius:50%" /><br /><sub>Tsdsj</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/godlockin"><img src="https://github.com/godlockin.png" width="50" style="border-radius:50%" /><br /><sub>godlockin</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sLingli"><img src="https://github.com/sLingli.png" width="50" style="border-radius:50%" /><br /><sub>sLingli</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/ustin-star"><img src="https://github.com/ustin-star.png" width="50" style="border-radius:50%" /><br /><sub>ustin-star</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/cod3hulk"><img src="https://github.com/cod3hulk.png" width="50" style="border-radius:50%" /><br /><sub>cod3hulk</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/lxgxhsy"><img src="https://github.com/lxgxhsy.png" width="50" style="border-radius:50%" /><br /><sub>lxgxhsy</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/rebootcrab-blip"><img src="https://github.com/rebootcrab-blip.png" width="50" style="border-radius:50%" /><br /><sub>rebootcrab-blip</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/zhaoxv210"><img src="https://github.com/zhaoxv210.png" width="50" style="border-radius:50%" /><br /><sub>zhaoxv210</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/serenNan"><img src="https://github.com/serenNan.png" width="50" style="border-radius:50%" /><br /><sub>serenNan</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/IatomicreactorI"><img src="https://github.com/IatomicreactorI.png" width="50" style="border-radius:50%" /><br /><sub>IatomicreactorI</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/quantai1314"><img src="https://github.com/quantai1314.png" width="50" style="border-radius:50%" /><br /><sub>quantai1314</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Git-creat7"><img src="https://github.com/Git-creat7.png" width="50" style="border-radius:50%" /><br /><sub>Git-creat7</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/undownding"><img src="https://github.com/undownding.png" width="50" style="border-radius:50%" /><br /><sub>undownding</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/chrono-meta"><img src="https://github.com/chrono-meta.png" width="50" style="border-radius:50%" /><br /><sub>chrono-meta</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Yike-Ye"><img src="https://github.com/Yike-Ye.png" width="50" style="border-radius:50%" /><br /><sub>Yike-Ye</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/xiaoshidefeng"><img src="https://github.com/xiaoshidefeng.png" width="50" style="border-radius:50%" /><br /><sub>xiaoshidefeng</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/yanguibao1997"><img src="https://github.com/yanguibao1997.png" width="50" style="border-radius:50%" /><br /><sub>yanguibao1997</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/JasonZH6600"><img src="https://github.com/JasonZH6600.png" width="50" style="border-radius:50%" /><br /><sub>JasonZH6600</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/V1staz"><img src="https://github.com/V1staz.png" width="50" style="border-radius:50%" /><br /><sub>V1staz</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/royhuang91"><img src="https://github.com/royhuang91.png" width="50" style="border-radius:50%" /><br /><sub>royhuang91</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/Schlaflied"><img src="https://github.com/Schlaflied.png" width="50" style="border-radius:50%" /><br /><sub>Schlaflied</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/KaiC5504"><img src="https://github.com/KaiC5504.png" width="50" style="border-radius:50%" /><br /><sub>KaiC5504</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/jiaxuan1101"><img src="https://github.com/jiaxuan1101.png" width="50" style="border-radius:50%" /><br /><sub>jiaxuan1101</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/kkirito16"><img src="https://github.com/kkirito16.png" width="50" style="border-radius:50%" /><br /><sub>kkirito16</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/200780381"><img src="https://github.com/200780381.png" width="50" style="border-radius:50%" /><br /><sub>200780381</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Dxy2326"><img src="https://github.com/Dxy2326.png" width="50" style="border-radius:50%" /><br /><sub>Dxy2326</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/lurui1997"><img src="https://github.com/lurui1997.png" width="50" style="border-radius:50%" /><br /><sub>lurui1997</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/JesmonX"><img src="https://github.com/JesmonX.png" width="50" style="border-radius:50%" /><br /><sub>JesmonX</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/chen86860"><img src="https://github.com/chen86860.png" width="50" style="border-radius:50%" /><br /><sub>chen86860</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/LinYsssss"><img src="https://github.com/LinYsssss.png" width="50" style="border-radius:50%" /><br /><sub>LinYsssss</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/He-wei-gui"><img src="https://github.com/He-wei-gui.png" width="50" style="border-radius:50%" /><br /><sub>He-wei-gui</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/liugou27"><img src="https://github.com/liugou27.png" width="50" style="border-radius:50%" /><br /><sub>liugou27</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/YOOGOMJA"><img src="https://github.com/YOOGOMJA.png" width="50" style="border-radius:50%" /><br /><sub>YOOGOMJA</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/anupamme"><img src="https://github.com/anupamme.png" width="50" style="border-radius:50%" /><br /><sub>anupamme</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/anthonyonazure"><img src="https://github.com/anthonyonazure.png" width="50" style="border-radius:50%" /><br /><sub>anthonyonazure</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/weed33834"><img src="https://github.com/weed33834.png" width="50" style="border-radius:50%" /><br /><sub>weed33834</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/arismarioneves"><img src="https://github.com/arismarioneves.png" width="50" style="border-radius:50%" /><br /><sub>arismarioneves</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/wang4433"><img src="https://github.com/wang4433.png" width="50" style="border-radius:50%" /><br /><sub>wang4433</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/shengmai-justin"><img src="https://github.com/shengmai-justin.png" width="50" style="border-radius:50%" /><br /><sub>shengmai-justin</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/aaronWool"><img src="https://github.com/aaronWool.png" width="50" style="border-radius:50%" /><br /><sub>aaronWool</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Zamaniego"><img src="https://github.com/Zamaniego.png" width="50" style="border-radius:50%" /><br /><sub>Zamaniego</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/CheeseAgent"><img src="https://github.com/CheeseAgent.png" width="50" style="border-radius:50%" /><br /><sub>CheeseAgent</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/RS-Nocsi"><img src="https://github.com/RS-Nocsi.png" width="50" style="border-radius:50%" /><br /><sub>RS-Nocsi</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Cobb04"><img src="https://github.com/Cobb04.png" width="50" style="border-radius:50%" /><br /><sub>Cobb04</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/eugenewang5425"><img src="https://github.com/eugenewang5425.png" width="50" style="border-radius:50%" /><br /><sub>eugenewang5425</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/draintovmasyan783-creator"><img src="https://github.com/draintovmasyan783-creator.png" width="50" style="border-radius:50%" /><br /><sub>draintovmasyan783-creator</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Yueh-H"><img src="https://github.com/Yueh-H.png" width="50" style="border-radius:50%" /><br /><sub>Yueh-H</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/TalexDreamSoul"><img src="https://github.com/TalexDreamSoul.png" width="50" style="border-radius:50%" /><br /><sub>TalexDreamSoul</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/FuZoe"><img src="https://github.com/FuZoe.png" width="50" style="border-radius:50%" /><br /><sub>FuZoe</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/undefined-moe"><img src="https://github.com/undefined-moe.png" width="50" style="border-radius:50%" /><br /><sub>undefined-moe</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/pu-1205"><img src="https://github.com/pu-1205.png" width="50" style="border-radius:50%" /><br /><sub>pu-1205</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/Free-LZJ"><img src="https://github.com/Free-LZJ.png" width="50" style="border-radius:50%" /><br /><sub>Free-LZJ</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/easyhak"><img src="https://github.com/easyhak.png" width="50" style="border-radius:50%" /><br /><sub>easyhak</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/jlimcode"><img src="https://github.com/jlimcode.png" width="50" style="border-radius:50%" /><br /><sub>jlimcode</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/xfurqan0"><img src="https://github.com/xfurqan0.png" width="50" style="border-radius:50%" /><br /><sub>xfurqan0</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/brantshin"><img src="https://github.com/brantshin.png" width="50" style="border-radius:50%" /><br /><sub>brantshin</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/mantertius"><img src="https://github.com/mantertius.png" width="50" style="border-radius:50%" /><br /><sub>mantertius</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/VonSdite"><img src="https://github.com/VonSdite.png" width="50" style="border-radius:50%" /><br /><sub>VonSdite</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sunnyswag"><img src="https://github.com/sunnyswag.png" width="50" style="border-radius:50%" /><br /><sub>sunnyswag</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/hanzhe-one"><img src="https://github.com/hanzhe-one.png" width="50" style="border-radius:50%" /><br /><sub>hanzhe-one</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/52mzd"><img src="https://github.com/52mzd.png" width="50" style="border-radius:50%" /><br /><sub>52mzd</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/gzx19990101"><img src="https://github.com/gzx19990101.png" width="50" style="border-radius:50%" /><br /><sub>gzx19990101</sub></a></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="110"><a href="https://github.com/ypjn"><img src="https://github.com/ypjn.png" width="50" style="border-radius:50%" /><br /><sub>ypjn</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/jin-codes"><img src="https://github.com/jin-codes.png" width="50" style="border-radius:50%" /><br /><sub>jin-codes</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/LetitiaChan"><img src="https://github.com/LetitiaChan.png" width="50" style="border-radius:50%" /><br /><sub>LetitiaChan</sub></a></td>
    <td align="center" valign="top" width="110"><a href="https://github.com/sanzanazaman"><img src="https://github.com/sanzanazaman.png" width="50" style="border-radius:50%" /><br /><sub>sanzanazaman</sub></a></td>
  </tr>
</table>

## Acknowledgments

- Clawd pixel art reference from [clawd-tank](https://github.com/marciogranzotto/clawd-tank) by [@marciogranzotto](https://github.com/marciogranzotto)
- Shared on [LINUX DO](https://linux.do/) community

## License

Source code is licensed under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0).

**Artwork and bundled theme assets (including `assets/` and `themes/*/assets/`) are NOT covered by AGPL-3.0.** All rights reserved by their respective copyright holders. See [assets/LICENSE](assets/LICENSE) and the notices below for details.

- **Clawd** character is the property of [Anthropic](https://www.anthropic.com). This is an unofficial fan project, not affiliated with or endorsed by Anthropic.
- **Calico cat (三花猫)** artwork by 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)). All rights reserved.
- **Cloudling (云宝)** artwork by 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)). All rights reserved. Cloudling's visual direction includes an homage to the OpenAI Codex logo; Codex/OpenAI marks remain the property of OpenAI, and this project is not affiliated with or endorsed by OpenAI.
- **Hash Sage (哈希仙人)** is distributed as an optional official theme from the [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) repository. Its artwork is copyright 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)); see the theme package for its license and full attribution. It is not covered by this project's AGPL-3.0 source license.
- **Whale-chan (鲸鱼娘)** is distributed as an optional official theme from the [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) repository. Rights in the original character design, setting and upstream materials remain with their creators; the theme credits ZipZipPipe and 上善无形 as named by [Neko3000/deepseek-whalechan](https://github.com/Neko3000/deepseek-whalechan). New animation and effects by 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) are licensed under CC BY-NC-SA 4.0; see the theme package for full terms. It is an unofficial, non-commercial fan work, not affiliated with or endorsed by DeepSeek, and it is not covered by this project's AGPL-3.0 source license.
- **Third-party contributions**: copyright retained by respective artists.

**No cryptocurrency.** This project has no token, coin, NFT, or airdrop, and is not affiliated with any cryptocurrency project.
