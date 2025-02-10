import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./itsupport.css";
import image1 from "./supportimages/image1.png"; 
import image2 from "./supportimages/image2.png"; 
import image3 from "./supportimages/image3.png"; 

const services = [
  {
    id: 1,
    title: "Managed IT Services",
    description: `Managed IT services provide businesses with comprehensive support to oversee and manage their IT infrastructure, including network monitoring, troubleshooting, and managing cloud services. By outsourcing IT operations to a reliable provider, businesses can reduce downtime, improve system performance, and stay ahead of the latest technology trends without needing in-house staff to handle these areas.

      The service includes network monitoring and security, ensuring proactive identification of potential issues before they can affect operations. This also includes threat detection, firewall management, and system security updates. Additionally, managed IT services encompass system optimization to ensure that IT systems are running at peak performance, with regular system performance tuning, software updates, and preventive maintenance to avoid downtime. With proactive support, businesses have access to a dedicated team of IT professionals available around the clock, ready to handle any issues that may arise remotely or on-site.`,
    image: image1,
  },
  {
    id: 2,
    title: "Remote Technical Support",
    description: `Remote technical support provides businesses with the ability to get quick help without needing to have IT technicians visit their physical location. Technicians can remotely diagnose and resolve issues using secure remote tools, allowing them to access and fix devices, software, and networks in real-time. This service ensures minimal disruption to daily operations, as IT issues can be resolved promptly without the need for on-site visits.

      The support includes troubleshooting and problem resolution for desktops, servers, and network issues, enabling technicians to remotely assess and fix problems without delay. Additionally, remote technical support covers software installation and updates, ensuring that the latest versions are always installed, and that any issues or bugs in existing software are addressed quickly. The service also includes virus and malware removal, where technicians identify and remove harmful software from systems to ensure protection against security breaches and data loss. This service can be invaluable for businesses that require rapid response and expert assistance without the overhead of an in-house IT team.`,
    image: image2,
  },
  {
    id: 3,
    title: "System Setup and Maintenance",
    description: `System setup and maintenance services ensure that businesses have the right IT infrastructure from the beginning and maintain it effectively as they grow. The service includes the installation of hardware, software, network components, and all necessary configuration to ensure that your systems are optimized for efficiency and security. IT professionals will ensure that all systems are seamlessly integrated and ready to support business operations.

      Regular maintenance is key to keeping systems running at peak performance. This includes software updates, security patches, hardware maintenance, and general troubleshooting to prevent issues before they occur. The goal of system maintenance is to prevent downtime and keep systems secure, while also optimizing performance. IT experts also provide recommendations for upgrading hardware or software as necessary to ensure that your systems remain up to date and can handle future growth. By maintaining these systems, businesses avoid expensive repairs and unexpected downtime, ensuring a smooth and reliable IT infrastructure.`,
    image: image3,
  },
];

const ITSupport = () => {
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
    <div className="itsupport-container">
      <header className="itsupport-header">
        <h1>Comprehensive IT Support Solutions</h1>
        <p>
          Our IT support services are designed to ensure that your technology infrastructure runs smoothly and securely. From managed IT services to system setup and remote technical support, we provide the tools and expertise your business needs to stay ahead in today's digital landscape.
        </p>
      </header>

      <section className="itsupport-services">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`itsupport-service ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button
                className="primary-btn"
                onClick={() => handleShowForm(service)}
              >
                See Demo
              </button>
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
        <h2>
          <FaQuestionCircle className="faq-icon" /> Frequently Asked Questions
        </h2>
        <details className="faq-item">
          <summary>Why is managed IT support important for businesses?</summary>
          <p>
            Managed IT services help businesses reduce downtime, improve system performance, and access the latest technology without needing an in-house team to manage everything. It enables businesses to stay competitive while focusing on their core operations.
          </p>
        </details>
        <details className="faq-item">
          <summary>How does remote technical support work?</summary>
          <p>
            Remote technical support allows IT technicians to troubleshoot and resolve issues via secure remote access tools, ensuring minimal disruption to business operations. This eliminates the need for on-site visits while providing rapid assistance.
          </p>
        </details>
        <details className="faq-item">
          <summary>What does system setup and maintenance include?</summary>
          <p>
            System setup and maintenance cover the installation of hardware, software, and network components. Ongoing maintenance includes regular updates, troubleshooting, and hardware optimization to ensure system reliability and security.
          </p>
        </details>
      </section>

      <section className="contact-cta">
        <h2>Ready to Enhance Your IT Support?</h2>
        <p>
          Get in touch with our team to learn how we can streamline your IT operations and ensure your systems run smoothly and securely. Contact us today!
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default ITSupport;
