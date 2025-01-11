import React, { useEffect } from "react";
import "./services.css";
import webDevImage from "./serviceimages/image1.png";
import mobileDevImage from "./serviceimages/image2.png";
import erpImage from "./serviceimages/image3.png";
import customSoftwareImage from "./serviceimages/image4.png";
import digitalMarketingImage from "./serviceimages/image5.png";
import cloudSolutionsImage from "./serviceimages/image6.png";
import cybersecurityImage from "./serviceimages/image7.png";
import itSupportImage from "./serviceimages/image8.png";

// Service Data
const servicesData = [
  { title: "Web Development", description: "Build responsive, high-performing websites tailored to your needs.", image: webDevImage },
  { title: "Mobile Apps Development", description: "Develop user-friendly mobile apps for iOS and Android platforms.", image: mobileDevImage },
  { title: "ERP Solutions", description: "Optimize business operations with our ERP system integrations.", image: erpImage },
  { title: "Custom Software", description: "Create custom software solutions to meet specific business needs.", image: customSoftwareImage },
  { title: "Digital Marketing", description: "Reach your audience effectively through digital marketing strategies.", image: digitalMarketingImage },
  { title: "Cloud Solutions", description: "Secure and scalable cloud solutions to manage your data and applications.", image: cloudSolutionsImage },
  { title: "Cybersecurity", description: "Protect your business from cyber threats with robust security measures.", image: cybersecurityImage },
  { title: "IT Support", description: "Reliable IT support to keep your systems up and running smoothly.", image: itSupportImage }
];

const Service = () => {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const serviceElements = document.querySelectorAll(".service-row");
      serviceElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className={`service-row ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="btn-primary">Know More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

