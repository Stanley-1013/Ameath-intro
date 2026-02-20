/* ============================================
   Navigation — 導航列行為
   滾動隱藏/顯示、漢堡選單、平滑滾動
   ============================================ */

(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!navbar) return;

  /* --- 滾動隱藏/顯示 --- */
  let lastScrollY = 0;
  const SCROLL_THRESHOLD = 80;

  function onScroll() {
    const currentY = window.scrollY;

    if (currentY > SCROLL_THRESHOLD) {
      if (currentY > lastScrollY) {
        // 向下滾 → 隱藏
        navbar.classList.add('nav--hidden');
        closeMobileMenu();
      } else {
        // 向上滾 → 顯示
        navbar.classList.remove('nav--hidden');
      }
    } else {
      navbar.classList.remove('nav--hidden');
    }

    lastScrollY = currentY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- 漢堡選單 --- */
  function closeMobileMenu() {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // 點擊手機選單連結後關閉
    var mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  /* --- 平滑滾動（所有錨點連結） --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- 導航高亮（IntersectionObserver） --- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
