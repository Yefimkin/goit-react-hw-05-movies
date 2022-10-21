// import axios from 'axios';

// // Key
// const KEY = 'b119b11c5a40234389ef5bbd7aaf9e1d';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// // список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// export const getTrendingMovies = async () => {
//     const response = await axios.get(`/trending/all/day&api_key=${KEY}`);
//     const trendingMovies = await response.data.results;
//     return trendingMovies;
// };

// // пошук фільму за ключовим словом на сторінці фільмів.
// export const searchMovies = async (movieName, page) => {
//     const response = await axios.get(`search/movie?api_key=${KEY}&page=${page}&language=en&query=${movieName}`);
//     const searchMoviesData = await response.data;
//     return searchMoviesData;
// }

// // запит повної інформації про фільм для сторінки кінофільму.
// export const getMovieDetails = async id => {
//     const response = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);
//     const movieDetails = await response.data;
//     return movieDetails;
// };

// // запит інформації про акторський склад для сторінки кінофільму.
// export const getMovieCredits = async movieId => {
//     const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
//     const movieCredits = await response.data;
//     return movieCredits;
// };

// // запит оглядів для сторінки кінофільму.
// export const getMovieReviews = async movieId => {
//     const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
//     const movieReviews = await response.data;
//     return movieReviews;
// };

import axios from 'axios';

const KEY = 'b119b11c5a40234389ef5bbd7aaf9e1d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  const trendingMovies = await response.data.results;
  return trendingMovies;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );

  const movieDetails = await response.data;
  return movieDetails;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const movieCredits = await response.data;
  return movieCredits;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  const movieReviews = await response.data;
  return movieReviews;
};

export const fetchMovieByName = async (movieName, page) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&page=${page}&language=en&query=${movieName}`
  );
  const searchMoviesData = await response.data.results;
  return searchMoviesData;
};