// src/pages/GetLocalHelp.js
import React from 'react';
import './GetLocalHelp.css';

const GetLocalHelp = ({ isOpen = true, onClose = () => window.history.back() }) => {
  // Default parameter values handle the case when component is used as a page

  const openMapSearch = (query) => {
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}/`;
    window.open(searchUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">🛡️ Safety Assistance Nearby</h3>
          <button 
            onClick={onClose}
            className="close-button"
          >
            <span className="close-icon">×</span>
          </button>
        </div>
        <p className="modal-description">Quickly find essential places around you:</p>
        <div className="buttons-grid">
          <button 
            onClick={() => openMapSearch("nearest hotel")}
            className="help-option-button"
          >
            <span className="icon">🏨</span> Nearest Hotel
          </button>
          <button 
            onClick={() => openMapSearch("public washroom near me")}
            className="help-option-button"
          >
            <span className="icon">🚻</span> Washroom
          </button>
          <button 
            onClick={() => openMapSearch("petrol bunk near me")}
            className="help-option-button"
          >
            <span className="icon">⛽</span> Petrol Bunk
          </button>
          <button 
            onClick={() => openMapSearch("police station near me")}
            className="help-option-button"
          >
            <span className="icon">👮</span> Police Station
          </button>
          <button 
            onClick={() => openMapSearch("clinic or hospital near me")}
            className="help-option-button"
          >
            <span className="icon">🏥</span> Clinic / Hospital
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetLocalHelp;