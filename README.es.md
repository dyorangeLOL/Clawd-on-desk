<p align="center">
  <img src="assets/icon.png" width="128" alt="Clawd">
</p>

<div align="center">
  <h1>Clawd on Desk</h1>
  <p><b>Una mascota de escritorio pixelada que reacciona en tiempo real a tu agente de programación con IA.</b></p>
  <p><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko-KR.md">한국어</a> · <a href="README.ja-JP.md">日本語</a> · Español</p>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/stargazers"><img src="https://img.shields.io/github/stars/rullerzhou-afk/clawd-on-desk?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/rullerzhou-afk/clawd-on-desk/releases"><img src="https://img.shields.io/github/v/release/rullerzhou-afk/clawd-on-desk?label=version&style=flat-square" alt="Version"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/hesreallyhim/awesome-claude-code"><img src="https://awesome.re/mentioned-badge-flat.svg" alt="Mentioned in Awesome Claude Code"></a>
</div>

<p align="center">
  <img src="assets/hero.gif" alt="Clawd on Desk: una mascota de escritorio pixelada que reacciona en tiempo real a tu agente de programación con IA. La demostración animada muestra al cangrejo durmiendo, pensando mientras el modelo lee el código, escribiendo cuando se ejecutan herramientas, moviéndose con un subagente, haciendo malabares con varios subagentes, mostrando un globo de permisos y celebrando al completar 14 archivos y 312 pruebas. Funciona con Claude Code, Codex, Cursor, Copilot, Gemini, Antigravity, Qwen, CodeWhale, Pi, OMP, OpenClaw y más.">
</p>

Lanza una tarea larga, aléjate y vuelve cuando el cangrejo te avise de que terminó. Clawd piensa mientras escribes el prompt, teclea mientras se ejecutan herramientas, hace malabares cuando se acumulan subagentes, muestra una tarjeta cuando una herramienta necesita tu aprobación y se duerme cuando te vas.

## Funciones

- **Estado en vivo**: 12 estados animados impulsados por hooks y logs del agente, con seguimiento de la mirada, secuencia de sueño, reacciones al clic y un modo mini que asoma desde el borde de la pantalla
- **Funciona con tus herramientas**: Claude Code, Codex, Copilot, Gemini, Cursor, opencode, Kiro, Qwen y más de 20 más, con cada sesión seguida en paralelo
- **Globos de permisos**: permite o deniega solicitudes desde una tarjeta flotante o un atajo global, o cambia a aprobación automática
- **Sesiones de un vistazo**: un HUD junto a la mascota, un panel con cada sesión activa y salto directo a su terminal, anillos de cuota y un resumen privado local
- **Lejos del escritorio**: aprueba desde Telegram o Feishu/Lark, recibe notificaciones en Slack o sigue tus sesiones en el móvil con la PWA de solo lectura
- **A tu manera**: Clawd, Calico y Cloudling incluidos, temas oficiales para descargar, importación de Codex Pet o un tema propio
- **Donde programes**: Windows (x64 y ARM64), macOS y Linux, además de Remote SSH y WSL, con la interfaz en 7 idiomas

Todas las funciones en detalle: **[docs/guides/features.es.md](docs/guides/features.es.md)**

## Inicio rápido

Descarga el instalador más reciente desde **[GitHub Releases](https://github.com/rullerzhou-afk/clawd-on-desk/releases/latest)**:

| Plataforma | Descarga |
|---|---|
| Windows | `Clawd-on-Desk-Setup-<version>-x64.exe` o `-arm64.exe` |
| macOS | `.dmg`, o `brew install --cask clawd-on-desk` |
| Linux | `.AppImage` o `.deb` (Homebrew también funciona en x86_64) |

Abre Clawd y empieza a reaccionar de inmediato: Claude Code y Codex se conectan en el primer arranque. Cualquier otro agente se instala con un clic en **Ajustes → Herramientas de IA para código**.

<details>
<summary><strong>Ejecutar desde el código fuente</strong></summary>
<br/>

Solo hace falta para contribuir, probar código sin publicar o depurar integraciones. La instalación desde el código descarga Electron y herramientas de compilación, así que `node_modules` ocupa bastante.

```bash
# Clona el repositorio
git clone https://github.com/rullerzhou-afk/clawd-on-desk.git
cd clawd-on-desk

# Instala las dependencias
npm install

# Inicia Clawd (registra automáticamente los hooks de Claude Code y Codex)
npm start
```

Requisitos, Remote SSH, WSL y notas para macOS / Linux: **[guía de configuración](docs/guides/setup-guide.md)**

</details>

## Agentes compatibles

> **Claude Code** · **Codex CLI** · **Copilot CLI** · **Gemini CLI** · **Antigravity CLI (agy)** · **Cursor Agent** · **CodeBuddy** · **WorkBuddy** · **Grok Build** · **Kiro CLI** · **KiroCrew** · **Kimi Code CLI (Kimi-CLI)** · **Qwen Code** · **ZCode** · **CodeWhale** · **opencode** · **MiMo Code** · **Pi** · **OMP** · **OpenClaw** · **Hermes Agent** · **Qoder** · **QoderWork** · **QwenWork (千问办公)** · **Reasonix CLI** · **DeepSeek Harness** · **TraeCode (Trae CN)** · **MiniMax Code**

Claude Code y Codex CLI se configuran en el primer arranque; instala cualquier otra integración desde **Ajustes → Herramientas de IA para código** y Clawd la mantiene sincronizada. Otras herramientas locales pueden informar a través del endpoint de [agentes HTTP personalizados](docs/guides/custom-agent-http.md). Los detalles de cada agente están en **[agentes compatibles](docs/guides/supported-agents.es.md)**, y las diferencias, como agentes sin globo de permisos, en **[limitaciones conocidas](docs/guides/known-limitations.md)**.

## Temas

<table>
  <tr>
    <td align="center"><img src="assets/gif/clawd-idle.gif" width="100"><br><sub>Inactivo</sub></td>
    <td align="center"><img src="assets/gif/clawd-thinking.gif" width="100"><br><sub>Burbuja de pensamiento</sub></td>
    <td align="center"><img src="assets/gif/clawd-typing.gif" width="100"><br><sub>Escribiendo</sub></td>
    <td align="center"><img src="assets/gif/clawd-building.gif" width="100"><br><sub>Construyendo</sub></td>
    <td align="center"><img src="assets/gif/clawd-headphones-groove.gif" width="100"><br><sub>1 subagente</sub></td>
    <td align="center"><img src="assets/gif/clawd-juggling.gif" width="100"><br><sub>2+ subagentes</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/calico-idle.gif" width="80"><br><sub>Calico inactivo</sub></td>
    <td align="center"><img src="assets/gif/calico-thinking.gif" width="80"><br><sub>Calico pensando</sub></td>
    <td align="center"><img src="assets/gif/calico-typing.gif" width="80"><br><sub>Calico escribiendo</sub></td>
    <td align="center"><img src="assets/gif/calico-building.gif" width="80"><br><sub>Calico construyendo</sub></td>
    <td align="center"><img src="assets/gif/calico-juggling.gif" width="80"><br><sub>Calico haciendo malabares</sub></td>
    <td align="center"><img src="assets/gif/calico-conducting.gif" width="80"><br><sub>Calico dirigiendo</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/gif/cloudling-idle.gif" width="120"><br><sub>Cloudling inactivo</sub></td>
    <td align="center"><img src="assets/gif/cloudling-thinking.gif" width="120"><br><sub>Cloudling pensando</sub></td>
    <td align="center"><img src="assets/gif/cloudling-typing.gif" width="120"><br><sub>Cloudling escribiendo</sub></td>
    <td align="center"><img src="assets/gif/cloudling-building.gif" width="120"><br><sub>Cloudling construyendo</sub></td>
    <td align="center"><img src="assets/gif/cloudling-juggling.gif" width="120"><br><sub>Cloudling haciendo malabares</sub></td>
    <td align="center"><img src="assets/gif/cloudling-conducting.gif" width="120"><br><sub>Cloudling dirigiendo</sub></td>
  </tr>
</table>

Clawd incluye **Clawd** (cangrejo pixelado), **Calico** (三花猫) y **Cloudling** (云宝). **Hash Sage** (哈希仙人) y **Whale-chan** (鲸鱼娘) son temas oficiales opcionales en **Ajustes → Tema**, donde también puedes importar un zip de Codex Pet. Para dibujar el tuyo, ejecuta `npm run create-theme -- my-theme` y sigue la **[guía de creación de temas](docs/guides/guide-theme-creation.md)**. Qué evento reproduce cada animación: [mapa de estados](docs/guides/state-mapping.md).

## Guías

| Guía | Contenido |
|---|---|
| [Funciones](docs/guides/features.es.md) | Todas las funciones en detalle |
| [Guía de configuración](docs/guides/setup-guide.md) | Compilación desde el código, agentes y notas para Windows / macOS / Linux |
| [Gestión de permisos](docs/guides/setup-guide.md#permission-handling-automation) | Preguntar siempre, solo preguntas o aprobación automática |
| [Remote SSH](docs/guides/guide-remote-ssh.md) | Estado y globos de permisos de agentes en un servidor remoto |
| [Codex + WSL](docs/guides/codex-wsl-clarification.md) | Qué admite Clawd para Codex dentro de WSL |
| [Aprobación remota](docs/guides/telegram-approval.md) | Telegram, más [Feishu / Lark](docs/guides/feishu-lark-remote-approval.md) y [notificaciones de Slack](docs/guides/slack-notifications.md) |
| [Resumen](docs/guides/recap.md) | Revisión privada y local de la actividad |
| [Agentes HTTP personalizados](docs/guides/custom-agent-http.md) | Conecta una herramienta que Clawd aún no integra |
| [Limitaciones conocidas](docs/guides/known-limitations.md) | Diferencias de funciones por agente |
| [Creación de temas](docs/guides/guide-theme-creation.md) | Crea y valida tu propio tema |

## Contribuir

Clawd on Desk es un proyecto impulsado por la comunidad. Los informes de errores, las ideas de funciones y los pull requests son bienvenidos: abre un [issue](https://github.com/rullerzhou-afk/clawd-on-desk/issues) para conversar o envía directamente un PR.

### Responsables del mantenimiento

<table>
  <tr>
    <td align="center" valign="top" width="140"><a href="https://github.com/rullerzhou-afk"><img src="https://github.com/rullerzhou-afk.png" width="72" style="border-radius:50%" /><br /><sub><b>@rullerzhou-afk</b><br />鹿鹿 · creadora</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/YOIMIYA66"><img src="https://github.com/YOIMIYA66.png" width="72" style="border-radius:50%" /><br /><sub><b>@YOIMIYA66</b><br />responsable del mantenimiento</sub></a></td>
    <td align="center" valign="top" width="140"><a href="https://github.com/Bynlk"><img src="https://github.com/Bynlk.png" width="72" style="border-radius:50%" /><br /><sub><b>@Bynlk</b><br />colaborador principal · Móvil / PWA</sub></a></td>
  </tr>
</table>

### Colaboradores

Gracias a todas las personas que han ayudado a mejorar Clawd:

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

## Agradecimientos

- Referencia del pixel art de Clawd tomada de [clawd-tank](https://github.com/marciogranzotto/clawd-tank), de [@marciogranzotto](https://github.com/marciogranzotto)
- Compartido en la comunidad [LINUX DO](https://linux.do/)

## Licencia

El código fuente se distribuye bajo la [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0).

**Las ilustraciones y los recursos de temas incluidos (entre ellos `assets/` y `themes/*/assets/`) NO están cubiertos por AGPL-3.0.** Sus respectivos titulares conservan todos los derechos. Consulta [assets/LICENSE](assets/LICENSE) y los avisos siguientes para obtener más información.

- El personaje **Clawd** es propiedad de [Anthropic](https://www.anthropic.com). Este es un proyecto no oficial creado por fans, sin afiliación ni respaldo de Anthropic.
- Ilustración del **gato Calico (三花猫)** por 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)). Todos los derechos reservados.
- Ilustración de **Cloudling (云宝)** por 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)). Todos los derechos reservados. La dirección visual de Cloudling incluye un homenaje al logotipo de OpenAI Codex; las marcas Codex/OpenAI siguen siendo propiedad de OpenAI y este proyecto no está afiliado ni respaldado por OpenAI.
- **Whale-chan (鲸鱼娘)** se distribuye por separado como tema oficial opcional desde [`rullerzhou-afk/clawd-themes`](https://github.com/rullerzhou-afk/clawd-themes). Los derechos del personaje, su historia y los materiales originales pertenecen a sus autores; el tema acredita a ZipZipPipe y 上善无形 según [Neko3000/deepseek-whalechan](https://github.com/Neko3000/deepseek-whalechan). Las nuevas animaciones y efectos de 鹿鹿 ([@rullerzhou-afk](https://github.com/rullerzhou-afk)) usan CC BY-NC-SA 4.0; consulta el paquete del tema para conocer todos los términos. Es una obra de fans no oficial y no comercial, sin afiliación, autorización ni respaldo de DeepSeek, y no está cubierta por la licencia AGPL-3.0 del código fuente de este proyecto.
- **Contribuciones de terceros**: los respectivos artistas conservan los derechos de autor.

**Sin criptomonedas.** Este proyecto no tiene token, moneda, NFT ni airdrop, y no está afiliado a ningún proyecto de criptomonedas.
