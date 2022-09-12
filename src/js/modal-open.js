import {
  closeModalBtn,
  closeModalEscape,
  closeModalClick,
  modal,
  btnClose,
  backdrop,
} from './modal-close';

import { markupModalFilm } from './movie-modal';
// console.log(markupModalFilm);

const btnClose = document.querySelector('.menu-close-button');
const modal = document.querySelector('.movie-wrapper');
const backdrop = document.querySelector('.modal-backdrop');
const gallery = document.querySelector('.film_list');
const body = document.querySelector('body');

// вішаємо слухача для відкриття модалки з повною інформацією про фільм
gallery.addEventListener('click', e => {
  if (e.target.closest('.film-list__item')) {
    body.style.overflow = 'hidden';
    modalVisible();
    setTimeout(() => {
      modalClose();
    }, 100);
    modal.insertAdjacentHTML('beforeend', markupModalFilm());
  }
});

// робимо модалку фыльму видимою
function modalVisible() {
  backdrop.classList.remove('hidden');
}

// вішаємо слухачів для закриття модалки
function modalClose() {
  if (!backdrop.classList.contains('hidden')) {
    btnClose.addEventListener('click', closeModalBtn);
    document.addEventListener('keyup', closeModalEscape);
    document.addEventListener('click', closeModalClick);
  } else {
    console.log('щось не так з слухачами для закриття модалки');
    return;
  }
}
