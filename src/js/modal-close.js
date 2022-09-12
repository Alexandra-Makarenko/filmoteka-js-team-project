const btnClose = document.querySelector('.menu-close-button');
const movieModal = document.querySelector('.movie-wrapper');
const backdrop = document.querySelector('.modal-backdrop');
const body = document.querySelector('body');

function modalHidden() {
  backdrop.classList.add('hidden');
  body.style.overflow = '';
  removeListener();
  movieModal.innerHTML = '';
}
// закриття модалки кнопкою
function closeModalBtn() {
  modalHidden();
}
// закриття модалки клавішою Escape
function closeModalEscape(e) {
  if (e.key != 'Escape') {
    return;
  } else {
    if (!backdrop.classList.contains('hidden')) {
      modalHidden();
    }
  }
}
// закриття модалки кліком поза модалкою
function closeModalClick(e) {
  const onClickElement = e.target;
  const modalWindow = onClickElement.closest('.movie-popup');
  if (!backdrop.classList.contains('hidden') & (modalWindow == null)) {
    modalHidden();
  }
}
// зняття слухачів
function removeListener() {
  btnClose.removeEventListener('click', closeModalBtn);
  document.removeEventListener('keyup', closeModalEscape);
  document.removeEventListener('click', closeModalClick);
}
export {
  closeModalBtn,
  closeModalEscape,
  closeModalClick,
  movieModal,
  btnClose,
  backdrop,
};
