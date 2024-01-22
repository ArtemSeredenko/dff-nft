document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll(
      '.animated-element-left, .animated-element-right'
    );

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

  document.addEventListener('scroll', handleScroll);
  handleScroll(); // Викликати функцію на початку для перевірки видимості елементів
});