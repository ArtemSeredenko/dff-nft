document.addEventListener('DOMContentLoaded', function () {
  // Отримати елементи кнопок та меню
  var btnOpen = document.querySelector('.js-open-menu');
  var btnClose = document.querySelector('.js-close-menu');
  var menu = document.querySelector('.js-menu-container');
  var body = document.body;

  // Додати обробник подій для відкриття меню
  btnOpen.addEventListener('click', function (event) {
    event.stopPropagation(); // Зупиняємо подальше вспливання подій, щоб не викликати document.click

    menu.classList.add('is-open');
    body.style.overflow = 'hidden';

    // Додати обробник подій для тіла сторінки та закриття меню при торканні до екрану поза ним
    document.addEventListener('click', closeMenuOutside);
  });

  // Додати обробник подій для закриття меню
  btnClose.addEventListener('click', closeMenu);

  // Додати обробник подій для посилань у меню
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      // Закрити меню при кліку на посилання
      closeMenu();
    });
  });

  // Заборонити прокрутку при дотику на елементі меню
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
    body.style.overflow = ''; // Повертаємо стандартне значення

    // Видалити обробник подій при закритті меню
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