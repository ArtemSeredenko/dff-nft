







document.addEventListener('DOMContentLoaded', function () {
  var btnOpen = document.querySelector('.js-open-menu');
  var btnClose = document.querySelector('.js-close-menu');
  var menu = document.querySelector('.js-menu-container');
  var body = document.body;
  var html = document.documentElement;

  btnOpen.addEventListener('click', function (event) {
    event.stopPropagation();

    menu.classList.add('is-open');
    html.style.overflow = 'hidden';

    document.addEventListener('click', closeMenuOutside);
  });

  btnClose.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  menu.addEventListener('touchmove', function (event) {
    event.preventDefault();
  });

  function closeMenuOutside(event) {
    var isMenuClick = menu.contains(event.target);
    if (!isMenuClick) {
      closeMenu();
    }
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    html.style.overflow = ''; // Повертаємо стандартне значення

    document.removeEventListener('click', closeMenuOutside);
  }
});













// Scroll to top btn

let mybutton = document.getElementById('scroll-up-btn');

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

mybutton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
  });
});