import  { useState } from "react"; // React core import
import "./cloud.css"; // Stylesheet
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";


const services = [
  {
    id: 1,
    title: "Cloud Storage & File Sharing",
    description: `Our Cloud Storage solutions provide secure, scalable, and globally accessible file storage. Access your data from any device with end-to-end encryption and multi-factor authentication for security. Real-time collaboration enables teams to share, edit, and manage files efficiently, with version control ensuring seamless teamwork. Reduce reliance on physical storage and streamline workflows with flexible, cost-effective solutions.`,
    image: image1,
  },
  {
    id: 2,
    title: "Cloud-Based Backup Systems",
    description: `Protect your business from data loss with automated cloud backups. Our solution ensures secure, scheduled backups and rapid recovery to minimize downtime. Disaster recovery features safeguard against cyberattacks, hardware failures, and unexpected events. With scalable, cost-efficient storage, you only pay for what you use, ensuring business continuity and resilience.`,
    image: image2,
  },
  {
    id: 3,
    title: "Custom SaaS Solutions",
    description: `Optimize operations with tailored SaaS solutions, from CRM systems to project management tools. We develop software that seamlessly integrates with your existing tools, simplifying workflows and boosting efficiency. Scalable and continuously updated, our solutions grow with your business, reducing operational overhead while keeping you at the forefront of technology.`,
    image: image3,
  },
];

const CloudSolutions = () => {
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
    <div className="cloud-container">

      <header className="cloud-header">
        <h1>CLOUD SOLUTIONS</h1>
        <p>
          Unlock new opportunities for growth and efficiency with our comprehensive cloud services. From storage to tailored SaaS products, we provide the tools and expertise to elevate your business to the next level.
        </p>
      </header>
      <section className="cloud-services">
        {services.map((service, index) => (
          <div key={service.id} className={`cloud-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-3">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-3">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-3" onClick={() => handleShowForm(service)}>See Demo</button>
              
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
          <summary>How does cloud storage improve business efficiency?</summary>
          <p>
            Cloud storage eliminates the need for physical storage devices, providing seamless access to data from anywhere, improving collaboration, and ensuring robust security.
          </p>
        </details>
        <details className="faq-item">
          <summary>What makes cloud-based backup systems essential?</summary>
          <p>
            Cloud-based backups ensure data integrity by automating backups, providing instant recovery options, and offering protection against disasters like hardware failure or cyberattacks.
          </p>
        </details>
        <details className="faq-item">
          <summary>How do tailored SaaS products benefit my business?</summary>
          <p>
            Tailored SaaS solutions streamline your operations by providing software designed specifically for your workflows. These solutions reduce inefficiencies, scale effortlessly, and adapt to your growth.
          </p>
        </details>
      </section>
    </div>
  );
};

export default CloudSolutions;
