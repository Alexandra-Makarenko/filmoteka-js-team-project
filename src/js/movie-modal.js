import ApiTopFilms from './fetchTopFilms';
import axios from 'axios';
import { movieModal } from './modal-close';
import { Notify } from 'notiflix';
import { arrayOfGanres} from './array-of-genres'

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'; // Base URL to get movies dates
export const IMG_FILE_SIZE = 'w500';

export async function fetchMovieById(id, imgSrc) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const parmams = {
    api_key: '88804fe82d069d316bec59240a5ee94b',
  };
  const response = await axios.get(`${url}?api_key=${parmams.api_key}`);

  const ganresOfFilm = await arrayOfGenres.then(r => {
    return r
      .filter(genre => {
        for (let id = 0; id<19; id++) { //const id of film.genre_ids
          if (id === genre.id) {
            return genre.name;
          }
        }
      })
      .map(genre => genre.name);
  })
  .then(r => [...r]);
  console.log(ganresOfFilm)

  const watchedIdData = JSON.parse(localStorage.getItem('watched')) || [];
  const queuedIdData = JSON.parse(localStorage.getItem('queued')) || [];

  movieModal.insertAdjacentHTML(
    'beforeend',
    `<div class="poster-img">
  <img src="${imgSrc}" alt="poster" />
</div>
<div class="movie-info">
  <h3 class="movie-title">${response.data.title}</h3>
  <div class="details-wrapper">
    <ul class="movie-details">
      <li class="movie-details--item">Vote / Votes</li>
      <li class="movie-details--item">Popularity</li>
      <li class="movie-details--item">Original Title</li>
      <li class="movie-details--item">Genre</li>
    </ul>
    <ul class="movie-details--data">
      <li class="movie-details--data-item">
        <span class="vote">${response.data.vote_average.toFixed(
          1
        )}</span> / <span class="votes">${response.data.vote_count}</span>
      </li>
      <li class="movie-details--data-item popularity">${response.data.popularity.toFixed(
        1
      )}</li>
      <li class="movie-details--data-item original-title">${
        response.data.original_title
      }</li>
      <li class="movie-details--data-item genre">${ganresOfFilm}
  </li>
    </ul>
  </div>
  <h3 class="movie-description">About</h3>
  <p class="movie-description__text">${response.data.overview}
  </p>
  <div class="movie-popup__buttons">
  <button type="button" class="movie-info__button--watched">
    add to Watched
  </button>
  <button type="button" class="movie-info__button--queued">
    add to queue
  </button>
  </div>
</div>`
  );
  // create constants for buttons queued and watched
  const queuedBtn = document.querySelector('.movie-info__button--queued');
  const watchedBtn = document.querySelector('.movie-info__button--watched');

  //check local storage and disable necessary btns

  if (watchedIdData.includes(id)) {
    queuedBtn.disabled = true;
    queuedBtn.textContent = 'Being watched';
  }

  if (queuedIdData.includes(id)) {
    watchedBtn.disabled = true;
    queuedBtn.textContent = 'Being queued';
  }

  // add to local storage on click + add notifications + change text on btns + make the required btns disabled

  const onQueuedBtnClick = e => {
    if (!queuedIdData.includes(id)) {
      queuedIdData.push(id);
      localStorage.setItem('queued', JSON.stringify(queuedIdData));
      Notify.success('The film has been successfully added to Queued list');
      watchedBtn.disabled = true;
      queuedBtn.textContent = 'Being queued';
    } else {
      const queuedIdToRemove = queuedIdData.indexOf(id);
      queuedIdData.splice(queuedIdToRemove, 1);
      localStorage.setItem('queue', JSON.stringify(queuedIdData));
      Notify.warning('The film has been removed from Queued list');
      queuedBtn.textContent = 'add to queue';
    }
  };

  const onWatchedBtnClick = e => {
    if (!watchedIdData.includes(id)) {
      watchedIdData.push(id);
      localStorage.setItem('watched', JSON.stringify(watchedIdData));
      Notify.success('The film has been successfully added to Watched list');
      queuedBtn.disabled = true;
      watchedBtn.textContent = 'Being watched';
    } else {
      const watchedIdToRemove = watchedIdData.indexOf(id);
      watchedIdData.splice(watchedIdToRemove, 1);
      localStorage.setItem('watched', JSON.stringify(watchedIdData));
      Notify.warning('The film has been removed from Watched list');
      watchedBtn.textContent = 'add to watched';
    }
  };

  queuedBtn.addEventListener('click', onQueuedBtnClick);
  watchedBtn.addEventListener('click', onWatchedBtnClick);
}

// export function markupModalFilm(film, imgSrc) {
//   console.log(film);
//   console.log(film.budget);
//   console.log(imgSrc);
//   return `<div class="poster-img">
//         <img src="${imgSrc}" alt="poster" />
//       </div>
//       <div class="movie-info">
//         <h3 class="movie-title">${film.title}</h3>
//         <div class="details-wrapper">
//           <ul class="movie-details">
//             <li class="movie-details--item">Vote / Votes</li>
//             <li class="movie-details--item">Popularity</li>
//             <li class="movie-details--item">Original Title</li>
//             <li class="movie-details--item">Genre</li>
//           </ul>
//           <ul class="movie-details--data">
//             <li class="movie-details--data-item">
//               <span class="vote">${film.vote_average.toFixed(
//                 1
//               )}</span> / <span class="votes">${film.vote_count}</span>
//             </li>
//             <li class="movie-details--data-item popularity">${
//               film.popularity
//             }</li>
//             <li class="movie-details--data-item original-title">${
//               film.original_title
//             }</li>
//             <li class="movie-details--data-item genre">жанри</li>
//           </ul>
//         </div>
//         <h3 class="movie-description">About</h3>
//         <p class="movie-description__text">
//         </p>
//         <div class="movie-popup__buttons">
//         <button type="button" class="movie-info__button--watched">
//           add to Watched
//         </button>
//         <button type="button" class="movie-info__button--queued">
//           add to queue
//         </button>
//         </div>
//       </div>;`;
// }

// function renderModal(string) {
//   movieModal.insertAdjacentHTML('beforeend', markupModalFilm);
// }
