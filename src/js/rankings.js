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
