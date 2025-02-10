import React, { useState } from "react";
import { 
  FaTools, FaDatabase, FaUsers, FaCogs, FaQuestionCircle
} from "react-icons/fa";
import "./erp.css";
import erpImage1 from "./erpimages/image1.png";
import erpImage2 from "./erpimages/image2.png";
import erpImage3 from "./erpimages/image3.png";
import erpImage4 from "./erpimages/image4.png";

const services = [
  {
    id: 1,
    title: "ERP Implementation",
    description: "Our ERP implementation services are designed to integrate the entire business process into one seamless system. We work with your team to understand your requirements, customize ERP solutions, and ensure smooth deployment across your organization. From inventory and accounting to human resources and customer relationship management (CRM), we enable your business to function more efficiently by streamlining and automating key processes.",
    image: erpImage1
  },
  {
    id: 2,
    title: "ERP Customization",
    description: "We provide ERP customization services to adapt the system to your specific business needs. Whether you need modifications to the user interface or additional modules for finance, sales, or supply chain management, we tailor the ERP solution to suit your business workflows and processes. Our team ensures that the system is fully aligned with your operational needs and can scale as your business grows.",
    image: erpImage2
  },
  {
    id: 3,
    title: "ERP Integration",
    description: "We help businesses integrate ERP with other systems such as CRM, accounting software, and e-commerce platforms. Our integration services ensure data consistency across platforms, improve decision-making, and enhance collaboration among departments. Our ERP integrations help businesses automate processes, reduce manual effort, and create a unified system that provides real-time information.",
    image: erpImage3
  },
  {
    id: 4,
    title: "ERP Support & Maintenance",
    description: "Our ERP support and maintenance services ensure that your system remains efficient and up-to-date. We offer regular updates, bug fixes, and performance optimization. Additionally, we provide on-demand troubleshooting and problem resolution. Our support team is available to ensure that your ERP system is always running smoothly, minimizing downtime and disruptions to your business.",
    image: erpImage4
  },
];

const ERPDevelopment = () => {
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
        handleCloseForm(); // Close form after submission
        setShowPopup(true); // Show popup after form submission
      };
    
      const handlePopupClose = () => {
        setShowPopup(false); // Manually close the popup when user clicks "Close"
      };
  return (
    <div className="erp-container">
      <header className="erp-header">
        <h1>Expert ERP Solutions for Your Business</h1>
        <p>Transform your enterprise operations with our tailored ERP solutions.</p>
      </header>
      <section className="erp-services">
        {services.map((service, index) => (
          <div key={service.id} className={`erp-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container">
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
          <summary>What is ERP implementation?</summary>
          <p>ERP implementation is the process of installing and configuring ERP software to integrate various business processes, such as accounting, inventory management, and human resources, into a unified system.</p>
        </details>
        <details className="faq-item">
          <summary>How does ERP customization benefit my business?</summary>
          <p>ERP customization ensures the system fits the specific needs of your business by modifying features, workflows, and interfaces to optimize the software for your unique operations.</p>
        </details>
        <details className="faq-item">
          <summary>What is ERP integration?</summary>
          <p>ERP integration involves connecting your ERP system with other business tools, such as CRM or accounting software, to ensure seamless data flow and avoid duplicating efforts.</p>
        </details>
      </section>
      <section className="contact-cta">
        <h2>Ready to Upgrade Your Business with ERP?</h2>
        <p>Our ERP solutions are designed to enhance your business operations, improve data accuracy, and streamline workflows. Let us help you transform your business!</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default ERPDevelopment;
