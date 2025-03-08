
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/herosection";
import Services from "./components/services/service";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Chatbot from "./components/chatbot/chatbot";
import WebDevelopment from "./components/services/pages/webdevelopment/WebDevelopment";
import MobileAppDevelopment from "./components/services/pages/AppDevelopement/appdev";
import ERPDevelopment from "./components/services/pages/erp-services/erp";
import CustomSoftwareSolutions from "./components/services/pages/customsolution/custom";
import DigitalMarketingSolutions from "./components/services/pages/digital/digital";
import CloudSolutions from "./components/services/pages/cloud/cloud";
import CybersecuritySolutions from "./components/services/pages/cybersecurity/cyber";
import ITSupport from "./components/services/pages/ITsupport/itsupport";
import SignIn from "./components/sign-in/sign";
import WeWorkForSec from "./components/weworkfor/wework";
import Profile from "./components/profile/profile";
import CareersPage from "./components/Careers/career";
import TechStack from "./components/techstack/techstack";
import JobDescriptionPage from "./components/Careers/description";
import AdminPanel from "./components/admin/admin";
function App() {


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
              <TechStack/>
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/careers" element={<CareersPage/>} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<MobileAppDevelopment />} />
        <Route path="/erp-development" element={<ERPDevelopment />} />
        <Route path="/custom-development" element={<CustomSoftwareSolutions />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingSolutions />} />
        <Route path="/cloudsolutions" element={<CloudSolutions />} />
        <Route path="/CybersecuritySolutions" element={<CybersecuritySolutions />} />
        <Route path="/ITsupport" element={<ITSupport />} />
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/job-description" element={<JobDescriptionPage/>}/>
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;