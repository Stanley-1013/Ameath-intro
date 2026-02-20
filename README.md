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

### 高解析度角色素材（來自 [555me/Wuthering-Waves-GameAssets](https://github.com/555me/Wuthering-Waves-GameAssets)）

- `aemeath-splash-hd.png` — 愛彌斯角色分享立繪（Hero 主圖 / 設計 / Gallery）
- `aemeath-pile.png` — 愛彌斯角色堆疊圖標（故事 / 設計）
- `aemeath-activity.png` — 愛彌斯活動圖（故事 / 設計）
- `aemeath-halfbody.png` — 愛彌斯半身立繪（故事 / 設計 / Gallery）
- `aemeath-gacha-bg.png` — 愛彌斯抽卡背景（設計 / Gallery）
- `weapon-everbright-hd.png` — 永明極星武器高解析度圖標
- `pile-linnai.png` — 琳奈堆疊圖標
- `pile-moning.png` — 莫寧堆疊圖標
- `pile-qianxiao.png` — 千咲堆疊圖標
- `pile-shouanren.png` — 守岸人堆疊圖標
- `gallery-cg1.png` — 愛彌斯 CG 過場動畫 1（Gallery）
- `gallery-cg2.png` — 愛彌斯 CG 過場動畫 2（Gallery）
- `gallery-cg3.png` — 愛彌斯 CG 過場動畫 3（Gallery）
- `gallery-cg4.png` — 愛彌斯 CG 過場動畫 4（Gallery）
- `aemeath-banner.png` — 愛彌斯活動預覽背景（Gallery）
- `aemeath-portrait.png` — 愛彌斯角色立繪（Spine 肖像素材）
- `weapon-body.png` — 永明極星武器全身立繪（武器區主圖）
- `weapon-sword.png` — 永明極星劍身
- `weapon-share.png` — 永明極星分享卡（Gallery）
- `aemeath-gacha-splash.png` — 愛彌斯抽卡立繪
- `aemeath-skill-icons.png` — 愛彌斯技能圖標合集
- `aemeath-head256.png` — 愛彌斯頭像（256×256 高解析度）

### 角色圖標（256×256，來自 [ryanbenson/wuthering-waves-assets](https://github.com/ryanbenson/wuthering-waves-assets)）

- `aemeath-splash.png` — 愛彌斯角色圖標
- `avatar-aemeath.png` — 愛彌斯頭像
- `avatar-linnai.png` — 琳奈頭像
- `avatar-morning.png` — 莫寧頭像
- `avatar-chisaki.png` — 千咲頭像
- `avatar-guardian.png` — 守岸人頭像
- `avatar-verina.png` — 維里奈頭像
- `weapon-everbright.png` — 永明極星武器圖標

## 如何添加更多圖片

其餘圖片位置使用 CSS 漸層背景作為佔位。若要替換為高解析度真實圖片：

1. 將圖片下載到 `assets/images/` 目錄
2. 依照下方檔名對應表命名
3. 圖片載入後會自動替換漸層佔位

### 圖片檔名對應表

| 檔名 | 內容 | 建議尺寸 |
|------|------|---------|
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
