import { API_KEY } from './api-key';

//заглушка айдішніків поки нема локального збереження
const id = [616037, 532639, 361743, 760741, 762504, 616037, 532639, 361743, 760741, 762504, 616037, 532639, 361743, 760741, 762504]
localStorage.setItem('watched', JSON.stringify(id))
localStorage.setItem('queue', JSON.stringify(id))

const baseURL = "https://api.themoviedb.org/3/movie/"
const savedWatchedFilms = JSON.parse(localStorage.getItem('watched').split(','))
const savedQueueFilms = JSON.parse(localStorage.getItem('queue').split(','))

const refs = {
  btnQueue: document.querySelector('#queue'),
  btnWatched: document.querySelector('#watched'),
  div: document.querySelector('#library'),
  text: document.querySelector('#text'),
  btnWatched: document.querySelector('#watched'),
  filmList: document.querySelector('.library_list'),
};

refs.btnQueue.addEventListener('click', onBtnQueue);
refs.btnWatched.addEventListener('click', onBtnWatched)

const fetchQueueFilms = async (id) => {
  const response = await fetch(`${baseURL}${id}?api_key=${API_KEY}`);
  const films = await response.json();
  return films;
  };

function onBtnQueue() {
  hideMessage();
  if (!savedQueueFilms) {
    refs.filmList.innerHTML = '<p>Sorry, list is empty(</p>'
  } 
  savedQueueFilms.map(film => fetchQueueFilms(film).then(film => 
  {
    const yearOfRelease = film.release_date.split('-');
    refs.filmList.insertAdjacentHTML("beforeend",`<li id="" class="film-list__item">
    <img
    src="https://image.tmdb.org/t/p/w500${film.poster_path}"
    alt="Movie Name"
    class="film-list__item-poster"
    loading="lazy"
    />
    <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
   <span class="film-list__item-genres">жанри</span>
   <span class="film-list__item-genres">${yearOfRelease[0]}</span>
    <span class="film-list__item-rate">${film.vote_average}</span>
    </div>
    </li>`)
}))
  refs.filmList.innerHTML = '';
}

//заховати повідомлення "будь ласка, оберіть категорію"
function hideMessage(){
  if(refs.text.classList.contains("library-message")){
    refs.text.classList.remove('library-message')
    refs.text.classList.add('library-message-hidden')
  }
}

const fetchWatchedFilms = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const films = await response.json();
  return films;
};

function onBtnWatched() {
  hideMessage();
  if (!savedWatchedFilms) {
    refs.filmList.innerHTML = '<p>Sorry, list is empty(</p>'
  } 
  savedWatchedFilms.map(film => fetchWatchedFilms(film).then(film => 
  {
    const yearOfRelease = film.release_date.split('-');
    refs.filmList.insertAdjacentHTML("beforeend",`<li id="" class="film-list__item">
    <img
    src="https://image.tmdb.org/t/p/w500${film.poster_path}"
    alt="Movie Name"
    class="film-list__item-poster"
    loading="lazy"
    />
    <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
   <span class="film-list__item-genres">жанри</span>
   <span class="film-list__item-genres">${yearOfRelease[0]}</span>
    <span class="film-list__item-rate">${film.vote_average}</span>
    </div>
    </li>`)
}))
  refs.filmList.innerHTML = '';
}