<p align="center">
  <img src="assets/icon.png" width="128" alt="Clawd">
</p>

<div align="center">
  <h1>Clawd 桌宠</h1>
  <p><b>一只像素桌宠，实时感知你的 AI 编程助手在做什么。</b></p>
  <p><a href="README.md">English</a> · 简体中文 · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko-KR.md">한국어</a> · <a href="README.ja-JP.md">日本語</a> · <a href="README.es.md">Español</a></p>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/stargazers"><img src="https://img.shields.io/github/stars/rullerzhou-afk/clawd-on-desk?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/releases"><img src="https://img.shields.io/github/v/release/rullerzhou-afk/clawd-on-desk?label=version&style=flat-square" alt="Version"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/hesreallyhim/awesome-claude-code"><img src="https://awesome.re/mentioned-badge-flat.svg" alt="Mentioned in Awesome Claude Code"></a>
</div>

<p align="center">
  <img src="assets/hero.gif" alt="Clawd 桌宠动画演示：像素螃蟹会随 AI 编程助手状态实时切换，在睡觉、思考、工具运行时打字、单个子代理时戴耳机律动、多个子代理并行时三球杂耍、权限请求弹出时提醒、任务完成后庆祝。支持 Claude Code、Codex、Cursor、Copilot、Gemini、Antigravity、Qwen、CodeWhale、Pi、OMP、OpenClaw 等。">
</p>

发起一个长任务，起身去做点别的，等螃蟹告诉你完成了再回来。你提问时它思考，工具运行时它打字，子代理多了它杂耍，需要审批时它弹卡片，你离开时它睡觉。

## 功能特性

- **实时状态**：由 agent hook 和日志驱动的 12 种动画状态，还有眼神跟随、睡眠序列、点击反应，以及贴边探头的迷你模式
- **覆盖主流工具**：Claude Code、Codex、Copilot、Gemini、Cursor、opencode、Kiro、Qwen 等 20 多款，多会话并行追踪
- **权限气泡**：在浮动卡片上或用全局快捷键 Allow / Deny 工具请求，也可以切到自动放行
- **会话一目了然**：桌宠旁的 HUD、所有在线会话的仪表盘（一键跳回终端）、额度环，以及只存在本机的活动回顾
- **离开电脑也能管**：通过 Telegram 或飞书 / Lark 远程审批，Slack 通知，或在手机上用只读 PWA 查看会话
- **换成你喜欢的样子**：内置 Clawd、Calico、Cloudling，可下载官方主题、导入 Codex Pet，或自己做主题
- **哪里写代码就在哪里**：Windows（x64 / ARM64）、macOS、Linux，支持 Remote SSH 和 WSL，界面支持 7 种语言

完整功能说明：**[docs/guides/features.zh-CN.md](docs/guides/features.zh-CN.md)**

## 快速开始

从 **[GitHub Releases](https://github.com/rullerzhou-afk/clawd-on-desk/releases/latest)** 下载最新安装包：

| 平台 | 下载 |
|---|---|
| Windows | `Clawd-on-Desk-Setup-<version>-x64.exe` 或 `-arm64.exe` |
| macOS | `.dmg`，或 `brew install --cask clawd-on-desk` |
| Linux | `.AppImage` 或 `.deb`（x86_64 也可用 Homebrew） |

启动 Clawd 后它会立刻开始工作：首次启动自动接入 Claude Code 和 Codex。其他 agent 在 **设置 → AI 编程工具** 里一键安装。

<details>
<summary><strong>从源码运行</strong></summary>
<br/>

只有参与开发、测试未发布代码或调试集成时才需要。源码安装会下载 Electron 和构建工具，`node_modules` 会比较大。

```bash
# 克隆仓库
git clone https://github.com/rullerzhou-afk/clawd-on-desk.git
cd clawd-on-desk

# 安装依赖
npm install

# 启动 Clawd（启动时自动注册 Claude Code 和 Codex hooks）
npm start
```

环境要求、Remote SSH、WSL 以及 macOS / Linux 说明：**[安装指南](docs/guides/setup-guide.zh-CN.md)**

</details>

## 支持的 Agent

> **Claude Code** · **Codex CLI** · **Copilot CLI** · **Gemini CLI** · **Antigravity CLI (agy)** · **Cursor Agent** · **CodeBuddy** · **WorkBuddy** · **Grok Build** · **Kiro CLI** · **KiroCrew** · **Kimi Code CLI（Kimi-CLI）** · **Qwen Code** · **ZCode** · **CodeWhale** · **opencode** · **MiMo Code** · **Pi** · **OMP** · **OpenClaw** · **Hermes Agent** · **Qoder** · **QoderWork** · **QwenWork（千问办公）** · **Reasonix CLI** · **DeepSeek Harness** · **TraeCode (Trae CN)** · **MiniMax Code**

Claude Code 和 Codex CLI 首次启动即接入；其他集成在 **设置 → AI 编程工具** 中安装，之后由 Clawd 保持同步。其他本地工具可以通过 [自定义 HTTP agent](docs/guides/custom-agent-http.md) 接口上报状态。各 agent 的细节见 **[支持的 Agent](docs/guides/supported-agents.zh-CN.md)**，没有权限气泡等差异见 **[已知限制](docs/guides/known-limitations.zh-CN.md)**。

## 主题

<table>
  <tr>
    <td align="center"><img src="assets/gif/clawd-idle.gif" width="100"><br><sub>待机</sub></td>
    <td align="center"><img src="assets/gif/clawd-thinking.gif" width="100"><br><sub>思考泡泡</sub></td>
    <td align="center"><img src="assets/gif/clawd-typing.gif" width="100"><br><sub>打字</sub></td>
    <td align="center"><img src="assets/gif/clawd-building.gif" width="100"><br><sub>建造</sub></td>
    <td align="center"><img src="assets/gif/clawd-headphones-groove.gif" width="100"><br><sub>耳机律动</sub></td>
    <td align="center"><img src="assets/gif/clawd-juggling.gif" width="100"><br><sub>三球杂耍</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/calico-idle.gif" width="80"><br><sub>三花待机</sub></td>
    <td align="center"><img src="assets/gif/calico-thinking.gif" width="80"><br><sub>三花思考</sub></td>
    <td align="center"><img src="assets/gif/calico-typing.gif" width="80"><br><sub>三花打字</sub></td>
    <td align="center"><img src="assets/gif/calico-building.gif" width="80"><br><sub>三花建造</sub></td>
    <td align="center"><img src="assets/gif/calico-juggling.gif" width="80"><br><sub>三花杂耍</sub></td>
    <td align="center"><img src="assets/gif/calico-conducting.gif" width="80"><br><sub>三花指挥</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/cloudling-idle.gif" width="120"><br><sub>云宝待机</sub></td>
    <td align="center"><img src="assets/gif/cloudling-thinking.gif" width="120"><br><sub>云宝思考</sub></td>
    <td align="center"><img src="assets/gif/cloudling-typing.gif" width="120"><br><sub>云宝打字</sub></td>
    <td align="center"><img src="assets/gif/cloudling-building.gif" width="120"><br><sub>云宝建造</sub></td>
    <td align="center"><img src="assets/gif/cloudling-juggling.gif" width="120"><br><sub>云宝杂耍</sub></td>
    <td align="center"><img src="assets/gif/cloudling-conducting.gif" width="120"><br><sub>云宝指挥</sub></td>
  </tr>
</table>

内置 **Clawd**（像素螃蟹）、**Calico**（三花猫）和 **Cloudling**（云宝）。**Hash Sage**（哈希仙人）和 **Whale-chan**（鲸鱼娘）是可选官方主题，在 **设置 → 主题** 下载，那里也可以导入 Codex Pet 压缩包。想自己画？运行 `npm run create-theme -- my-theme`，然后看 **[主题创作指南](docs/guides/guide-theme-creation.md)**。事件与动画的对应关系：[状态映射](docs/guides/state-mapping.zh-CN.md)。

## 文档

| 文档 | 内容 |
|---|---|
| [功能特性](docs/guides/features.zh-CN.md) | 所有功能的详细说明 |
| [安装指南](docs/guides/setup-guide.zh-CN.md) | 源码构建、agent 配置、Windows / macOS / Linux 说明 |
| [权限处理](docs/guides/setup-guide.zh-CN.md#permission-handling-automation) | 每次询问、仅问题提示或自动放行 |
| [Remote SSH](docs/guides/guide-remote-ssh.zh-CN.md) | 远程服务器上的 agent 状态和权限气泡 |
| [Codex + WSL](docs/guides/codex-wsl-clarification.zh-CN.md) | Clawd 对 WSL 中 Codex 的支持边界 |
| [远程审批](docs/guides/telegram-approval.md) | Telegram，以及 [飞书 / Lark](docs/guides/feishu-lark-remote-approval.md) 和 [Slack 通知](docs/guides/slack-notifications.md) |
| [活动回顾](docs/guides/recap.md) | 只存在本机的活动回顾 |
| [自定义 HTTP agent](docs/guides/custom-agent-http.md) | 接入 Clawd 尚未集成的工具 |
| [已知限制](docs/guides/known-limitations.zh-CN.md) | 各 agent 的功能差异 |
| [主题创作](docs/guides/guide-theme-creation.md) | 制作并校验自己的主题 |

## 参与贡献

Clawd on Desk 是一个社区驱动的项目。欢迎提 Bug、提需求、提 PR —— 在 [Issues](https://github.com/rullerzhou-afk/clawd-on-desk/issues) 里聊或直接提交 PR。从源码运行、加翻译、接入新 agent 的做法见 [参与贡献指南](CONTRIBUTING.zh-CN.md)。

### 维护者

<table>
  <tr>
    <td align="center" valign="top" width="140"><a href="https://github.com/rullerzhou-afk"><img src="https://github.com/rullerzhou-afk.png" width="72" style="border-radius:50%" /><br /><sub><b>@rullerzhou-afk</b><br />鹿鹿 · 创建者</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="72" style="border-radius:50%" /><br /><sub><b>@YOIMIYA66</b><br />维护者</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="72" style="border-radius:50%" /><br /><sub><b>@Bynlk</b><br />核心贡献者 · Mobile / PWA</sub></a></td>
  </tr>
</table>

### 贡献者

感谢每一位让 Clawd 变得更好的贡献者：

<a href="https://github.com/PixelCookie-zyf"><img src="https://github.com/PixelCookie-zyf.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/yujiachen-y"><img src="https://github.com/yujiachen-y.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/AooooooZzzz"><img src="https://github.com/AooooooZzzz.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/purefkh"><img src="https://github.com/purefkh.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Tobeabellwether"><img src="https://github.com/Tobeabellwether.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Jasonhonghh"><img src="https://github.com/Jasonhonghh.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/crashchen"><img src="https://github.com/crashchen.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/hongbigtou"><img src="https://github.com/hongbigtou.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/InTimmyDate"><img src="https://github.com/InTimmyDate.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/NeizhiTouhu"><img src="https://github.com/NeizhiTouhu.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/xu3stones-cmd"><img src="https://github.com/xu3stones-cmd.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Ye-0413"><img src="https://github.com/Ye-0413.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/WanfengzzZ"><img src="https://github.com/WanfengzzZ.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/androidZzT"><img src="https://github.com/androidZzT.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/TaoXieSZ"><img src="https://github.com/TaoXieSZ.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/ssly"><img src="https://github.com/ssly.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/stickycandy"><img src="https://github.com/stickycandy.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Rladmsrl"><img src="https://github.com/Rladmsrl.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Kevin7Qi"><img src="https://github.com/Kevin7Qi.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sefuzhou770801-hub"><img src="https://github.com/sefuzhou770801-hub.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Tonic-Jin"><img src="https://github.com/Tonic-Jin.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/seoki180"><img src="https://github.com/seoki180.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sophie-haynes"><img src="https://github.com/sophie-haynes.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/PeterShanxin"><img src="https://github.com/PeterShanxin.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/CHIANGANGSTER"><img src="https://github.com/CHIANGANGSTER.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/JaeHyeon-KAIST"><img src="https://github.com/JaeHyeon-KAIST.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/hhhzxyhhh"><img src="https://github.com/hhhzxyhhh.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/TVpoet"><img src="https://github.com/TVpoet.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/zeus6768"><img src="https://github.com/zeus6768.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/anhtrinh919"><img src="https://github.com/anhtrinh919.png" width="50" style="border-radius:50%" /></a>
<sub>tomaioo</sub>
<a href="https://github.com/v-avuso"><img src="https://github.com/v-avuso.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/livlign"><img src="https://github.com/livlign.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/tongguang2"><img src="https://github.com/tongguang2.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Ziy1-Tan"><img src="https://github.com/Ziy1-Tan.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/tatsuyanakanogaroinc"><img src="https://github.com/tatsuyanakanogaroinc.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/yeonhub"><img src="https://github.com/yeonhub.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/joshua-wu"><img src="https://github.com/joshua-wu.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/nmsn"><img src="https://github.com/nmsn.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sunnysonx"><img src="https://github.com/sunnysonx.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/YuChenYunn"><img src="https://github.com/YuChenYunn.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/jhseo-b"><img src="https://github.com/jhseo-b.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Hwasowl"><img src="https://github.com/Hwasowl.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/XiangZheng2002"><img src="https://github.com/XiangZheng2002.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/keiyo118"><img src="https://github.com/keiyo118.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/pan93412"><img src="https://github.com/pan93412.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/taehwanis"><img src="https://github.com/taehwanis.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/linnin233"><img src="https://github.com/linnin233.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/xiyouMc"><img src="https://github.com/xiyouMc.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/zxypro1"><img src="https://github.com/zxypro1.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/NeroAyase"><img src="https://github.com/NeroAyase.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/divergentD"><img src="https://github.com/divergentD.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Ne9roni"><img src="https://github.com/Ne9roni.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/QingXB"><img src="https://github.com/QingXB.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/29206394"><img src="https://github.com/29206394.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Tsdsj"><img src="https://github.com/Tsdsj.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/godlockin"><img src="https://github.com/godlockin.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sLingli"><img src="https://github.com/sLingli.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/ustin-star"><img src="https://github.com/ustin-star.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/cod3hulk"><img src="https://github.com/cod3hulk.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/lxgxhsy"><img src="https://github.com/lxgxhsy.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/rebootcrab-blip"><img src="https://github.com/rebootcrab-blip.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/zhaoxv210"><img src="https://github.com/zhaoxv210.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/serenNan"><img src="https://github.com/serenNan.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/IatomicreactorI"><img src="https://github.com/IatomicreactorI.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/quantai1314"><img src="https://github.com/quantai1314.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Git-creat7"><img src="https://github.com/Git-creat7.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/undownding"><img src="https://github.com/undownding.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/chrono-meta"><img src="https://github.com/chrono-meta.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Yike-Ye"><img src="https://github.com/Yike-Ye.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/xiaoshidefeng"><img src="https://github.com/xiaoshidefeng.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/yanguibao1997"><img src="https://github.com/yanguibao1997.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/JasonZH6600"><img src="https://github.com/JasonZH6600.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/V1staz"><img src="https://github.com/V1staz.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/royhuang91"><img src="https://github.com/royhuang91.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Schlaflied"><img src="https://github.com/Schlaflied.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/KaiC5504"><img src="https://github.com/KaiC5504.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/jiaxuan1101"><img src="https://github.com/jiaxuan1101.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/kkirito16"><img src="https://github.com/kkirito16.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/200780381"><img src="https://github.com/200780381.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Dxy2326"><img src="https://github.com/Dxy2326.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/lurui1997"><img src="https://github.com/lurui1997.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/JesmonX"><img src="https://github.com/JesmonX.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/chen86860"><img src="https://github.com/chen86860.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/LinYsssss"><img src="https://github.com/LinYsssss.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/He-wei-gui"><img src="https://github.com/He-wei-gui.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/liugou27"><img src="https://github.com/liugou27.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/YOOGOMJA"><img src="https://github.com/YOOGOMJA.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/anupamme"><img src="https://github.com/anupamme.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/anthonyonazure"><img src="https://github.com/anthonyonazure.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/weed33834"><img src="https://github.com/weed33834.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/arismarioneves"><img src="https://github.com/arismarioneves.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/wang4433"><img src="https://github.com/wang4433.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/shengmai-justin"><img src="https://github.com/shengmai-justin.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/aaronWool"><img src="https://github.com/aaronWool.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Zamaniego"><img src="https://github.com/Zamaniego.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/CheeseAgent"><img src="https://github.com/CheeseAgent.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/RS-Nocsi"><img src="https://github.com/RS-Nocsi.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Cobb04"><img src="https://github.com/Cobb04.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/eugenewang5425"><img src="https://github.com/eugenewang5425.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/draintovmasyan783-creator"><img src="https://github.com/draintovmasyan783-creator.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Yueh-H"><img src="https://github.com/Yueh-H.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/TalexDreamSoul"><img src="https://github.com/TalexDreamSoul.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/FuZoe"><img src="https://github.com/FuZoe.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/undefined-moe"><img src="https://github.com/undefined-moe.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/pu-1205"><img src="https://github.com/pu-1205.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/Free-LZJ"><img src="https://github.com/Free-LZJ.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/easyhak"><img src="https://github.com/easyhak.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/jlimcode"><img src="https://github.com/jlimcode.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/xfurqan0"><img src="https://github.com/xfurqan0.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/brantshin"><img src="https://github.com/brantshin.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/mantertius"><img src="https://github.com/mantertius.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/VonSdite"><img src="https://github.com/VonSdite.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sunnyswag"><img src="https://github.com/sunnyswag.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/hanzhe-one"><img src="https://github.com/hanzhe-one.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/52mzd"><img src="https://github.com/52mzd.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/gzx19990101"><img src="https://github.com/gzx19990101.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/ypjn"><img src="https://github.com/ypjn.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/jin-codes"><img src="https://github.com/jin-codes.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/LetitiaChan"><img src="https://github.com/LetitiaChan.png" width="50" style="border-radius:50%" /></a>
<a href="https://github.com/sanzanazaman"><img src="https://github.com/sanzanazaman.png" width="50" style="border-radius:50%" /></a>

## 致谢

- Clawd 像素画参考自 [clawd-tank](https://github.com/marciogranzotto/clawd-tank) by [@marciogranzotto](https://github.com/marciogranzotto)
- 本项目在 [LINUX DO](https://linux.do/) 社区推广

## 许可证

源代码基于 [GNU Affero General Public License v3.0](LICENSE)（AGPL-3.0）开源。

**美术素材和内置主题素材（包括 `assets/` 与 `themes/*/assets/`）不适用 AGPL-3.0 许可。** 所有权利归各自版权持有人所有，详见 [assets/LICENSE](assets/LICENSE) 及下列说明。

- **Clawd** 角色设计归属 [Anthropic](https://www.anthropic.com)。本项目为非官方粉丝作品，与 Anthropic 无官方关联。
- **三花猫** 素材由 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 创作，保留所有权利。
- **Cloudling（云宝）** 素材由 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 创作，保留所有权利。云宝的视觉方向包含对 OpenAI Codex logo 的致敬；Codex / OpenAI 相关标识仍归 OpenAI 所有，本项目与 OpenAI 无官方关联，也未获 OpenAI 背书。
- **Hash Sage（哈希仙人）** 以可选官方主题的形式由 [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) 独立分发，素材版权归 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 所有；许可证与完整署名见主题包内文件。它不适用本项目 AGPL-3.0 源码许可。
- **Whale-chan（鲸鱼娘）** 以可选官方主题的形式由 [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) 独立分发。原始角色形象、设定与上游素材的权利归各自原作者所有，本主题署名上游项目 [Neko3000/deepseek-whalechan](https://github.com/Neko3000/deepseek-whalechan) 所列的 ZipZipPipe 与上善无形；鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 新作的动画与特效采用 CC BY-NC-SA 4.0，完整条款见主题包内文件。本主题是非官方、非商业同人作品，与 DeepSeek 无关联，也未获其授权或背书；它不适用本项目 AGPL-3.0 源码许可。
- **第三方画师作品**：版权归各自作者所有。
