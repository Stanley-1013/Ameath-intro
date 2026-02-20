/* ============================================
   Main — 主控腳本
   初始化各模組、Loading 畫面、浮動粒子、圖片錯誤處理
   ============================================ */

(function () {
  'use strict';

  /* --- Loading 畫面 --- */
  function hideLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;

    setTimeout(function () {
      loader.classList.add('hidden');
      // 完全移除避免影響效能
      setTimeout(function () {
        loader.remove();
      }, 600);
    }, 500);
  }

  /* --- 浮動粒子生成 --- */
  function createFloatingParticles() {
    var container = document.getElementById('particles');
    if (!container) return;

    var count = window.innerWidth < 768 ? 10 : 18;

    for (var i = 0; i < count; i++) {
      var particle = document.createElement('div');
      particle.className = 'floating-particle';

      // 隨機位置、大小、速度
      var size = Math.random() * 3 + 1.5;
      var left = Math.random() * 100;
      var duration = Math.random() * 15 + 12;
      var delay = Math.random() * 15;
      var isPink = Math.random() < 0.6;

      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = left + '%';
      particle.style.bottom = '-10px';
      particle.style.backgroundColor = isPink
        ? 'rgba(255, 126, 179, 0.6)'
        : 'rgba(0, 210, 255, 0.5)';
      particle.style.boxShadow = isPink
        ? '0 0 6px rgba(255, 126, 179, 0.3)'
        : '0 0 6px rgba(0, 210, 255, 0.3)';
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = delay + 's';

      container.appendChild(particle);
    }
  }

  /* --- 圖片錯誤處理 --- */
  function initImageFallbacks() {
    var images = document.querySelectorAll('img');

    images.forEach(function (img) {
      // 已經有 onerror 的跳過（HTML 內聯已設定）
      // 但額外確保 placeholder 文字可見
      img.addEventListener('error', function () {
        this.style.display = 'none';
        var placeholder = this.closest('.img-placeholder');
        if (placeholder) {
          var text = placeholder.querySelector('.placeholder-text');
          if (text) text.style.display = 'block';
        }
      });

      // 若圖片已載入失敗（快取情況）
      if (img.complete && img.naturalWidth === 0 && img.src) {
        img.style.display = 'none';
      }
    });
  }

  /* --- 頁面載入完成 --- */
  window.addEventListener('load', function () {
    hideLoader();
    createFloatingParticles();
    initImageFallbacks();

    // 初始化 GSAP 動畫（等 loader 消失後）
    if (window.Animations) {
      window.Animations.init();
    }
  });
})();
