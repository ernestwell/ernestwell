// import React from 'react';
// import './footer.css';
// import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPhone, FaPaperPlane, FaLocationArrow, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Company Section */}
//         <div className="footer-section company">
//           <img src="images/logo.png" alt="Logo" className="logo-foot" />
//           <p>We specialize in crafting exceptional digital experiences. Our mission is to make your business stand out with creative and innovative solutions.</p>
//         </div>

//         {/* Services Section */}
//         <div className="footer-section services-foot">
//           <h3>Services</h3>
//           <ul>
//             <li>Web Development</li>
//             <li>App Development</li>
//             <li>IT Support</li>
//             <li>Cloud Solutions</li>
//             <li>Cybersecurity</li>
//             <li>Custom Solutions</li>
//             <li>ERP Solutions</li>
//             <li>Consulting</li>
//           </ul>
//         </div>

//         {/* Quick Links Section */}
//         <div className="footer-section quick-links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Our Policy</a></li>
//             <li><a href="#">Help</a></li>
//             <li><a href="#">Terms</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Support</a></li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div className="footer-section contact">
//           <h3>Contact</h3>
//           <div>
//             <div className="footer-social">
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
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './footer.css';
import logo from './images/ernest logo.png';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPhone, FaPaperPlane, FaLocationArrow, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section company">
          <div className="company-name-logo-1">
            <h3>ERNESTWELL</h3>
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

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact Section */}
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

      {/* Copyright Statement */}
      <div className="copyright">
        &copy; 2025 Ernestwell. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;







