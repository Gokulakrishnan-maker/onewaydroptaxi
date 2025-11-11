import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = ["Home", "About", "Services", "Fleet", "Pricing", "Contact"];

  return (
   <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex justify-between items-center">

      {/* Logo + Name */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/logo6.webp"
          alt="OnewayDropTaxi"
          className="h-[72px] sm:h-[78px] md:h-[90px] lg:h-[80px] w-auto object-contain"
        />
        <div className="leading-tight">
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
            Oneway<span className="text-yellow-600">DropTaxi</span>
          </span>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            Simple Booking. Transparent Pricing.
          </p>
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 items-center">
        {navItems.map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Link
              to={
                item === "Home" ? "/" :
                item === "About" ? "/about" :
                item === "Pricing" ? "/pricing" :
                item === "Contact" ? "/contact" :
                `#${item.toLowerCase()}`
              }
              className="text-gray-800 font-medium hover:text-yellow-600 transition-all hover:scale-105"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Desktop Call Button */}
      <motion.a
        href="tel:+916382980204"
        className="hidden md:flex items-center bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-full shadow hover:bg-yellow-600 transition"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Phone className="h-4 w-4 mr-2" />
        Call Now
      </motion.a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 ml-2 rounded-lg hover:bg-gray-100 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="md:hidden bg-white border-t border-gray-200 py-3"
      >
        <nav className="flex flex-col space-y-3 px-5">
          {navItems.map((item) => (
            <Link
              key={item}
              to={
                item === "Home" ? "/" :
                item === "About" ? "/about" :
                item === "Pricing" ? "/pricing" :
                item === "Contact" ? "/contact" :
                `#${item.toLowerCase()}`
              }
              className="text-gray-800 font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <a
         href="tel:+916382980204"
         className="md:hidden flex items-center bg-yellow-500 text-black font-semibold px-3 py-2 rounded-full shadow hover:bg-yellow-600 transition"
         >
         <Phone className="h-5 w-5" />
         </a>
          
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
  </header>
  );
};

export default Header;
