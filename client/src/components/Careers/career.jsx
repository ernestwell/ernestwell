import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaCode, FaMobileAlt, FaDatabase, FaPencilRuler, FaBug } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./career.css";

const jobListings = [
  { id: 1, title: "Web Developer", location: "Remote", type: "Full-Time", icon: <FaCode />, role: "Frontend Developer", skills: "HTML, CSS, JavaScript, React", description: "Develop and maintain modern, responsive websites using React and other frontend technologies." },
  { id: 2, title: "App Developer", location: "Remote", type: "Full-Time", icon: <FaMobileAlt />, role: "Mobile Developer", skills: "Flutter, React Native, Swift, Kotlin", description: "Design and develop mobile applications with great user experience." },
  { id: 3, title: "ERP Consultant", location: "Hybrid", type: "Contract", icon: <FaDatabase />, role: "Business Consultant", skills: "SAP, Oracle ERP, Microsoft Dynamics", description: "Assist businesses in implementing and managing ERP solutions efficiently." },
  { id: 4, title: "UI/UX Designer", location: "On-Site", type: "Full-Time", icon: <FaPencilRuler />, role: "Visual Designer", skills: "Figma, Adobe XD, Wireframing", description: "Create aesthetically pleasing and user-friendly interfaces." },
  { id: 5, title: "Quality Assurance Engineer", location: "Remote", type: "Full-Time", icon: <FaBug />, role: "QA Engineer", skills: "Automation Testing, Selenium, Jest", description: "Ensure the quality and reliability of software applications before deployment." },
  { id: 6, title: "Cybersecurity Analyst", location: "Remote", type: "Full-Time", icon: <FaBug />, role: "Security Analyst", skills: "Network Security, Penetration Testing, SIEM", description: "Monitor and protect systems from cybersecurity threats, ensuring data integrity and security compliance." }
];


const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  const heroImages = [
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", text: "Innovate with Us" },
    { src: "https://images.unsplash.com/photo-1565728744382-61accd4aa148", text: "Join a Culture of Excellence" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", text: "Transform Your Career" }
  ];
  
  return (
    <div className="careers-container">
      {/* Hero Section with Sliding Effect */}
      <div className="careers-hero">
        <Slider {...sliderSettings}>
          {heroImages.map((slide, index) => (
            <div key={index} className="hero-slide">
              <img src={slide.src} alt={slide.text} />
              <div className="hero-overlay">
                <h1>{slide.text}</h1>
                <p>Be part of a team that values innovation, creativity, and excellence.</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Job Listings */}
      <div className="careers-content">
        <div className="job-listings">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
              <div className="logo-container">{job.icon}</div>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.location} | {job.type}</p>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Popup */}
      {selectedJob && (
        <div className="job-details-overlay" onClick={() => setSelectedJob(null)}>
          <div className="job-details" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedJob(null)}>✖</button>
            
            <div className="job-header">
              <div className="job-icon">{selectedJob.icon}</div>
              <h2>{selectedJob.title}</h2>
              <p className="job-role">{selectedJob.role}</p>
            </div>
            
            <div className="job-info">
              <p><strong>📍 Location:</strong> {selectedJob.location}</p>
              <p><strong>⏳ Type:</strong> {selectedJob.type}</p>
              <p><strong>🛠 Skills:</strong> {selectedJob.skills}</p>
            </div>
            
            <p className="job-description">{selectedJob.description}</p>
            
            <button className="apply-btn" onClick={() => navigate("/apply", { state: { selectedJob } })}>
              🚀 Apply Now
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CareersPage;
