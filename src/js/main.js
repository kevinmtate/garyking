(function () {
  document.addEventListener('DOMContentLoaded', function() {
    var scroll = new SmoothScroll('a.smooth-scroll');

    initBackToTopButton('.back-to-top');
  });

  function initBackToTopButton(selector) {
    const element = document.querySelector(selector);
    document.addEventListener('scroll', function() {
      if (window.pageYOffset) {
        element.style.right = '50px';
      } else {
        element.style.right = '-50px';
      }
    })
  }
})();