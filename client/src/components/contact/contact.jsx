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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("Error sending message. Try again later.");
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
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn pulse" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
