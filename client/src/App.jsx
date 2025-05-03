import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/herosection";
import Services from "./components/services/service";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Chatbot from "./components/chatbot/chatbot";
import WeWorkForSec from "./components/weworkfor/wework";
import TechStack from "./components/techstack/techstack";

// Lazy-loaded route components
const WebDevelopment = lazy(() => import("./components/services/pages/webdevelopment/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./components/services/pages/AppDevelopement/appdev"));
const ERPDevelopment = lazy(() => import("./components/services/pages/erp-services/erp"));
const CustomSoftwareSolutions = lazy(() => import("./components/services/pages/customsolution/custom"));
const DigitalMarketingSolutions = lazy(() => import("./components/services/pages/digital/digital"));
const CloudSolutions = lazy(() => import("./components/services/pages/cloud/cloud"));
const CybersecuritySolutions = lazy(() => import("./components/services/pages/cybersecurity/cyber"));
const ITSupport = lazy(() => import("./components/services/pages/ITsupport/itsupport"));
const SignIn = lazy(() => import("./components/sign-in/sign"));
const Profile = lazy(() => import("./components/profile/profile"));
const CareersPage = lazy(() => import("./components/Careers/career"));
const CareerDescription = lazy(() => import("./components/Careers/description"));
const AdminPanel = lazy(() => import("./components/admin/admin"));
const PrivacyPolicy = lazy(() => import("./components/privacyPolicy/privacypolicy"));
const AIAgentSolutions = lazy(() => import("./components/services/pages/Ai_agent/ai"));
const ECommerce = lazy(() => import("./components/services/pages/ecommerce/e-commerce"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WeWorkForSec />
                <Services />
                <Chatbot />
                <TechStack />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<MobileAppDevelopment />} />
          <Route path="/erp-development" element={<ERPDevelopment />} />
          <Route path="/custom-development" element={<CustomSoftwareSolutions />} />
          <Route path="/digitalmarketing" element={<DigitalMarketingSolutions />} />
          <Route path="/cloudsolutions" element={<CloudSolutions />} />
          <Route path="/CybersecuritySolutions" element={<CybersecuritySolutions />} />
          <Route path="/AIAgentSolutions" element={<AIAgentSolutions />} />
          <Route path="/ECommerce" element={<ECommerce />} />
          <Route path="/ITsupport" element={<ITSupport />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/job-description" element={<CareerDescription />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

