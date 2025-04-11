// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExploreRituals from './pages/ExploreRituals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-rituals" element={<ExploreRituals />} />
      </Routes>
    </Router>
  );
}

export default App;
