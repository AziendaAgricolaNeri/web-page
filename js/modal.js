<<<<<<< HEAD
const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(btn => btn.addEventListener('click', toggleModal));
modalBtnClose.addEventListener('click', toggleModal);
=======
const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(btn => btn.addEventListener('click', toggleModal));
modalBtnClose.addEventListener('click', toggleModal);
>>>>>>> 37c3a73d1697ffdcb84b31076eaa0caf98170ba1
