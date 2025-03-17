const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu_link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// Відкриття/закриття меню
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Закриття меню при натисканні на посилання
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    mobileMenu.classList.remove('is-open'); // Закриває меню
  });
});
