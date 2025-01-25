import React from "react";
import "./wework.css";

const WeWorkForSec = () => {
  return (
    <div className="we-work-for-sec">
      <h2 className="sec-title">We Work For</h2>
      <p className="sec-description">
        We work with diverse <strong>organizations</strong>, <strong>enterprises</strong>, <strong>startups</strong>, <strong>individuals</strong>, and <strong>brands</strong> to create powerful software from an excellent idea.
      </p>
      <div className="sec-grid">
        <div className="sec-card">
          <div className="sec-icon">🚀</div>
          <h3 className="sec-card-title">Startups</h3>
        </div>
        <div className="sec-card">
          <div className="sec-icon">🏢</div>
          <h3 className="sec-card-title">Enterprises</h3>
        </div>
        <div className="sec-card">
          <div className="sec-icon">👥</div>
          <h3 className="sec-card-title">Organizations</h3>
        </div>
        <div className="sec-card">
          <div className="sec-icon">💻</div>
          <h3 className="sec-card-title">Individuals</h3>
        </div>
        <div className="sec-card">
          <div className="sec-icon">🏫</div>
          <h3 className="sec-card-title">Institutions</h3>
        </div>
        <div className="sec-card">
          <div className="sec-icon">🛍️</div>
          <h3 className="sec-card-title">Retailers</h3>
        </div>
      </div>
    </div>
  );
};

export default WeWorkForSec;
