import { API_KEY } from './api-key';
export function onFetchGenres() {
  const axios = require('axios');
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
    .then(function (r) {
      return r.data.genres;
    });
}
