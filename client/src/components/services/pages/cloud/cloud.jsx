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

  const handlePopupClose = () => {
    setShowPopup(false); // Manually close the popup when user clicks "Close"
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

    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUoX9R5YpNEBNCfhcmStK5sLMPBSRqM46kd7reZvISLVwxBg/formResponse";
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

  return (
    <div className="mobiledev-container">
      <header className="mobiledev-header">
        <h1>APP DEVELOPMENT SERVICES</h1>
        <p>Transform your business with high-quality, custom mobile app solutions.</p>
      </header>
      <section className="mobiledev-services">
        {services.map((service, index) => (
          <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-2"><img src={service.image} alt={service.title} /></div>
            <div className="content-container-2">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-2" onClick={() => handleShowForm(service)}>See Demo</button>
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
