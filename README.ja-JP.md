<p align="center">
  <img src="assets/icon.png" width="128" alt="Clawd">
</p>

<div align="center">
  <h1>Clawd on Desk</h1>
  <p><b>AI コーディングエージェントの状態にリアルタイムで反応する、ピクセルのデスクトップペット。</b></p>
  <p><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko-KR.md">한국어</a> · 日本語 · <a href="README.es.md">Español</a></p>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/stargazers"><img src="https://img.shields.io/github/stars/rullerzhou-afk/clawd-on-desk?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/releases"><img src="https://img.shields.io/github/v/release/rullerzhou-afk/clawd-on-desk?label=version&style=flat-square" alt="Version"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/hesreallyhim/awesome-claude-code"><img src="https://awesome.re/mentioned-badge-flat.svg" alt="Mentioned in Awesome Claude Code"></a>
</div>

<p align="center">
  <img src="assets/hero.gif" alt="Clawd on Desk のアニメーションデモ。AI コーディングエージェントの状態に合わせて、ピクセルのカニが睡眠、思考、ツール実行中のタイピング、サブエージェント 1 個ではヘッドホングルーヴ、複数では3ボールジャグリング、権限リクエストの通知、タスク完了後のお祝いへリアルタイムに切り替わります。Claude Code、Codex、Cursor、Copilot、Gemini、Antigravity、Qwen、Pi、OMP、OpenClaw などに対応しています。">
</p>

長いタスクを始めたら席を外し、カニが完了を知らせたら戻るだけ。プロンプトを送ると考え、ツールが動くとタイピングし、サブエージェントが増えるとジャグリングし、承認が必要ならカードを出し、離席すると眠ります。

## 機能

- **リアルタイムの状態表示**: エージェントの hook とログで動く 12 種類のアニメーション、視線追従、睡眠シーケンス、クリック反応、画面端から覗くミニモード
- **主要ツールに対応**: Claude Code、Codex、Copilot、Gemini、Cursor、opencode、Kiro、Qwen など 20 以上、セッションごとに並行して追跡
- **権限バブル**: フローティングカードやグローバルホットキーでツール要求を Allow / Deny、または自動承認に切り替え
- **セッションを一目で**: ペットの横の HUD、ターミナルへ一発で戻れるライブセッションのダッシュボード、クォータリング、ローカルだけに保存されるリキャップ
- **席を外していても**: Telegram や Feishu/Lark からリモート承認、Slack 通知、読み取り専用のモバイル PWA でスマホからセッションを確認
- **自分好みに**: Clawd、Calico、Cloudling を内蔵、公式テーマのダウンロード、Codex Pet のインポート、自作テーマ
- **どこでコードを書いても**: Windows（x64 / ARM64）、macOS、Linux、Remote SSH と WSL に対応、UI は 7 言語

機能の詳細: **[docs/guides/features.ja-JP.md](docs/guides/features.ja-JP.md)**

## クイックスタート

**[GitHub Releases](https://github.com/rullerzhou-afk/clawd-on-desk/releases/latest)** から最新のインストーラーをダウンロードしてください:

| プラットフォーム | ダウンロード |
|---|---|
| Windows | `Clawd-on-Desk-Setup-<version>-x64.exe` または `-arm64.exe` |
| macOS | `.dmg`、または `brew install --cask clawd-on-desk` |
| Linux | `.AppImage` または `.deb`（x86_64 では Homebrew も可） |

Clawd を起動すればすぐに反応し始めます。初回起動時に Claude Code と Codex が自動で接続され、ほかのエージェントは **Settings → AI コーディングツール** からワンクリックでインストールできます。

<details>
<summary><strong>ソースから実行</strong></summary>
<br/>

コントリビュート、未リリースコードのテスト、連携のデバッグをするときだけ必要です。ソースインストールでは Electron とビルドツールをダウンロードするため、`node_modules` が大きくなります。

```bash
# リポジトリを clone
git clone https://github.com/rullerzhou-afk/clawd-on-desk.git
cd clawd-on-desk

# 依存関係をインストール
npm install

# Clawd を起動（起動時に Claude Code と Codex の hooks を自動登録）
npm start
```

前提条件、Remote SSH、WSL、macOS / Linux の注意点: **[セットアップガイド](docs/guides/setup-guide.md)**

</details>

## 対応エージェント

> **Claude Code** · **Codex CLI** · **Copilot CLI** · **Gemini CLI** · **Antigravity CLI (agy)** · **Cursor Agent** · **CodeBuddy** · **WorkBuddy** · **Grok Build** · **Kiro CLI** · **KiroCrew** · **Kimi Code CLI (Kimi-CLI)** · **Qwen Code** · **ZCode** · **CodeWhale** · **opencode** · **MiMo Code** · **Pi** · **OMP** · **OpenClaw** · **Hermes Agent** · **Qoder** · **QoderWork** · **QwenWork（千问办公）** · **Reasonix CLI** · **DeepSeek Harness** · **TraeCode (Trae CN)** · **MiniMax Code**

Claude Code と Codex CLI は初回起動時に接続されます。ほかの連携は **Settings → AI コーディングツール** からインストールすると、Clawd が同期を保ちます。そのほかのローカルツールは [カスタム HTTP エージェント](docs/guides/custom-agent-http.md) のエンドポイントから状態を送れます。エージェントごとの詳細は **[対応エージェント](docs/guides/supported-agents.ja-JP.md)**、権限バブルがないエージェントなどの違いは **[既知の制限](docs/guides/known-limitations.md)** を参照してください。

## テーマ

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

**Clawd**（ピクセルのカニ）、**Calico**（三毛猫）、**Cloudling**（云宝）を内蔵しています。**Hash Sage**（哈希仙人）と **Whale-chan**（鲸鱼娘）は **Settings → テーマ** からダウンロードできる公式テーマで、同じ画面で Codex Pet の zip もインポートできます。自分で描くなら `npm run create-theme -- my-theme` を実行して **[テーマ作成ガイド](docs/guides/guide-theme-creation.md)** へ。イベントとアニメーションの対応: [状態マッピング](docs/guides/state-mapping.md)。

## ガイド

| ガイド | 内容 |
|---|---|
| [機能](docs/guides/features.ja-JP.md) | すべての機能の詳細 |
| [セットアップガイド](docs/guides/setup-guide.md) | ソースビルド、エージェント設定、Windows / macOS / Linux の注意点 |
| [権限の扱い](docs/guides/setup-guide.md#permission-handling-automation) | 毎回確認、質問プロンプトのみ、自動承認 |
| [Remote SSH](docs/guides/guide-remote-ssh.md) | リモートサーバー上のエージェントの状態と権限バブル |
| [Codex + WSL](docs/guides/codex-wsl-clarification.md) | WSL 内の Codex に対する Clawd の対応範囲 |
| [リモート承認](docs/guides/telegram-approval.md) | Telegram、[Feishu / Lark](docs/guides/feishu-lark-remote-approval.md)、[Slack 通知](docs/guides/slack-notifications.md) |
| [リキャップ](docs/guides/recap.md) | ローカルだけに保存されるアクティビティの振り返り |
| [カスタム HTTP エージェント](docs/guides/custom-agent-http.md) | まだ連携していないツールをつなぐ |
| [既知の制限](docs/guides/known-limitations.md) | エージェントごとの機能差 |
| [テーマ作成](docs/guides/guide-theme-creation.md) | 自作テーマの作成と検証 |

## コントリビュート

Clawd on Desk はコミュニティ主導のプロジェクトです。バグ報告、機能案、Pull Request を歓迎します。相談したい場合は [issue](https://github.com/rullerzhou-afk/clawd-on-desk/issues) を開くか、直接 PR を送ってください。

### メンテナー

<table>
  <tr>
    <td align="center" valign="top" width="140"><a href="https://github.com/rullerzhou-afk"><img src="https://github.com/rullerzhou-afk.png" width="72" style="border-radius:50%" /><br /><sub><b>@rullerzhou-afk</b><br />鹿鹿 · creator</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="72" style="border-radius:50%" /><br /><sub><b>@YOIMIYA66</b><br />maintainer</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="72" style="border-radius:50%" /><br /><sub><b>@Bynlk</b><br />core contributor · Mobile / PWA</sub></a></td>
  </tr>
</table>

### コントリビューター

Clawd をより良くしてくれたすべての方に感謝します。

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

## 謝辞

- Clawd のピクセルアートは [@marciogranzotto](https://github.com/marciogranzotto) による [clawd-tank](https://github.com/marciogranzotto/clawd-tank) を参考にしています
- [LINUX DO](https://linux.do/) コミュニティで共有されました

## ライセンス

ソースコードは [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0) のもとでライセンスされています。

**Artwork および同梱テーマアセット（`assets/` と `themes/*/assets/` を含む）は AGPL-3.0 の対象外です。** すべての権利は各著作権者に帰属します。詳細は [assets/LICENSE](assets/LICENSE) と以下の注記を参照してください。

- **Clawd** キャラクターは [Anthropic](https://www.anthropic.com) の所有物です。このプロジェクトは非公式のファンプロジェクトであり、Anthropic との提携または承認を受けたものではありません。
- **Calico cat (三毛猫)** のアートワークは 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) によるものです。All rights reserved.
- **Cloudling (云宝)** のアートワークは 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) によるものです。All rights reserved. Cloudling のビジュアル方針には OpenAI Codex ロゴへのオマージュが含まれています。Codex/OpenAI の標章は OpenAI に帰属し、このプロジェクトは OpenAI との提携または承認を受けたものではありません。
- **Whale-chan（鲸鱼娘）** は [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes) から任意の公式テーマとして別途配布されます。元のキャラクター・設定・素材の権利は各原作者に帰属し、テーマは [Neko3000/deepseek-whalechan](https://github.com/Neko3000/deepseek-whalechan) に記載された ZipZipPipe と上善无形をクレジットします。鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) による新しいアニメーションとエフェクトは CC BY-NC-SA 4.0 です。全文はテーマパッケージをご覧ください。非公式・非商用のファン作品であり、DeepSeek との関係や承認はなく、本プロジェクトの AGPL-3.0 ソースライセンスの対象外です。
- **サードパーティのコントリビューション**: 著作権は各アーティストに帰属します。
