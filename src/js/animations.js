document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.animated-element');

  var isInViewport = function (element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  var handleScroll = function () {
    elements.forEach(function (element) {
      if (isInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('load', function () {
    handleScroll();
  });

  document.addEventListener('scroll', handleScroll);
});
