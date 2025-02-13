import React, { useState } from "react";
import './profile.css';  

const Profile = () => {
  const projects = [
    { title: "Project Title 1", description: "Description of project 1", imgSrc: "/path-to-project-image1.jpg" },
    { title: "Project Title 2", description: "Description of project 2", imgSrc: "/path-to-project-image2.jpg" },
    { title: "Project Title 3", description: "Description of project 3", imgSrc: "/path-to-project-image3.jpg" },
    { title: "Project Title 4", description: "Description of project 4", imgSrc: "/path-to-project-image4.jpg" },
    { title: "Project Title 5", description: "Description of project 5", imgSrc: "/path-to-project-image5.jpg" },
    // Add more projects as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length - 2));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (projects.length - 2)) % (projects.length - 2));
  };

  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-content">
          <h1 className="company-name">ErnestWell Business Solutions</h1>
          <p className="tagline">Innovating for a Better Tomorrow</p>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At ErnestWell, we are dedicated to providing innovative business
          solutions that empower organizations to achieve their goals. With a
          rich history of excellence and a focus on client success, we deliver
          top-notch services across industries. Our team of experts is committed to helping businesses navigate
    challenges and seize opportunities. Join us as we pave the way
    toward a brighter, more successful future.
        </p>
        <p>
          <strong>Our Vision:</strong> To be the global leader in business
          solutions through innovation and trust.
        </p>
        <p>
          <strong>Our Mission:</strong> Delivering excellence and fostering
          growth for businesses worldwide.
        </p>
      </section>

      {/* Portfolio Section as a Slider */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        
        {/* Slider for Projects as Cards */}
        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imgSrc} alt={`Project ${index + 1}`} className="project-img" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-nav">
            <button className="prev" onClick={prevProject}>
              &#10094;
            </button>
            <button className="next" onClick={nextProject}>
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>
            "ErnestWell transformed our business operations and helped us scale
            like never before!"
          </p>
          <p className="client-name">- Client Name</p>
        </div>
        <div className="testimonial">
          <p>
            "A trusted partner who delivers exceptional results every time."
          </p>
          <p className="client-name">- Client Name</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced team of professionals.</li>
          <li>Customized solutions for every business need.</li>
          <li>Proven track record of success.</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;