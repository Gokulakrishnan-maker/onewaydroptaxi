import React from "react";

const AdBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-yellow-500 text-white font-semibold py-3 overflow-hidden relative shadow-md">
  <div className="animate-marquee whitespace-nowrap hover:pause text-lg md:text-xl">
    🚖 Reliable & Affordable Rides with <span className="text-yellow-400">Onewaydroptaxi</span>! ✅ 24/7 Service Across Tamil Nadu | 🌟 Safe & Comfortable | 📞{" "}
    <a href="tel:+916382980204" className="underline text-yellow-300">
      Call Now: +91 6382980204
    </a>
  </div>

  <style jsx>{`
    .animate-marquee {
      display: inline-block;
      padding-left: 100%;
      animation: marquee 15s linear infinite;
    }
    .hover\\:pause:hover {
      animation-play-state: paused;
    }
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
  </div>

  );
};

export default AdBanner;


