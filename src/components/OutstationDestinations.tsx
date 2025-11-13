import React, { useState } from 'react';
import { MapPin, Clock, Star, ArrowRight, Plane, Mountain, Building, Waves, Phone, MessageCircle, X } from 'lucide-react';

const OutstationDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const destinations = [
    {
      name: 'Chennai',
      image: 'https://www.onewaydroptaxibooking.com/assets/chennai (1).avif',
      distance: '500 km',
      duration: '7-8 hours',
      description: 'Capital city with Marina Beach and IT corridor',
      fare: '₹7,500',
      icon: Building,
      highlights: ['Marina Beach', 'Central Railway Station', 'IT Parks', 'Temples']
    },
    {
      name: 'Bangalore',
      image: 'https://www.onewaydroptaxibooking.com/assets/bangalore.avif',
      distance: '360 km',
      duration: '6-7 hours',
      description: 'Silicon Valley of India with gardens and tech hubs',
      fare: '₹5,300',
      icon: Building,
      highlights: ['Lalbagh Garden', 'Cubbon Park', 'IT Companies', 'Pubs & Cafes']
    },
    {
      name: 'Ooty',
      image: 'https://www.onewaydroptaxibooking.com/assets/ooty1.avif',
      distance: '85 km',
      duration: '2.5 hours',
      description: 'Queen of Hill Stations with tea gardens',
      fare: '₹2,600',
      icon: Mountain,
      highlights: ['Tea Gardens', 'Botanical Garden', 'Toy Train', 'Lake']
    },
    {
      name: 'Kodaikanal',
      image: 'https://www.onewaydroptaxibooking.com/assets/kodaikanal1.avif',
      distance: '180 km',
      duration: '4 hours',
      description: 'Princess of Hill Stations with pristine lakes',
      fare: '₹3,500',
      icon: Mountain,
      highlights: ['Kodai Lake', 'Coakers Walk', 'Bryant Park', 'Pillar Rocks']
    },
    {
      name: 'Madurai',
      image: 'https://www.onewaydroptaxibooking.com/assets/madurai1.avif',
      distance: '220 km',
      duration: '4-5 hours',
      description: 'Temple city with Meenakshi Amman Temple',
      fare: '₹3,400',
      icon: Building,
      highlights: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Gandhi Museum', 'Local Markets']
    },
    {
      name: 'Kanyakumari',
      image: 'https://www.onewaydroptaxibooking.com/assets/kanyakumari (1).avif',
      distance: '450 km',
      duration: '8-9 hours',
      description: 'Southernmost tip with Thiruvalluvar Statue',
      fare: '₹7,500',
      icon: Waves,
      highlights: ['Thiruvalluvar Statue', 'Sunset Point', 'Vivekananda Rock', 'Beach']
    },
    {
      name: 'Mysore',
      image: 'https://www.onewaydroptaxibooking.com/assets/mysore.avif',
      distance: '280 km',
      duration: '5-6 hours',
      description: 'City of Palaces with rich heritage',
      fare: '₹4,800',
      icon: Building,
      highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Silk Sarees']
    },
    {
      name: 'Munnar',
      image: 'https://www.onewaydroptaxibooking.com/assets/munnar.avif',
      distance: '160 km',
      duration: '4 hours',
      description: 'Kerala hill station with spice plantations',
      fare: '₹3,500',
      icon: Mountain,
      highlights: ['Tea Plantations', 'Eravikulam Park', 'Mattupetty Dam', 'Spice Gardens']
    },
    {
      name: 'Pondicherry',
      image: 'https://www.onewaydroptaxibooking.com/assets/pondicherry (1).avif',
      distance: '380 km',
      duration: '6-7 hours',
      description: 'French colonial town with beaches',
      fare: '₹5,800',
      icon: Waves,
      highlights: ['French Quarter', 'Auroville', 'Beach Promenade', 'Cafes']
    },
    {
      name: 'Salem',
      image: 'https://www.onewaydroptaxibooking.com/assets/salem.avif',
      distance: '165 km',
      duration: '3 hours',
      description: 'A vibrant city in Tamil Nadu, known for hills, steel, and mangoes.',
      fare: '₹2,750',
      icon: Building,
      highlights: ['Yercaud Hills', '1008 Lingam Temple', 'Sugavaneshwarar Temple', 'Kailasanathar Temple']
    },
    {
      name: 'Rameshwaram',
      image: 'https://www.onewaydroptaxibooking.com/assets/rameshwaram.avif',
      distance: '380 km',
      duration: '6 hours',
      description: 'Holy island with Ramanathaswamy Temple',
      fare: '₹5,800',
      icon: Waves,
      highlights: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi', 'Holy Waters']
    },
    {
      name: 'Cochin (Kochi)',
      image: 'https://www.onewaydroptaxibooking.com/assets/cochin.avif',
      distance: '165 km',
      duration: '4-5 hours',
      description: 'Queen of Arabian Sea with backwaters',
      fare: '₹3,550',
      icon: Waves,
      highlights: ['Chinese Fishing Nets', 'Fort Kochi', 'Backwaters', 'Spice Markets']
    },
      {
    name: 'Trichy',
    image: 'https://www.onewaydroptaxibooking.com/assets/trichy.avif',
    category: 'Temple',
    distance: '200 km',
    duration: '5-6 hours',
    description: 'Historic city with Rock Fort and bustling markets',
    fare: '₹3,600',    
    icon: Building,
    highlights: ['Rock Fort', 'Market Streets', 'Temples', 'Cultural Sites']
   },
     {
      name: 'Thanjavur',
     image: 'https://www.onewaydroptaxibooking.com/assets/Thanjore1.avif',
     category: 'Temple',
     distance: '350 km',
     duration: '6-7 hours',
     description: 'Historic city famous for the Brihadeeswarar Temple, Chola architecture, and rich cultural heritage',
     fare: '₹4,500',  
     icon: Building,
     highlights: ['Brihadeeswarar Temple', 'Chola Architecture', 'Art & Culture', 'UNESCO Heritage']
    },
    {
    name: 'Tirupati',
    image: 'https://www.onewaydroptaxibooking.com/assets/tirupathi1.avif',
    category: 'Temple',
    distance: '378 km',
    duration: '7 hours',
    description: 'Famous pilgrimage city with the world-renowned Venkateswara Temple',
    fare: '₹7,400', 
    icon: Building,
    highlights: ['Tirupati Balaji Temple', 'Spiritual Experience', 'Pilgrimage', 'Cultural Sites']
    },
    {
    name: 'Coimbatore',
    image: 'https://www.onewaydroptaxibooking.com/assets/coimbatore.avif',
    category: 'City',
    distance: '210 km',
    duration: '5-6 hours',
    description: 'Industrial city known as Manchester of South India with temples and textile industry',
    fare: '₹3,400', 
    icon: Building,
    highlights: ['Textile Industry', 'Marudamalai Temple', 'Industrial Hub', 'Gateway to Kerala']
    }
    
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-gray-900 mb-4">Outstation Destinations</h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
         Explore South India with Onewaydroptaxi — experienced drivers, comfortable vehicles, and clear upfront pricing for all your outstation trips.
        </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <destination.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {destination.fare}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-2xl font-bold mb-1">{destination.name}</h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Popular Attractions:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className="inline-flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="h-3 w-3 text-yellow-500 mr-1 flex-shrink-0" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedDestination(destination)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <span>Book Trip</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                    <a
                    href="tel:+919791401055"
                    className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl"
                    >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDestination && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
      <button
        onClick={() => setSelectedDestination(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
       >
        <X className="h-6 w-6" />
      </button>

      <h3 className="text-2xl font-bold mb-4">{selectedDestination.name}</h3>

      <img 
        src={selectedDestination.image} 
        alt={selectedDestination.name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />

      <p className="text-gray-700 mb-4">{selectedDestination.description}</p>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-full">
          <MapPin className="h-5 w-5" />
          <span>{selectedDestination.distance}</span>
        </div>
        <div className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-full">
          <Clock className="h-5 w-5" />
          <span>{selectedDestination.duration}</span>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 text-green-600 px-3 py-2 rounded-full">
          <span>Fare:</span>
          <span className="font-bold">{selectedDestination.fare}</span>
        </div>
      </div>

      <h5 className="font-semibold text-gray-900 mb-2">Popular Attractions:</h5>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {selectedDestination.highlights.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+919791401055"
          className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center hover:bg-green-700 transition-all"
         >
          Call Now
        </a>
        <button
          onClick={() => setSelectedDestination(null)}
          className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          Close
        </button>
      </div>
    </div>
    </div>
    )}
    </section>
  );
};

export default OutstationDestinations;


