import { useState } from "react";
import {  FaQuestionCircle } from "react-icons/fa";
import "./digital.css";
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";
import image4 from "../../serviceimages/no.svg";

const services = [
  {
    id: 1,
    title: "SEO & Social Media Management",
    description:
      "SEO and Social Media Management are crucial for boosting your online presence and engagement. We provide tailored SEO strategies to help improve your website’s ranking and optimize it for search engines. Our social media management services ensure that your business connects with the right audience through well-curated posts, campaigns, and strategic engagement across all platforms.",
    image: image1
  },
  {
    id: 2,
    title: "Email Marketing Solutions",
    description:
      "Effective email marketing is key to maintaining customer relationships and driving sales. Our email marketing services include creating personalized campaigns, optimizing open rates, and improving customer engagement. We help you build automated workflows, segmented campaigns, and track performance for better results.",
    image: image2
  },
  {
    id: 3,
    title: "Branding & Logo Design",
    description:
      "Your brand’s identity is crucial to its success. We offer professional branding and logo design services that reflect your company’s core values and vision. From creating a strong visual identity to establishing a cohesive brand strategy, we ensure that your brand stands out in the market.",
    image: image3
  },
  {
    id: 4,
    title: "Content Creation & Management",
    description:
      "Content is king, and we help you create high-quality content that resonates with your target audience. From blogs and articles to video content and graphics, we manage the entire content creation process. Our team ensures content is optimized for SEO and delivered consistently across all platforms.",
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
        handleCloseForm(); // Close form after submission
        setShowPopup(true); // Show popup after form submission
      };
    
      const handlePopupClose = () => {
        setShowPopup(false); // Manually close the popup when user clicks "Close"
      };
  return (
    <div className="digital-marketing-container">
      <header className="mobiledev-header">
        <h1>Digital Marketing Solutions to Grow Your Business</h1>
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
