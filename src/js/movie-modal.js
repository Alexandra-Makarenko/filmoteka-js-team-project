import ApiTopFilms from './fetchTopFilms';
import { genresArray } from './array-of-genres';
import axios from 'axios';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'; // Base URL to get movies dates
export const IMG_FILE_SIZE = 'w500';

const refs = {
  btnClose: document.querySelector('.menu-close-button'),
  movieModal: document.querySelector('.movie-wrapper'),
  backdrop: document.querySelector('.modal-backdrop'),
  gallery: document.querySelector('.film_list'),
  body: document.querySelector('body'),
};

// export async function fetchMovieById(id) {
//   const url = `https://api.themoviedb.org/3/movie/${id}`;
//   const parmams = {
//     api_key: '88804fe82d069d316bec59240a5ee94b',
//   };
//   const response = await axios.get(`${url}?api_key=${parmams.api_key}`);
//   return response.data;
// }

export function markupModalFilm() {
  return `<div class="poster-img">
        <img src="" alt="poster" />
      </div>

      <div class="movie-info">
        <h3 class="movie-title"></h3>
        <div class="details-wrapper">
          <ul class="movie-details">
            <li class="movie-details--item">Vote / Votes</li>
            <li class="movie-details--item">Popularity</li>
            <li class="movie-details--item">Original Title</li>
            <li class="movie-details--item">Genre</li>
          </ul>
          <ul class="movie-details--data">
            <li class="movie-details--data-item">
              <span class="vote"></span> / <span class="votes"></span>
            </li>
            <li class="movie-details--data-item popularity"></li>
            <li class="movie-details--data-item original-title"></li>
            <li class="movie-details--data-item genre"></li>
          </ul>
        </div>
        <h3 class="movie-description">About</h3>
        <p class="movie-description__text">
        </p>
        <div class="movie-popup__buttons">
        <button type="button" class="movie-info__button--watched">
          add to Watched
        </button>
        <button type="button" class="movie-info__button--queued">
          add to queue
        </button>
        </div>
      </div>;`;
}
