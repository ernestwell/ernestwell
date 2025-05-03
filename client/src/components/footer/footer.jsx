import { useEffect, useState } from "react";
import "./footer.css";
import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane, FaHome,
  FaBriefcase, FaEnvelope, FaPhone, FaCode, FaMobileAlt, FaServer, FaCloud,
  FaShieldAlt, FaLightbulb, FaCogs, FaUsers
} from "react-icons/fa";
import LinkedInLogo from "./images/linkedin.svg";
import FacebookLogo from "./images/Facebook_f_logo_(2019).svg";
import XLogo from "./images/twitter.svg";
import InstagramLogo from "./images/Instagram_logo_2016.svg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyk33lnJ06c9Rfjyb0keAE5zPUXnijTwctKBYlivTtaCoIGU161CdlsleiiK9T86g_Z/exec";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch(`${GOOGLE_SCRIPT_URL}?action=get`)
      .then((response) => response.json())
      .then((data) => {
        if (data.visitorCount) {
          setVisitorCount(data.visitorCount);
          updateVisitorCount(); // Increase count after fetching
        }
      })
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);

  const updateVisitorCount = () => {
    fetch(`${GOOGLE_SCRIPT_URL}?action=update`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.visitorCount) {
          setVisitorCount(data.visitorCount);
        }
      })
      .catch((error) => console.error("Error updating visitor count:", error));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>ERNESTWELL</h3>
          <p>Empowering Businesses through Technology.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/ernestwell-business-solution/?viewAsMember=true" className="social-icon">
              <img src={LinkedInLogo} alt="LinkedIn" width="30" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573618348231" className="social-icon">
              <img src={FacebookLogo} alt="Facebook" width="30" />
            </a>
            <a href="https://x.com/erneswellBS" className="social-icon">
              <img src={XLogo} alt="Twitter X" width="30" />
            </a>
            <a href="https://instagram.com/yourpage" className="social-icon">
              <img src={InstagramLogo} alt="Instagram" width="30" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section foot-2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/profile"><FaHome className="icon" /> About Us</a></li>
            <li><a href="/careers"><FaBriefcase className="icon" /> Careers</a></li>
            <li><a href="/contact"><FaEnvelope className="icon" /> Contact</a></li>
            <li><a href="/contact"><FaPhone className="icon" /> Support</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section foot-3">
          <h3>Services</h3>
          <div className="services-grid-1">
            <ul>
              <li><a href="/web-development"><FaCode className="icon" /> Web Dev</a></li>
              <li><a href="/app-development"><FaMobileAlt className="icon" /> App Dev</a></li>
              <li><a href="/ITsupport"><FaServer className="icon" /> IT Support</a></li>
              <li><a href="/cloudsolutions"><FaCloud className="icon" />AI Agent</a></li>
            </ul>
            <ul>
              <li><a href="/CybersecuritySolutions"><FaShieldAlt className="icon" /> Security</a></li>
              <li><a href="/custom-development"><FaLightbulb className="icon" /> Custom</a></li>
              <li><a href="/erp-development"><FaCogs className="icon" /> ERP</a></li>
              <li><a href="/digitalmarketing"><FaUsers className="icon" />Marketing</a></li>
            </ul>
          </div>
        </div>

        {/* Connect & Visitor Counter */}
        <div className="footer-section foot-4">
          <h3>Connect</h3>
          <div className="email-container">
            <input type="email" placeholder="Enter email" className="email-input" />
            <button className="email-button" aria-label="Send Email">
              <FaPaperPlane />
            </button>
          </div>

          <h3 className="visi">VISITORS</h3>
          <div className="visitor-counter">
            {visitorCount.toString().split("").map((digit, index) => (
              <span key={index} className={`visitor-digit digit-${digit}`}>
                {digit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          &copy; 2025 Ernestwell. All Rights Reserved. | 
          <a href="/privacy-policy"> Privacy Policy</a> | 
          <a href="/privacy-policy"> Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
