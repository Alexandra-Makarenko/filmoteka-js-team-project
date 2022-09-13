// ---------
// в header-home.html need to add name="searchQuery" to input + add form instead of div
import Notiflix from 'notiflix';
import { API_KEY } from './api-key';
import axios from 'axios';
import { createPagination, paginationInit } from './pagination';
import { rendOneCard } from './api-top-films';

const BASE_URL = 'https://api.themoviedb.org/3/'; // нужно вынести ее в отдельный файл чтоб все могли экспортировать
const searchQuery = document.querySelector('.search__input');
const formSearch = document.querySelector('.header__search');

let userSearchData = '';

const filmList = document.querySelector('.film_list');

const createUrlFilmSearch = page => {
  userSearchData = searchQuery.value.trim();
  const urlFilmSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${userSearchData}&page=${page}`;

  // console.log(urlFilmSearch);
  return urlFilmSearch;
};

const handleSearchSubmit = async event => {
  event.preventDefault();
  try {
    searchPages(1);
  } catch (error) {
    console.log(error);
  }
};

export async function searchPages(page) {
  const urlFilmSearch = await createUrlFilmSearch(page);
  const response = await axios.get(urlFilmSearch);
  const { data } = response;
  if (data.results.length === 0) {
    Notiflix.Notify.failure('Error! Search does not give result');
    return;
  }
  Notiflix.Notify.success('Success search');
  filmList.innerHTML = '';
  await data.results.map(film => {
    rendOneCard(film).then(r => {
      filmList.insertAdjacentHTML('beforeend', r);
    });
  });
  paginationInit.searchType = 'search films';
  const totalPages = data.total_pages;
  const itemsPerPage = data.results.length;
  createPagination(page, itemsPerPage, totalPages);
  // console.log(userSearchData);
}

formSearch.addEventListener('submit', handleSearchSubmit);
