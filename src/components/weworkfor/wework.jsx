import React from "react";
import "./wework.css";
import { FaRocket, FaBuilding, FaUsers, FaLaptop, FaUniversity, FaShoppingCart } from "react-icons/fa";

const WeWorkForSec = () => {
  const services = [
    { icon: <FaRocket />, title: "Startups" },
    { icon: <FaBuilding />, title: "Enterprises" },
    { icon: <FaUsers />, title: "Organizations" },
    { icon: <FaLaptop />, title: "Individuals" },
    { icon: <FaUniversity />, title: "Institutions" },
    { icon: <FaShoppingCart />, title: "Retailers" },
  ];

  return (
    <div className="we-work-for-sec">
      <div className="we">
        <h2 className="sec-title">We Work For</h2>
        <p className="sec-description">
          We work with diverse <strong>organizations</strong>, <strong>enterprises</strong>, <strong>startups</strong>, <strong>individuals</strong>, and <strong>brands</strong> to create powerful software from an excellent idea.
        </p>
        <div className="sec-grid">
          {services.map((service, index) => (
            <div className="sec-card" key={index}>
              <div className="sec-card-content">
                <div className="sec-icon">{service.icon}</div>
                <h3 className="sec-card-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeWorkForSec;


