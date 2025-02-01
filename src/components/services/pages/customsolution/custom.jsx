import React from "react";
import {
  FaTools,
  FaLaptopCode,
  FaUsers,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";
import "./customSoftware.css";
import workflowImage from "./customimages/image1.png";
import monitoringImage from "./customimages/image2.png";
import schedulingImage from "./customimages/image3.png";

const customServices = [
  {
    id: 1,
    title: "Workflow Automation Tools",
    description:
      "Our Workflow Automation Tools are designed to simplify and optimize business processes. By automating repetitive tasks such as data entry, approvals, and notifications, businesses can increase efficiency and reduce human error. Customizable workflows ensure that your unique business processes are streamlined to perfection.",
    details: `
      - **Task Automation:** Eliminate manual effort in repetitive tasks.
      - **Real-Time Monitoring:** Track progress and identify inefficiencies.
      - **Seamless Integration:** Connect with your existing tools like CRM or ERP.
      - **Custom Workflows:** Tailor automation to your business needs.`,
    image: workflowImage,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Employee Monitoring Systems",
    description:
      "Track and analyze employee activities to enhance productivity and maintain accountability. Our Employee Monitoring Systems provide detailed insights into time usage, application activity, and compliance, ensuring optimal workforce performance.",
    details: `
      - **Activity Tracking:** Monitor apps, websites, and tasks.
      - **Performance Analysis:** Identify top performers and improvement areas.
      - **Time Management:** Track working hours, breaks, and idle time.
      - **Data Security:** Prevent breaches with detailed access logs.`,
    image: monitoringImage,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "Scheduling and Booking Systems",
    description:
      "Our Scheduling and Booking Systems streamline the management of appointments, meetings, and reservations. These systems are ideal for businesses needing seamless scheduling with customers and internal teams.",
    details: `
      - **Automated Booking:** Allow customers to book services online.
      - **Reminders and Notifications:** Send alerts to reduce no-shows.
      - **Multi-Channel Integration:** Sync bookings with calendars and CRM tools.
      - **Analytics:** Gain insights into peak times and customer preferences.`,
    image: schedulingImage,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
];

const CustomSoftwareSolutions = () => {
  return (
    <div className="custom-software-container">
      <header className="custom-header">
        <h1>Custom Software Solutions for Your Business</h1>
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
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="service-details">
                <h3>Key Features:</h3>
                <p>{service.details}</p>
              </div>
              {service.buttons}
            </div>
          </div>
        ))}
      </section>
      <section className="faq-section">
        <h2>
          <FaQuestionCircle className="faq-icon" /> Frequently Asked Questions
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
      <section className="contact-cta">
        <h2>Ready to Build Your Custom Solution?</h2>
        <p>
          Let us help you streamline your operations and achieve your business
          goals with our custom software solutions. Contact us to get started
          today!
        </p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default CustomSoftwareSolutions;
