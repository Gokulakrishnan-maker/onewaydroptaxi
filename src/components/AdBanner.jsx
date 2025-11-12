import React from "react";

const AdBanner = () => {
  return (
    <>
      {/* 🚖 Scrolling Taxi Banner */}
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-yellow-500 text-white font-semibold py-3 overflow-hidden relative shadow-md">
        <div className="animate-marquee whitespace-nowrap hover:pause text-lg md:text-xl">
          🚖 Book Your Ride with <span className="text-yellow-400">Onewaydroptaxi</span> — 
          Reliable • Affordable • 24/7 Service Across Tamil Nadu 🚗 | 
          Safe & Comfortable Cabs | 📞{" "}
          <a href="tel:+916382980204" className="underline text-yellow-300">
            Call Now: +91 63829 80204
          </a>
        </div>
      </div>

      {/* 🏆 Trust Line */}
      <p className="text-center text-sm text-gray-600 mt-1">
        Trusted by 10,000+ happy customers • Transparent Pricing • Verified Drivers
      </p>

      {/* ✅ Moved style block outside the main banner */}
      <style>{`
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
    </>
  );
};

export default AdBanner;
