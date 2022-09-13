// ---------
// в header-home.html need to add name="searchQuery" to input + add form instead of div
import Notiflix from 'notiflix';
import { API_KEY } from './api-key';
import axios from 'axios';
import { rendOneCard } from './api-top-films';
import { offLoader, onLoader } from "../js/loader";
const BASE_URL = 'https://api.themoviedb.org/3/'; // нужно вынести ее в отдельный файл чтоб все могли экспортировать
const searchQuery = document.querySelector('.search__input');
const formSearch = document.querySelector('.header__search');

let userSearchData = '';

const filmList = document.querySelector('.film_list');

const createUrlFilmSearch = page => {
  userSearchData = searchQuery.value.trim();
  const urlFilmSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${userSearchData}&page=${page}`;

  console.log(urlFilmSearch);
  return urlFilmSearch;
};

const handleSearchSubmit = async event => {
  event.preventDefault();
  try {
    searchPages(2);
  } catch (error) {
    console.log(error);
  }
};

async function searchPages(page) {
  onLoader();
  const urlFilmSearch = await createUrlFilmSearch(page);
  const response = await axios.get(urlFilmSearch);
  const { data } = response;
  if (data.results.length === 0) {
    Notiflix.Notify.failure('Error! Search does not give result');
    offLoader();
    return;
  }
  Notiflix.Notify.success('Success search');
  filmList.innerHTML = '';
  await data.results.map(film => {
    rendOneCard(film).then(r => {
      filmList.insertAdjacentHTML('beforeend', r);
      offLoader();
    });
  });
}

formSearch.addEventListener('submit', handleSearchSubmit);
