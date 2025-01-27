import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./cyber.css";
import image1 from "./cyberimages/image1.png"; 
import image2 from "./cyberimages/image2.png"; 
import image3 from "./cyberimages/image3.png"; 

const cybersecurityServices = [
  {
    id: 1,
    title: "Secure Client Systems Against Hacking",
    description: `In today's rapidly evolving digital landscape, protecting client systems from hacking and malicious threats is critical. We offer comprehensive solutions designed to secure your systems against unauthorized access, data breaches, and cyberattacks. Our experts deploy advanced techniques such as intrusion detection systems (IDS), proactive monitoring, and real-time threat analysis to safeguard your critical data and ensure uninterrupted operations. With our services, your systems will remain resilient against the latest hacking tactics and vulnerabilities.`,
    image: image1,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Develop Custom Firewalls and Security Protocols",
    description: `We understand that each business has unique security needs. Our team specializes in designing and developing custom firewalls tailored to your specific environment. Whether you're protecting an internal network, securing cloud resources, or preventing external intrusions, we provide a robust, multi-layered approach to defend your infrastructure. Additionally, we craft security protocols that align with industry standards, integrating them seamlessly with your systems to ensure maximum protection against cyber threats.`,
    image: image2,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "Security Audits and Compliance Checks",
    description: `Regular security audits and compliance checks are vital for ensuring your systems meet the latest security standards and regulatory requirements. Our cybersecurity experts perform thorough assessments to identify vulnerabilities, inefficiencies, and potential areas of risk within your systems. We also help your organization stay compliant with industry regulations such as GDPR, HIPAA, and PCI-DSS, reducing the likelihood of costly penalties and reputational damage. Our detailed reports provide actionable insights to improve your security posture.`,
    image: image3,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">Learn More</button>
      </div>
    ),
  },
];

const CybersecuritySolutions = () => {
  return (
    <div className="cybersecurity-container">
      <header className="cybersecurity-header">
        <h1>Enhance Your Security with Expert Cybersecurity Solutions</h1>
        <p>
          Protect your systems, data, and infrastructure with our comprehensive cybersecurity services. From securing client systems against hacking to custom firewalls, compliance checks, and more, we have the expertise to safeguard your business.
        </p>
      </header>
      <section className="cybersecurity-services">
        {cybersecurityServices.map((service, index) => (
          <div key={service.id} className={`cybersecurity-service ${index % 2 === 0 ? "reverse" : ""}`}>
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
          <summary>How do you secure client systems from hacking?</summary>
          <p>
            We deploy a combination of threat detection tools, encryption techniques, and continuous monitoring to protect client systems from hacking attempts. Our proactive approach ensures that we can prevent, detect, and mitigate potential attacks before they cause any damage.
          </p>
        </details>
        <details className="faq-item">
          <summary>What makes your firewalls custom?</summary>
          <p>
            We understand that every business has different security needs. Our custom firewalls are tailored specifically to your business environment, ensuring that all potential vulnerabilities are addressed with the highest level of protection.
          </p>
        </details>
        <details className="faq-item">
          <summary>Why are security audits important for my business?</summary>
          <p>
            Regular security audits help identify any gaps or weaknesses in your system's security. They also ensure that your business stays compliant with regulatory standards, ultimately protecting your data and preventing costly breaches.
          </p>
        </details>
      </section>
      <section className="contact-cta">
        <h2>Ready to Secure Your Business?</h2>
        <p>
          Don't wait until it's too late. Contact us today to learn how we can enhance your business's cybersecurity and protect you from emerging threats.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default CybersecuritySolutions;
