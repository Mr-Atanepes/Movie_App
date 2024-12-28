import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../components/MovieList';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies
} from '../services/movieService';

const categoryMap = {
  'popular': {
    title: 'Popular Movies',
    fetch: getPopularMovies
  },
  'top-rated': {
    title: 'Top Rated Movies',
    fetch: getTopRatedMovies
  },
  'upcoming': {
    title: 'Upcoming Movies',
    fetch: getUpcomingMovies
  },
  'now-playing': {
    title: 'Now Playing Movies',
    fetch: getNowPlayingMovies
  }
};

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const category = location.pathname.split('/')[1] || 'popular';

  const fetchMovies = async (pageNum) => {
    try {
      const categoryData = categoryMap[category] || categoryMap['popular'];
      const data = await categoryData.fetch(pageNum);
      if (pageNum === 1) {
        setMovies(data.results || []);
      } else {
        setMovies(prev => Array.isArray(prev) ? [...prev, ...(data.results || [])] : data.results || []);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setMovies([]); // Reset movies when category changes
    setPage(1);
    fetchMovies(1);
  }, [category]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage);
  };

  if (loading && movies.length === 0) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  const categoryData = categoryMap[category] || categoryMap['popular'];

  return (
    <div className="home-page">
      <div className="category-header">
        <h1>{categoryData.title}</h1>
      </div>
      <MovieList movies={movies} />
      {!loading && (
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Home;
