/* ============================================
   Animations — GSAP 動畫邏輯
   ScrollTrigger 滾動入場、Hero 序列入場、進度條動畫
   ============================================ */

(function () {
  'use strict';

  // 確認 GSAP 可用
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP 或 ScrollTrigger 未載入，動畫已停用。');
    // 即使沒有 GSAP，也要確保元素可見
    document.querySelectorAll('.gs, .hero-element').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* --- Hero 序列入場 --- */
  function initHeroAnimation() {
    var heroElements = document.querySelectorAll('.hero-element');
    if (!heroElements.length) return;

    var tl = gsap.timeline({ delay: 0.8 });

    heroElements.forEach(function (el, i) {
      tl.to(
        el,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        i * 0.15
      );
    });
  }

  /* --- ScrollTrigger 滾動入場 --- */
  function initScrollAnimations() {
    var gsElements = document.querySelectorAll('.gs');

    gsElements.forEach(function (el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    });
  }

  /* --- 武器屬性進度條動畫 --- */
  function initProgressBars() {
    var bars = document.querySelectorAll('.progress-bar__fill[data-width]');

    bars.forEach(function (bar) {
      var targetWidth = bar.getAttribute('data-width');

      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        width: targetWidth,
        duration: 1.2,
        ease: 'power2.out',
      });
    });
  }

  /* --- 初始化所有動畫 --- */
  function init() {
    initHeroAnimation();
    initScrollAnimations();
    initProgressBars();
  }

  // 公開 API
  window.Animations = { init: init };
})();
