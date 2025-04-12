import React, { useState } from 'react';
import './Culinary.css'

const Culinary = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  // Heritage site cuisine data
  const heritageCuisines = {
    "taj-mahal": {
        name: "Taj Mahal, Agra",
        image: "https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg",
        cuisines: [
            {
                name: "Mughlai Cuisine",
                description: "Rich, creamy dishes with aromatic spices influenced by the Mughal era. Famous for kebabs, biryanis, and rich curries.",
                restaurants: [
                    {
                        name: "Peshawri",
                        address: "ITC Mughal, Taj Ganj, Agra, Uttar Pradesh 282001",
                        coords: "27.1631,78.0408"
                    },
                    {
                        name: "Dasaprakash",
                        address: "8, The Mall Road, Near Hotel Clarks Shiraz, Agra, Uttar Pradesh 282001",
                        coords: "27.1591,78.0422"
                    }
                ]
            },
            {
                name: "Agra Petha",
                description: "A translucent soft candy made from ash gourd (winter melon), a traditional sweet delicacy of Agra.",
                restaurants: [
                    {
                        name: "Panchhi Petha Store",
                        address: "Sadar Bazaar, Agra, Uttar Pradesh 282001",
                        coords: "27.1601,78.0176"
                    },
                    {
                        name: "Munnalal Petha",
                        address: "Hari Parwat Crossing, Kinari Bazaar, Agra, Uttar Pradesh 282003",
                        coords: "27.1836,78.0081"
                    }
                ]
            },
            {
                name: "Bedai & Jalebi",
                description: "A popular breakfast combination in Agra - crispy puffed bread served with spicy potato curry and sweet jalebis.",
                restaurants: [
                    {
                        name: "Deviram Sweets",
                        address: "Belanganj, Agra, Uttar Pradesh 282004",
                        coords: "27.1943,78.0110"
                    },
                    {
                        name: "Ram Babu Paratha Bhandar",
                        address: "Daresi Road, Kinari Bazaar, Agra, Uttar Pradesh 282003",
                        coords: "27.1847,78.0093"
                    }
                ]
            }
        ]
    },
    "qutub-minar": {
        name: "Qutub Minar, Delhi",
        image: "https://i.pinimg.com/736x/21/1b/54/211b540a3cf4882d113ad221d15d3141.jpg",
        cuisines: [
            {
                name: "Old Delhi Street Food",
                description: "Famous for its flavorful street foods including chaat, paratha, kebabs, and more.",
                restaurants: [
                    {
                        name: "Karim's",
                        address: "16, Gali Kababian, Jama Masjid, Old Delhi, Delhi 110006",
                        coords: "28.6507,77.2334"
                    },
                    {
                        name: "Paranthe Wali Gali",
                        address: "Chandni Chowk, Old Delhi, Delhi 110006",
                        coords: "28.6562,77.2300"
                    }
                ]
            },
            {
                name: "Mughlai Cuisine",
                description: "Delhi's own take on Mughlai food with rich curries, biryanis, and kebabs.",
                restaurants: [
                    {
                        name: "Moti Mahal",
                        address: "3704, Netaji Subhash Marg, Daryaganj, New Delhi, Delhi 110002",
                        coords: "28.6420,77.2397"
                    },
                    {
                        name: "Al Jawahar",
                        address: "8, Jama Masjid, Old Delhi, Delhi 110006",
                        coords: "28.6506,77.2336"
                    }
                ]
            },
            {
                name: "Butter Chicken & Dal Makhani",
                description: "Delhi is the birthplace of butter chicken and creamy dal makhani.",
                restaurants: [
                    {
                        name: "Havemore Restaurant",
                        address: "11-12, Pandara Road Market, New Delhi, Delhi 110003",
                        coords: "28.6016,77.2325"
                    },
                    {
                        name: "Gulati Restaurant",
                        address: "6, Pandara Road Market, New Delhi, Delhi 110003",
                        coords: "28.6015,77.2329"
                    }
                ]
            }
        ]
    },
    "golden-temple": {
        name: "Golden Temple, Amritsar",
        image: "https://i.pinimg.com/736x/e1/20/13/e120137384a1c38fc54f7ecdd6120b23.jpg",
        cuisines: [
            {
                name: "Amritsari Kulcha",
                description: "Stuffed bread filled with spiced potatoes, paneer or mixed vegetables, served with chole (chickpea curry) and onions.",
                restaurants: [
                    {
                        name: "Kulcha Land",
                        address: "GT Road, Near Shalimar Hotel, Amritsar, Punjab 143001",
                        coords: "31.6340,74.8723"
                    },
                    {
                        name: "Brother's Dhaba",
                        address: "Golden Temple Out Road, Opposite Jallianwala Bagh, Amritsar, Punjab 143001",
                        coords: "31.6197,74.8801"
                    }
                ]
            },
            {
                name: "Langar at Golden Temple",
                description: "Free community kitchen that serves simple, wholesome vegetarian meals to anyone who visits.",
                restaurants: [
                    {
                        name: "Golden Temple Langar Hall",
                        address: "Golden Temple Complex, Amritsar, Punjab 143001",
                        coords: "31.6204,74.8765"
                    }
                ]
            },
            {
                name: "Amritsari Fish",
                description: "Crispy fried fish coated in a spicy gram flour batter, a specialty of Amritsar.",
                restaurants: [
                    {
                        name: "Makhan Fish & Chicken Corner",
                        address: "Near Majitha Road Chowk, Basant Avenue, Amritsar, Punjab 143001",
                        coords: "31.6389,74.8696"
                    },
                    {
                        name: "Beera Chicken House",
                        address: "Majitha Road, Near Crystal Chowk, Amritsar, Punjab 143001",
                        coords: "31.6375,74.8705"
                    }
                ]
            }
        ]
    },
    "hampi": {
        name: "Hampi, Karnataka",
        image: "https://i.pinimg.com/736x/27/72/58/2772584e328628c59dc4dca1aaf946b4.jpg",
        cuisines: [
            {
                name: "North Karnataka Cuisine",
                description: "Known for jowar roti, ennegayi (stuffed brinjal), and spicy curries.",
                restaurants: [
                    {
                        name: "Mango Tree Restaurant",
                        address: "Hampi Bazaar, Hampi, Karnataka 583239",
                        coords: "15.3358,76.4601"
                    },
                    {
                        name: "Laughing Buddha",
                        address: "Virupapur Gaddi, Hampi, Karnataka 583239",
                        coords: "15.3413,76.4644"
                    }
                ]
            },
            {
                name: "Banana Leaf Meals",
                description: "Traditional South Indian thali served on banana leaves with rice, sambar, and local vegetables.",
                restaurants: [
                    {
                        name: "Krishnabhavan",
                        address: "Hampi Bazaar Road, Hampi, Karnataka 583239",
                        coords: "15.3350,76.4592"
                    },
                    {
                        name: "Gopi Island View Restaurant",
                        address: "Virupapur Gaddi, Hampi, Karnataka 583239",
                        coords: "15.3410,76.4647"
                    }
                ]
            },
            {
                name: "Bisi Bele Bath",
                description: "Spicy rice dish with lentils, vegetables and tamarind, a Karnataka specialty.",
                restaurants: [
                    {
                        name: "Ravi Teja Restaurant",
                        address: "Near Virupaksha Temple, Hampi Bazaar, Hampi, Karnataka 583239",
                        coords: "15.3351,76.4589"
                    },
                    {
                        name: "Priya Restaurant",
                        address: "Hospet Main Road, Hampi, Karnataka 583239",
                        coords: "15.3267,76.4508"
                    }
                ]
            }
        ]
    },
    "khajuraho": {
        name: "Khajuraho Temples, Madhya Pradesh",
        image: "https://i.pinimg.com/736x/36/ae/f6/36aef6a6c1c8351c3d49cd0d8c3321e5.jpg",
        cuisines: [
            {
                name: "Bundelkhandi Cuisine",
                description: "Regional cuisine known for rustic flavors, including wheat rotis, dal panchmael (five lentil mix), and kadhi.",
                restaurants: [
                    {
                        name: "Raja Cafe",
                        address: "Western Group of Temples, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8519,79.9195"
                    },
                    {
                        name: "Mediterraneo Restaurant",
                        address: "Main Temple Road, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8505,79.9209"
                    }
                ]
            },
            {
                name: "Moong Dal Halwa",
                description: "A rich dessert made from moong lentils, ghee, and sugar, popular in this region.",
                restaurants: [
                    {
                        name: "Madras Coffee House",
                        address: "Temple Road, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8512,79.9203"
                    },
                    {
                        name: "Khajuraho Sweets",
                        address: "Main Market, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8496,79.9214"
                    }
                ]
            },
            {
                name: "Doodh Roti",
                description: "A simple local delicacy where roti is dipped in sweetened milk, often flavored with saffron or cardamom.",
                restaurants: [
                    {
                        name: "Pratap Restaurant",
                        address: "Near Western Group of Temples, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8523,79.9188"
                    },
                    {
                        name: "Shiva Restaurant",
                        address: "Jain Temple Road, Khajuraho, Madhya Pradesh 471606",
                        coords: "24.8518,79.9220"
                    }
                ]
            }
        ]
    },
    "ajanta-ellora": {
        name: "Ajanta & Ellora Caves, Maharashtra",
        image: "https://i.pinimg.com/736x/c1/59/bd/c159bd08cfa3760e3f5050973e4bd567.jpg",
        cuisines: [
            {
                name: "Maharashtrian Thali",
                description: "Complete meal with bhakri (millet bread), pitla (chickpea flour curry), zunka (spiced gram flour), and more.",
                restaurants: [
                    {
                        name: "Bhoj Restaurant",
                        address: "Railway Station Road, Aurangabad, Maharashtra 431005",
                        coords: "19.8762,75.3433"
                    },
                    {
                        name: "Khandoba Restaurant",
                        address: "Jalna Road, CIDCO, Aurangabad, Maharashtra 431001",
                        coords: "19.8842,75.3506"
                    }
                ]
            },
            {
                name: "Puran Poli",
                description: "Sweet flatbread stuffed with a mixture of jaggery and chana dal, a Maharashtrian specialty.",
                restaurants: [
                    {
                        name: "Bhoj Thali",
                        address: "Nirala Bazaar, Aurangabad, Maharashtra 431001",
                        coords: "19.8789,75.3201"
                    },
                    {
                        name: "Swad Restaurant",
                        address: "CIDCO, Aurangabad, Maharashtra 431001",
                        coords: "19.8858,75.3493"
                    }
                ]
            },
            {
                name: "Naan Qalia",
                description: "An Aurangabad specialty with origins from the Mughal era - spiced mutton stew served with naan bread.",
                restaurants: [
                    {
                        name: "Tara Pan Center",
                        address: "Osmanpura, Aurangabad, Maharashtra 431005",
                        coords: "19.8701,75.3432"
                    },
                    {
                        name: "Green Leaf Restaurant",
                        address: "Near Ellora Caves, Ellora, Maharashtra 431102",
                        coords: "20.0258,75.1855"
                    }
                ]
            }
        ]
    },
    "mysore-palace": {
        name: "Mysore Palace, Karnataka",
        image: "https://i.pinimg.com/736x/71/d0/7e/71d07e516c104e5aca41e11e6a8ff6ef.jpg",
        cuisines: [
            {
                name: "Mysore Masala Dosa",
                description: "A crispy fermented rice crepe with spicy red chutney inside and potato filling, originating from Mysore.",
                restaurants: [
                    {
                        name: "Mylari Hotel",
                        address: "Shop No. 79, Nazarbad Main Road, Mysore, Karnataka 570010",
                        coords: "12.3051,76.6553"
                    },
                    {
                        name: "Vinayaka Mylari",
                        address: "Shop No. 79, Near Police Station, Nazarbad, Mysore, Karnataka 570010",
                        coords: "12.3052,76.6554"
                    }
                ]
            },
            {
                name: "Mysore Pak",
                description: "A rich sweet made from gram flour, sugar, and ghee, invented in the kitchens of Mysore Palace.",
                restaurants: [
                    {
                        name: "Guru Sweets",
                        address: "Sayyaji Rao Road, Mysore, Karnataka 570001",
                        coords: "12.3131,76.6512"
                    },
                    {
                        name: "Sri Krishna Sweets",
                        address: "Devaraj Urs Road, Mysore, Karnataka 570001",
                        coords: "12.3158,76.6502"
                    }
                ]
            },
            {
                name: "Bisibelebath",
                description: "A hot rice dish made with lentils, vegetables, and aromatic spices, a specialty of Karnataka.",
                restaurants: [
                    {
                        name: "Hotel RRR",
                        address: "Mysore-Bangalore Road, Mysore, Karnataka 570001",
                        coords: "12.3211,76.6398"
                    },
                    {
                        name: "Anima Madhva Bhavan",
                        address: "Vontikoppal, Mysore, Karnataka 570002",
                        coords: "12.3095,76.6648"
                    }
                ]
            }
        ]
    },
    "hawa-mahal": {
        name: "Hawa Mahal, Jaipur",
        image: "https://i.pinimg.com/474x/58/b3/28/58b328aa5766ccaf7e7cb974c7bdfcad.jpg",
        cuisines: [
            {
                name: "Rajasthani Thali",
                description: "Complete meal with dal baati churma, gatte ki sabzi, ker sangri, and more traditional Rajasthani dishes.",
                restaurants: [
                    {
                        name: "Chokhi Dhani",
                        address: "12 Mile, Tonk Road, Jaipur, Rajasthan 303905",
                        coords: "26.7701,75.8393"
                    },
                    {
                        name: "Spice Court",
                        address: "Jacob Road, Civil Lines, Jaipur, Rajasthan 302006",
                        coords: "26.9124,75.8074"
                    }
                ]
            },
            {
                name: "Pyaaz Kachori",
                description: "Deep-fried pastry filled with spicy onion mixture, a popular Rajasthani snack.",
                restaurants: [
                    {
                        name: "Rawat Mishthan Bhandar",
                        address: "Sindhi Camp, Jaipur, Rajasthan 302001",
                        coords: "26.9187,75.7887"
                    },
                    {
                        name: "Laxmi Mishthan Bhandar (LMB)",
                        address: "Johari Bazaar, Jaipur, Rajasthan 302003",
                        coords: "26.9247,75.8245"
                    }
                ]
            },
            {
                name: "Laal Maas",
                description: "Fiery red meat curry made with red chilies, a signature dish of Rajasthan.",
                restaurants: [
                    {
                        name: "Handi Restaurant",
                        address: "MI Road, Jaipur, Rajasthan 302001",
                        coords: "26.9161,75.8111"
                    },
                    {
                        name: "Surya Mahal Restaurant",
                        address: "Khasa Kothi Circle, Jaipur, Rajasthan 302001",
                        coords: "26.9183,75.8077"
                    }
                ]
            }
        ]
    },
    "mahabalipuram": {
        name: "Mahabalipuram, Tamil Nadu",
        image: "https://i.pinimg.com/474x/cb/8f/92/cb8f92ece74846e084be44eeafabf3b0.jpg",
        cuisines: [
            {
                name: "South Indian Seafood",
                description: "Fresh seafood prepared in Tamil style with local spices and coconut.",
                restaurants: [
                    {
                        name: "Moonrakers",
                        address: "Othavadai Street, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6207,80.1951"
                    },
                    {
                        name: "Sea Shore Garden Restaurant",
                        address: "Beach Road, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6190,80.1981"
                    }
                ]
            },
            {
                name: "Tamil Nadu Meals",
                description: "Traditional Tamil meals served on banana leaf with rice, sambar, rasam, vegetables, and chutneys.",
                restaurants: [
                    {
                        name: "Mamalla Bhavan",
                        address: "East Raja Street, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6217,80.1942"
                    },
                    {
                        name: "Sri Krishna Cafe",
                        address: "East Coast Road, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6226,80.1935"
                    }
                ]
            },
            {
                name: "Chettinad Cuisine",
                description: "Spicy and aromatic cuisine from the Chettinad region of Tamil Nadu.",
                restaurants: [
                    {
                        name: "Mahabs",
                        address: "Othavadai Street, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6209,80.1953"
                    },
                    {
                        name: "Golden Palate",
                        address: "East Coast Road, Mahabalipuram, Tamil Nadu 603104",
                        coords: "12.6231,80.1929"
                    }
                ]
            }
        ]
    },
    "konark": {
        name: "Sun Temple, Konark, Odisha",
        image: "https://i.pinimg.com/474x/f4/a1/dd/f4a1dd722c94518d4957c1701047887e.jpg",
        cuisines: [
            {
                name: "Odia Cuisine",
                description: "Traditional Odia food known for subtle flavors and minimal use of spices.",
                restaurants: [
                    {
                        name: "Wildgrass Restaurant",
                        address: "Marine Drive Road, Konark, Odisha 752111",
                        coords: "19.8881,86.0945"
                    },
                    {
                        name: "Chandrabhaga Restaurant",
                        address: "Konark-Puri Marine Drive, Konark, Odisha 752111",
                        coords: "19.8762,86.1001"
                    }
                ]
            },
            {
                name: "Dalma",
                description: "A traditional Odia dish made with lentils and vegetables, typically served with rice.",
                restaurants: [
                    {
                        name: "Hotel Konark",
                        address: "Temple Road, Konark, Odisha 752111",
                        coords: "19.8865,86.0933"
                    },
                    {
                        name: "Yatra Restaurant",
                        address: "Near Sun Temple, Konark, Odisha 752111",
                        coords: "19.8872,86.0941"
                    }
                ]
            },
            {
                name: "Macha Ghanta",
                description: "Traditional fish curry with vegetables, a specialty of coastal Odisha.",
                restaurants: [
                    {
                        name: "Pantha Niwas",
                        address: "Konark-Puri Road, Konark, Odisha 752111",
                        coords: "19.8831,86.0921"
                    },
                    {
                        name: "Sea Fish Restaurant",
                        address: "Chandrabhaga Beach Road, Konark, Odisha 752111",
                        coords: "19.8773,86.0999"
                    }
                ]
            }
        ]
    }
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearch = () => {
    if (!selectedLocation) {
      alert('Please select a heritage site first!');
      return;
    }
    setShowResults(true);
  };

  const locationOptions = Object.keys(heritageCuisines).map(key => (
    <option key={key} value={key}>
      {heritageCuisines[key].name}
    </option>
  ));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-amber-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Indian Heritage Cuisine Finder</h1>
          <p className="text-xl">Discover authentic local cuisines at India's most treasured heritage sites</p>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto py-8 px-4">
        <div className="bg-amber-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Find Local Cuisine</h2>
          <p className="mb-4">Select a heritage site to discover its authentic local cuisines and restaurants:</p>
          
          <div className="mb-4">
            <select 
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            >
              <option value="">-- Select a Heritage Site --</option>
              {locationOptions}
            </select>
            
            <button 
              onClick={handleSearch}
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Find Cuisines
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && selectedLocation && (
        <section className="container mx-auto py-8 px-4 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">{heritageCuisines[selectedLocation].name}</h2>
            
            <div className="mb-8">
              <img 
                src={heritageCuisines[selectedLocation].image} 
                alt={heritageCuisines[selectedLocation].name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <p className="text-xl mb-8">Discover these authentic local cuisines:</p>
            
            <div className="space-y-10">
              {heritageCuisines[selectedLocation].cuisines.map((cuisine, idx) => (
                <div key={idx} className="bg-amber-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-amber-600 mb-2">{cuisine.name}</h3>
                  <p className="text-gray-700 mb-4">{cuisine.description}</p>
                  
                  <h4 className="font-bold text-lg mb-3">Where to Try:</h4>
                  <div className="space-y-4">
                    {cuisine.restaurants.map((restaurant, ridx) => (
                      <div key={ridx} className="bg-white p-4 rounded border border-gray-200">
                        <div className="font-bold text-lg text-amber-800">{restaurant.name}</div>
                        <div className="text-gray-600 mb-3">{restaurant.address}</div>
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.coords}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                          Get Directions
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Indian Heritage Cuisine Finder | Discover the best local foods at India's cultural landmarks</p>
        </div>
      </footer>
    </div>
  );
};

export default Culinary;