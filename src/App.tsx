import { useState } from 'react';
import { Search, MapPin, Star, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

function App() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The City of Light awaits with its iconic Eiffel Tower and charming streets.',
      distance: '5,837 km'
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience the perfect blend of tradition and futuristic technology.',
      distance: '6,735 km'
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tropical paradise with stunning beaches and rich cultural heritage.',
      distance: '8,247 km'
    },
    {
      id: 4,
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The city that never sleeps, filled with endless possibilities.',
      distance: '3,626 km'
    }
  ];

  const localities = [
    { id: 1, name: 'Santorini', country: 'Greece', image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Dubai', country: 'UAE', image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Barcelona', country: 'Spain', image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Sydney', country: 'Australia', image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Rome', country: 'Italy', image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Maldives', country: 'Maldives', image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Grand Horizon Hotel',
      price: '$189',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'City Center'
    },
    {
      id: 2,
      name: 'Ocean Breeze Resort',
      price: '$245',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Beachfront'
    },
    {
      id: 3,
      name: 'Mountain View Lodge',
      price: '$156',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Mountain Side'
    },
    {
      id: 4,
      name: 'Urban Boutique Suites',
      price: '$198',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Downtown'
    }
  ];

  const handleGeneratePlan = () => {
    if (destination && duration) {
      alert(`Generating AI travel plan for ${destination} for ${duration} days...`);
    } else {
      alert('Please enter both destination and duration');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="text-sky-500" size={28} />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
                AI Travel Planner
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Destinations</a>
              <a href="#hotels" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Hotels</a>
              <a href="#planner" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Planner</a>
              <a href="#contact" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Plan Your Dream Trip with AI
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Discover amazing destinations and create personalized travel experiences
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Duration (days)"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <button
                onClick={handleGeneratePlan}
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 text-lg">Explore the world's most breathtaking locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{dest.description}</p>
                  <div className="flex items-center text-sky-600">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm font-medium">{dest.distance} away</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="localities" className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nearby Localities</h2>
            <p className="text-gray-600 text-lg">Discover hidden gems close to your destination</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {localities.map((locality) => (
              <div
                key={locality.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={locality.image}
                    alt={locality.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm">{locality.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{locality.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hotels" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hotel Recommendations</h2>
            <p className="text-gray-600 text-lg">Handpicked accommodations for your perfect stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{hotel.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-sky-600">{hotel.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star size={18} className="text-orange-400 fill-orange-400" />
                      <span className="font-semibold text-gray-700">{hotel.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">per night</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planner" className="py-16 px-4 bg-gradient-to-r from-sky-500 to-orange-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let AI Plan Your Journey</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Our intelligent system creates personalized itineraries based on your preferences
          </p>
          <button
            onClick={handleGeneratePlan}
            className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Generate AI Travel Plan
          </button>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="text-sky-400" size={24} />
                <span className="text-xl font-bold">AI Travel Planner</span>
              </div>
              <p className="text-gray-400">
                Your intelligent companion for unforgettable travel experiences around the globe.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-sky-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-sky-400" />
                  <span className="text-gray-400">info@aitravelplanner.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Travel Planner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
