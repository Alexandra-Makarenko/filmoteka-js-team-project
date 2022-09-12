// заглушка пока на модалку не подтягиваются данные с API

import { API_KEY } from './api-key';
import axios from 'axios';
import { Notify } from 'notiflix';

const queuedBtn = document.querySelector('.movie-info__button--queued');
const watchedBtn = document.querySelector('.movie-info__button--watched');

const onModalOpen = async event => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/75780?api_key=${API_KEY}`
    );
    const { data } = response;
    const filmId = data.id;
    const watchedIdData = [];
    const queuedIdData = [];

    const onQueuedBtnClick = e => {
      if (queuedBtn.textContent === 'remove from Queued') {
        queuedBtn.textContent = 'add to queued';

        const queuedIdToRemove = queuedIdData.indexOf(filmId);
        queuedIdData.splice(queuedIdToRemove, 1);
        localStorage.setItem('queued', queuedIdData);
        Notify.warning('The film has been removed from Queued list');
      } else {
        queuedBtn.textContent = 'remove from Queued';
        queuedIdData.push(filmId);
        localStorage.setItem('queued', queuedIdData);
        Notify.success('The film has been successfully added to Queued list');
      }
    };

    const onWatchedBtnClick = e => {
      if (!watchedIdData.includes(filmId)) {
        watchedIdData.push(filmId);
        Notify.success('The film has been successfully added to Watched list');
        watchedBtn.textContent = 'remove from Watched';
        localStorage.setItem('watched', watchedIdData);
      } else {
        Notify.failure('Sorry, the film was added to Watched list already');
      }
    };

    queuedBtn.addEventListener('click', onQueuedBtnClick);
    watchedBtn.addEventListener('click', onWatchedBtnClick);
  } catch (error) {
    console.log(error);
  }
};

onModalOpen();
