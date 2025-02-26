import { useState } from "react";

import "./customSoftware.css";
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";


const customServices = [
  {
    id: 1,
    title: "Workflow Automation Tools",
    description:
      "Streamline business operations by automating repetitive tasks such as data entry, approvals, and notifications. Real-time monitoring helps track progress and identify inefficiencies, while seamless integration ensures compatibility with CRM, ERP, and other business tools. Custom workflows allow businesses to tailor automation processes to their specific needs, improving accuracy and efficiency.",
    image: image1,
  },
  {
    id: 2,
    title: "Employee Monitoring Systems",
    description:
      "Optimize workforce productivity by tracking and analyzing employee activities, including time usage, application activity, and overall performance. Detailed insights help identify top performers and areas that need improvement. Time management features track working hours, breaks, and idle periods, ensuring accountability. Advanced security measures prevent data breaches with access logs and compliance monitoring.",
    image: image2,
  },
  {
    id: 3,
    title: "Scheduling and Booking Systems",
    description:
      "Simplify appointment scheduling and reservations with an automated booking system that allows customers and employees to manage their time efficiently. Built-in reminders and notifications help reduce no-shows, while seamless integration synchronizes schedules with calendars, CRM tools, and other business platforms. Analytics provide valuable insights into peak hours, customer behavior, and overall booking trends.",
    image: image3,
  },
];


const CustomSoftwareSolutions = () => {
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
    <div className="custom-software-container">
      <header className="custom-header">
        <h1>Custom Software Solutions </h1>
        <p>
          Unlock your business potential with tailored software solutions
          designed to enhance efficiency and productivity.
        </p>
      </header>

      <section className="custom-services">
        {customServices.map((service, index) => (
          <div
            key={service.id}
            className={`custom-service ${
              index % 2 === 0 ? "reverse" : ""
            }`}
          >
            <div className="image-container-4">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-4">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="service-details">
                <p>{service.details}</p>
              </div>
              <button className="primary-btn-4" onClick={() => handleShowForm(service)}>See Demo</button>
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
          <summary>Why choose custom software over off-the-shelf solutions?</summary>
          <p>
            Custom software is tailored to your specific business needs,
            ensuring better efficiency and scalability compared to generic
            solutions.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can custom software integrate with my current systems?</summary>
          <p>
            Yes, our solutions are designed to seamlessly integrate with your
            existing tools and platforms, such as CRM, ERP, or third-party
            APIs.
          </p>
        </details>
        <details className="faq-item">
          <summary>What is the timeline for custom software development?</summary>
          <p>
            The timeline depends on the complexity and scope of the project.
            Typically, we work closely with clients to ensure timely delivery
            without compromising on quality.
          </p>
        </details>
      </section>
    </div>
  );
};

export default CustomSoftwareSolutions;
