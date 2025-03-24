import  { useState } from "react";
import "./WebDevelopment.css";
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";
import image4 from "../../serviceimages/no.svg";

const services = [
  {
    id: 1,
    title: "Static Websites",
    description:
      "Fast, secure, and easy-to-maintain websites for businesses needing a strong online presence. Ideal for portfolios, company profiles, and landing pages with mobile responsiveness and SEO-friendly architecture.",
    image: image1,
  },
  {
    id: 2,
    title: "Dynamic Websites",
    description:
      "Engaging, database-driven websites with real-time updates and personalized user experiences. Perfect for blogs, news platforms, and business portals requiring seamless content management.",
    image: image2,
  },
  {
    id: 3,
    title: "E-commerce Platforms",
    description:
      "High-performance online stores with secure payment gateways, user-friendly catalogs, and mobile-optimized designs. Features include inventory management, order tracking, and product recommendations.",
    image: image3,
  },
  {
    id: 4,
    title: "Custom Web Applications",
    description:
      "Tailor-made web applications for business automation, CRM systems, and booking platforms. Built with scalability, security, and seamless third-party integrations in mind for enhanced efficiency.",
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
        <h1>WEB DEVELOPEMENT SERVICES</h1>
        <p>Build your digital presence with high-quality, custom-built web solutions.</p>
      </header>

      <section className="webdev-services-1">
        {services.map((service, index) => (
          <div key={service.id} className={`webdev-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-1">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-1">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-1" onClick={() => handleShowForm(service)}>See Demo</button>
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
                      style={{ marginTop: "10px" }} 
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
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
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
    </div>
  );
};

export default WebDevelopment;