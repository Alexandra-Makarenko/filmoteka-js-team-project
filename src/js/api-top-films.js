import ApiTopFilms from './fetchTopFilms';
import { arrayOfGenres } from './array-of-genres';
import { createPagination, paginationInit } from './pagination';
import { onFetchGenres } from './api-genres';

const topFilms = new ApiTopFilms();
const filmListRef = document.querySelector('.film_list');

export function popularFilms(page) {
  topFilms.fetchTopFilms(page).then(r => {
    filmListRef.innerHTML = '';
    generateListOfFilms(r);
    const totalPages = r.data.total_pages;
    const itemsPerPage = r.data.results.length;

    paginationInit.searchType = 'popular films';

    createPagination(page, itemsPerPage, totalPages);
  });
}

popularFilms(paginationInit.startPage);

async function generateListOfFilms(r) {
  const listOfFilms = await r.data.results.map(film => {
    rendOneCard(film).then(r => {
      filmListRef.insertAdjacentHTML('beforeend', r);
    });
  });
}

export function rendOneCard(film) {
  const genres = decipherGenresIds(film);
  const yearOfRelease = onYearOfFilm(film);
  return patternOfCard(film, genres, yearOfRelease);
}

export function decipherGenresIds(film) {
  return arrayOfGenres
    .then(r => {
      return r
        .filter(genre => {
          for (const id of film.genre_ids) {
            if (id === genre.id) {
              return genre.name;
            }
          }
        })
        .map(genre => genre.name);
    })
    .then(r => {
      if (r.length < 3) {
        return r;
      }
      return [...[...r].slice(0, 2), ...['Other']];
    });
}

export function onYearOfFilm(film) {
  const yearOfRelease = film.release_date.split('-');
  return yearOfRelease;
}

function posterLinkGenerate(film) {
  if (film.poster_path !== null) {
    return `"https://image.tmdb.org/t/p/w500${film.poster_path}"`;
  }
  return `"https://raw.githubusercontent.com/Alexandra-Makarenko/filmoteka-js-team-project/main/src/images/no-poster.jpg"`;
}

export async function patternOfCard(film, genres, yearOfRelease) {
  const asyncGenres = await genres.then(r => r);
  return `<li film-id="${film.id}" class="film-list__item">
  <img
    src=${posterLinkGenerate(film)}
    alt="${film.title}"
    class="film-list__item-poster"
    film-id="${film.id}"
    loading="lazy"
  />
  <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
    <div class="film-list__item-details">
      <span class="film-list__item-genres">${asyncGenres.join(', ')}</span>
      <span class="film-list__item-strip">|</span>
      <span class="film-list__item-year">${yearOfRelease[0]}</span>
      <span class="film-list__item-rate">&nbsp;${film.vote_average.toFixed(
        1
      )}&nbsp;</span>
    </div>
  </div>
</li>`;
}
