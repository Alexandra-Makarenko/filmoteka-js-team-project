import ApiTopFilms from './fetchTopFilms';
import { genresArray } from './array-of-genres';
// import { genresArray } from './array-of-genres';
import { createPagination, paginationOptions } from './pagination';

const topFilms = new ApiTopFilms();
const filmListRef = document.querySelector('.film_list');
export function popularFilms(page) {
  topFilms.fetchTopFilms(page).then(r => {
    const listOfFilms = r.data.results
      .map(film => {
        return rendOneCard(film);
      })
      .join('');
    filmListRef.innerHTML = listOfFilms;
    const totalPages = r.data.total_pages;
    const itemsPerPage = r.data.results.length;
    // paginationOptions.startPage = page;
    console.log('api-top-films', page);
    createPagination(page, itemsPerPage, totalPages);
  });
}

popularFilms(paginationOptions.startPage);

function rendOneCard(film) {
  const genres = decipherGenresIds(film);
  const yearOfRelease = onYearOfFilm(film);
  return patternOfCard(film, genres, yearOfRelease);
}

function decipherGenresIds(film) {
  const genres = genresArray
    .filter(genre => {
      for (const id of film.genre_ids) {
        if (id === genre.id) {
          return genre.name;
        }
      }
    })
    .map(genre => genre.name);
  if (genres.length < 3) {
    return genres;
  }
  return [...[...genres].slice(0, 2), ...['Other']];
}

function onYearOfFilm(film) {
  const yearOfRelease = film.release_date.split('-');
  return yearOfRelease;
}

function posterLinkGenerate(film) {
  if (film.poster_path !== null) {
    return `"https://image.tmdb.org/t/p/w500${film.poster_path}"`;
  }
  return `"https://raw.githubusercontent.com/Alexandra-Makarenko/filmoteka-js-team-project/main/src/images/no-poster.jpg"`;
}

function patternOfCard(film, genres, yearOfRelease) {
  return `<div film-id="${film.id}" class="film-list__item">
  <img
    src=${posterLinkGenerate(film)}
    alt="Movie Name"
    class="film-list__item-poster"
    film-id="${film.id}"
    loading="lazy"
  />
  <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
   <span class="film-list__item-genres">${genres.join(', ')}</span>
   <span class="film-list__item-year">| ${yearOfRelease[0]}</span>
    <span class="film-list__item-rate">&nbsp;${film.vote_average}&nbsp;</span>
    </div>
  </div>
  </div>`;
}
