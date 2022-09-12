import { API_KEY } from './api-key';

const refs = {
    btnWatched: document.querySelector('#watched'),
    filmList: document.querySelector('.film_list'),
}
refs.btnWatched.addEventListener('click', onWatched)


const fetchWatchedFilms = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const films = await response.json();
  return films;
};


function onWatched() {
  // let watched = localStorage.getItem('watched');
  let watched = [75780,3716,150,13,10000]
  
  if (!watched) {
      refs.filmList.innerHTML = '<p>Sorry, list is empty(</p>'
  } 
  console.log(localStorage.getItem('watched'));
  watched.map(film => fetchWatchedFilms(film).then(film => 
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
  }
  ) )

  refs.filmList.innerHTML = '';
 
}


