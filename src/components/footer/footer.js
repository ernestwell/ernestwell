import React from 'react';
import './footer.css';
import logo from './images/ernest logo.png';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPhone, FaPaperPlane, FaLocationArrow, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/sign-in') {
    return null;
  }
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-section company">
          <div className="company-name-logo-1">
            <h3 id='name-c'>ERNESTWELL</h3>
          </div>
          <p className="para">We specialize in crafting exceptional digital experiences. Our mission is to make your business stand out with creative and innovative solutions.</p>
        </div>


        <div className="footer-section services-foot">
          <h3 className='service-name'>Services</h3>
          <div className="service-list">
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">App Development</a></li>
              <li><a href="#">IT Support</a></li>
              <li><a href="#">Cloud Solutions</a></li>
            </ul>
            <ul>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Custom Solutions</a></li>
              <li><a href="#">ERP Solutions</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <div>
            <div className="footer-social-2">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
           </div>
           <div className="email-form">
            <input type="email" placeholder="Enter your email" />
            <FaPaperPlane className="paperplane-icon" />
          </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; 2025 Ernestwell. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;







