import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites, isMovieFavorite } from '../services/favoritesService';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isMovieFavorite(movie.id));
  }, [movie.id]);

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigation to movie details
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <div className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? '❤️' : '🤍'}
      </div>
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-poster">
          <img src={imageUrl} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{new Date(movie.release_date).getFullYear()}</p>
          <div className="movie-rating">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
