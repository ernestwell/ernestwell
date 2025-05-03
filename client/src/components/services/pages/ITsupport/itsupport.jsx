import  { useState } from "react";
import "./itsupport.css";
import image1 from "./supportimages/undraw_miro_pu4s.svg";
import image2 from "./supportimages/undraw_product-iteration_r2wg.svg";
import image3 from "./supportimages/undraw_work-time_zbsw.svg";

const services = [
  {
    id: 1,
    title: "IT Services",
    description: `Managed IT services provide businesses with comprehensive support to oversee their IT infrastructure, including network monitoring, troubleshooting, and cloud management. Outsourcing IT operations helps reduce downtime, improve performance, and stay updated with technology trends.`,
    image: image1,
  },
  {
    id: 2,
    title: "Technical Support",
    description: `Remote technical support allows businesses to resolve IT issues quickly without on-site visits. Using secure remote tools, technicians diagnose and fix problems in real-time, ensuring minimal disruption.`,
    image: image2,
  },
  {
    id: 3,
    title: "System Setup & Maintenance",
    description: `System setup and maintenance ensure businesses have optimized IT infrastructure from the start. Experts handle hardware, software, and network installation, ensuring seamless integration and security.`,
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
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const meetingDate = formData.get("meetingDate");

    let year, month, day;
    if (scheduleMeeting && meetingDate) {
      const selectedDate = new Date(meetingDate);
      year = selectedDate.getFullYear();
      month = selectedDate.getMonth() + 1;
      day = selectedDate.getDate();
    }

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUoX9R5YpNEBNCfhcmStK5sLMPBSRqM46kd7reZvISLVwxBg/formResponse";
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("entry.630075460", name);
    formDataToSend.append("entry.657108051", email);
    if (scheduleMeeting) {
      formDataToSend.append("entry.908925682_year", year);
      formDataToSend.append("entry.908925682_month", month);
      formDataToSend.append("entry.908925682_day", day);
    }

    fetch(googleFormURL, { method: "POST", body: formDataToSend, mode: "no-cors" })
      .then(() => {
        handleCloseForm();
        setShowPopup(true);
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Manually close the popup when user clicks "Close"
  };

  return (
    <div className="itsupport-container">
      <header className="itsupport-header">
        <h1>IT SUPPORT</h1>
        <p>
          Our IT support services are designed to ensure that your technology infrastructure runs smoothly and securely. From managed IT services to system setup and remote technical support.
        </p>
      </header>

      <section className="itsupport-services">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`itsupport-service ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="image-container-8">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-8">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button
                className="primary-btn-8"
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
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="scheduleMeeting" checked={scheduleMeeting} onChange={() => setScheduleMeeting(!scheduleMeeting)} style={{ marginRight: "10px" }} />
              <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
            </div>
            {scheduleMeeting && (
              <div className="form-group centered" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label htmlFor="meetingDate">Select a Date & Time</label>
                <input type="datetime-local" id="meetingDate" name="meetingDate" required style={{ marginTop: "10px" }} />
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
        <h2>Frequently Asked Questions
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
    </div>
  );
};

export default ITSupport;
