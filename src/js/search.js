// ---------
// в header-home.html need to add name="searchQuery" to input + add form instead of div

import { API_KEY } from './api-key';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'; // нужно вынести ее в отдельный файл чтоб все могли экспортировать
const searchQuery = document.querySelector('input[name="searchQuery"]');

let userSearchData = '';

const searchBtn = document.querySelector('.input__search-btn');

const createUrlFilmSearch = () => {
  userSearchData = searchQuery.value.replace(' ', '+');
  const urlFilmSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${userSearchData}`;
  return urlFilmSearch;
};

const handleSearchSubmit = async event => {
  event.preventDefault();

  // need to add - clearPreviousSearch();
  try {
    const urlFilmSearch = await createUrlFilmSearch();
    const response = await axios.get(urlFilmSearch);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener('click', handleSearchSubmit);
