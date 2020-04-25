(function () {
  document.addEventListener('DOMContentLoaded', function() {
    var scroll = new SmoothScroll('a.smooth-scroll');

    initBackToTopButton('.back-to-top');
    initHamburgerMenu('.hamburger');
  });

  function initBackToTopButton(selector) {
    var element = document.querySelector(selector);
    document.addEventListener('scroll', function() {
      if (window.pageYOffset) {
        element.style.right = '50px';
      } else {
        element.style.right = '-50px';
      }
    })
  }

  function initHamburgerMenu(selector) {
    var element = document.querySelector(selector);
    var nav = document.querySelector('nav');
    element.addEventListener('click', function() {
      nav.classList.toggle('show-mobile-nav');
    });
  }
})();