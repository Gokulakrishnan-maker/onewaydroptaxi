import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
     name: 'Suganthi',
     role: 'Chennai to Madurai',
     emoji: '👩',
     rating: 5,
     text: 'Onewaydroptaxi has been my go-to taxi service for business trips. Always punctual, professional drivers, and clean vehicles. Highly recommended!'
   },

    {
     name: 'Vinay kumar',
     role: 'Coimbatore to Salem',
     emoji: '👨',
     rating: 5,
     text: 'Onewaydroptaxi provides excellent service! The drivers are courteous and knowledgeable about the city. The booking system is seamless and pricing is very fair.'
    },
    
    {
     name: 'Kavitha Lakshmi',
     role: 'Trichy to Chennai',
     emoji: '👩',
     rating: 5,
     text: 'Safe, reliable, and comfortable rides every time. I feel secure traveling with Onewaydroptaxi, especially during late night trips.'
    },
    {
      name: 'Mohan kumar',
      role: 'Madurai to Kanyakumari',
      emoji: '👨',
      rating: 5,
      text: 'Their punctuality and clean cars make my airport trips stress-free. Excellent service every single time!'
     },
    {
    name: 'priyadharshini',
    role: 'Salem to Coimbatore',
    emoji: '👩',
    rating: 5,
    text: 'Friendly drivers and smooth rides. I always choose Onewaydroptaxi for outstation and city travel!'
    },
    {
      name: 'Meera Nataraj',
      role: 'Madurai to Coimbatore',
      emoji: '👩',
      rating: 5,
      text: 'Emergency travel for a medical appointment. They arranged a taxi within 30 minutes. Very understanding and accommodating. Truly a lifesaver service!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their Onewaydroptaxi experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center space-x-4">
                <span className="text-3xl">{testimonial.emoji}</span>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
           ))}
       </div>
      </div>
    </section>
  );
};

export default Testimonials;
