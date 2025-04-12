// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExploreRituals from './pages/ExploreRituals';
import VRTour from './pages/VRTour';
import PlanMyJourney from './pages/PlanMyJourney';
import GetLocalHelp from './pages/GetLocalHelp'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-rituals" element={<ExploreRituals />} />
        <Route path="/vrtour" element={<VRTour />} />
        <Route path="/plan-my-journey" element={<PlanMyJourney />} />
        <Route path="/local-help" element={<GetLocalHelp isOpen={true} onClose={() => window.history.back()} />} />
      </Routes>
    </Router>
  );
}

export default App;
