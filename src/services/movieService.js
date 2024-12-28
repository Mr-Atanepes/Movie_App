// You'll need to get an API key from TMDB (The Movie Database)
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Debug logs
console.log('Environment Variables:', process.env);
console.log('API Key:', API_KEY);

export const getPopularMovies = async (page = 1) => {
  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return { results: [] };
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return { results: [] };
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return { results: [] };
  }
};

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return { results: [] };
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getMovieWatchProviders = async (movieId) => {
  try {
    const url = `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`;
    console.log('Fetching URL:', url);
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    // Returns streaming providers by country
    return data.results;
  } catch (error) {
    console.error('Error fetching watch providers:', error);
    return null;
  }
};
