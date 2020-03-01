import axios from "axios";

const apiKey = "628d6a5d740bdc44977e233b871867be";
const baseUrl = "https://api.themoviedb.org/3/";

const fetchMovieDetails = movieId => {
  const requestParams = `/movie/${movieId}?api_key=${apiKey}`;
  return axios.get(baseUrl + requestParams);
};

// const fetchMovieWithQuery = searchQuery => {
//   return fetch(`${baseURL}/search/shows?q=${searchQuery}`)
//     .then(res => res.json())
//     .then(entries => entries.map(entry => entry.show));
// };

const fetchTrendingMovies = () => {
  const requestParams = `trending/movie/day?api_key=${apiKey}`;
  return axios
    .get(baseUrl + requestParams)
    .then(response => response.data.results);
};

export default {
  fetchTrendingMovies,
  fetchMovieDetails
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=628d6a5d740bdc44977e233b871867be
