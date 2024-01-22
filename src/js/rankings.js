// Animations
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll(
      '.animated-element'
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

// Filter link active
document.addEventListener('DOMContentLoaded', function () {
  var filterLinks = document.querySelectorAll('.filter-link');

  filterLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Заборона переходу за замовчуванням
      removeActiveClass(); // Видалення класу filter-link-active у всіх посилань
      link.classList.add('filter-link-active'); // Додавання класу filter-link-active клікнутому посиланню
    });
  });

  function removeActiveClass() {
    filterLinks.forEach(function (link) {
      link.classList.remove('filter-link-active');
    });
  }
});