import React, { useState } from "react";
import { 
  FaLaptopCode, FaShoppingCart, FaDatabase, FaTools, 
  FaQuestionCircle
} from "react-icons/fa";
import "./WebDevelopment.css";
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";
import image4 from "../../serviceimages/no.svg";

const services = [
  {
    id: 1,
    // icon: <FaLaptopCode className="service-icon" />,
    title: "Static Websites",
    description: "Static websites offer a streamlined, high-performance solution for businesses looking to establish a professional online presence without the need for complex backend processes. These websites are designed to be fast, secure, and easy to maintain, as they are powered by fixed content that does not rely on a database. Ideal for businesses that want to showcase portfolios, company profiles, or promotional landing pages, static websites ensure a seamless user experience across devices with responsive layouts and mobile optimization. The focus is on fast loading times, a strong SEO foundation, and providing an elegant yet simple browsing experience. Services include personalized design, mobile responsiveness, SEO-friendly architecture, and reliable hosting solutions.",
    image: image1
  },
  {
    id: 2,
    // icon: <FaDatabase className="service-icon" />,
    title: "Dynamic Websites",
    description: "Dynamic websites are built to cater to businesses that need real-time content updates and enhanced interactivity with their audience. These websites integrate dynamic features such as content management systems (CMS), user authentication, and personalized user experiences through database-driven content. Ideal for blogs, news platforms, and business portals, dynamic websites are built to handle frequent content updates, provide complex functionality, and engage users with tailored experiences. Our dynamic solutions ensure easy management, enhanced user experience, and scalability for future growth. The service includes content management tools, customized themes, SEO-optimized architecture, and user-friendly dashboards.",
    image: image2
  },
  {
    id: 3,
    // icon: <FaShoppingCart className="service-icon" />,
    title: "E-commerce Platforms",
    description: "We specialize in building secure, high-performance e-commerce platforms that drive sales and provide a seamless shopping experience. Our services include secure payment gateways, user-friendly product catalogs, shopping cart functionality, and mobile-optimized designs. From start-ups to well-established businesses, we create custom-tailored e-commerce solutions that are optimized for fast loading, high scalability, and top-notch security. Your customers will enjoy a smooth shopping experience with easy navigation, safe payments, and a variety of payment options. Additionally, we provide features like product recommendation engines, inventory management, and real-time order tracking.",
    image: image3
  },
  {
    id: 4,
    // icon: <FaTools className="service-icon" />,
    title: "Custom Web Applications",
    description: "Our custom web applications are built to address specific business needs, from CRM systems to booking platforms and automation tools. These applications are designed with scalability, security, and seamless integrations in mind. Whether you're looking to automate tasks, improve business processes, or offer a unique user experience, we provide tailored solutions that drive efficiency. Our services include advanced security protocols, real-time data processing, third-party service integration, and responsive user interfaces across all devices. We ensure your web application is reliable, intuitive, and easy to maintain.",
    image: image4,
  },
];

const WebDevelopment = () => {
  const [showForm, setShowForm] = useState(false);
      const [selectedService, setSelectedService] = useState(null);
      const [showPopup, setShowPopup] = useState(false);
      const [scheduleMeeting, setScheduleMeeting] = useState(false);
    
      const handleShowForm = (service) => {
        setSelectedService(service);
        setShowForm(true);
      };
    
      const handleCloseForm = () => {
        setShowForm(false);
        setSelectedService(null);
        setScheduleMeeting(false);
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCloseForm(); 
        setShowPopup(true); 
      };
    
      const handlePopupClose = () => {
        setShowPopup(false); 
      };
  return (
    <div className="webdev-container-1">
      <header className="webdev-header">
        <h1>Expert Web Development Services</h1>
        <p>Build your digital presence with high-quality, custom-built web solutions.</p>
      </header>

      <section className="webdev-services">
        {services.map((service, index) => (
          <div key={service.id} className={`webdev-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-1">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn" onClick={() => handleShowForm(service)}>See Demo</button>
            </div>
          </div>
        ))}
      </section>
      {showForm && (
        <div className="demo-form-container">
          <h2>Request a Demo for {selectedService.title}</h2>
          <form className="demo-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            {/* <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
            </div> */}

            {/* Schedule Meeting Option */}
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <input 
                type="checkbox" 
                id="scheduleMeeting" 
                checked={scheduleMeeting} 
                onChange={() => setScheduleMeeting(!scheduleMeeting)} 
                style={{ marginRight: "10px",marginTop:"0px" }} // Adds spacing between checkbox and label
              />
              <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
            </div>

            {scheduleMeeting && (
                  <div 
                    className="form-group centered" 
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      height: "10vh"
                    }}
                  >
                    <label htmlFor="meetingDate">Select a Date & Time</label>
                    <input 
                      type="datetime-local" 
                      id="meetingDate" 
                      name="meetingDate" 
                      required 
                      style={{ marginTop: "10px" }} // Adds space between label and input
                    />
                  </div>
            )}


            <div className="form-buttons">
              <button type="submit" className="primary-btn">Submit Request</button>
              <button type="button" className="secondary-btn" onClick={handleCloseForm}>Close</button>
            </div>
          </form>
        </div>
      )}

      {/* Success Popup with Manual Close */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>✅ Thank you! Your request has been received. We will get back to you soon.</p>
            <button onClick={handlePopupClose} className="primary-btn">
              Close
            </button>
          </div>
        </div>
      )}
      <section className="faq-section">
        <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>Which type of website is best for my business?</summary>
          <p>If you need a simple presence, a static website is sufficient. If you require real-time updates, go for a dynamic website. E-commerce is for selling online, and custom web apps fit specialized needs.</p>
        </details>
        <details className="faq-item">
          <summary>Can I upgrade my website later?</summary>
          <p>Yes! We build scalable solutions, allowing you to upgrade from static to dynamic websites or add new features as needed.</p>
        </details>
        <details className="faq-item">
          <summary>Do you provide ongoing support and maintenance?</summary>
          <p>Yes! We provide regular updates, security monitoring, and performance optimizations to ensure your website runs smoothly.</p>
        </details>
      </section>
      <section className="contact-cta">
        <h2>Let's Build Your Website</h2>
        <p>Whether it's a business website, online store, or custom solution, we’ve got you covered.</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default WebDevelopment;

