import React, { useEffect } from "react";
import "./contact.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import image from "./imagesc/contact.svg";

const ContactForm = () => {
  useEffect(() => {
    document.body.classList.add("contact-page-mode");

    return () => {
      document.body.classList.remove("contact-page-mode");
    };
  }, []);

  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <div className="content-wrapper">
          <h1 className="fade-in">Get in Touch</h1>
          <p className="fade-in delay-1">We’re here to help and answer any questions you might have.</p>
          <img src={image} alt="Contact Us" className="contact-image zoom-in delay-2" />
          <div className="social-links fade-in delay-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right slide-in">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn pulse" id="btnc">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;


