import React from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingIcons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center space-y-4">
      {/* Back to Top Icon */}
      <div
        onClick={scrollToTop}
        className="bg-gray-800 hover:bg-gray-700 text-white h-14 w-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group relative cursor-pointer"
        title="Back to Top"
      >
        <ChevronUp className="h-7 w-7" />
        <div className="absolute right-16 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Top
        </div>
      </div>

      {/* Phone Icon (with glow + blink) */}
      <a
        href="tel:+919791401055"
        className="relative bg-blue-500 hover:bg-blue-600 text-white h-16 w-16 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 group animate-[phoneGlow_1.8s_infinite_ease-in-out]"
        title="Call Us"
      >
        <Phone className="h-8 w-8" />
        <div className="absolute right-20 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call +91 9791401055
        </div>
      </a>

      {/* WhatsApp Icon (official look + glow) */}
      <a
        href="https://wa.me/919791401055"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] h-16 w-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-all duration-300 group animate-[whatsappGlow_1.8s_infinite_ease-in-out]"
        title="WhatsApp Us"
      >
        <img
          src="https://www.onewaydroptaxibooking.com/images/WhatsApp.svg"
          alt="WhatsApp"
          className="h-8 w-8"
        />
        <div className="absolute right-20 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
        </div>
      </a>

      {/* Animations */}
      <style jsx>{`
        @keyframes whatsappGlow {
          0%, 100% {
            box-shadow: 0 0 10px 2px rgba(37, 211, 102, 0.6),
                        0 0 20px 4px rgba(37, 211, 102, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px 6px rgba(37, 211, 102, 0.9),
                        0 0 50px 10px rgba(37, 211, 102, 0.6);
            transform: scale(1.1);
          }
        }

        @keyframes phoneGlow {
          0%, 100% {
            box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.6),
                        0 0 20px 4px rgba(59, 130, 246, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px 6px rgba(59, 130, 246, 0.9),
                        0 0 50px 10px rgba(59, 130, 246, 0.6);
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
