export default class ApiTopFilms {
  constructor() {
    this.mediaType = 'movie';
    this.timeWindow = 'week';
  }

  fetchTopFilms() {
    const API_KEY = '88804fe82d069d316bec59240a5ee94b';
    const BASE_URL = 'https://api.themoviedb.org/3/trending/';
    const axios = require('axios');
    return axios
      .get(`${BASE_URL}${this.mediaType}/${this.timeWindow}?api_key=${API_KEY}`)
      .then(function (r) {
        return r;
      });
  }
}
