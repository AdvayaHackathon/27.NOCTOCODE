import React, { useState } from 'react';
import './ExploreRituals.css';
import hampiImage from '../assets/hampi1.jpg';
import meenakshiImage from '../assets/meenakshi.jpg';

const ExploreRituals = () => {
  const [selectedMonument, setSelectedMonument] = useState(null);

  const launchVR = () => {
    if (selectedMonument) {
      window.open(`/VRtours.html?monument=${selectedMonument}`, '_blank');
    }
  };
  

  return (
    <div className="explore-container">
      <h1>Explore Rituals Through Time</h1>
      <p>
        Step inside iconic Indian monuments and witness their stories unfold —
        walk through partially ruined grandeur and glimpse their former glory.
      </p>

      <div className="monument-grid">
        <div
          className={`monument-card ${selectedMonument === 'hampi' ? 'selected' : ''}`}
          onClick={() => setSelectedMonument('hampi')}
        >
          <img src={hampiImage} alt="Hampi" />
          <h2>Hampi - Vittala Temple</h2>
        </div>

        <div
          className={`monument-card ${selectedMonument === 'meenakshi' ? 'selected' : ''}`}
          onClick={() => setSelectedMonument('meenakshi')}
        >
          <img src={meenakshiImage} alt="Madurai Meenakshi Temple" />
          <h2>Madurai - Meenakshi Temple</h2>
        </div>
      </div>

      {selectedMonument && (
        <>
          <button className="vr-launch-button" onClick={launchVR}>
            Launch VR Tour
          </button>
          <div className="vr-instructions">
            Works best on mobile with a VR box. Gaze or tap to explore info hotspots.
          </div>
        </>
      )}
    </div>
  );
};

export default ExploreRituals;
