import {
  closeModalBtn,
  closeModalEscape,
  closeModalClick,
  movieModal,
  btnClose,
  backdrop,
} from './modal-close';

import { fetchMovieById } from './movie-modal-local-storage';
import { offLoader, onLoader } from "../js/loader";
// console.log(markupModalFilm());

const gallery = document.querySelector('.film_list');
const body = document.querySelector('body');

// вішаємо слухача для відкриття модалки з повною інформацією про фільм
gallery.addEventListener('click', e => {
  if (e.target.closest('.film-list__item-poster')) {
    onLoader();
    const idAttribute = e.target.getAttribute('film-id');

    const imgSrc = e.target.getAttribute('src');

    body.style.overflow = 'hidden';
    modalVisible();
    setTimeout(() => {
      offLoader();
      modalClose();
    }, 100);
    fetchMovieById(idAttribute, imgSrc);
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
