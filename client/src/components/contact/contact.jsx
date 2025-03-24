// import React, { useEffect } from "react";
// import "./contact.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import image from "./imagesc/contact.svg";

// const ContactForm = () => {
//   useEffect(() => {
//     document.body.classList.add("contact-page-mode");

//     return () => {
//       document.body.classList.remove("contact-page-mode");
//     };
//   }, []);

//   return (
//     <div className="contact-container">
//       <div className="contact-left">
//         <div className="content-wrapper">
//           <h1 className="fade-in">Get in Touch</h1>
//           <p className="fade-in delay-1">We’re here to help and answer any questions you might have.</p>
//           <img src={image} alt="Contact Us" className="contact-image zoom-in delay-2" />
//           <div className="social-links fade-in delay-3">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>
//       <div className="contact-right slide-in">
//         <h2>Contact Us</h2>
//         <form className="contact-form">
//           <div className="input-group">
//             <input type="text" placeholder="Your Name" required />
//           </div>
//           <div className="input-group">
//             <input type="email" placeholder="Your Email" required />
//           </div>
//           <div className="input-group">
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//           </div>
//           <button type="submit" className="submit-btn pulse" id="btnc">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
// import  { useEffect } from "react";
// import "./contact.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import image from "./imagesc/contact.svg";

// const ContactForm = () => {
//   useEffect(() => {
//     document.body.classList.add("contact-page-mode");

//     return () => {
//       document.body.classList.remove("contact-page-mode");
//     };
//   }, []);

//   return (
//     <div className="contact-container">
//       <div className="contact-left">
//         <div className="content-wrapper">
//           <h1 className="fade-in">Get in Touch</h1>
//           <p className="fade-in delay-1">We’re here to help and answer any questions you might have.</p>
//           <img src={image} alt="Contact Us" className="contact-image zoom-in delay-2" />
//           <div className="social-links fade-in delay-3">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>
//       <div className="contact-right slide-in">
//         <h1>Contact Us</h1>
//         <form className="contact-form">
//           <div className="input-group">
//             <input type="text" placeholder="Your Name" required />
//           </div>
//           <div className="input-group">
//             <input type="email" placeholder="Your Email" required />
//           </div>
//           <div className="input-group">
//             <textarea placeholder="Your Message" rows="5" required></textarea>
//           </div>
//           <button type="submit" className="submit-btn pulse" id="btnc">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import { useEffect, useState } from "react";
import "./contact.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdZG8xen5L_yrmD10fD38CnAjeiwBIw3f40hRkKjyTGKvG2cg/formResponse";
const FIELD_NAME = "entry.1158759791"; // Replace with actual entry ID for "Name"
const FIELD_EMAIL = "entry.1586154007"; // Replace with actual entry ID for "Email"
const FIELD_MESSAGE = "entry.1649842156"; // Replace with actual entry ID for "Message"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    [FIELD_NAME]: "",
    [FIELD_EMAIL]: "",
    [FIELD_MESSAGE]: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    document.body.classList.add("contact-page-mode");
    return () => {
      document.body.classList.remove("contact-page-mode");
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = GOOGLE_FORM_ACTION_URL;
      form.style.display = "none";

      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setStatus("Message sent successfully!");
      setFormData({ [FIELD_NAME]: "", [FIELD_EMAIL]: "", [FIELD_MESSAGE]: "" }); // Clear form
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("Error submitting message. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="content-wrapper">
          <h1 className="fade-in">Get in Touch</h1>
          <p className="fade-in delay-1">We’re here to help and answer any questions you might have.</p>
          <div className="social-links fade-in delay-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="contact-right slide-in">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name={FIELD_NAME}
              placeholder="Your Name"
              value={formData[FIELD_NAME]}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name={FIELD_EMAIL}
              placeholder="Your Email"
              value={formData[FIELD_EMAIL]}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name={FIELD_MESSAGE}
              placeholder="Your Message"
              rows="5"
              value={formData[FIELD_MESSAGE]}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn pulse" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
