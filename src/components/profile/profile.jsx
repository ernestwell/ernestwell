import React from "react";
import "./profile.css";
import img1 from "./images/undraw_in-the-office_ma2b.svg";
import img2 from "./images/undraw_working_n9u0.svg";

function Profile() {
  return (
    <div className="profile-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Vision</h1>
          <p className="hero-text">
            We deliver innovative solutions that redefine the possibilities of
            technology and creativity. Let’s embark on this journey together.
          </p>
          <a href="#about" className="button-primary">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-box">
            <div className="about-illustration">
              <img src={img2} alt="About Illustration" />
            </div>
            <div className="about-content">
              <div className="content-box">
                <h2>About Erneswell</h2>
                <p>
                  At Erneswell, we are committed to delivering high-quality web
                  solutions that combine creativity and technology. Our mission is
                  to create impactful digital experiences for businesses and
                  individuals alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Project 1"
              className="project-image"
            />
            <h3>Project Alpha</h3>
            <p>Innovative web application that simplifies business processes.</p>
          </div>
          <div className="project-card">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Project 2"
              className="project-image"
            />
            <h3>Project Beta</h3>
            <p>
              AI-powered platform designed to enhance user experience through
              automation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
