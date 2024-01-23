// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
//     const closeMenuLink = document.querySelectorAll('.mobile-menu-link');

//     const toggleMenu = () => {
//         const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
//         openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//         mobileMenu.classList.toggle('is-open');
//     };

//     closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);

//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//         if (!e.matches) return;
//         mobileMenu.classList.remove('is-open');
//         openMenuBtn.setAttribute('aria-expanded', false);
//         if (typeof bodyScrollLock !== 'undefined' && bodyScrollLock.enableBodyScroll) {
//             bodyScrollLock.enableBodyScroll(document.body);
//         }
//     });
// });



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
