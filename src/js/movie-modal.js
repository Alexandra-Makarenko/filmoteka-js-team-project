import ApiTopFilms from './fetchTopFilms';
import { genresArray } from './array-of-genres';
import axios from 'axios';

import film from './api-top-films';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/'; // Base URL to get movies dates
export const IMG_FILE_SIZE = 'w500';

const refs = {
  btnClose: document.querySelector('.menu-close-button'),
  modal: document.querySelector('.movie-popup'),
  backdrop: document.querySelector('.modal-backdrop'),
  modalMcpContainer: document.querySelector('.modal__data--content'),
  gallery: document.querySelector('.film_list'),
  body: document.querySelector('body'),
};

export async function fetchMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const parmams = {
    api_key: '88804fe82d069d316bec59240a5ee94b',
  };
  const response = await axios.get(`${url}?api_key=${parmams.api_key}`);
  return response.data;
}

export function markupModalFilm(film) {
  return `<div class="poster-img">
          <img id='modal-img' src="${IMG_BASE_URL}${IMG_FILE_SIZE}${
    film.poster_path
  }" alt="film" />
        </div>
        <div class="movie-info">
          <h1 class="movie-title">${film.title}</h1>
          <table class="details-wrapper">
        <ul class="movie-details">
            <li class="movie-details--item">Vote / Votes</li>
            <li class="movie-details--item">Popularity</li>
            <li class="movie-details--item">Original Title</li>
            <li class="movie-details--item">Genre</li>
          </ul>

          <ul class="movie-details--data">
            <li class="movie-details--data-item">
              <span class="vote">${film.vote_average.toFixed(
                1
              )}</span> / <span class="votes">${film.vote_count}</span>
            </li>
            <li class="movie-details--data-item popularity">${
              film.popularity
            }</li>
            <li class="movie-details--data-item original-title">${
              film.original_title
            }</li>
            <li class="movie-details--data-item genre">${genres.join(', ')}</li>
          </ul>
      </div>

          <div class="modal__data--about">

          <h3 class="movie-description">About</h3>
        <p class="movie-description__text">${film.overview}
        </p>

          
            </div>
          </div>
        <ul class="movie-popup__buttons">
          <li class="movie-popup__button--accent" type="button">
            add to Watched
          </li>
          <li class="movie-popup__button" type="button">add to queue</li>
        </ul>
        </div>`;
}
