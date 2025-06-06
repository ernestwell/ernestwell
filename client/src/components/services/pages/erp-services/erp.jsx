import  { useState } from "react";
import "./erp.css";
import image1 from "./erpimages/undraw_analytics_6mru.svg";
import image2 from "./erpimages/undraw_data_0ml2.svg";
import image3 from "../../serviceimages/erp.svg";
import image4 from "./erpimages/undraw_developer-activity_dn7p.svg";

const services = [
  {
    id: 1,
    title: "ERP Implementation",
    description: "Our ERP implementation services are designed to integrate the entire business process into one seamless system. We work with your team to understand your requirements, customize ERP solutions, and ensure smooth deployment across your organization. From inventory and accounting to human resources and customer relationship management (CRM), we enable your business to function more efficiently by streamlining and automating key processes.",
    image: image1
  },
  {
    id: 2,
    title: "ERP Customization",
    description: "We provide ERP customization services to adapt the system to your specific business needs. Whether you need modifications to the user interface or additional modules for finance, sales, or supply chain management, we tailor the ERP solution to suit your business workflows and processes. Our team ensures that the system is fully aligned with your operational needs and can scale as your business grows.",
    image: image2
  },
  {
    id: 3,
    title: "ERP Integration",
    description: "We help businesses integrate ERP with other systems such as CRM, accounting software, and e-commerce platforms. Our integration services ensure data consistency across platforms, improve decision-making, and enhance collaboration among departments. Our ERP integrations help businesses automate processes, reduce manual effort, and create a unified system that provides real-time information.",
    image: image3
  },
  {
    id: 4,
    title: "ERP Support & Maintenance",
    description: "Our ERP support and maintenance services ensure that your system remains efficient and up-to-date. We offer regular updates, bug fixes, and performance optimization. Additionally, we provide on-demand troubleshooting and problem resolution. Our support team is available to ensure that your ERP system is always running smoothly, minimizing downtime and disruptions to your business.",
    image: image4
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
    <div className="erp-container">
      <header className="erp-header">
        <h1>ERP Solutions</h1>
        <p>Transform your enterprise operations with our tailored ERP solutions.</p>
      </header>
      <section className="erp-services">
        {services.map((service, index) => (
          <div key={service.id} className={`erp-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-7">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-7">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-7" onClick={() => handleShowForm(service)}>See Demo</button>
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
        <h2> Frequently Asked Questions</h2>
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
    </div>
  );
};

export default ERPDevelopment;
