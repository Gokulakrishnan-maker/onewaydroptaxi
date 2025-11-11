import React from "react";

const AdBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold py-3 overflow-hidden relative shadow-md">
      {/* Marquee container */}
      <div className="animate-marquee whitespace-nowrap hover:pause text-lg md:text-xl">
        🚖 Fast & Affordable Rides with FastrideDropTaxi! ✅ 24/7 Service Across Tamil Nadu | 🌟 Safety & Comfort Guaranteed | 📞{" "}
        <a href="tel:+916382980204" className="underline">
          Call Now: +91 6382980204
        </a>
      </div>

      {/* Tailwind marquee animation */}
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


