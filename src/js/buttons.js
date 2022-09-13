import { API_KEY } from './api-key';
import { arrayOfGenres } from './array-of-genres';

const baseURL = 'https://api.themoviedb.org/3/movie/';

const refs = {
  btnQueue: document.querySelector('#queue'),
  btnWatched: document.querySelector('#watched'),
  text: document.querySelector('#text'),
  filmList: document.querySelector('.film_list'),
};

refs.btnQueue.addEventListener('click', onBtnQueue);
refs.btnWatched.addEventListener('click', onBtnWatched);

const fetchQueueFilms = async id => {
  const response = await fetch(`${baseURL}${id}?api_key=${API_KEY}`);
  const films = await response.json();
  return films;
};

function onBtnQueue() {
  hideMessage();
  refs.filmList.innerHTML = '';
  try{
    const savedQueueFilms = JSON.parse(localStorage.getItem('queue').split(','));
    savedQueueFilms.map(film =>
      fetchQueueFilms(film).then(film => {
        rendOneCard(film).then(r => {
          refs.filmList.insertAdjacentHTML('beforeend', r);
        });
      })
    );
  } catch (error) {
    refs.filmList.innerHTML = '<p class="library-message">Sorry, list is empty(</p>';
  }
}

const fetchWatchedFilms = async idw => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${idw}?api_key=${API_KEY}`
  );
  const films = await response.json();
  return films;
};

function onBtnWatched() {
  onLoader();
  hideMessage();
  refs.filmList.innerHTML = '';
  try{
  const savedWatchedFilms = JSON.parse(localStorage.getItem('watched').split(','));
  savedWatchedFilms.map(film =>
    fetchWatchedFilms(film).then(film => {
      rendOneCard(film).then(r => {
        refs.filmList.insertAdjacentHTML('beforeend', r);
        offLoader();
      });
    })
  );
  } catch (error){
    refs.filmList.innerHTML = '<p class="library-message">Sorry, list is empty(</p>';
  }
}

//заховати повідомлення "будь ласка, оберіть категорію"
function hideMessage(){
  if(refs.text.classList.contains("library-message")){
    refs.text.classList.remove('library-message')
    refs.text.classList.add('library-message-hidden')
  }
}

function rendOneCard(film) {
  const genres = decipherGenresIds(film);
  const yearOfRelease = onYearOfFilm(film);
  return patternOfCard(film, genres, yearOfRelease);
}

function decipherGenresIds(film) {
  if (film.genres.length === 0) {
    return 'Without genres';
  }
  return arrayOfGenres
    .then(r => {
      return r
        .filter(genre => {
          for (const id of film.genres) {
            if (id.id === genre.id) {
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

function onYearOfFilm(film) {
  const yearOfRelease = film.release_date.split('-');
  return yearOfRelease;
}

async function patternOfCard(film, genres, yearOfRelease) {
  if (genres === 'Without genres') {
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
      <span class="film-list__item-genres">${genres}</span>
      <span class="film-list__item-strip">|</span>
      <span class="film-list__item-year">${yearOfRelease[0]}</span>
      <span class="film-list__item-rate">&nbsp;${film.vote_average.toFixed(
        1
      )}&nbsp;</span>
    </div>
  </div>
</li>`;
  }
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

function posterLinkGenerate(film) {
  if (film.poster_path !== null) {
    return `"https://image.tmdb.org/t/p/w500${film.poster_path}"`;
  }
  return `"https://raw.githubusercontent.com/Alexandra-Makarenko/filmoteka-js-team-project/main/src/images/no-poster.jpg"`;
}