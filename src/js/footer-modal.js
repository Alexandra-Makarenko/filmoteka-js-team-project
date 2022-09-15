const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  footerBackdrop: document.querySelector('.backdrop'),
  footerModal: document.querySelector('.modal-footer'),
  body: document.querySelector('body'),
};

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  e.preventDefault();
  refs.footerBackdrop.classList.remove('is-hidden');
  refs.closeModalBtn.addEventListener('click', closeModalBtn);
  setTimeout(() => {
    document.addEventListener('click', closeFooterModalClick);
    document.addEventListener('keyup', closeModalEscape);
  }, 100);
}

// закриття модалки кнопкою
function closeModalBtn(e) {
  e.preventDefault();
  refs.footerBackdrop.classList.add('is-hidden');
  removeListener();
}

// закриття модалки кліком поза модалкою
function closeFooterModalClick(e) {
  const onClickElement = e.target;
  const footerModalWindow = onClickElement.closest('.modal-footer');
  if (
    !refs.footerBackdrop.classList.contains('is-hidden') &
    (footerModalWindow == null)
  ) {
    refs.footerBackdrop.classList.add('is-hidden');
    removeListener();
  }
}

// закриття модалки клавішою Escape
function closeModalEscape(e) {
  if (e.key != 'Escape') {
    return;
  } else {
    if (!refs.footerBackdrop.classList.contains('is-hidden')) {
      refs.footerBackdrop.classList.add('is-hidden');
      removeListener();
    }
  }
}

// зняття слухачів
function removeListener() {
  refs.closeModalBtn.removeEventListener('click', closeModalBtn);
  document.removeEventListener('keyup', closeModalEscape);
  document.removeEventListener('click', closeFooterModalClick);
}
