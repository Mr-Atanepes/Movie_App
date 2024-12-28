import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
  { id: 'popular', name: 'Popular', icon: '🔥' },
  { id: 'top-rated', name: 'Top Rated', icon: '⭐' },
  { id: 'upcoming', name: 'Upcoming', icon: '📅' },
  { id: 'now-playing', name: 'Now Playing', icon: '🎬' }
];

function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || 'popular';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Categories</h3>
      </div>
      <nav className="sidebar-nav">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/${category.id}`}
            className={`sidebar-link ${currentPath === category.id ? 'active' : ''}`}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
