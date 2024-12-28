import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon">🎬</span>
        <span className="logo-text">Movie App</span>
      </Link>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      <nav className="nav-links">
        <Link to="/" className="nav-link">
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/favorites" className="nav-link">
          <span className="nav-icon">⭐</span>
          <span className="nav-text">Favorites</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
