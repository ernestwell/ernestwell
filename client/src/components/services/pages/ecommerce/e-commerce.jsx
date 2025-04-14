import { useState } from "react";
import "./e-commerce.css";
import image1 from "./ecom/undraw_development_s4gv.svg";
import image2 from "./ecom/undraw_web-devices_i15y.svg";
import image3 from "./ecom/undraw_web-shopping_m3o2.svg";
import image4 from "./ecom/undraw_window-shopping_9l2k.svg";

const services = [
  {
    id: 1,
    title: "Online Store Development",
    description: "Launch your own feature-rich online store with a secure, scalable, and responsive design that works across all devices.",
    image: image1,
  },
  {
    id: 2,
    title: "Shopping Cart & Checkout",
    description: "We build optimized, user-friendly shopping carts and smooth checkout flows that reduce abandonment and increase conversions.",
    image: image2,
  },
  {
    id: 3,
    title: "Secure Payment Integration",
    description: "Accept payments seamlessly with secure integration of gateways like Stripe, PayPal, Razorpay, and more.",
    image: image3,
  },
  {
    id: 4,
    title: "E-Commerce Analytics & Reports",
    description: "Track sales, user behavior, and KPIs with advanced analytics and dashboard integration for smarter decision-making.",
    image: image4,
  },
];

const ECommerce = () => {
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
        <h1>E-COMMERCE DEVELOPMENT</h1>
        <p>Build, scale, and grow your online store with cutting-edge e-commerce solutions tailored to your business.</p>
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
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>✅ Thank you! Your request has been received. We will get back to you soon.</p>
            <button onClick={() => setShowPopup(false)} className="primary-btn">Close</button>
          </div>
        </div>
      )}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Which e-commerce platform should I choose for my business?</summary>
          <p>The choice depends on your business size and goals. We can help you select the right platform—whether it's Shopify for quick deployment, WooCommerce for WordPress integration, or a custom-built solution for full control and scalability.</p>
        </details>
        <details className="faq-item">
          <summary>Can you integrate payment gateways like Stripe or Razorpay?</summary>
          <p>Yes, we support all major payment gateways, including Stripe, Razorpay, PayPal, and more. We ensure secure, seamless, and reliable transactions for your customers.</p>
        </details>
        <details className="faq-item">
          <summary>Will my e-commerce site be mobile-friendly?</summary>
          <p>Absolutely. We design responsive e-commerce websites that work beautifully across devices, ensuring a smooth experience for users on smartphones, tablets, and desktops.</p>
        </details>
        <details className="faq-item">
          <summary>Do you offer post-launch support and maintenance?</summary>
          <p>Yes, we offer flexible post-launch maintenance plans to keep your e-commerce site updated, secure, and optimized for performance and sales.</p>
        </details>
      </section>
    </div>
  );
};

export default ECommerce;
