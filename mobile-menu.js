const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const traditionsBtnClose = document.querySelector(".traditions-close");
const chefsBtnClose = document.querySelector(".chefs-close");
const formatsBtnClose = document.querySelector(".formats-close");
const contactsBtnClose = document.querySelector(".contacts-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
// const disableScroll = () => document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
traditionsBtnClose.addEventListener("click", toggleMenu);
chefsBtnClose.addEventListener("click", toggleMenu);
formatsBtnClose.addEventListener("click", toggleMenu);
contactsBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);
