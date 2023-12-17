const menu = document.querySelector('#navbar-menu')
const menuLinksright = document.querySelector('.navbar__menu-left')
const menuLinksleft = document.querySelector('.navbar__menu-right')
const AboutNavbar = document.querySelector('.About__navbar')
const Headings = document.querySelector('.home--link')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinksright.classList.toggle('active');
    menuLinksleft.classList.toggle('active');
    AboutNavbar.classList.toggle('navbar-active');
    Headings.classList.toggle('headings-active')
});