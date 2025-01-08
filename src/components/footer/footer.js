import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-title">YourCompany</h3>
          <p className="footer-description">Innovative IT solutions for modern businesses</p>
        </div>
        <div>
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#web">Web Development</a></li>
            <li><a href="#erp">ERP Solutions</a></li>
            <li><a href="#mobile">Mobile Apps</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
