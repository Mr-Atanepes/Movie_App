import React from 'react';
import MovieCard from './MovieCard';

function Favorites() {
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
