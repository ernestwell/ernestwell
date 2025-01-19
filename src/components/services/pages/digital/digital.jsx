import React from "react";
import { FaSearch, FaEnvelope, FaPaintBrush, FaFileAlt, FaQuestionCircle } from "react-icons/fa";
import "./digital.css";
import image1 from "./digitalimages/image1.png";
import image2 from "./digitalimages/image2.png";
import image3 from "./digitalimages/image3.png";
import image4 from "./digitalimages/image4.png";

const services = [
  {
    id: 1,
    title: "SEO & Social Media Management",
    description:
      "SEO and Social Media Management are crucial for boosting your online presence and engagement. We provide tailored SEO strategies to help improve your website’s ranking and optimize it for search engines. Our social media management services ensure that your business connects with the right audience through well-curated posts, campaigns, and strategic engagement across all platforms.",
    image: image1,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "Email Marketing Solutions",
    description:
      "Effective email marketing is key to maintaining customer relationships and driving sales. Our email marketing services include creating personalized campaigns, optimizing open rates, and improving customer engagement. We help you build automated workflows, segmented campaigns, and track performance for better results.",
    image: image2,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "Branding & Logo Design",
    description:
      "Your brand’s identity is crucial to its success. We offer professional branding and logo design services that reflect your company’s core values and vision. From creating a strong visual identity to establishing a cohesive brand strategy, we ensure that your brand stands out in the market.",
    image: image3,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
  {
    id: 4,
    title: "Content Creation & Management",
    description:
      "Content is king, and we help you create high-quality content that resonates with your target audience. From blogs and articles to video content and graphics, we manage the entire content creation process. Our team ensures content is optimized for SEO and delivered consistently across all platforms.",
    image: image4,
    buttons: (
      <div className="service-buttons">
        <button className="primary-btn">See Demo</button>
      </div>
    ),
  },
];

const DigitalMarketingSolutions = () => {
  return (
    <div className="digital-marketing-container">
      {/* Header */}
      <header className="mobiledev-header">
        <h1>Digital Marketing Solutions to Grow Your Business</h1>
        <p>Enhance your online presence with tailored strategies in SEO, social media, email marketing, branding, and content management.</p>
      </header>

      {/* Services Section */}
      <section className="mobiledev-container">
        <div className="mobiledev-services">
          {services.map((service, index) => (
            <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>
        {/* Sample FAQs */}
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

      {/* Contact Section */}
      <section className="contact-cta">
        <h2>Ready to Take Your Digital Marketing to the Next Level?</h2>
        <p>From SEO and social media to email marketing and branding, we offer complete digital marketing solutions tailored to your business needs.</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default DigitalMarketingSolutions;
