import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar"; // Corrected import path
import HeroSection from "./components/herosection/herosection"; // Corrected import
import Services from "./components/services/service"; // Add Services Page Component
import Portfolio from "./components/porfolio/portfolio"; // Add Portfolio Page Component
import Contact from "./components/contact/contact"; // Add Contact Page Component
import Footer from "./components/footer/footer"; // Add Footer Page Component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Home Page as Hero Section */}
        <Route path="/services" element={<Services />} /> {/* Services Page Component */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio Page Component */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page Component */}
      </Routes>
      <Footer /> {/* Add Footer to the end of the app */}
    </Router>
  );
}

export default App;

