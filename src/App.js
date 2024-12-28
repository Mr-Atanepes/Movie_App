import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Home />} />
            <Route path="/top-rated" element={<Home />} />
            <Route path="/upcoming" element={<Home />} />
            <Route path="/now-playing" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
