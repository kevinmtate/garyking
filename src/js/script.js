(function () {
  document.addEventListener('DOMContentLoaded', function() {
    // https://github.com/cferdinandi/smooth-scroll
    var scroll = new SmoothScroll('a.smooth-scroll', {
      speed: 500
    });

    initHamburgerMenu();
  });

  function initHamburgerMenu() {
    document.querySelector('.hamburger-nav').addEventListener('click', function() {
      document.querySelector('.aside-nav').classList.toggle('aside-nav-visible');
    });
  }
})();