import { API_KEY } from './api-key';
export default class ApiTopFilms {
  constructor() {
    this.mediaType = 'movie';
    this.timeWindow = 'week';
  }

  fetchTopFilms(page) {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/';
    const axios = require('axios');
    return axios
      .get(
        `${BASE_URL}${this.mediaType}/${this.timeWindow}?api_key=${API_KEY}&page=${page}`
      )
      .then(function (r) {
        return r;
      });
  }
}
