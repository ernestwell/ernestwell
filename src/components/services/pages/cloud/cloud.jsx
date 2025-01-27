import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./cloud.css";
import image1 from "./cloudimages/image1.png";
import image2 from "./cloudimages/image2.png";
import image3 from "./cloudimages/image3.png";

const services = [
  {
    id: 1,
    title: "Cloud Storage & File Sharing Solutions",
    description: `In today's dynamic business environment, seamless access to data is essential. Our Cloud Storage and File Sharing Solutions provide secure, scalable, and easily accessible storage systems to meet these demands. With global accessibility, you can access your files from anywhere, on any device, as long as you have an internet connection. Our advanced security features ensure your data is protected with end-to-end encryption and multi-factor authentication. The solutions also enable real-time collaboration, allowing teams to share files and work together efficiently, with concurrent editing and version control. These services grow with your business needs, providing the flexibility required for both startups and enterprises. By reducing reliance on costly physical storage infrastructure, these solutions enhance collaboration and simplify workflows.`,
    image: image1,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Cloud-Based Backup Systems",
    description: `Data loss is a significant risk to businesses, and our Cloud-Based Backup Systems are designed to mitigate that risk. These systems automate your backups and secure them on the cloud, ensuring business continuity even in the event of data loss. With automated backups, you can schedule regular intervals to keep your data updated without manual intervention. In case of data loss or corruption, rapid recovery ensures minimal downtime. Our disaster recovery capabilities protect your data from unexpected events, such as hardware failure, cyberattacks, or natural disasters. The solution is scalable and cost-effective, as you only pay for the storage you use, with the flexibility to scale up as your data requirements grow. This solution provides peace of mind by safeguarding business-critical data and ensuring operational resilience.`,
    image: image2,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "SaaS Products Tailored to Clients’ Needs",
    description: `Every business has unique needs, and our tailored SaaS (Software-as-a-Service) solutions help optimize operations with custom tools and software. From CRM systems to project management tools, we develop software that aligns with your specific business processes. We ensure seamless integration with your existing tools, creating a unified platform that simplifies workflows. Our solutions are scalable, adapting to your growing business demands, and we provide effortless updates to ensure your software stays current with the latest features. By using our tailored SaaS products, businesses can focus on growth and reduce operational overhead, all while utilizing cutting-edge technology designed specifically for their industry.`,
    image: image3,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
];

const CloudSolutions = () => {
  return (
    <div className="cloud-container">

      <header className="cloud-header">
        <h1>Transform Your Business with Expert Cloud Solutions</h1>
        <p>
          Unlock new opportunities for growth and efficiency with our comprehensive cloud services. From storage to tailored SaaS products, we provide the tools and expertise to elevate your business to the next level.
        </p>
      </header>
      <section className="cloud-services">
        {services.map((service, index) => (
          <div key={service.id} className={`cloud-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
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
      <section className="contact-cta">
        <h2>Ready to Take Your Business to the Cloud?</h2>
        <p>
          Partner with us to unlock the full potential of cloud technology. Contact us today to get started.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default CloudSolutions;
