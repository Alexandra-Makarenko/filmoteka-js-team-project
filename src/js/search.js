// ---------
// в header-home.html need to add name="searchQuery" to input + add form instead of div

import { API_KEY } from './api-key';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'; // нужно вынести ее в отдельный файл чтоб все могли экспортировать
const searchQuery = document.querySelector('.search__input');
const formSearch = document.querySelector('.header__search');

let userSearchData = '';

const filmList = document.querySelector('.film_list');

const createUrlFilmSearch = () => {
  userSearchData = searchQuery.value;
  const urlFilmSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${userSearchData}`;
  
  console.log(urlFilmSearch)
  return urlFilmSearch;
};

function posterLinkGenerate(film) {
  if (film.poster_path !== null) {
    return `"https://image.tmdb.org/t/p/w500${film.poster_path}"`;
  }
  return `"https://raw.githubusercontent.com/Alexandra-Makarenko/filmoteka-js-team-project/main/src/images/no-poster.jpg"`;
}

const handleSearchSubmit = async event => {
  event.preventDefault();

  // need to add - clearPreviousSearch();
  try {
    const urlFilmSearch = await createUrlFilmSearch();
    const response = await axios.get(urlFilmSearch);
    const { data } = response;
    console.log(data.results);
    filmList.innerHTML = '';
    data.results.map(film => {
      const yearOfRelease = film.release_date.split('-');
         filmList.insertAdjacentHTML("beforeend",`<div film-id="${film.id}" class="film-list__item">
  <img
    src=${posterLinkGenerate(film)}
    alt="Movie Name"
    class="film-list__item-poster"
    loading="lazy"
  />
  <div class="film-list__item-info">
    <h3 class="film-list__item-title">${film.title}</h3>
    
   <span class="film-list__item-year">| ${yearOfRelease[0]}</span>
    <span class="film-list__item-rate">&nbsp;${film.vote_average}&nbsp;</span>
    </div>
  </div>
  </div>`)
       })
      } catch (error) {
    console.log(error);
  }
};

formSearch.addEventListener('submit', handleSearchSubmit);
