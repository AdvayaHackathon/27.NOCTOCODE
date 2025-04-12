// src/pages/ItineraryPage.js
import React, { useEffect, useState } from 'react';
import './ItineraryPage.css';

const heritageSites = {
  delhi: [
    { name: "Red Fort", description: "UNESCO World Heritage Site, massive red sandstone fort built in the 17th century", hours: "9:30 AM - 4:30 PM" },
    { name: "Qutub Minar", description: "UNESCO site with 73m tall minaret built in 1193", hours: "7:00 AM - 5:00 PM" },
    { name: "Humayun's Tomb", description: "UNESCO site, magnificent Mughal garden tomb built in 1570", hours: "6:00 AM - 6:00 PM" },
    { name: "Jama Masjid", description: "One of India's largest mosques, built by Shah Jahan", hours: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM" },
    { name: "India Gate", description: "70m tall war memorial designed by Edwin Lutyens", hours: "24 hours" },
    { name: "Lotus Temple", description: "Striking Bahá'í House of Worship shaped like a lotus flower", hours: "9:00 AM - 5:30 PM, Closed Mondays" }
  ],
  hampi: [
    { name: "Virupaksha Temple", description: "UNESCO site, ancient temple dedicated to Lord Shiva", hours: "6:00 AM - 6:00 PM" },
    { name: "Vittala Temple", description: "Iconic stone chariot and musical pillars", hours: "8:30 AM - 5:30 PM" },
    { name: "Lotus Mahal", description: "Beautiful Indo-Islamic architectural monument", hours: "8:30 AM - 5:30 PM" },
    { name: "Elephant Stables", description: "Magnificent structure that once housed royal elephants", hours: "8:30 AM - 5:30 PM" },
    { name: "Queen's Bath", description: "Indo-Islamic architectural bath structure", hours: "8:30 AM - 5:30 PM" },
    { name: "Hemakuta Hill Temples", description: "Group of early Hindu temples with panoramic views", hours: "6:00 AM - 6:00 PM" }
  ],
  default: [
    { name: "Taj Mahal", description: "UNESCO site, iconic white marble mausoleum in Agra", hours: "6:00 AM - 6:30 PM, Closed Fridays" },
    { name: "Red Fort", description: "UNESCO World Heritage Site in Delhi, massive red sandstone fort", hours: "9:30 AM - 4:30 PM" },
    { name: "Amber Fort", description: "UNESCO site in Jaipur with magnificent Rajput architecture", hours: "8:00 AM - 5:30 PM" },
    { name: "Khajuraho Temples", description: "UNESCO site famous for exquisite medieval carvings", hours: "8:00 AM - 6:00 PM" },
    { name: "Hampi Ruins", description: "UNESCO site with ancient temple complexes and ruins", hours: "6:00 AM - 6:00 PM" },
    { name: "Ellora Caves", description: "UNESCO site with rock-cut cave temples spanning religions", hours: "9:00 AM - 5:30 PM, Closed Tuesdays" }
  ]
};

const ItineraryPage = () => {
  const [location, setLocation] = useState('');
  const [days, setDays] = useState(0);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const storedLocation = localStorage.getItem('travelLocation');
    const storedDays = parseInt(localStorage.getItem('travelDays'));

    if (!storedLocation || !storedDays) {
      window.location.href = '/plan';
      return;
    }

    setLocation(storedLocation);
    setDays(storedDays);

    let data = heritageSites[storedLocation.toLowerCase()] || heritageSites.default;
    while (data.length < storedDays) {
      data = data.concat(data.slice(0, storedDays - data.length));
    }
    setSites(data.slice(0, storedDays));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Your Indian Heritage Travel Itinerary</h1>
        <div id="itinerary-header">
          <p>Destination: {location}</p>
          <p>Duration: {days} day{days > 1 ? 's' : ''}</p>
        </div>
      </header>

      <main className="itinerary-container">
        <div id="itinerary-table-container">
          <table id="itinerary-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Heritage Site</th>
                <th>Description</th>
                <th>Visiting Hours</th>
              </tr>
            </thead>
            <tbody id="itinerary-body">
              {sites.map((site, index) => (
                <tr key={index}>
                  <td>Day {index + 1}</td>
                  <td>{site.name}</td>
                  <td>{site.description}</td>
                  <td>{site.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="buttons">
          <button onClick={() => window.print()} className="print-btn">Print Itinerary</button>
          <button onClick={() => window.location.href = '/plan'} className="back-btn">Create New Itinerary</button>
        </div>
      </main>

      <footer>
        <p>Discover India's most beautiful heritage sites</p>
      </footer>
    </div>
  );
};

export default ItineraryPage;
