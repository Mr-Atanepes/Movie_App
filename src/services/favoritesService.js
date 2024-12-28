const FAVORITES_KEY = 'movie_favorites';

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (movie) => {
  const favorites = getFavorites();
  const updatedFavorites = [...favorites, movie];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const removeFromFavorites = (movieId) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const isMovieFavorite = (movieId) => {
  const favorites = getFavorites();
  return favorites.some(movie => movie.id === movieId);
};
