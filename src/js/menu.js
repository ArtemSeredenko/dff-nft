document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const closeMenuLink = document.querySelectorAll('.mobile-menu-link');

    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
    };

    closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        if (typeof bodyScrollLock !== 'undefined' && bodyScrollLock.enableBodyScroll) {
            bodyScrollLock.enableBodyScroll(document.body);
        }
    });
});
