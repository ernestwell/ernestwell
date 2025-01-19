import React from "react";
import { 
  FaMobileAlt, FaShoppingCart, FaDatabase, FaTools, 
  FaQuestionCircle
} from "react-icons/fa";
import "./appdev.css";
import image1 from "./appimages/image1.png";
import image2 from "./appimages/image2.png";
import image3 from "./appimages/image3.png";
import image4 from "./appimages/image4.png";

const services = [
  {
    id: 1,
    title: "Native Mobile Apps",
    description: "Native mobile apps offer the best performance and user experience on iOS and Android devices. These apps are built specifically for each platform, ensuring smooth navigation, optimal performance, and the ability to fully leverage device features. We provide native app development services that include high-performance mobile solutions tailored to your business needs, with features like push notifications, GPS, and offline capabilities. Services include personalized app design, robust coding, seamless integration, and timely updates.",
    image: image1,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Cross-Platform Apps",
    description: "Cross-platform apps are designed to work seamlessly across multiple platforms (iOS, Android, etc.) with a single codebase. We specialize in building cross-platform apps using frameworks like Flutter and React Native, ensuring fast development, cost-effectiveness, and consistent performance across devices. Whether you're targeting a broad audience or looking to simplify your app development process, our cross-platform solutions deliver the best value while maintaining a native-like experience.",
    image: image2,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "E-commerce Mobile Apps",
    description: "We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience. From product catalogs and shopping cart functionality to secure payment gateways, our e-commerce mobile solutions offer a seamless mobile shopping experience. We focus on mobile optimization to ensure fast load times, easy navigation, and mobile-optimized checkout processes. Our apps come with features like inventory management, real-time tracking, and personalized shopping experiences to enhance user engagement.",
    image: image3,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 4,
    title: "Custom Mobile Applications",
    description: "Our custom mobile applications are designed to meet specific business requirements. Whether you need an internal tool, CRM, or any unique functionality, we offer scalable and secure custom mobile solutions. Our team works closely with you to understand your goals and deliver a mobile app that fits perfectly into your workflow. We provide features like real-time updates, data syncing, third-party integrations, and user-friendly interfaces that ensure high efficiency and a seamless user experience.",
    image: image4,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
];

const MobileDevelopment = () => {
  return (
    <div className="mobiledev-container">
      {/* Header */}
      <header className="mobiledev-header">
        <h1>Expert Mobile App Development Services</h1>
        <p>Transform your business with high-quality, custom mobile app solutions.</p>
      </header>

      {/* Services Section */}
      <section className="mobiledev-services">
        {services.map((service, index) => (
          <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="content-container">
              <div className="service-icon-container">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {service.buttons}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>
        {/* Sample FAQs */}
        <details className="faq-item">
          <summary>Which type of mobile app is best for my business?</summary>
          <p>If you need a high-performance, platform-specific app, a native mobile app is the best. For broader reach and faster development, cross-platform apps are ideal.</p>
        </details>
        <details className="faq-item">
          <summary>Can my app be upgraded in the future?</summary>
          <p>Absolutely! We build scalable apps that allow for future upgrades and feature additions as your business grows.</p>
        </details>
        <details className="faq-item">
          <summary>Do you offer maintenance and support?</summary>
          <p>Yes! We offer ongoing support and maintenance to ensure your app remains up-to-date and secure with regular updates and performance enhancements.</p>
        </details>
      </section>

      {/* Contact Section */}
      <section className="contact-cta">
        <h2>Ready to Build Your Mobile App?</h2>
        <p>From startups to established businesses, we offer custom mobile solutions that fit your needs.</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default MobileDevelopment;

