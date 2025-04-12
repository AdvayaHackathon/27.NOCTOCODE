// src/pages/PlanMyJourney.js
import React, { useState, useRef } from 'react';
import './PlanMyJourney.css';

const PlanMyJourney = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const printableRef = useRef(null);

  const destinations = [
    'Delhi',
    'Agra',
    'Jaipur',
    'Varanasi',
    'Mumbai',
    'Kolkata',
    'Hampi',
    'Udaipur',
    'Goa',
    'Khajuraho',
    'Other Indian Location'
  ];

  // Heritage sites data for each destination
  const heritageSites = {
    "delhi": [
      { name: "Red Fort", description: "UNESCO World Heritage Site, massive red sandstone fort built in the 17th century", hours: "9:30 AM - 4:30 PM" },
      { name: "Qutub Minar", description: "UNESCO site with 73m tall minaret built in 1193", hours: "7:00 AM - 5:00 PM" },
      { name: "Humayun's Tomb", description: "UNESCO site, magnificent Mughal garden tomb built in 1570", hours: "6:00 AM - 6:00 PM" },
      { name: "Jama Masjid", description: "One of India's largest mosques, built by Shah Jahan", hours: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM" },
      { name: "India Gate", description: "70m tall war memorial designed by Edwin Lutyens", hours: "24 hours" },
      { name: "Lotus Temple", description: "Striking Bahá'í House of Worship shaped like a lotus flower", hours: "9:00 AM - 5:30 PM, Closed Mondays" }
    ],
    "agra": [
      { name: "Taj Mahal", description: "UNESCO site, iconic white marble mausoleum built by Shah Jahan", hours: "6:00 AM - 6:30 PM, Closed Fridays" },
      { name: "Agra Fort", description: "UNESCO site, massive red sandstone fort complex with palaces", hours: "6:00 AM - 6:00 PM" },
      { name: "Fatehpur Sikri", description: "UNESCO site, 16th-century Mughal imperial complex", hours: "6:00 AM - 6:00 PM" },
      { name: "Mehtab Bagh", description: "Moonlight Garden offering stunning Taj Mahal views", hours: "6:00 AM - 7:00 PM" },
      { name: "Itimad-ud-Daulah", description: "Known as 'Baby Taj', ornate tomb from 1628", hours: "6:00 AM - 6:00 PM" },
      { name: "Akbar's Tomb", description: "Impressive tomb of Emperor Akbar at Sikandra", hours: "6:00 AM - 6:00 PM" }
    ],
    "jaipur": [
      { name: "Amber Fort", description: "UNESCO site, magnificent hilltop fort with Rajput architecture", hours: "8:00 AM - 5:30 PM" },
      { name: "Hawa Mahal", description: "Palace of Winds with unique honeycomb façade", hours: "9:00 AM - 4:30 PM" },
      { name: "City Palace", description: "Royal residence with museums and Rajput architecture", hours: "9:30 AM - 5:00 PM" },
      { name: "Jantar Mantar", description: "UNESCO site, astronomical observation site built in 1734", hours: "9:00 AM - 4:30 PM" },
      { name: "Jal Mahal", description: "Water Palace located in Man Sagar Lake", hours: "Viewable from outside only" },
      { name: "Nahargarh Fort", description: "Defensive fort offering panoramic views of Jaipur", hours: "10:00 AM - 5:30 PM" }
    ],
    "varanasi": [
      { name: "Kashi Vishwanath Temple", description: "Ancient temple dedicated to Lord Shiva", hours: "3:00 AM - 11:00 PM" },
      { name: "Dashashwamedh Ghat", description: "Main ghat famous for its evening Ganga Aarti ceremony", hours: "24 hours, Aarti at 6:30 PM" },
      { name: "Sarnath", description: "Buddhist pilgrimage site where Buddha gave his first sermon", hours: "8:00 AM - 6:00 PM" },
      { name: "Ramnagar Fort", description: "18th-century fort and museum on the eastern bank of Ganges", hours: "10:00 AM - 5:00 PM" },
      { name: "Manikarnika Ghat", description: "Primary cremation ghat of sacred significance", hours: "24 hours (viewing respectfully)" },
      { name: "Banaras Hindu University", description: "Century-old prestigious university with Bharat Kala Bhavan Museum", hours: "10:00 AM - 4:30 PM, Closed Sundays" }
    ],
    "mumbai": [
      { name: "Gateway of India", description: "Iconic arch monument built during the British Raj", hours: "24 hours" },
      { name: "Chhatrapati Shivaji Terminus", description: "UNESCO site, historic railway station with Victorian Gothic architecture", hours: "Viewable from outside 24 hours" },
      { name: "Elephanta Caves", description: "UNESCO site, ancient cave temples on Elephanta Island", hours: "9:00 AM - 5:30 PM, Closed Mondays" },
      { name: "Kanheri Caves", description: "Ancient Buddhist caves in Sanjay Gandhi National Park", hours: "7:30 AM - 5:00 PM" },
      { name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", description: "Former Prince of Wales Museum with diverse art collections", hours: "10:15 AM - 6:00 PM" },
      { name: "Banganga Tank", description: "Ancient water tank with mythological significance", hours: "6:00 AM - 9:00 PM" }
    ],
    "kolkata": [
      { name: "Victoria Memorial", description: "Marble building dedicated to Queen Victoria with museum", hours: "10:00 AM - 5:00 PM, Closed Mondays" },
      { name: "Howrah Bridge", description: "Iconic cantilever bridge over the Hooghly River", hours: "24 hours" },
      { name: "Indian Museum", description: "Oldest and largest museum in India established in 1814", hours: "10:00 AM - 5:00 PM, Closed Mondays" },
      { name: "Dakshineswar Kali Temple", description: "Hindu temple dedicated to Goddess Kali", hours: "6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM" },
      { name: "Marble Palace", description: "19th-century mansion with art collections", hours: "10:00 AM - 4:00 PM, Closed Mondays and Thursdays" },
      { name: "Belur Math", description: "Headquarters of Ramakrishna Math and Mission", hours: "6:00 AM - 11:30 AM, 4:00 PM - 7:00 PM" }
    ],
    "hampi": [
      { name: "Virupaksha Temple", description: "UNESCO site, ancient temple dedicated to Lord Shiva", hours: "6:00 AM - 6:00 PM" },
      { name: "Vittala Temple", description: "Iconic stone chariot and musical pillars", hours: "8:30 AM - 5:30 PM" },
      { name: "Lotus Mahal", description: "Beautiful Indo-Islamic architectural monument", hours: "8:30 AM - 5:30 PM" },
      { name: "Elephant Stables", description: "Magnificent structure that once housed royal elephants", hours: "8:30 AM - 5:30 PM" },
      { name: "Queen's Bath", description: "Indo-Islamic architectural bath structure", hours: "8:30 AM - 5:30 PM" },
      { name: "Hemakuta Hill Temples", description: "Group of early Hindu temples with panoramic views", hours: "6:00 AM - 6:00 PM" }
    ],
    "udaipur": [
      { name: "City Palace", description: "Complex of palaces with museums overlooking Lake Pichola", hours: "9:30 AM - 5:30 PM" },
      { name: "Lake Pichola", description: "Artificial lake with island palaces including Jag Mandir", hours: "Boat rides: 10:00 AM - 6:00 PM" },
      { name: "Jagdish Temple", description: "Indo-Aryan temple dedicated to Lord Vishnu", hours: "5:00 AM - 2:00 PM, 4:00 PM - 10:00 PM" },
      { name: "Monsoon Palace", description: "Hilltop royal residence with panoramic views", hours: "9:00 AM - 6:00 PM" },
      { name: "Bagore Ki Haveli", description: "18th-century haveli with cultural performances", hours: "9:30 AM - 5:30 PM, Cultural show at 7:00 PM" },
      { name: "Saheliyon Ki Bari", description: "Ornamental garden with fountains and marble pavilions", hours: "9:00 AM - 7:00 PM" }
    ],
    "goa": [
      { name: "Basilica of Bom Jesus", description: "UNESCO site, church containing St. Francis Xavier's remains", hours: "9:00 AM - 6:30 PM" },
      { name: "Se Cathedral", description: "Largest church in Asia dedicated to St. Catherine", hours: "7:30 AM - 6:00 PM" },
      { name: "Fort Aguada", description: "17th-century Portuguese fort and lighthouse", hours: "8:30 AM - 5:30 PM" },
      { name: "Chapora Fort", description: "Ruined fort offering panoramic coastal views", hours: "9:00 AM - 5:30 PM" },
      { name: "Shantadurga Temple", description: "Important Hindu temple with Indo-Portuguese architecture", hours: "5:00 AM - 10:00 PM" },
      { name: "Church of St. Francis of Assisi", description: "16th-century church with Baroque architecture", hours: "7:30 AM - 6:30 PM" }
    ],
    "khajuraho": [
      { name: "Western Group of Temples", description: "UNESCO site, famous for exquisite carvings", hours: "8:00 AM - 6:00 PM" },
      { name: "Eastern Group of Temples", description: "Hindu and Jain temples with remarkable architecture", hours: "8:00 AM - 6:00 PM" },
      { name: "Southern Group of Temples", description: "Lesser-visited temples with unique carvings", hours: "8:00 AM - 6:00 PM" },
      { name: "Archaeological Museum", description: "Museum housing sculptures from temple ruins", hours: "10:00 AM - 5:00 PM, Closed Fridays" },
      { name: "Raneh Falls", description: "Natural waterfall with canyon of crystalline rocks", hours: "9:00 AM - 5:00 PM" },
      { name: "Panna National Park", description: "Tiger reserve and wildlife sanctuary", hours: "6:30 AM - 10:30 AM, 3:00 PM - 6:00 PM" }
    ],
    "default": [
      { name: "Taj Mahal", description: "UNESCO site, iconic white marble mausoleum in Agra", hours: "6:00 AM - 6:30 PM, Closed Fridays" },
      { name: "Red Fort", description: "UNESCO World Heritage Site in Delhi, massive red sandstone fort", hours: "9:30 AM - 4:30 PM" },
      { name: "Amber Fort", description: "UNESCO site in Jaipur with magnificent Rajput architecture", hours: "8:00 AM - 5:30 PM" },
      { name: "Khajuraho Temples", description: "UNESCO site famous for exquisite medieval carvings", hours: "8:00 AM - 6:00 PM" },
      { name: "Hampi Ruins", description: "UNESCO site with ancient temple complexes and ruins", hours: "6:00 AM - 6:00 PM" },
      { name: "Ellora Caves", description: "UNESCO site with rock-cut cave temples spanning religions", hours: "9:00 AM - 5:30 PM, Closed Tuesdays" }
    ]
  };

  const handleDestinationClick = (dest) => {
    setDestination(dest);
    setShowDropdown(false);
  };

  const generateItinerary = () => {
    // Get the appropriate sites array based on selected destination
    let destinationKey = destination.toLowerCase();
    
    // Fallback to default if the destination is not in our data or "Other Indian Location"
    if (!heritageSites[destinationKey] || destination === "Other Indian Location") {
      destinationKey = "default";
    }
    
    // Get the sites for the selected destination
    const sites = heritageSites[destinationKey];
    
    // Determine how many sites to include based on the number of days
    // If days > sites.length, some sites will be repeated
    const numDays = parseInt(days, 10);
    
    // Create days array with sites
    const itineraryDays = [];
    for (let i = 0; i < numDays; i++) {
      // Use modulo to cycle through available sites if days > sites.length
      const siteIndex = i % sites.length;
      const site = sites[siteIndex];
      
      itineraryDays.push({
        day: i + 1,
        site: site.name,
        description: site.description,
        hours: site.hours
      });
    }
    
    // Create the itinerary data
    const itineraryData = {
      destination: destination,
      duration: days,
      days: itineraryDays
    };
    
    setGeneratedItinerary(itineraryData);
  };

  const handleCreateNewItinerary = () => {
    setGeneratedItinerary(null);
    setDestination('');
    setDays('');
  };

  // Print functionality
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Generate a printable HTML content
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${generatedItinerary.destination} - ${generatedItinerary.duration} Day Itinerary</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            color: #333;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          h1 {
            color: #1a5276;
          }
          .destination-info {
            font-size: 18px;
            margin-bottom: 25px;
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          .day-number {
            font-weight: bold;
            width: 10%;
          }
          .site-name {
            font-weight: bold;
            width: 20%;
          }
          .description {
            width: 50%;
          }
          .hours {
            width: 20%;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-style: italic;
            color: #666;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Your Indian Heritage Travel Itinerary</h1>
        </div>
        
        <div class="destination-info">
          <strong>Destination:</strong> ${generatedItinerary.destination} | 
          <strong>Duration:</strong> ${generatedItinerary.duration} days
        </div>
        
        <table>
          <thead>
            <tr>
              <th class="day-number">Day</th>
              <th class="site-name">Heritage Site</th>
              <th class="description">Description</th>
              <th class="hours">Visiting Hours</th>
            </tr>
          </thead>
          <tbody>
            ${generatedItinerary.days.map(day => `
              <tr>
                <td class="day-number">Day ${day.day}</td>
                <td class="site-name">${day.site}</td>
                <td class="description">${day.description}</td>
                <td class="hours">${day.hours}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <p>Discover India's most beautiful heritage sites</p>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        
        <script>
          // Auto print when loaded
          window.onload = function() {
            window.print();
            // Close the window after printing (user can cancel)
            window.onfocus = function() { 
              setTimeout(function() { 
                window.close(); 
              }, 500);
            };
          };
        </script>
      </body>
      </html>
    `;
    
    // Write to the new window
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  // Function to save as PDF
  const handleSaveAsPDF = () => {
    // This uses the browser's print dialog, where user can select "Save as PDF"
    handlePrint();
  };

  return (
    <div className="journey-planner">
      <div className="header">
        <h1>Indian Heritage Travel Planner</h1>
        <p>Plan your perfect heritage travel itinerary across India</p>
      </div>

      {!generatedItinerary ? (
        <div className="planner-form">
          <div className="form-group">
            <h2>Destination in India</h2>
            <div className="custom-select">
              <div 
                className="select-display" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {destination || "Select a destination..."}
                <span className="dropdown-arrow">▼</span>
              </div>
              {showDropdown && (
                <div className="dropdown-options">
                  {destinations.map((dest, index) => (
                    <div 
                      key={index} 
                      className="dropdown-item"
                      onClick={() => handleDestinationClick(dest)}
                    >
                      {dest}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <h2>Number of Days</h2>
            <input 
              type="number" 
              placeholder="How many days?" 
              value={days} 
              onChange={(e) => setDays(e.target.value)}
              min="1"
              max="14"
            />
          </div>

          <button 
            className="generate-btn" 
            onClick={generateItinerary}
            disabled={!destination || !days}
          >
            Generate Itinerary
          </button>
        </div>
      ) : (
        <div className="itinerary-result" ref={printableRef}>
          <div className="itinerary-header">
            <h1>Your Indian Heritage Travel Itinerary</h1>
            <p>Destination: {generatedItinerary.destination}   Duration: {generatedItinerary.duration} days</p>
          </div>

          <div className="itinerary-table">
            <div className="table-header">
              <div className="col day-col">Day</div>
              <div className="col site-col">Heritage Site</div>
              <div className="col desc-col">Description</div>
              <div className="col hours-col">Visiting Hours</div>
            </div>

            {generatedItinerary.days.map((day, index) => (
              <div key={index} className="table-row">
                <div className="col day-col">Day {day.day}</div>
                <div className="col site-col">{day.site}</div>
                <div className="col desc-col">{day.description}</div>
                <div className="col hours-col">{day.hours}</div>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="print-btn" onClick={handlePrint}>Print Itinerary</button>
            <button className="save-btn" onClick={handleSaveAsPDF}>Save as PDF</button>
            <button className="new-btn" onClick={handleCreateNewItinerary}>Create New Itinerary</button>
          </div>
        </div>
      )}

      <div className="footer">
        <p>Discover India's most beautiful heritage sites</p>
      </div>
    </div>
  );
};

export default PlanMyJourney;