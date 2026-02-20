/* ============================================
   Starfield — Canvas 星空背景
   根據螢幕大小動態生成星星，requestAnimationFrame 驅動
   手機端減少 50% 星星數量以提升效能
   ============================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animationId = null;
  let width = 0;
  let height = 0;

  /** 判斷是否為行動裝置（依螢幕寬度） */
  function isMobile() {
    return window.innerWidth < 768;
  }

  /** 計算星星數量 */
  function getStarCount() {
    const base = Math.floor((width * height) / 4000);
    const count = isMobile() ? Math.floor(base * 0.5) : base;
    return Math.min(count, 300); // 上限 300
  }

  /** 建立單顆星星 */
  function createStar() {
    const isPink = Math.random() < 0.15; // 15% 機率為粉色星星
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: isPink
        ? `rgba(255, 126, 179, `  // 粉色
        : `rgba(240, 230, 246, `  // 白色偏紫
    };
  }

  /** 初始化星空 */
  function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const count = getStarCount();
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(createStar());
    }
  }

  /** 繪製單幀 */
  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      // 閃爍效果
      const flicker = Math.sin(time * 0.001 * s.twinkleSpeed * 60 + s.twinkleOffset);
      const alpha = s.opacity * (0.6 + 0.4 * flicker);

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color + alpha.toFixed(3) + ')';
      ctx.fill();
    }

    animationId = requestAnimationFrame(draw);
  }

  /** 開始動畫 */
  function start() {
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(draw);
  }

  /** 處理視窗大小變更 */
  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      init();
    }, 200);
  }

  // 初始化 & 啟動
  init();
  start();

  window.addEventListener('resize', onResize);

  // 公開 API（供 main.js 使用）
  window.Starfield = { init: init, start: start };
})();
