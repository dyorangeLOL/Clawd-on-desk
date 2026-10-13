<p align="center">
  <img src="assets/icon.png" width="128" alt="Clawd">
</p>

<div align="center">
  <h1>Clawd 桌寵</h1>
  <p><b>一隻像素桌寵，即時感知你的 AI 程式設計助理在做什麼。</b></p>
  <p><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · 繁體中文 · <a href="README.ko-KR.md">한국어</a> · <a href="README.ja-JP.md">日本語</a> · <a href="README.es.md">Español</a></p>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/stargazers"><img src="https://img.shields.io/github/stars/rullerzhou-afk/clawd-on-desk?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/releases"><img src="https://img.shields.io/github/v/release/rullerzhou-afk/clawd-on-desk?label=version&style=flat-square" alt="Version"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/hesreallyhim/awesome-claude-code"><img src="https://awesome.re/mentioned-badge-flat.svg" alt="Mentioned in Awesome Claude Code"></a>
</div>

<p align="center">
  <img src="assets/hero.gif" alt="Clawd 桌寵動畫示範：像素螃蟹會跟著 AI 程式設計助理的狀態即時切換，睡覺、思考、工具執行時打字、單一子代理時戴耳機律動、多個子代理並行時三球雜耍、權限請求出現時提醒、任務完成後慶祝。支援 Claude Code、Codex、Cursor、Copilot、Gemini、Antigravity、Qwen、Pi、OMP、OpenClaw 等。">
</p>

發起一個長任務，起身做點別的，等螃蟹告訴你完成了再回來。你提問時它思考，工具執行時它打字，子代理一多它就雜耍，需要審批時它跳出卡片，你離開時它睡覺。

## 功能特色

- **即時狀態**：由 agent hook 和日誌驅動的 12 種動畫狀態，還有視線跟隨、睡眠序列、點擊反應，以及貼邊探頭的迷你模式
- **涵蓋主流工具**：Claude Code、Codex、Copilot、Gemini、Cursor、opencode、Kiro、Qwen 等 20 多款，多個工作階段並行追蹤
- **權限對話框**：在浮動卡片上或用全域快速鍵 Allow / Deny 工具請求，也可以切換成自動放行
- **工作階段一目了然**：桌寵旁的 HUD、所有工作階段的儀表板（一鍵跳回終端機）、額度環，以及只存在本機的活動回顧
- **離開電腦也能管**：透過 Telegram 或飛書 / Lark 遠端審批，Slack 通知，或在手機上用唯讀 PWA 查看工作階段
- **換成你喜歡的樣子**：內建 Clawd、Calico、Cloudling，可下載官方主題、匯入 Codex Pet，或自己做主題
- **在哪寫程式就在哪**：Windows（x64 / ARM64）、macOS、Linux，支援 Remote SSH 和 WSL，介面支援 7 種語言

完整功能說明：**[docs/guides/features.zh-TW.md](docs/guides/features.zh-TW.md)**

## 快速開始

從 **[GitHub Releases](https://github.com/rullerzhou-afk/clawd-on-desk/releases/latest)** 下載最新安裝檔：

| 平台 | 下載 |
|---|---|
| Windows | `Clawd-on-Desk-Setup-<version>-x64.exe` 或 `-arm64.exe` |
| macOS | `.dmg`，或 `brew install --cask clawd-on-desk` |
| Linux | `.AppImage` 或 `.deb`（x86_64 也可用 Homebrew） |

啟動 Clawd 後它會立刻開始運作：第一次啟動就會接上 Claude Code 和 Codex。其他 agent 在 **設定 → AI 程式設計工具** 裡一鍵安裝。

<details>
<summary><strong>從原始碼執行</strong></summary>
<br/>

只有參與開發、測試未發布程式碼或除錯整合時才需要。原始碼安裝會下載 Electron 和建置工具，`node_modules` 會比較大。

```bash
# clone 儲存庫
git clone https://github.com/rullerzhou-afk/clawd-on-desk.git
cd clawd-on-desk

# 安裝相依套件
npm install

# 啟動 Clawd（啟動時自動註冊 Claude Code 和 Codex hooks）
npm start
```

環境需求、Remote SSH、WSL 以及 macOS / Linux 說明：**[安裝指南](docs/guides/setup-guide.md)**

</details>

## 支援的 Agent

> **Claude Code** · **Codex CLI** · **Copilot CLI** · **Gemini CLI** · **Antigravity CLI (agy)** · **Cursor Agent** · **CodeBuddy** · **WorkBuddy** · **Grok Build** · **Kiro CLI** · **KiroCrew** · **Kimi Code CLI（Kimi-CLI）** · **Qwen Code** · **ZCode** · **CodeWhale** · **opencode** · **MiMo Code** · **Pi** · **OMP** · **OpenClaw** · **Hermes Agent** · **Qoder** · **QoderWork** · **QwenWork（千問辦公）** · **Reasonix CLI** · **DeepSeek Harness** · **TraeCode (Trae CN)** · **MiniMax Code**

Claude Code 和 Codex CLI 第一次啟動就會接上；其他整合在 **設定 → AI 程式設計工具** 中安裝，之後由 Clawd 保持同步。其他本機工具可以透過 [自訂 HTTP agent](docs/guides/custom-agent-http.md) 介面回報狀態。各 agent 的細節見 **[支援的 Agent](docs/guides/supported-agents.zh-TW.md)**，沒有權限對話框等差異見 **[已知限制](docs/guides/known-limitations.md)**。

## 主題

<table>
  <tr>
    <td align="center"><img src="assets/gif/clawd-idle.gif" width="100"><br><sub>待機</sub></td>
    <td align="center"><img src="assets/gif/clawd-thinking.gif" width="100"><br><sub>思考泡泡</sub></td>
    <td align="center"><img src="assets/gif/clawd-typing.gif" width="100"><br><sub>打字</sub></td>
    <td align="center"><img src="assets/gif/clawd-building.gif" width="100"><br><sub>建造</sub></td>
    <td align="center"><img src="assets/gif/clawd-headphones-groove.gif" width="100"><br><sub>耳機律動</sub></td>
    <td align="center"><img src="assets/gif/clawd-juggling.gif" width="100"><br><sub>三球雜耍</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/calico-idle.gif" width="80"><br><sub>三花待機</sub></td>
    <td align="center"><img src="assets/gif/calico-thinking.gif" width="80"><br><sub>三花思考</sub></td>
    <td align="center"><img src="assets/gif/calico-typing.gif" width="80"><br><sub>三花打字</sub></td>
    <td align="center"><img src="assets/gif/calico-building.gif" width="80"><br><sub>三花建造</sub></td>
    <td align="center"><img src="assets/gif/calico-juggling.gif" width="80"><br><sub>三花雜耍</sub></td>
    <td align="center"><img src="assets/gif/calico-conducting.gif" width="80"><br><sub>三花指揮</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/cloudling-idle.gif" width="120"><br><sub>雲寶待機</sub></td>
    <td align="center"><img src="assets/gif/cloudling-thinking.gif" width="120"><br><sub>雲寶思考</sub></td>
    <td align="center"><img src="assets/gif/cloudling-typing.gif" width="120"><br><sub>雲寶打字</sub></td>
    <td align="center"><img src="assets/gif/cloudling-building.gif" width="120"><br><sub>雲寶建造</sub></td>
    <td align="center"><img src="assets/gif/cloudling-juggling.gif" width="120"><br><sub>雲寶雜耍</sub></td>
    <td align="center"><img src="assets/gif/cloudling-conducting.gif" width="120"><br><sub>雲寶指揮</sub></td>
  </tr>
</table>

內建 **Clawd**（像素螃蟹）、**Calico**（三花貓）和 **Cloudling**（雲寶）。**Hash Sage**（哈希仙人）和 **Whale-chan**（鯨魚娘）是可選官方主題，在 **設定 → 主題** 下載，那裡也可以匯入 Codex Pet 壓縮檔。想自己畫？執行 `npm run create-theme -- my-theme`，然後看 **[主題創作指南](docs/guides/guide-theme-creation.md)**。事件與動畫的對應：[狀態對應](docs/guides/state-mapping.md)。

## 文件

| 文件 | 內容 |
|---|---|
| [功能特色](docs/guides/features.zh-TW.md) | 所有功能的詳細說明 |
| [安裝指南](docs/guides/setup-guide.md) | 原始碼建置、agent 設定、Windows / macOS / Linux 說明 |
| [權限處理](docs/guides/setup-guide.md#permission-handling-automation) | 每次詢問、僅問題提示或自動放行 |
| [Remote SSH](docs/guides/guide-remote-ssh.md) | 遠端伺服器上的 agent 狀態和權限對話框 |
| [Codex + WSL](docs/guides/codex-wsl-clarification.md) | Clawd 對 WSL 中 Codex 的支援範圍 |
| [遠端審批](docs/guides/telegram-approval.md) | Telegram，以及 [飛書 / Lark](docs/guides/feishu-lark-remote-approval.md) 和 [Slack 通知](docs/guides/slack-notifications.md) |
| [活動回顧](docs/guides/recap.md) | 只存在本機的活動回顧 |
| [自訂 HTTP agent](docs/guides/custom-agent-http.md) | 接入 Clawd 尚未整合的工具 |
| [已知限制](docs/guides/known-limitations.md) | 各 agent 的功能差異 |
| [主題創作](docs/guides/guide-theme-creation.md) | 製作並驗證自己的主題 |

## 參與貢獻

Clawd on Desk 是社群驅動的專案。歡迎提 Bug、提需求、提 PR —— 在 [Issues](https://github.com/rullerzhou-afk/clawd-on-desk/issues) 聊聊或直接送 PR。

### 維護者

<table>
  <tr>
    <td align="center" valign="top" width="140"><a href="https://github.com/rullerzhou-afk"><img src="https://github.com/rullerzhou-afk.png" width="72" style="border-radius:50%" /><br /><sub><b>@rullerzhou-afk</b><br />鹿鹿 · 建立者</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="72" style="border-radius:50%" /><br /><sub><b>@YOIMIYA66</b><br />維護者</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="72" style="border-radius:50%" /><br /><sub><b>@Bynlk</b><br />核心貢獻者 · Mobile / PWA</sub></a></td>
  </tr>
</table>

### 貢獻者

謝謝每一位讓 Clawd 變得更好的貢獻者：

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

## 致謝

- Clawd 像素畫參考自 [clawd-tank](https://github.com/marciogranzotto/clawd-tank) by [@marciogranzotto](https://github.com/marciogranzotto)
- 本專案在 [LINUX DO](https://linux.do/) 社群推廣

## 授權

原始碼以 [GNU Affero General Public License v3.0](LICENSE)（AGPL-3.0）授權釋出。

**美術素材和內建主題素材（包括 `assets/` 與 `themes/*/assets/`）不適用 AGPL-3.0 授權。** 所有權利歸各自著作權人所有，詳見 [assets/LICENSE](assets/LICENSE) 及下列說明。

- **Clawd** 角色設計屬於 [Anthropic](https://www.anthropic.com)。本專案為非官方粉絲作品，與 Anthropic 沒有官方關聯。
- **三花貓** 素材由 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 創作，保留所有權利。
- **Cloudling（雲寶）** 素材由 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 創作，保留所有權利。雲寶的視覺方向包含對 OpenAI Codex logo 的致敬；Codex 與 OpenAI 相關標誌仍歸 OpenAI 所有，本專案與 OpenAI 沒有官方關聯，也未獲 OpenAI 背書。
- **Whale-chan（鯨魚娘）** 由 [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) 作為可選官方主題獨立發佈。原始角色設計、設定與素材權利歸原作者；主題依 [Neko3000/deepseek-whalechan](https://github.com/Neko3000/deepseek-whalechan) 署名 ZipZipPipe 與上善無形。鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) 新作的動畫與特效採用 CC BY-NC-SA 4.0，完整條款見主題包。本主題是非官方、非商業同人作品，與 DeepSeek 無關，亦未獲授權或背書；不適用本專案 AGPL-3.0 原始碼授權。
- **第三方畫師作品**：著作權歸各自作者所有。
