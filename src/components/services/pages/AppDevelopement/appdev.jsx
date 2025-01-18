import React, { useState } from "react";
import "./appdev.css"; // Importing custom styles

const MobileAppDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of mobile apps does Ernstwell develop?",
      answer:
        "We specialize in developing both native and cross-platform applications for iOS and Android. Whether it's a startup MVP or a complex enterprise solution, we ensure high-performance and scalability.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "The development timeline depends on the complexity and features required. A simple app may take 2-3 months, while more complex solutions can take 6 months or more.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes! We offer ongoing support, updates, and maintenance to ensure your app remains secure, functional, and up-to-date with the latest technologies.",
    },
    {
      question: "Can you help with UI/UX design for the app?",
      answer:
        "Absolutely! Our team ensures that every app we develop has a seamless and engaging user experience, combining modern UI trends with user-centric designs.",
    },
    {
      question: "How can I get started with Ernstwell?",
      answer:
        "You can contact us through our website or email us directly. Our team will reach out to discuss your requirements and initiate the development process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mobile-app-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Innovative Mobile App Solutions by Ernstwell</h1>
          <p>
            Transforming ideas into feature-rich mobile applications tailored for business success.
            At <span className="brand-name">Ernstwell</span>, we craft intuitive, scalable, and high-performance 
            mobile applications designed to enhance user engagement and streamline business operations.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://undraw.co/illustrations" alt="Mobile App Development" />
        </div>
      </header>

      <section className="about-service">
        <p>
          Our expertise spans across **native** and **cross-platform development**, delivering robust iOS and Android applications 
          optimized for exceptional performance. Whether it's a startup MVP or a complex enterprise-grade solution, we ensure seamless 
          experiences with **cutting-edge UI/UX**, **secure architectures**, and **scalable frameworks**.
        </p>
      </section>

      <section className="why-choose">
        <h2>Why Choose Ernstwell?</h2>
        <p>
          We don’t just build apps; we create digital experiences. Our team focuses on user-centered designs, leveraging 
          the latest technologies to develop high-quality mobile applications. Every project is approached with a strategic mindset, 
          ensuring that your app aligns with your business objectives while delivering a seamless user journey.
        </p>
      </section>

      <section className="contact">
        <h2>Let's Build Something Extraordinary</h2>
        <p>
          Whether you're envisioning a cutting-edge mobile app or need expert consultation, **Ernstwell** is here to bring your vision to life. 
          Connect with us today to explore how we can help elevate your digital presence.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
