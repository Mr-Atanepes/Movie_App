import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies = [] }) {
  if (!movies || movies.length === 0) {
    return <div className="movie-list">No movies available</div>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
