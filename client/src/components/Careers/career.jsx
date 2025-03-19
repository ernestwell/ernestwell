import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaCode, FaMobileAlt, FaDatabase, FaPencilRuler, FaBug } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./career.css";
import img from "./images/custom.svg"

const jobListings = [
  { 
    id: 1, 
    title: "WEB DEVELOPER", 
    location: "Remote", 
    type: "Full-Time", 
    icon: <FaCode />, 
    role: "Frontend Developer", 
    skills: "HTML, CSS, JavaScript, React",
    image: img,
    description: [
      "Develop and maintain modern, responsive websites using React, JavaScript, and CSS.",
      "Optimize web applications for speed, scalability, and cross-browser compatibility.",
      "Collaborate with UI/UX designers to implement user-friendly interfaces.",
      "Integrate RESTful APIs and ensure seamless data flow.",
      "Debug and resolve frontend issues, improving performance and usability.",
    ],
    candidateSkills: [
      "0-2 years of experience in Frontend Development.",
      "Strong portfolio of web development projects.",
      "Proficiency in HTML, CSS, JavaScript, and React.",
      "Good time-management skills and ability to meet tight deadlines.",
      "Fresher with frontend certification(s) can also apply."
    ]
  },
  { 
    id: 2, 
    title: "APP DEVELOPER", 
    location: "Remote", 
    type: "Full-Time", 
    icon: <FaMobileAlt />, 
    role: "Mobile Developer", 
    skills: "Flutter, React Native, Swift, Kotlin",
    image: img, 
    description: [
      "Develop cross-platform mobile applications using Flutter or React Native.",
      "Ensure application compatibility across different devices and operating systems.",
      "Optimize mobile applications for performance and responsiveness.",
      "Collaborate with backend developers for API integration.",
      "Troubleshoot and debug mobile applications to enhance user experience."
    ],
    candidateSkills: [
      "0-2 years of experience in mobile app development.",
      "Portfolio of mobile applications developed.",
      "Proficiency in Flutter, React Native, Swift, or Kotlin.",
      "Understanding of mobile UI/UX best practices.",
      "Fresher with mobile development certification(s) can also apply."
    ]
  },
  { 
    id: 3, 
    title: "ERP CONSULTANT", 
    location: "Hybrid", 
    type: "Contract", 
    icon: <FaDatabase />, 
    role: "Business Consultant", 
    skills: "SAP, Oracle ERP, Microsoft Dynamics",
    image: img,
    description: [
      "Assist businesses in implementing and optimizing ERP solutions.",
      "Analyze business processes and recommend ERP configurations.",
      "Train employees on ERP functionalities and workflows.",
      "Troubleshoot ERP system issues and provide technical support.",
      "Ensure compliance with industry standards and best practices."
    ],
    candidateSkills: [
      "1-3 years of experience in ERP consulting or implementation.",
      "Strong knowledge of SAP, Oracle ERP, or Microsoft Dynamics.",
      "Excellent problem-solving and analytical skills.",
      "Ability to communicate technical concepts to non-technical users.",
      "Certification in ERP software is a plus."
    ]
  },
  { 
    id: 4, 
    title: "UI/UX DESIGNER", 
    location: "On-Site", 
    type: "Full-Time", 
    icon: <FaPencilRuler />, 
    role: "UI/UX Designer", 
    skills: "Figma, Adobe XD, Wireframing",
    image:img,
    description: [
      "Create user-friendly and visually appealing UI designs.",
      "Conduct user research and apply findings to design solutions.",
      "Develop wireframes, prototypes, and high-fidelity mockups.",
      "Optimize UI components for accessibility and responsiveness.",
      "Collaborate with developers to ensure seamless design-to-code implementation."
    ],
    candidateSkills: [
      "0-2 years of experience as a UI/Graphical Designer.",
      "Portfolio of design projects showcasing creativity.",
      "Up-to-date knowledge of Figma, Adobe XD, and design trends.",
      "Good time-management skills and ability to meet deadlines.",
      "Fresher with UI/UX design certification(s) can also apply."
    ]
  },
  { 
    id: 5, 
    title: "QA ENGINEER", 
    location: "Remote", 
    type: "Full-Time", 
    icon: <FaBug />, 
    role: "QA Engineer", 
    skills: "Automation Testing, Selenium, Jest",
    image: img, 
    description: [
      "Ensure software quality through rigorous testing methodologies.",
      "Develop automated test scripts using Selenium and Jest.",
      "Identify and report software defects and inconsistencies.",
      "Collaborate with developers to improve application stability.",
      "Maintain detailed documentation of test cases and reports."
    ],
    candidateSkills: [
      "0-2 years of experience in software testing or quality assurance.",
      "Knowledge of automation testing tools like Selenium and Jest.",
      "Strong analytical and problem-solving skills.",
      "Understanding of software development lifecycle and testing methodologies.",
      "Fresher with QA certification(s) can also apply."
    ]
  },
  { 
    id: 5, 
    title: "QA ENGINEER", 
    location: "Remote", 
    type: "Full-Time", 
    icon: <FaBug />, 
    role: "QA Engineer", 
    skills: "Automation Testing, Selenium, Jest",
    image: img, 
    description: [
      "Ensure software quality through rigorous testing methodologies.",
      "Develop automated test scripts using Selenium and Jest.",
      "Identify and report software defects and inconsistencies.",
      "Collaborate with developers to improve application stability.",
      "Maintain detailed documentation of test cases and reports."
    ],
    candidateSkills: [
      "0-2 years of experience in software testing or quality assurance.",
      "Knowledge of automation testing tools like Selenium and Jest.",
      "Strong analytical and problem-solving skills.",
      "Understanding of software development lifecycle and testing methodologies.",
      "Fresher with QA certification(s) can also apply."
    ]
  }
];

// Group jobs by role
const groupedJobs = jobListings.reduce((acc, job) => {
  if (!acc[job.role]) acc[job.role] = [];
  acc[job.role].push(job);
  return acc;
}, {});

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
      {/* Hero Section */}
      <div className="careers-hero-1">
        <Slider {...sliderSettings}>
          {heroImages.map((slide, index) => (
            <div key={index} className="hero-slide-1">
              <img src={slide.src} alt={slide.text} />
              <div className="hero-overlay-1">
                <h1>{slide.text}</h1>
                <p>Be part of a team that values innovation, creativity, and excellence.</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="careers-content">
        {Object.keys(groupedJobs).map((role) => (
          <div key={role} className="role-section">
            <h2 className="role-title">{role}</h2>
            <div className="job-listings">
              {groupedJobs[role].map((job) => (
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
        ))}
      </div> */}
      <div className="careers-intro">
          <h2>Find Your Perfect Role</h2>
          <p>At our company, we value innovation, creativity, and collaboration. Explore opportunities that match your skills and passion.</p>
      </div>
      <div className="careers-content">

        <div className="job-listings">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
              <div className="logo-container">
                <img src={job.image} alt={job.title} className="job-image" />
              </div>
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
            
            <button 
              className="apply-btn" 
              onClick={() => {
                const { icon, ...jobData } = selectedJob;
                navigate("/job-description", { state: { selectedJob: jobData } });
              }}>
              🚀 Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;