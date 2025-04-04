import { useState } from "react";
import {  FaQuestionCircle } from "react-icons/fa";
import "./digital.css";
import image1 from "./digitalimages/undraw_social-strategy_v9qr.svg";
import image2 from "./digitalimages/undraw_mobile-marketing_x9am.svg";
import image3 from "./digitalimages/undraw_creative-team_wfty.svg";
import image4 from "./digitalimages/undraw_wait-in-line_fbdq.svg";
const services = [
  {
    id: 1,
    title: "SEO & Social Media Management",
    description:
      "Boost your online presence with tailored SEO strategies and strategic social media management. We optimize your website for search engines and engage your audience with curated posts, campaigns, and platform-specific strategies.",
    image: image1
  },
  {
    id: 2,
    title: "Email Marketing Solutions",
    description:
      "Drive sales and customer engagement with effective email marketing. We create personalized campaigns, automate workflows, segment audiences, and track performance to maximize open rates and conversions.",
    image: image2
  },
  {
    id: 3,
    title: "Branding & Logo Design",
    description:
      "Build a strong brand identity with professional branding and logo design. We craft visually striking logos and cohesive brand strategies that reflect your vision and make a lasting impact.",
    image: image3
  },
  {
    id: 4,
    title: "Content Creation & Management",
    description:
      "Engage your audience with high-quality content, from blogs and articles to videos and graphics. Our team ensures SEO optimization and consistent content delivery across all platforms.",
    image: image4
  },
];


const DigitalMarketingSolutions = () => {
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
    <div className="digital-marketing-container">
      <header className="mobiledev-header">
        <h1>DIGITAL MARKETING</h1>
        <p>Enhance your online presence with tailored strategies in SEO, social media, email marketing, branding, and content management.</p>
      </header>
      <section className="mobiledev-container">
        <div className="mobiledev-services">
          {services.map((service, index) => (
            <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
              <div className="image-container-6">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="content-container-6">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button className="primary-btn-6" onClick={() => handleShowForm(service)}>See Demo</button>
              </div>
            </div>
          ))}
        </div>
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
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Which digital marketing service is right for my business?</summary>
          <p>It depends on your business needs. SEO is great for long-term visibility, social media can help you engage directly with your audience, email marketing is effective for lead nurturing, branding establishes your company’s identity, and content management keeps your audience engaged consistently.</p>
        </details>
        <details className="faq-item">
          <summary>How do I track the performance of my digital marketing campaigns?</summary>
          <p>We provide detailed analytics for all services. From tracking website traffic for SEO to monitoring open rates and conversions for email marketing, we offer transparent and data-driven insights to optimize your campaigns.</p>
        </details>
        <details className="faq-item">
          <summary>Can you help with ongoing management of my digital marketing efforts?</summary>
          <p>Absolutely! We offer ongoing support for all our services, including regular updates, performance analysis, and adjustments to strategies to ensure continuous growth.</p>
        </details>
      </section>
    </div>
  );
};

export default DigitalMarketingSolutions;
