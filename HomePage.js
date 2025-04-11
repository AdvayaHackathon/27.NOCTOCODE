import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from '../assets/doodle-bg.png';
import hampiImage from '../assets/hampii.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="navbar">
        <h1 className="logo">SUTR</h1>
        <ul className="nav-links">
          <li>Journeys</li>
          <li>Culture Threads</li>
          <li>Local Asist</li>
          <li>My Shelf</li>
        </ul>
      </nav>

      <main className="main-content">
        <div className="hampi-card">
          <img src={hampiImage} alt="Hampi" className="hampi-img" />
          <button className="hampi-button">Walk Hampi at Dawn</button>
        </div>
        <h2 className="tagline">Explore India’s heritage and culture</h2>
        <div className="button-group">
          <button className="primary-btn">Plan My Journey</button>
          <button className="secondary-btn" onClick={() => navigate('/explore-rituals')}>Explore Rituals</button>
          <button className="help-btn">Get Local Help</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
