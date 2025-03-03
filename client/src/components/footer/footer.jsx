// import React from 'react';
// import './footer.css';
// import logo from './images/ernest logo.png';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPhone, FaPaperPlane, FaLocationArrow, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import { useLocation } from 'react-router-dom';
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


// const Footer = () => {
//   const location = useLocation();
//   if (location.pathname === '/sign-in') {
//     return null;
//   }
//   return (
//     <footer className="footer" >
//       <div className="footer-container">
//         <div className="footer-section company">
//           <div className="company-name-logo-1">
//             <h3 id='name-c'>ERNESTWELL</h3>
//           </div>
//           <p className="para">We specialize in crafting exceptional digital experiences. Our mission is to make your business stand out with creative and innovative solutions.</p>
//         </div>


//         <div className="footer-section services-foot">
//           <h3 className='service-name'>Services</h3>
//           <div className="service-list">
//             <ul>
//               <li><a href="#">Web Development</a></li>
//               <li><a href="#">App Development</a></li>
//               <li><a href="#">IT Support</a></li>
//               <li><a href="#">Cloud Solutions</a></li>
//             </ul>
//             <ul>
//               <li><a href="#">Cybersecurity</a></li>
//               <li><a href="#">Custom Solutions</a></li>
//               <li><a href="#">ERP Solutions</a></li>
//               <li><a href="#">Consulting</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-section quick-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Support</a></li>
//           </ul>
//         </div>

//         <div className="footer-section contact">
//           <h3>Contact</h3>
//           <div>
//             <div className="footer-social-2">
//               <a href="#"><FaFacebookF /></a>
//               <a href="#"><FaLinkedinIn /></a>
//               <a href="#"><FaTwitter /></a>
//               <a href="#"><FaInstagram /></a>
//            </div>
//            <div className="email-form">
//             <input type="email" placeholder="Enter your email" />
//             <FaPaperPlane className="paperplane-icon" />
//           </div>
//           </div>
//         </div>
//       </div>

//       <div className="copyright">
//         &copy; 2025 Ernestwell. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import "./footer.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaPaperPlane,
//   FaHome,
//   FaBriefcase,
//   FaEnvelope,
//   FaPhone,
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaCode,
//   FaMobileAlt,
//   FaServer,
//   FaCloud,
//   FaShieldAlt,
//   FaLightbulb,
//   FaCogs,
//   FaUsers
// } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const Footer = () => {
//   const location = useLocation();
//   if (location.pathname === "/sign-in") return null;

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#"><FaHome className="icon" /> About Us</a></li>
//             <li><a href="#"><FaBriefcase className="icon" /> Careers</a></li>
//             <li><a href="#"><FaEnvelope className="icon" /> Contact</a></li>
//             <li><a href="#"><FaPhone className="icon" /> Support</a></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3>Company</h3>
//           <ul>
//             <li><a href="#"><FaBuilding className="icon" /> Our Story</a></li>
//             <li><a href="#"><FaMapMarkerAlt className="icon" /> Locations</a></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3>Services</h3>
//           <div className="services-grid">
//             <ul>
//               <li><a href="#"><FaCode className="icon" /> Web Dev</a></li>
//               <li><a href="#"><FaMobileAlt className="icon" /> App Dev</a></li>
//               <li><a href="#"><FaServer className="icon" /> IT Support</a></li>
//               <li><a href="#"><FaCloud className="icon" /> Cloud</a></li>
//             </ul>
//             <ul>
//               <li><a href="#"><FaShieldAlt className="icon" /> Security</a></li>
//               <li><a href="#"><FaLightbulb className="icon" /> Custom</a></li>
//               <li><a href="#"><FaCogs className="icon" /> ERP</a></li>
//               <li><a href="#"><FaUsers className="icon" /> Consulting</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h3>Connect</h3>
//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaLinkedinIn /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//           </div>
//           <div className="newsletter">
//             <input type="email" placeholder="Enter email" />
//             <button><FaPaperPlane /></button>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         &copy; 2025 Ernestwell. All Rights Reserved. | <a href="#">Site Map</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import "./footer.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaPaperPlane,
//   FaHome,
//   FaBriefcase,
//   FaEnvelope,
//   FaPhone,
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaCode,
//   FaMobileAlt,
//   FaServer,
//   FaCloud,
//   FaShieldAlt,
//   FaLightbulb,
//   FaCogs,
//   FaUsers
// } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const Footer = () => {
//   const location = useLocation();
//   if (location.pathname === "/sign-in") return null;
      // const [visitorCount, setVisitorCount] = useState(0);

      // useEffect(() => {
      //   let count = localStorage.getItem("visitorCount");
      //   if (!count) {
      //     count = 1;
      //   } else {
      //     count = parseInt(count) + 1;
      //   }
      //   localStorage.setItem("visitorCount", count);
      //   setVisitorCount(count);
      // }, []);

      // // Convert visitor count to an array of digits
      // const visitorDigits = visitorCount.toString().split("");

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section about">
//           <h3>ERNESTWELL</h3>
//           <p>We are a passionate team providing innovative solutions. Our mission is to empower businesses through technology.<a href="#">Our Mission</a> | 
//             <a href="#">Our Values</a> | 
//             <a href="#">Our Vision</a> | 
//             <a href="#">Meet the Team</a></p>
//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaLinkedinIn /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//           </div>
//         </div>
//         <div className="footer-section foot-2">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#"><FaHome className="icon" /> About Us</a></li>
//             <li><a href="#"><FaBriefcase className="icon" /> Careers</a></li>
//             <li><a href="#"><FaEnvelope className="icon" /> Contact</a></li>
//             <li><a href="#"><FaPhone className="icon" /> Support</a></li>
//           </ul>
//         </div>
//         <div className="footer-section foot-3">
//           <h3>Services</h3>
//           <div className="services-grid-1">
//             <ul>
//               <li><a href="#"><FaCode className="icon" /> Web Dev</a></li>
//               <li><a href="#"><FaMobileAlt className="icon" /> App Dev</a></li>
//               <li><a href="#"><FaServer className="icon" /> IT Support</a></li>
//               <li><a href="#"><FaCloud className="icon" /> Cloud</a></li>
//             </ul>
//             <ul>
//               <li><a href="#"><FaShieldAlt className="icon" /> Security</a></li>
//               <li><a href="#"><FaLightbulb className="icon" /> Custom</a></li>
//               <li><a href="#"><FaCogs className="icon" /> ERP</a></li>
//               <li><a href="#"><FaUsers className="icon" /> Consulting</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-section foot-4">
//           <h3>Connect</h3>
//           <div className="newsletter">
//             <input type="email" placeholder="Enter email" />
//             <button><FaPaperPlane /></button>
//           </div>
//         </div>
//       </div>
//       <hr/>
//       <div className="footer-bottom">
//         &copy; 2025 Ernestwell. All Rights Reserved. | <a href="#">Site Map</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { useEffect, useState } from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
  FaCogs,
  FaUsers,
} from "react-icons/fa";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("visitorCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>ERNESTWELL</h3>
          <p>Empowering Businesses through Technology.</p>
           <div className="footer-links">
                <a href="#" className="footer-link">Mission</a>
                <span className="footer-separator">|</span>
                <a href="#" className="footer-link">Values</a>
                <span className="footer-separator">|</span>
                <a href="#" className="footer-link">Vision</a>
                <span className="footer-separator">|</span>
                <a href="#" className="footer-link">Team</a>
            </div>

          <div className="social-icons">
                <a href="https://www.linkedin.com/company/ernestwell-business-solution/?viewAsMember=true" className="social-icon"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/profile.php?id=61573618348231" className="social-icon"><FaFacebookF /></a>
                <a href="https://x.com/erneswellBS" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section foot-2">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"><FaHome className="icon" /> About Us</a></li>
            <li><a href="#"><FaBriefcase className="icon" /> Careers</a></li>
            <li><a href="#"><FaEnvelope className="icon" /> Contact</a></li>
            <li><a href="#"><FaPhone className="icon" /> Support</a></li>
          </ul>
        </div>

        <div className="footer-section foot-3">
          <h3>Services</h3>
          <div className="services-grid-1">
            <ul>
              <li><a href="#"><FaCode className="icon" /> Web Dev</a></li>
              <li><a href="#"><FaMobileAlt className="icon" /> App Dev</a></li>
              <li><a href="#"><FaServer className="icon" /> ITSupport</a></li>
              <li><a href="#"><FaCloud className="icon" /> Cloud</a></li>
            </ul>
            <ul>
              <li><a href="#"><FaShieldAlt className="icon" /> Security</a></li>
              <li><a href="#"><FaLightbulb className="icon" /> Custom</a></li>
              <li><a href="#"><FaCogs className="icon" /> ERP</a></li>
              <li><a href="#"><FaUsers className="icon" /> Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section foot-4">
          <h3>Connect</h3>
          <div className="email-container">
                <input
                    type="email"
                    placeholder="Enter email"
                    className="email-input"
                />
                <button className="email-button">
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
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          &copy; 2025 Ernestwell. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;