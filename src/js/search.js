// ---------
// в header-home.html need to add name="searchQuery" to input + add form instead of div

import { API_KEY } from './api-key';
import axios from 'axios';
import { patternOfCard } from './api-top-films';
import { decipherGenresIds } from './api-top-films';
import { rendOneCard } from './api-top-films';
const BASE_URL = 'https://api.themoviedb.org/3/'; // нужно вынести ее в отдельный файл чтоб все могли экспортировать
const searchQuery = document.querySelector('.search__input');
const formSearch = document.querySelector('.header__search');

let userSearchData = '';

const filmList = document.querySelector('.film_list');

const createUrlFilmSearch = () => {
  userSearchData = searchQuery.value;
  const urlFilmSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${userSearchData}`;

  console.log(urlFilmSearch);
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
    await data.results.map(film => {
      rendOneCard(film).then(r => {
        filmList.insertAdjacentHTML('beforeend', r);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

formSearch.addEventListener('submit', handleSearchSubmit);
