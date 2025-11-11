import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navItems = ["Home", "About", "Services", "Fleet", "Pricing", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 relative">

      {/* Logo + Name */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center space-x-4 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img src="/logo6.webp" alt="OnewayDropTaxi" className="h-24 sm:h-20 md:h-16 lg:h-12 w-auto object-contain" loading="lazy"  />
        <div>
          <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Oneway<span className="text-yellow-600">DropTaxi</span>
          </span>
          <p className="text-sm md:text-base text-gray-600">Simple Booking. Transparent Pricing.</p>
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 items-center">
        {navItems.map((item, i) => (
          <motion.div key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.3 }}>
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

      {/* Call Button */}
      <motion.div
        className="hidden md:flex items-center ml-6 bg-yellow-500 text-black font-semibold px-5 py-2.5 rounded-full cursor-pointer shadow hover:bg-yellow-600 transition"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Phone className="h-4 w-4 mr-2" />
        +91 6382980204
      </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/30 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden py-4 border-t border-white/30 bg-yellow-500"
            >
              <nav className="flex flex-col space-y-4">
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
                    className="text-black font-medium hover:text-white transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}

                <div className="flex items-center bg-white/90 px-3 py-2 rounded-lg mt-2">
                  <Phone className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-yellow-600 font-semibold">+91 6382980204</span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
