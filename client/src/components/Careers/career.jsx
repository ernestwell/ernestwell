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
    title: "Php Developer Internship", 
    location: "Remote-(3 Months)", 
    type: "Part-Time", 
    icon: <FaCode />, 
    role: "Full-Stack Developer", 
    skills: "HTML, CSS, JavaScript,PHP,MYSql,AJAX",
    image: img,
    description: [
      "Php Developer Internship (Unpaid)",
      "Develop and maintain web applications using CodeIgniter, Laravel, and Perfex CRM.",
      "Customize Perfex CRM to meet business needs",
      "Integrate APIs and third-party tools",
      "Debug, troubleshoot, and provide support for ongoing projects",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews, testing, and QA processes",
      "Stay updated with the latest tech trends and backend best practices"
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
    title: "Laravel Developer Internship", 
    location: "Remote-(3 Months)", 
    type: "Part-Time(Unpaid)", 
    icon: <FaMobileAlt />, 
    role: "Full Stack Developer", 
    skills: "PHP, Laravel, JavaScript,HTML,CSS,React/Vue.js",
    image: img, 
    description: [
      "Laravel Developer Internship (Unpaid)",
      "Basic knowledge of PHP, Laravel, JavaScript, and modern frontend frameworks (React or Vue.js)",
      "Familiarity with Git, RESTful APIs, and general backend/frontend development ",
      "Willingness to learn, adapt, and contribute to real projects",
      "Good problem-solving and communication skills ",
      "Write clean, modular code and contribute to project architecture and logic",
      "Learn the CodeCanyon submission process, quality standards, and documentation practices",
      "Work alongside experienced developers and designers in a startup-style environment"
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
    title: " Web Developer Internship ", 
    location: "Remote-(3 Months )", 
    type: "Part-Time(Unpaid)", 
    icon: <FaDatabase />, 
    role: "Web Developer Intern ", 
    skills: "HTML,CSS,JavaScript,WordPress or Webflow",
    image: img,
    description: [
      "Assist in developing and maintaining websites",
      "Implement clean, responsive UI designs",
      "Collaborate with designers and content teams",
      "Mentorship from experienced developers",
      "Letter of Recommendation & Internship Certificate will be provided",
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
    title: "AI Agent Developer Internship ", 
    location: "Remote - (3 Months)", 
    type: "Part-Time(Unpaid)", 
    icon: <FaPencilRuler />, 
    role: "AI Agent Developer Intern", 
    skills: "Python, APIs,LLMs, NLP and machine learning workflows",
    image:img,
    description: [
      "Collaborate on real-world projects that impact businesses",
      "Design intelligent agents capable of autonomous task execution, planning, and decision-making.",
      "Integrate LLMs and NLP models for natural language understanding and contextual communication.",
      "Develop multi-agent systems to manage complex workflows and collaborative tasks.",
      "Enable tool and API usage for dynamic information retrieval and real-world interactions.",
      "Implement memory and retrieval systems (e.g., RAG, embeddings) for context retention and reasoning.",
      "Optimize agent performance for efficiency, accuracy, and real-time responsiveness.",
      "students, recent graduates, or self-learners in Computer Science, AI, or related fields",
      "Certificate and letter of recommendation upon completion will be Provided"
    ],
    candidateSkills: [
      "0-2 years of experience as a UI/Graphical Designer.",
      "Portfolio of design projects showcasing creativity.",
      "Up-to-date knowledge of Figma, Adobe XD, and design trends.",
      "Good time-management skills and ability to meet deadlines.",
      "Fresher with UI/UX design certification(s) can also apply."
    ]
  },
  // { 
  //   id: 5, 
  //   title: "QA ENGINEER", 
  //   location: "Remote", 
  //   type: "Full-Time", 
  //   icon: <FaBug />, 
  //   role: "QA Engineer", 
  //   skills: "Automation Testing, Selenium, Jest",
  //   image: img, 
  //   description: [
  //     "Ensure software quality through rigorous testing methodologies.",
  //     "Develop automated test scripts using Selenium and Jest.",
  //     "Identify and report software defects and inconsistencies.",
  //     "Collaborate with developers to improve application stability.",
  //     "Maintain detailed documentation of test cases and reports."
  //   ],
  //   candidateSkills: [
  //     "0-2 years of experience in software testing or quality assurance.",
  //     "Knowledge of automation testing tools like Selenium and Jest.",
  //     "Strong analytical and problem-solving skills.",
  //     "Understanding of software development lifecycle and testing methodologies.",
  //     "Fresher with QA certification(s) can also apply."
  //   ]
  // },
  // { 
  //   id: 5, 
  //   title: "QA ENGINEER", 
  //   location: "Remote", 
  //   type: "Full-Time", 
  //   icon: <FaBug />, 
  //   role: "QA Engineer", 
  //   skills: "Automation Testing, Selenium, Jest",
  //   image: img, 
  //   description: [
  //     "Ensure software quality through rigorous testing methodologies.",
  //     "Develop automated test scripts using Selenium and Jest.",
  //     "Identify and report software defects and inconsistencies.",
  //     "Collaborate with developers to improve application stability.",
  //     "Maintain detailed documentation of test cases and reports."
  //   ],
  //   candidateSkills: [
  //     "0-2 years of experience in software testing or quality assurance.",
  //     "Knowledge of automation testing tools like Selenium and Jest.",
  //     "Strong analytical and problem-solving skills.",
  //     "Understanding of software development lifecycle and testing methodologies.",
  //     "Fresher with QA certification(s) can also apply."
  //   ]
  // }
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