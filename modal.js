const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnOpen1 = document.querySelector(".modal-btn-open1");
const modalBtnClose = document.querySelector(".modal__btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnOpen1.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
