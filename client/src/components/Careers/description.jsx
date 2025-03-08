import { useState } from "react";
import { useParams } from "react-router-dom";
import "./description.css";

const jobDetails = {
  "ui-ux-developer": {
    title: "UI/UX Developer",
    location: "Remote",
    description: "Design intuitive interfaces ensuring a great user experience.",
    responsibilities: [
      "Design and prototype UI elements.",
      "Ensure accessibility and responsiveness.",
      "Conduct user research and testing.",
    ],
    skills: ["Figma", "Adobe XD", "React", "HTML, CSS, JavaScript"],
  },
  "full-stack-developer": {
    title: "Full Stack Developer",
    location: "Hybrid",
    description: "Develop scalable web applications with front-end and back-end expertise.",
    responsibilities: [
      "Develop front-end interfaces using React.",
      "Build and manage APIs.",
      "Optimize databases for performance.",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  "digital-marketing": {
    title: "Digital Marketing Specialist",
    location: "Remote",
    description: "Plan and execute digital campaigns to boost brand visibility.",
    responsibilities: [
      "Manage social media strategies.",
      "Optimize SEO and SEM campaigns.",
      "Analyze campaign performance.",
    ],
    skills: ["Google Ads", "SEO & Analytics", "Content Marketing"],
  },
  "frontend-developer": {
    title: "Frontend Developer",
    location: "Remote",
    description: "Develop interactive and responsive user interfaces.",
    responsibilities: [
      "Convert designs into functional web pages.",
      "Optimize applications for performance.",
    ],
    skills: ["React", "CSS3", "JavaScript (ES6+)"],
  },
  "backend-developer": {
    title: "Backend Developer",
    location: "Onsite",
    description: "Build and maintain the server-side logic of web applications.",
    responsibilities: [
      "Develop RESTful APIs.",
      "Optimize database performance.",
    ],
    skills: ["Node.js", "SQL", "NoSQL databases"],
  },
};

const JobDescription = () => {
  const { jobId } = useParams(); 
  const formattedJobId = jobId.toLowerCase().replace(/\s+/g, "-"); // Normalize the jobId
  const job = jobDetails[formattedJobId]; 

  const [showForm, setShowForm] = useState(false);
  const handleApplyClick = () => setShowForm(true);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setShowForm(false);
  };

  if (!job) return <h2>Job not found</h2>; // Handle invalid job IDs

  return (
    <div className="job-description-container">
      <h1>{job.title}</h1>
      <p><strong>Location:</strong> {job.location}</p>

      <h2>About the Role</h2>
      <p>{job.description}</p>

      <h2>Key Responsibilities</h2>
      <ul>
        {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <h2>Required Skills</h2>
      <ul>
        {job.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>

      <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>

      {showForm && (
        <div className="apply-form-container">
          <h2>Apply for {job.title}</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Upload Resume</label>
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobDescription;