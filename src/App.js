import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar"; // Corrected import path
import HeroSection from "./components/herosection/herosection"; // Corrected import
import Services from "./components/services/service"; // Add Services Page Component
// import Portfolio from "./components/porfolio/portfolio"; // Add Portfolio Page Component
import Contact from "./components/contact/contact"; // Add Contact Page Component
import Footer from "./components/footer/footer"; // Add Footer Page Component
// import About from "./components/about/about"
import Chatbot from "./components/chatbot/Chatbot";
import WebDevelopment from "./components/services/pages/WebDevelopment";
import MobileAppDevelopment from "./components/services/pages/AppDevelopement/appdev"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with Hero Section and Services Section */}
        <Route
          path="/"
          element={
            <>
              <HeroSection /> {/* Hero Section */}
              {/* <About /> */}
              <Services />
              <Chatbot /> {/* Services Section directly below Hero Section */}
            </>
          }
        />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<MobileAppDevelopment />} />

      </Routes>
      <Footer /> {/* Add Footer to the end of the app */}
    </Router>
  );
}

export default App;


