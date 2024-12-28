import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getFavorites } from '../services/favoritesService';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const favoriteMovies = getFavorites();
      setFavorites(favoriteMovies);
    };

    loadFavorites();
    // Add event listener for storage changes
    window.addEventListener('storage', loadFavorites);
    
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  return (
    <div className="favorites-page">
      <div className="category-header">
        <h1>My Favorite Movies</h1>
      </div>
      {favorites.length === 0 ? (
        <div className="no-favorites">
          <h2>No favorite movies yet</h2>
          <p>Start adding movies to your favorites by clicking the heart icon on any movie card!</p>
        </div>
      ) : (
        <MovieList movies={favorites} />
      )}
    </div>
  );
}

export default Favorites;
