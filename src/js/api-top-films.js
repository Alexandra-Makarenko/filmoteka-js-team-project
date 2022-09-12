import ApiTopFilms from './fetchTopFilms';
import { genresArray } from './array-of-genres';
import { genresArray } from './array-of-genres';
const topFilms = new ApiTopFilms();
const filmListRef = document.querySelector('.film_list');
// popularFilms(1);
export default function popularFilms(page) {
  topFilms.fetchTopFilms(page).then(r => {
    const listOfFilms = r.data.results
      .map(film => {
        return rendOneCard(film);
      })
      .join('');
    filmListRef.innerHTML = listOfFilms;
  });
}

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
  return `"/no-poster.636663e7.jpg"`;
}

function patternOfCard(film, genres, yearOfRelease) {
  return `<li id="" class="film-list__item">
  <img
    src=${posterLinkGenerate(film)}
    alt="Movie Name"
    class="film-list__item-poster"
    loading="lazy"
  />
  <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
    <div class="film-list__item-details">
      <span class="film-list__item-genres">${genres.join(', ')}</span>|
      <span class="film-list__item-year">${yearOfRelease[0]}</span>
    </div>
  </div>
</li>`;
}
