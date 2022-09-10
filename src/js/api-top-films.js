import ApiTopFilms from './fetchTopFilms';

const topFilms = new ApiTopFilms();
const mainRef = document.querySelector('main');
// topFilms.fetchTopFilms().then(r => {
//   const listOfFilms = r.data.results
//     .map(film => {
//       const yearOfRelease = film.release_date.split('-');
//       return `<div>
//         <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="poster">
//         <p>${film.title}</p>
//         <p>${film.genre_ids} | ${yearOfRelease[0]}</p>
//         </div>`;
//     })
//     .join('');
//   mainRef.insertAdjacentHTML('beforeend', listOfFilms);
// });
