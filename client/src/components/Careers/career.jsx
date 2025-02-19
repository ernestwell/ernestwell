import React, { useState } from "react";
import "./career.css";

import client2 from "./images/client-2.jpg";
import client3 from "./images/client-3.jpg";
import offer1 from "./images/offer-1.jpg";
import offer2 from "./images/offer-2.jpg";

const jobListings = [
  { id: 1, title: "Web Developer", location: "Remote", type: "Full-Time", image: client2 },
  { id: 2, title: "App Developer", location: "Remote", type: "Full-Time", image: client2 },
  { id: 3, title: "ERP Consultant", location: "Hybrid", type: "Contract", image: client3 },
  { id: 4, title: "UI/UX Designer", location: "On-Site", type: "Full-Time", image: offer1 },
  { id: 5, title: "Quality Assurance Engineer", location: "Remote", type: "Full-Time", image: offer2 }
];


const CareersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="careers-container">
      <div className="header">
        <h1>Join Our Team</h1>
        <p>We are looking for skilled professionals to build innovative solutions with us.</p>
      </div>

      <div className="job-listings">
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.title} className="job-image" />
            <div className="job-content">
              <h3>{job.title}</h3>
              <p>{job.location} | {job.type}</p>
              <button onClick={() => handleApplyClick(job)}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="application-form-overlay">
          <div className="application-form">
            <span className="close-btn" onClick={handleCloseForm}>&times;</span>
            <h2>Apply for {selectedJob?.title}</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone" required />

              <label>Resume</label>
              <input type="file" accept=".pdf,.doc,.docx" required />

              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
