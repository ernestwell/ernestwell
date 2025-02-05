import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/herosection";
import Services from "./components/services/service";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Chatbot from "./components/chatbot/Chatbot";
import WebDevelopment from "./components/services/pages/webdevelopment/WebDevelopment";
import MobileAppDevelopment from "./components/services/pages/AppDevelopement/appdev";
import ERPDevelopment from "./components/services/pages/erp-services/erp";
import CustomSoftwareSolutions from "./components/services/pages/customsolution/custom";
import DigitalMarketingSolutions from "./components/services/pages/digital/digital";
import CloudSolutions from "./components/services/pages/cloud/cloud";
import CybersecuritySolutions from "./components/services/pages/cybersecurity/cyber";
import ITSupport from "./components/services/pages/ITsupport/itsupport";
import SignIn from "./components/sign-in/sign"
import WeWorkForSec from "./components/weworkfor/wework"
import Profile from "./components/profile/profile";

function App() {
  // useEffect(() => {
  //   // Disable right-click functionality on the page for text, images, etc.
  //   const handleRightClick = (e) => {
  //     // Allow right-click for inspecting, but prevent content copying
  //     if (e.target.tagName !== "IMG") {
  //       e.preventDefault();
  //     }
  //   };

  //   // Disable text selection across the whole page
  //   document.body.style.userSelect = "none"; // Prevent text selection

  //   // Prevent copy, cut, and paste actions
  //   const preventCopy = (e) => {
  //     e.preventDefault();
  //     alert("Copying is disabled on this site.");
  //   };
  //   const preventCut = (e) => {
  //     e.preventDefault();
  //     alert("Cutting is disabled on this site.");
  //   };
  //   const preventPaste = (e) => {
  //     e.preventDefault();
  //     alert("Pasting is disabled on this site.");
  //   };

  //   // Add event listeners
  //   document.addEventListener("contextmenu", handleRightClick); // Right-click is allowed only for inspecting
  //   document.addEventListener("copy", preventCopy);
  //   document.addEventListener("cut", preventCut);
  //   document.addEventListener("paste", preventPaste);

  //   // Cleanup event listeners when component is unmounted
  //   return () => {
  //     document.removeEventListener("contextmenu", handleRightClick);
  //     document.removeEventListener("copy", preventCopy);
  //     document.removeEventListener("cut", preventCut);
  //     document.removeEventListener("paste", preventPaste);
  //   };
  // }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WeWorkForSec />
              <Services />
              <Chatbot />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<MobileAppDevelopment />} />
        <Route path="/erp-development" element={<ERPDevelopment />} />
        <Route path="/custom-development" element={<CustomSoftwareSolutions />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingSolutions />} />
        <Route path="/cloudsolutions" element={<CloudSolutions />} />
        <Route path="/CybersecuritySolutions" element={<CybersecuritySolutions />} />
        <Route path="/ITsupport" element={<ITSupport />} />
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





