// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaCode, FaMobileAlt, FaDatabase, FaPencilRuler, FaBug } from "react-icons/fa";
// import "./description.css";

// const jobListings = [
//   { id: 1, title: "WEB DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaCode />, role: "Frontend Developer", skills: "HTML, CSS, JavaScript, React", description: ["Develop and maintain modern, responsive websites.", "Collaborate with designers to ensure seamless UI/UX."] },
//   { id: 2, title: "APP DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaMobileAlt />, role: "Mobile Developer", skills: "Flutter, React Native, Swift, Kotlin", description: ["Design and develop mobile applications.", "Ensure compatibility across different devices."] },
//   { id: 3, title: "ERP CONSULTANT", location: "Hybrid", type: "Contract", icon: <FaDatabase />, role: "Business Consultant", skills: "SAP, Oracle ERP, Microsoft Dynamics", description: ["Assist businesses in implementing ERP solutions.", "Train employees on ERP usage."] },
//   { id: 4, title: "UI/UX DESIGNER", location: "On-Site", type: "Full-Time", icon: <FaPencilRuler />, role: "UI/UX Designer", skills: "Figma, Adobe XD, Wireframing", description: ["Create aesthetically pleasing and user-friendly interfaces.", "Conduct user research to enhance UX."] },
//   { id: 5, title: "QA ENGINEER", location: "Remote", type: "Full-Time", icon: <FaBug />, role: "QA Engineer", skills: "Automation Testing, Selenium, Jest", description: ["Ensure software quality before deployment.", "Identify and resolve software defects."] }
// ];

// const CareerDescription = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedJobFromState = location.state?.selectedJob;
//   const [selectedJob] = useState(selectedJobFromState || jobListings[0]);
//   const [step, setStep] = useState(1);
//   const [resume, setResume] = useState(null);
//   const [coverLetter, setCoverLetter] = useState(null);

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   // Handle file uploads
//   const handleFileUpload = (e, setFile) => {
//     const file = e.target.files[0];
//     if (file && (file.type === "application/pdf" || file.type.includes("word"))) {
//       setFile(file);
//     } else {
//       alert("Please upload a valid PDF or Word document.");
//     }
//   };

//   return (
//     <div className="career-container">
//       <div className="career-content">
//         <button className="back-button" onClick={() => navigate(-1)}>←</button>

//         {selectedJob ? (
//           <>
//             <div className="job-title-container">
//               <h1 className="job-title">{selectedJob.title}</h1>
//               <p className="current-openings">📍 {selectedJob.location} | ⏳ {selectedJob.type}</p>
//             </div>

//             <h2 className="section-heading">Role</h2>
//             <p className="role">{selectedJob.role}</p>

//             <h2 className="section-heading">Required Skills</h2>
//             <p className="skills">{selectedJob.skills}</p>

//             <h2 className="section-heading">Job Description</h2>
//             <ul className="job-list">
//               {selectedJob.description.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </>
//         ) : (
//           <p className="error-message">❌ No job selected. Please choose a job to view details.</p>
//         )}
//       </div>

//       {/* Multi-Step Form */}
//       <div className="apply-section">
//         <h2 className="apply-heading">APPLY NOW</h2>
//         {/* <h3 className="basic-details">Step {step}: {getStepTitle(step)}</h3> */}

//         <form className="apply-form">
//           {renderFormStep(step, handleFileUpload, setResume, setCoverLetter)}

//           <div className="button-group">
//             {step > 1 && <button type="button" className="prev-button" onClick={prevStep}>Back</button>}
//             {step < 4 ? (
//               <button type="button" className="next-button" onClick={nextStep}>Next</button>
//             ) : (
//               <button type="submit" className="submit-button">Submit</button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Step Titles
// const getStepTitle = (step) => {
//   const titles = [
//     "Basic Personal Information",
//     "Job-Related Information",
//     "Education Details",
//     "Upload Resume & Cover Letter"
//   ];
//   return titles[step - 1];
// };

// // Render Form Steps
// const renderFormStep = (step, handleFileUpload, setResume, setCoverLetter) => {
//   switch (step) {
//     case 1:
//       return (
//         <>
//           <input type="text" placeholder="Full Name" className="input-field" required />
//           <input type="email" placeholder="Email Address" className="input-field" required />
//           <input type="tel" placeholder="Phone Number" className="input-field" required />
//         </>
//       );

//     case 2:
//       return (
//         <>
//           <input type="text" placeholder="Position Applying For" className="input-field" required />
//           <select className="input-field">
//             <option>Full-time</option>
//             <option>Part-time</option>
//             <option>Contract</option>
//             <option>Internship</option>
//           </select>
//           <input type="text" placeholder="Expected Salary" className="input-field" required />
//         </>
//       );

//     case 3:
//       return (
//         <>
//           <input type="text" placeholder="Highest Qualification" className="input-field" required />
//           <input type="text" placeholder="University/College Name" className="input-field" required />
//           <input type="text" placeholder="Field of Study" className="input-field" required />
//         </>
//       );

//     case 4:
//       return (
//         <>
//           <label className="file-label">Upload Resume (PDF/DOC)</label>
//           <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setResume)} required />

//           <label className="file-label">Upload Cover Letter (Optional)</label>
//           <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setCoverLetter)} />
//         </>
//       );

//     default:
//       return null;
//   }
// };

// export default CareerDescription;


// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaCode, FaMobileAlt, FaDatabase, FaPencilRuler, FaBug } from "react-icons/fa";
// import "./description.css";

// const jobListings = [
//   { id: 1, title: "WEB DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaCode />, role: "Frontend Developer", skills: "HTML, CSS, JavaScript, React", description: ["Develop and maintain modern, responsive websites.", "Collaborate with designers to ensure seamless UI/UX."] },
//   { id: 2, title: "APP DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaMobileAlt />, role: "Mobile Developer", skills: "Flutter, React Native, Swift, Kotlin", description: ["Design and develop mobile applications.", "Ensure compatibility across different devices."] },
//   { id: 3, title: "ERP CONSULTANT", location: "Hybrid", type: "Contract", icon: <FaDatabase />, role: "Business Consultant", skills: "SAP, Oracle ERP, Microsoft Dynamics", description: ["Assist businesses in implementing ERP solutions.", "Train employees on ERP usage."] },
//   { id: 4, title: "UI/UX DESIGNER", location: "On-Site", type: "Full-Time", icon: <FaPencilRuler />, role: "UI/UX Designer", skills: "Figma, Adobe XD, Wireframing", description: ["Create aesthetically pleasing and user-friendly interfaces.", "Conduct user research to enhance UX."] },
//   { id: 5, title: "QA ENGINEER", location: "Remote", type: "Full-Time", icon: <FaBug />, role: "QA Engineer", skills: "Automation Testing, Selenium, Jest", description: ["Ensure software quality before deployment.", "Identify and resolve software defects."] }
// ];

// const CareerDescription = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedJobFromState = location.state?.selectedJob;
//   const [selectedJob] = useState(selectedJobFromState || jobListings[0]);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     position: selectedJob.title,
//     jobType: "Full-time",
//     expectedSalary: "",
//     qualification: "",
//     university: "",
//     fieldOfStudy: "",
//   });

//   const [resume, setResume] = useState(null);
//   const [coverLetter, setCoverLetter] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileUpload = (e, setFile) => {
//     const file = e.target.files[0];
//     if (file && (file.type === "application/pdf" || file.type.includes("word"))) {
//       setFile(file);
//     } else {
//       alert("Please upload a valid PDF or Word document.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     if (resume) formDataToSend.append("resume", resume);
//     if (coverLetter) formDataToSend.append("coverLetter", coverLetter);

//     try {
//       const response = await fetch("http://localhost:5000/send", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert("Application submitted successfully!");
//       } else {
//         alert("Failed to submit application.");
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//     }
//   };

//   return (
//     <div className="career-container">
//       <div className="career-content">
//         <button className="back-button" onClick={() => navigate(-1)}>←</button>

//         <h1 className="job-title">{selectedJob.title}</h1>
//         <p className="current-openings">📍 {selectedJob.location} | ⏳ {selectedJob.type}</p>

//         <h2 className="section-heading">Role</h2>
//         <p className="role">{selectedJob.role}</p>

//         <h2 className="section-heading">Required Skills</h2>
//         <p className="skills">{selectedJob.skills}</p>

//         <h2 className="section-heading">Job Description</h2>
//         <ul className="job-list">
//           {selectedJob.description.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="apply-section">
//         <h2 className="apply-heading">APPLY NOW</h2>
//         <form className="apply-form" onSubmit={handleSubmit}>
//           <input type="text" name="fullName" placeholder="Full Name" className="input-field" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email Address" className="input-field" onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Phone Number" className="input-field" onChange={handleChange} required />

//           <label className="file-label">Upload Resume (PDF/DOC)</label>
//           <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setResume)} required />

//           <label className="file-label">Upload Cover Letter (Optional)</label>
//           <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setCoverLetter)} />

//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CareerDescription;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCode, FaMobileAlt, FaDatabase, FaPencilRuler, FaBug } from "react-icons/fa";
import "./description.css";

const jobListings = [
  { id: 1, title: "WEB DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaCode />, role: "Frontend Developer", skills: "HTML, CSS, JavaScript, React", description: ["Develop and maintain modern, responsive websites.", "Collaborate with designers to ensure seamless UI/UX."] },
  { id: 2, title: "APP DEVELOPER", location: "Remote", type: "Full-Time", icon: <FaMobileAlt />, role: "Mobile Developer", skills: "Flutter, React Native, Swift, Kotlin", description: ["Design and develop mobile applications.", "Ensure compatibility across different devices."] },
  { id: 3, title: "ERP CONSULTANT", location: "Hybrid", type: "Contract", icon: <FaDatabase />, role: "Business Consultant", skills: "SAP, Oracle ERP, Microsoft Dynamics", description: ["Assist businesses in implementing ERP solutions.", "Train employees on ERP usage."] },
  { id: 4, title: "UI/UX DESIGNER", location: "On-Site", type: "Full-Time", icon: <FaPencilRuler />, role: "UI/UX Designer", skills: "Figma, Adobe XD, Wireframing", description: ["Create aesthetically pleasing and user-friendly interfaces.", "Conduct user research to enhance UX."] },
  { id: 5, title: "QA ENGINEER", location: "Remote", type: "Full-Time", icon: <FaBug />, role: "QA Engineer", skills: "Automation Testing, Selenium, Jest", description: ["Ensure software quality before deployment.", "Identify and resolve software defects."] }
];

const CareerDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJobFromState = location.state?.selectedJob;
  const [selectedJob] = useState(selectedJobFromState || jobListings[0]);

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: selectedJob.title,
    jobType: "Full-time",
    expectedSalary: "",
    qualification: "",
    university: "",
    fieldOfStudy: "",
  });

  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type.includes("word"))) {
      setFile(file);
    } else {
      alert("Please upload a valid PDF or Word document.");
    }
  };

  const handleNextStep = () => setFormStep((prev) => prev + 1);
  const handlePrevStep = () => setFormStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

    if (resume) formDataToSend.append("resume", resume);
    if (coverLetter) formDataToSend.append("coverLetter", coverLetter);

    try {
      const response = await fetch("http://localhost:5000/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to submit application.");

      const result = await response.json();
      alert(result.message || "Application submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: selectedJob.title,
        jobType: "Full-time",
        expectedSalary: "",
        qualification: "",
        university: "",
        fieldOfStudy: "",
      });

      setResume(null);
      setCoverLetter(null);
      setFormStep(1);
    } catch (error) {
      alert("Error submitting application. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-container">
      <div className="career-content">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="job-title">{selectedJob.title}</h1>
        <p className="current-openings">📍 {selectedJob.location} | ⏳ {selectedJob.type}</p>

        <h2 className="section-heading">Role</h2>
        <p className="role">{selectedJob.role}</p>

        <h2 className="section-heading">Required Skills</h2>
        <p className="skills">{selectedJob.skills}</p>

        <h2 className="section-heading">Job Description</h2>
        <ul className="job-list">
          {selectedJob.description.map((point, index) => (
            <li key={`desc-${index}`}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="apply-section">
        <h2 className="apply-heading">APPLY NOW</h2>
        <form className="apply-form" onSubmit={handleSubmit}>
          {formStep === 1 && (
            <>
              <input type="text" name="fullName" placeholder="Full Name" className="input-field" value={formData.fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" className="input-field" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" className="input-field" value={formData.phone} onChange={handleChange} required />
            </>
          )}

          {formStep === 2 && (
            <>
              <input type="text" name="position" className="input-field" value={formData.position} readOnly required />
              <select name="jobType" className="input-field" value={formData.jobType} onChange={handleChange}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              <input type="text" name="expectedSalary" placeholder="Expected Salary" className="input-field" value={formData.expectedSalary} onChange={handleChange} required />
            </>
          )}

          {formStep === 4 && (
            <>
              <label className="file-label">Upload Resume (PDF/DOC)</label>
              <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setResume)} required />

              <label className="file-label">Upload Cover Letter (Optional)</label>
              <input type="file" accept=".pdf, .doc, .docx" className="file-input" onChange={(e) => handleFileUpload(e, setCoverLetter)} />
            </>
          )}

          <div className="form-navigation">
            {formStep > 1 && <button type="button" className="nav-button" onClick={handlePrevStep}>Back</button>}
            {formStep < 4 ? (
              <button type="button" className="nav-button" onClick={handleNextStep}>Next</button>
            ) : (
              <button type="submit" className="submit-button" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerDescription;