(function () {
  document.addEventListener('DOMContentLoaded', function() {
    // https://github.com/cferdinandi/smooth-scroll
    var scroll = new SmoothScroll('a.smooth-scroll', {
      speed: 500
    });

    // https://github.com/michalsnik/aos
    // AOS.init({
    //   duration: 1500
    // });

    // initBackToTopButton('.back-to-top');
    initHamburgerMenu('.hamburger');
  });

  function initBackToTopButton(selector) {
    var element = document.querySelector(selector);
    document.addEventListener('scroll', function() {
      if (window.pageYOffset) {
        element.classList.add('back-to-top-show');
      } else {
        element.classList.remove('back-to-top-show');
      }
    })
  }

  function initHamburgerMenu(selector) {
    document.querySelector(selector).addEventListener('click', function() {
      document.querySelector('nav').classList.toggle('show-mobile-nav');
    });
  }
})();