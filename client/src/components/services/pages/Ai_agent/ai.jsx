import { useState } from "react";
import "./ai.css";
import aiImage1 from "./ai_folder/undraw_chat-bot_44el.svg";
import aiImage2 from "./ai_folder/undraw_listening_fz9g.svg";
import aiImage3 from "./ai_folder/undraw_email-capture_m6k0.svg";
import aiImage4 from "./ai_folder/undraw_artificial-intelligence_fuvd.svg";

const aiAgentServices = [
  {
    id: 1,
    title: "AI Chatbots",
    description:
      "Smart chatbots designed to handle customer support, lead generation, and FAQs using natural language processing and machine learning.",
    image: aiImage1,
  },
  {
    id: 2,
    title: "Voice Assistants",
    description:
      "Voice-enabled AI agents for seamless hands-free interactions, integrated with platforms like Alexa, Google Assistant, or custom systems.",
    image: aiImage2,
  },
  {
    id: 3,
    title: "Customer Support Agents",
    description:
      "24/7 virtual agents that assist users by resolving queries, escalating issues, and enhancing overall support experience.",
    image: aiImage3,
  },
  {
    id: 4,
    title: "AI Workflow Automators",
    description:
      "AI agents that automate repetitive tasks such as email triaging, scheduling, or data entry to improve productivity and reduce human error.",
    image: aiImage4,
  },
];

const AIAgentSolutions = () => {
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

    fetch(googleFormURL, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    })
      .then(() => {
        handleCloseForm();
        setShowPopup(true);
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <div className="mobiledev-container">
      <header className="mobiledev-header">
        <h1>AI AGENT SOLUTIONS</h1>
        <p>
          Elevate your business with intelligent AI agents tailored for voice,
          chat, and workflow automation.
        </p>
      </header>

      <section className="mobiledev-services">
        {aiAgentServices.map((service, index) => (
          <div
            key={service.id}
            className={`mobiledev-service ${
              index % 2 === 0 ? "reverse" : ""
            }`}
          >
            <div className="image-container-2">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container-2">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button
                className="primary-btn-2"
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
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="checkbox"
                id="scheduleMeeting"
                checked={scheduleMeeting}
                onChange={() => setScheduleMeeting(!scheduleMeeting)}
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="scheduleMeeting">
                I want to schedule a meeting
              </label>
            </div>
            {scheduleMeeting && (
              <div
                className="form-group centered"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label htmlFor="meetingDate">Select a Date & Time</label>
                <input
                  type="datetime-local"
                  id="meetingDate"
                  name="meetingDate"
                  required
                  style={{ marginTop: "10px" }}
                />
              </div>
            )}
            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                Submit Request
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={handleCloseForm}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>
              ✅ Thank you! Your request has been received. We will get back to
              you soon.
            </p>
            <button onClick={() => setShowPopup(false)} className="primary-btn">
              Close
            </button>
          </div>
        </div>
      )}
      <section className="faq-section">
        <h2> Frequently Asked Questions </h2>

        <details className="faq-item">
            <summary>What is an AI Agent?</summary>
            <p>
            An AI Agent is a software program powered by artificial intelligence that
            performs tasks autonomously, such as answering questions, automating workflows,
            or providing personalized user support.
            </p>
        </details>

        <details className="faq-item">
            <summary>How can AI agents improve my business operations?</summary>
            <p>
            AI agents reduce human workload by automating repetitive tasks, responding to
            customer queries in real-time, and providing data-driven insights to improve
            efficiency and customer satisfaction.
            </p>
        </details>

        <details className="faq-item">
            <summary>Are your AI solutions customizable for specific industries?</summary>
            <p>
            Yes, our AI agents are highly customizable. We tailor them to fit the unique
            needs of various industries such as healthcare, finance, education, e-commerce,
            and more.
            </p>
        </details>

        <details className="faq-item">
            <summary>Is it hard to integrate AI agents with my existing tools?</summary>
            <p>
            Not at all. Our AI agents are designed with flexibility in mind and can be
            integrated seamlessly with your current platforms, CRM systems, and internal tools.
            </p>
        </details>

        <details className="faq-item">
            <summary>How do you ensure data security with your AI agents?</summary>
            <p>
            We follow best practices in AI ethics and cybersecurity, including end-to-end
            encryption, access control, and regular security audits to protect your data and
            user privacy.
            </p>
        </details>
        </section>
    </div>
  );
};

export default AIAgentSolutions;
