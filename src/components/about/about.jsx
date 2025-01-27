import React from "react";
import "./about.css";  
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-description">
            We are a dedicated team of professionals with a shared mission to deliver exceptional results for our clients. Our expertise spans various industries, providing tailored solutions that align with your business goals. We prioritize innovation, quality, and integrity, ensuring that every project exceeds expectations.
          </p>
          <p className="about-quote">
            "Turning ideas into impactful solutions."
          </p>
          <a href="#contact" className="about-btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;

