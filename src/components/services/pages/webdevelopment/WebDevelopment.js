import React from "react";
import { 
  FaLaptopCode, FaShoppingCart, FaDatabase, FaTools, 
  FaQuestionCircle
} from "react-icons/fa";
import "./WebDevelopment.css";
import image1 from "./webimages/image1.png";
import image2 from "./webimages/image2.png";
import image3 from "./webimages/image3.png";
import image4 from "./webimages/image4.png";

const services = [
  {
    id: 1,
    // icon: <FaLaptopCode className="service-icon" />,
    title: "Static Websites",
    description: "Static websites offer a streamlined, high-performance solution for businesses looking to establish a professional online presence without the need for complex backend processes. These websites are designed to be fast, secure, and easy to maintain, as they are powered by fixed content that does not rely on a database. Ideal for businesses that want to showcase portfolios, company profiles, or promotional landing pages, static websites ensure a seamless user experience across devices with responsive layouts and mobile optimization. The focus is on fast loading times, a strong SEO foundation, and providing an elegant yet simple browsing experience. Services include personalized design, mobile responsiveness, SEO-friendly architecture, and reliable hosting solutions.",
    image: image1,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 2,
    // icon: <FaDatabase className="service-icon" />,
    title: "Dynamic Websites",
    description: "Dynamic websites are built to cater to businesses that need real-time content updates and enhanced interactivity with their audience. These websites integrate dynamic features such as content management systems (CMS), user authentication, and personalized user experiences through database-driven content. Ideal for blogs, news platforms, and business portals, dynamic websites are built to handle frequent content updates, provide complex functionality, and engage users with tailored experiences. Our dynamic solutions ensure easy management, enhanced user experience, and scalability for future growth. The service includes content management tools, customized themes, SEO-optimized architecture, and user-friendly dashboards.",
    image: image2,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 3,
    // icon: <FaShoppingCart className="service-icon" />,
    title: "E-commerce Platforms",
    description: "We specialize in building secure, high-performance e-commerce platforms that drive sales and provide a seamless shopping experience. Our services include secure payment gateways, user-friendly product catalogs, shopping cart functionality, and mobile-optimized designs. From start-ups to well-established businesses, we create custom-tailored e-commerce solutions that are optimized for fast loading, high scalability, and top-notch security. Your customers will enjoy a smooth shopping experience with easy navigation, safe payments, and a variety of payment options. Additionally, we provide features like product recommendation engines, inventory management, and real-time order tracking.",
    image: image3,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 4,
    // icon: <FaTools className="service-icon" />,
    title: "Custom Web Applications",
    description: "Our custom web applications are built to address specific business needs, from CRM systems to booking platforms and automation tools. These applications are designed with scalability, security, and seamless integrations in mind. Whether you're looking to automate tasks, improve business processes, or offer a unique user experience, we provide tailored solutions that drive efficiency. Our services include advanced security protocols, real-time data processing, third-party service integration, and responsive user interfaces across all devices. We ensure your web application is reliable, intuitive, and easy to maintain.",
    image: image4,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
];

const WebDevelopment = () => {
  return (
    <div className="webdev-container">
      <header className="webdev-header">
        <h1>Expert Web Development Services</h1>
        <p>Build your digital presence with high-quality, custom-built web solutions.</p>
      </header>

      <section className="webdev-services">
        {services.map((service, index) => (
          <div key={service.id} className={`webdev-service ${index % 2 === 0 ? "reverse" : ""}`}>
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

      <section className="faq-section">
        <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>Which type of website is best for my business?</summary>
          <p>If you need a simple presence, a static website is sufficient. If you require real-time updates, go for a dynamic website. E-commerce is for selling online, and custom web apps fit specialized needs.</p>
        </details>
        <details className="faq-item">
          <summary>Can I upgrade my website later?</summary>
          <p>Yes! We build scalable solutions, allowing you to upgrade from static to dynamic websites or add new features as needed.</p>
        </details>
        <details className="faq-item">
          <summary>Do you provide ongoing support and maintenance?</summary>
          <p>Yes! We provide regular updates, security monitoring, and performance optimizations to ensure your website runs smoothly.</p>
        </details>
      </section>
      <section className="contact-cta">
        <h2>Let's Build Your Website</h2>
        <p>Whether it's a business website, online store, or custom solution, we’ve got you covered.</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default WebDevelopment;

