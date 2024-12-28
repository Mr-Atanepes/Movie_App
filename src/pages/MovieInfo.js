import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="error-message">
        <h2>Movie not found</h2>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    );
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <div className="movie-details-page">
      {backdropUrl && (
        <div 
          className="backdrop" 
          style={{ backgroundImage: `url(${backdropUrl})` }}
        />
      )}
      
      <div className="movie-details-content">
        <div className="movie-poster">
          <img src={posterUrl} alt={movie.title} />
        </div>
        
        <div className="movie-info-content">
          <h1>{movie.title}</h1>
          
          <div className="movie-meta">
            <span className="release-date">
              {new Date(movie.release_date).getFullYear()}
            </span>
            {movie.runtime && (
              <span className="runtime">
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </span>
            )}
            <span className="rating">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
          </div>

          {movie.tagline && (
            <div className="tagline">
              "{movie.tagline}"
            </div>
          )}

          <div className="overview">
            <h3>Overview</h3>
            <p className="overview-text">{movie.overview}</p>
          </div>

          <div className="additional-info">
            {movie.genres && (
              <div className="genres">
                <h3>Genres</h3>
                <div className="genres-list">
                  {movie.genres.map(genre => (
                    <span key={genre.id} className={`genre-tag ${genre.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.production_companies && movie.production_companies.length > 0 && (
              <div className="production">
                <h3>Production</h3>
                <p className="production-text">
                  {movie.production_companies.map(company => (
                    <span 
                      key={company.id} 
                      className={`company-name ${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {company.name}
                      {company.id !== movie.production_companies[movie.production_companies.length - 1].id && ', '}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>

          <Link to="/" className="back-button">
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
