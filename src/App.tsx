import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AdBanner from './components/AdBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Tariff from './components/Tariff';
import MostBookedRoutes from './components/MostBookedRoutes';
import OutstationDestinations from './components/OutstationDestinations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import FAQ from './components/FAQ';
import FloatingIcons from './components/FloatingIcons';
import GkWebDesigns from './components/pages/GkWebDesigns.jsx';
import ContactPage from './components/pages/ContactPage';
import PricingPage from './components/pages/PricingPage';
import AboutPage from './components/pages/AboutPage';
import CoimbatoreToChennai from './components/pages/CoimbatoreToChennai';
import CoimbatoreToBangalore from './components/pages/CoimbatoreToBangalore';



const HomePage = () => (
  <>
    <Hero />
    <Tariff />
    <Fleet />
    <MostBookedRoutes />
    <OutstationDestinations />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <AdBanner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gk-web-designs" element={<GkWebDesigns />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/coimbatore-to-chennai" element={<CoimbatoreToChennai />} />
            <Route path="/coimbatore-to-bangalore" element={<CoimbatoreToBangalore />} />
           </Routes>
          <Footer />
          <FloatingIcons />
        </div>
      </Router>
    </HelmetProvider>
    
  );
}


export default App;
