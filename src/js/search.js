import ApiService from './api-top-films';
import { isQueryOrPopular } from './pagination';

const apiService = new ApiService();

const searchForm = document.querySelector('.header__search');

searchForm.addEventListener('submit', onSearch);

export function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.searchQuery.value.trim();
  inputError.textContent = ' ';

  apiService.resetPage();

  if (!apiService.query) {
    textContent = 'Please enter something to search ';
    return;
  }

  isQueryOrPopular(apiService.query, apiService.page);
}
