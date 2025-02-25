import  { useState } from "react";
import "./cyber.css";
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";

const cybersecurityServices = [
  {
    id: 1,
    title: "Secure Client Systems Against Hacking",
    description: `In today's rapidly evolving digital landscape, protecting client systems from hacking and malicious threats is critical. We offer comprehensive solutions designed to secure your systems against unauthorized access, data breaches, and cyberattacks. Our experts deploy advanced techniques such as intrusion detection systems (IDS), proactive monitoring, and real-time threat analysis to safeguard your critical data and ensure uninterrupted operations. With our services, your systems will remain resilient against the latest hacking tactics and vulnerabilities.`,
    image: image1
  },
  {
    id: 2,
    title: "Develop Custom Firewalls and Security Protocols",
    description: `We understand that each business has unique security needs. Our team specializes in designing and developing custom firewalls tailored to your specific environment. Whether you're protecting an internal network, securing cloud resources, or preventing external intrusions, we provide a robust, multi-layered approach to defend your infrastructure. Additionally, we craft security protocols that align with industry standards, integrating them seamlessly with your systems to ensure maximum protection against cyber threats.`,
    image: image2
  },
  {
    id: 3,
    title: "Security Audits and Compliance Checks",
    description: `Regular security audits and compliance checks are vital for ensuring your systems meet the latest security standards and regulatory requirements. Our cybersecurity experts perform thorough assessments to identify vulnerabilities, inefficiencies, and potential areas of risk within your systems. We also help your organization stay compliant with industry regulations such as GDPR, HIPAA, and PCI-DSS, reducing the likelihood of costly penalties and reputational damage. Our detailed reports provide actionable insights to improve your security posture.`,
    image: image3
  },
];

const CybersecuritySolutions = () => {
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
    <div className="cybersecurity-container">
      <header className="cybersecurity-header">
        <h1>Enhance Your Security with Expert Cybersecurity Solutions</h1>
        <p>
          Protect your systems, data, and infrastructure with our comprehensive cybersecurity services. From securing client systems against hacking to custom firewalls, compliance checks, and more, we have the expertise to safeguard your business.
        </p>
      </header>
      <section className="cybersecurity-services">
        {cybersecurityServices.map((service, index) => (
          <div key={service.id} className={`cybersecurity-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-5">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-5">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-5" onClick={() => handleShowForm(service)}>See Demo</button>
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
        <h2> Frequently Asked Questions
        </h2>
        <details className="faq-item">
          <summary>How do you secure client systems from hacking?</summary>
          <p>
            We deploy a combination of threat detection tools, encryption techniques, and continuous monitoring to protect client systems from hacking attempts. Our proactive approach ensures that we can prevent, detect, and mitigate potential attacks before they cause any damage.
          </p>
        </details>
        <details className="faq-item">
          <summary>What makes your firewalls custom?</summary>
          <p>
            We understand that every business has different security needs. Our custom firewalls are tailored specifically to your business environment, ensuring that all potential vulnerabilities are addressed with the highest level of protection.
          </p>
        </details>
        <details className="faq-item">
          <summary>Why are security audits important for my business?</summary>
          <p>
            Regular security audits help identify any gaps or weaknesses in your system security. They also ensure that your business stays compliant with regulatory standards, ultimately protecting your data and preventing costly breaches.
          </p>
        </details>
      </section>
    </div>
  );
};

export default CybersecuritySolutions;
