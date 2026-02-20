# AEMEATH — 愛彌斯角色展示網站

鳴潮（Wuthering Waves）3.1 版本角色「愛彌斯（Aemeath）」的設計細節展示靜態網站。

## 專案說明

本網站為粉絲製作的角色展示頁面，包含以下內容：

- **角色故事**：背景設定、身份與經歷
- **設計細節**：外觀設計要素展示（6 項）
- **技能介紹**：5 大戰鬥技能解說
- **雙模態系統**：震諧 / 聚爆兩種共鳴模態
- **專屬武器**：永明極星屬性與效果
- **組隊思路**：3 套推薦隊伍
- **共鳴鏈推薦**：0/2/3/6 鏈投資建議
- **圖片 Gallery**：更多圖片展示

### 技術棧

- HTML5 + CSS3 + Vanilla JavaScript（無框架）
- GSAP 3.x + ScrollTrigger（滾動動畫）
- Font Awesome 6.x（圖標）
- Google Fonts（Orbitron / Noto Serif TC / Noto Sans TC）
- Canvas 星空粒子背景

## 本地預覽

直接在瀏覽器中開啟 `index.html` 即可：

```bash
# 方法 1：直接開啟
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows

# 方法 2：使用本地伺服器（推薦）
npx serve .
# 或
python3 -m http.server 8000
```

## 已包含的圖片

### 圖片使用對照表

每張圖片僅使用於指定位置（影片縮圖為唯一允許的複用）。

**主要內容區（每張圖僅用一次）：**

| 圖片 | 用途 | 來源 |
|------|------|------|
| `aemeath-splash-hd.png` | Hero 主視覺 | 555me/GameAssets — RoleShare |
| `aemeath-activity.png` | 故事卡 1「活潑的粉髮少女」 | 555me/GameAssets — ActivityRole |
| `aemeath-halfbody.png` | 故事卡 2「星炬學院的適格者」 | 555me/GameAssets — ActivityHalfBody |
| `aemeath-banner.png` | 故事卡 3「星輝中飛翔的歌姬」 | 555me/GameAssets — RoleBg |
| `aemeath-gacha-splash.png` | 設計卡 1「粉色漸變長髮」 | 555me/GameAssets — Luckdraw |
| `new-skin.png` | 設計卡 2「科技風黑粉服飾」 | 555me/GameAssets — RoleSkin |
| `aemeath-head256.png` | 設計卡 3「招牌剪刀手 Ciallo」 | 555me/GameAssets — IconRoleHead256 |
| `new-trial-vague.png` | 設計卡 4「電子幽靈形態」 | 555me/GameAssets — ActivityRoleOntrialVague |
| `weapon-body.png` | 武器區主圖 | 555me/GameAssets — WeaponBody |

**Gallery（全部為不與上方重複的獨立圖片）：**

| 圖片 | 內容 |
|------|------|
| `weapon-share.png` | 永明極星光效立繪 |
| `new-weapon-bg.png` | 永明極星活動全景 |
| `new-guide-jiexing.jpg` | 角色攻略 — 結星 |
| `new-guide-jinlingzi.jpg` | 角色攻略 — 金鈴子 |
| `new-guide-moealkyne.jpg` | 角色攻略 — Moealkyne |
| `new-luckdraw-w.png` | 抽卡星海氛圍背景 |

**影片縮圖（從主內容區複用，最多使用 2 次）：**

| 影片 | 縮圖 |
|------|------|
| Paper Plane | `aemeath-halfbody.png` |
| Fallen Petals | `aemeath-gacha-splash.png` |
| Combat Showcase | `aemeath-banner.png` |
| Indigo Universe | `aemeath-gacha-bg.png` |
| GRADUATION SHOW | `aemeath-splash-hd.png` |
| Cinematic Short | `aemeath-activity.png` |

**角色頭像圖標（256×256）：**
- `avatar-aemeath.png` / `avatar-linnai.png` / `avatar-morning.png`
- `avatar-chisaki.png` / `avatar-guardian.png` / `avatar-verina.png`

### 素材來源

- [555me/Wuthering-Waves-GameAssets](https://github.com/555me/Wuthering-Waves-GameAssets) — CN 版遊戲 UI 素材
- [ryanbenson/wuthering-waves-assets](https://github.com/ryanbenson/wuthering-waves-assets) — 角色圖標
- [MoonShadow1976/WutheringWaves_OverSea_StaticAssets](https://github.com/MoonShadow1976/WutheringWaves_OverSea_StaticAssets) — 社群攻略圖
| `aemeath-splash.jpg` | Hero 主視覺 Splash Art | 600×800 |
| `story-daily.jpg` | 日常/校園場景 | 400×300 |
| `story-academy.jpg` | 星炬學院相關 | 400×300 |
| `story-battle.jpg` | 機兵/戰鬥場景 | 400×300 |
| `design-hair.jpg` | 粉色漸變長髮 | 500×350 |
| `design-outfit.jpg` | 科技風服飾 | 500×350 |
| `design-mech.jpg` | 隧者兵裝外觀 | 500×350 |
| `design-ciallo.jpg` | 剪刀手 Ciallo 姿勢 | 500×350 |
| `design-ghost.jpg` | 電子幽靈形態 | 500×350 |
| `design-tattoo.jpg` | 聲痕/紋身細節 | 500×350 |
| `weapon-everbright.jpg` | 永明極星武器圖 | 400×400 |
| `avatar-aemeath.jpg` | 愛彌斯頭像 | 120×120 |
| `avatar-linnai.jpg` | 琳奈頭像 | 120×120 |
| `avatar-morning.jpg` | 莫寧頭像 | 120×120 |
| `avatar-chisaki.jpg` | 千咲頭像 | 120×120 |
| `avatar-guardian.jpg` | 守岸人頭像 | 120×120 |
| `avatar-verina.jpg` | 維里奈頭像 | 120×120 |
| `gallery-battle1.jpg` | 戰鬥指南截圖 1 | 500×375 |
| `gallery-battle2.jpg` | 戰鬥指南截圖 2 | 500×375 |
| `gallery-battle3.jpg` | 戰鬥指南截圖 3 | 500×375 |
| `gallery-report.jpg` | 評估報告 | 500×375 |
| `gallery-card.jpg` | 角色卡面 | 500×375 |
| `gallery-starry.jpg` | 星空場景 | 500×375 |

### 圖片建議下載來源

- **Wuthering Waves Wiki (Fandom)**：https://wutheringwaves.fandom.com/wiki/Aemeath/Gallery
- **Prydwen**：https://www.prydwen.gg/wuthering-waves/characters/aemeath/
- **官方 X/Twitter**：@Wuthering_Waves
- **鳴潮官方壁紙 Google Drive**

> ⚠️ 請勿直接 hotlink 上述網站的圖片 URL。請先下載圖片到本地 `assets/images/` 目錄後使用。

## 檔案結構

```
├── index.html              # 主頁面
├── css/
│   ├── reset.css           # CSS Reset
│   ├── variables.css       # CSS 變數
│   ├── base.css            # 全域基礎樣式
│   ├── components.css      # 可復用元件
│   ├── sections.css        # 各區塊樣式
│   ├── animations.css      # 動畫 keyframes
│   └── responsive.css      # RWD 響應式
├── js/
│   ├── main.js             # 主控腳本
│   ├── animations.js       # GSAP 動畫
│   ├── starfield.js        # 星空粒子
│   └── nav.js              # 導航列行為
├── assets/
│   └── images/             # 圖片素材
└── README.md
```

## 版權聲明

- 愛彌斯及鳴潮（Wuthering Waves）相關角色、圖片及素材版權歸 **KURO GAMES 庫洛科技** 所有
- 本網站為非官方粉絲作品，僅供學習與展示用途
