import ApiTopFilms from './fetchTopFilms';
import { genresArray } from './array-of-genres';
const topFilms = new ApiTopFilms();
const mainRef = document.querySelector('main');
popularFilms(1);
function popularFilms(page) {
  topFilms.fetchTopFilms(page).then(r => {
    const listOfFilms = r.data.results
      .map(film => {
        const genres = genresArray
          .filter(genre => {
            for (const id of film.genre_ids) {
              if (id === genre.id) {
                return genre.name;
              }
            }
          })
          .map(genre => genre.name);
        const yearOfRelease = film.release_date.split('-');
        return `<div>
        <img src="https://image.tmdb.org/t/p/w500${
          film.poster_path
        }" alt="poster">
        <p>${film.title}</p>
        <p>${genres.join(', ')} | ${yearOfRelease[0]}</p>
        </div>`;
      })
      .join('');
    mainRef.insertAdjacentHTML('beforeend', listOfFilms);
  });
}
