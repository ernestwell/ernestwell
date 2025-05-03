// import  { useState } from "react";
// import "./appdev.css"; // Make sure to apply updated styles in your appdev.css
// import image1 from "../../serviceimages/cloud.svg";
// import image2 from "../../serviceimages/custom.svg";
// import image3 from "../../serviceimages/erp.svg";
// import image4 from "../../serviceimages/no.svg";

// const services = [
//   { id: 1, title: "Native Mobile Apps", description: "Native mobile apps offer the best performance and user experience on iOS and Android devices. These apps are built specifically for each platform, ensuring smooth navigation, optimal performance, and the ability to fully leverage device features. We provide native app development services that include high-performance mobile solutions tailored to your business needs, with features like push notifications, GPS, and offline capabilities. Services include personalized app design, robust coding, seamless integration, and timely updates.", image: image1 },
//   { id: 2, title: "Cross-Platform Apps", description:  "Cross-platform apps are designed to work seamlessly across multiple platforms (iOS, Android, etc.) with a single codebase. We specialize in building cross-platform apps using frameworks like Flutter and React Native, ensuring fast development, cost-effectiveness, and consistent performance across devices. Whether you're targeting a broad audience or looking to simplify your app development process, our cross-platform solutions deliver the best value while maintaining a native-like experience.", image: image2 },
//   { id: 3, title: "E-commerce Mobile Apps", description:"We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience. From product catalogs and shopping cart functionality to secure payment gateways, our e-commerce mobile solutions offer a seamless mobile shopping experience. We focus on mobile optimization to ensure fast load times, easy navigation, and mobile-optimized checkout processes. Our apps come with features like inventory management, real-time tracking, and personalized shopping experiences to enhance user engagement.", image: image3 },
//   { id: 4, title: "Custom Mobile Applications", description: "Our custom mobile applications are designed to meet specific business requirements. Whether you need an internal tool, CRM, or any unique functionality, we offer scalable and secure custom mobile solutions. Our team works closely with you to understand your goals and deliver a mobile app that fits perfectly into your workflow. We provide features like real-time updates, data syncing, third-party integrations, and user-friendly interfaces that ensure high efficiency and a seamless user experience.", image: image4 },
// ];

// const MobileDevelopment = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [scheduleMeeting, setScheduleMeeting] = useState(false);

//   const handleShowForm = (service) => {
//     setSelectedService(service);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedService(null);
//     setScheduleMeeting(false);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleCloseForm(); 
//     setShowPopup(true); 
//   };

//   const handlePopupClose = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="mobiledev-container">
//       <header className="mobiledev-header">
//         <h1>APP DEVELOPEMENT SERVICES</h1>
//         <p>Transform your business with high-quality, custom mobile app solutions.</p>
//       </header>

//       <section className="mobiledev-services">
//         {services.map((service, index) => (
//           <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
//             <div className="image-container-2"><img src={service.image} alt={service.title} /></div>
//             <div className="content-container-2">
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               <button className="primary-btn-2" onClick={() => handleShowForm(service)}>See Demo</button>
//             </div>
//           </div>
//         ))}
//       </section>
//       {showForm && (
//         <div className="demo-form-container">
//           <h2>Request a Demo for {selectedService.title}</h2>
//           <form className="demo-form" onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input type="text" id="name" placeholder="Enter your name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Your Email</label>
//               <input type="email" id="email" placeholder="Enter your email" required />
//             </div>
//             {/* <div className="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
//             </div> */}

//             {/* Schedule Meeting Option */}
//             <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
//               <input 
//                 type="checkbox" 
//                 id="scheduleMeeting" 
//                 checked={scheduleMeeting} 
//                 onChange={() => setScheduleMeeting(!scheduleMeeting)} 
//                 style={{ marginRight: "10px",marginTop:"0px" }} // Adds spacing between checkbox and label
//               />
//               <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
//             </div>

//             {scheduleMeeting && (
//                   <div 
//                     className="form-group centered" 
//                     style={{
//                       display: "flex", 
//                       flexDirection: "column", 
//                       alignItems: "center", 
//                       justifyContent: "center", 
//                       height: "10vh"
//                     }}
//                   >
//                     <label htmlFor="meetingDate">Select a Date & Time</label>
//                     <input 
//                       type="datetime-local" 
//                       id="meetingDate" 
//                       name="meetingDate" 
//                       required 
//                       style={{ marginTop: "10px" }} 
//                     />
//                   </div>
//             )}


//             <div className="form-buttons">
//               <button type="submit" className="primary-btn">Submit Request</button>
//               <button type="button" className="secondary-btn" onClick={handleCloseForm}>Close</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Success Popup with Manual Close */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <p>✅ Thank you! Your request has been received. We will get back to you soon.</p>
//             <button onClick={handlePopupClose} className="primary-btn">
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <section className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <details className="faq-item"><summary>Which type of mobile app is best for my business?</summary><p>If you need a high-performance, platform-specific app, go with native. For cost-effective solutions, choose cross-platform.</p></details>
//         <details className="faq-item"><summary>Can my app be upgraded in the future?</summary><p>Yes! We build scalable apps for future upgrades and feature additions.</p></details>
//         <details className="faq-item"><summary>Do you offer maintenance and support?</summary><p>Yes! We provide ongoing support and maintenance for regular updates.</p></details>
//       </section>
//     </div>
//   );
// };

// export default MobileDevelopment;

import { useState } from "react";
import "./appdev.css";
import image1 from "./appimages/imag1.svg";
import image2 from "./appimages/imag2.svg";
import image3 from "./appimages/imag3.svg";
import image4 from "./appimages/imag4.svg";

const services = [
  { id: 1, title: "Native Mobile Apps", description: "Native mobile apps offer the best performance and user experience on iOS and Android devices...", image: image1 },
  { id: 2, title: "Cross-Platform Apps", description: "Cross-platform apps are designed to work seamlessly across multiple platforms...", image: image2 },
  { id: 3, title: "E-commerce Mobile Apps", description: "We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience...", image: image3 },
  { id: 4, title: "Custom Mobile Applications", description: "Our custom mobile applications are designed to meet specific business requirements...", image: image4 },
];

const MobileDevelopment = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [scheduleMeeting, setScheduleMeeting] = useState(false);

  const handleShowForm = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
    setScheduleMeeting(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const meetingDate = formData.get("meetingDate");

    let year, month, day;
    if (scheduleMeeting && meetingDate) {
      const selectedDate = new Date(meetingDate);
      year = selectedDate.getFullYear();
      month = selectedDate.getMonth() + 1;
      day = selectedDate.getDate();
    }

    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUoX9R5YpNEBNCfhcmStK5sLMPBSRqM46kd7reZvISLVwxBg/formResponse";
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("entry.630075460", name);
    formDataToSend.append("entry.657108051", email);
    if (scheduleMeeting) {
      formDataToSend.append("entry.908925682_year", year);
      formDataToSend.append("entry.908925682_month", month);
      formDataToSend.append("entry.908925682_day", day);
    }

    fetch(googleFormURL, { method: "POST", body: formDataToSend, mode: "no-cors" })
      .then(() => {
        handleCloseForm();
        setShowPopup(true);
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <div className="mobiledev-container">
      <header className="mobiledev-header">
        <h1>APP DEVELOPMENT SERVICES</h1>
        <p>Transform your business with high-quality, custom mobile app solutions.</p>
      </header>
      <section className="mobiledev-services">
        {services.map((service, index) => (
          <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="image-container-2"><img src={service.image} alt={service.title} /></div>
            <div className="content-container-2">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="primary-btn-2" onClick={() => handleShowForm(service)}>See Demo</button>
            </div>
          </div>
        ))}
      </section>
      {showForm && (
        <div className="demo-form-container">
          <h2>Request a Demo for {selectedService.title}</h2>
          <form className="demo-form" onSubmit={handleFormSubmit}>

            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="scheduleMeeting" checked={scheduleMeeting} onChange={() => setScheduleMeeting(!scheduleMeeting)} style={{ marginRight: "10px" }} />
              <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
            </div>
            {scheduleMeeting && (
              <div className="form-group centered" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label htmlFor="meetingDate">Select a Date & Time</label>
                <input type="datetime-local" id="meetingDate" name="meetingDate" required style={{ marginTop: "10px" }} />
              </div>
            )}
            <div className="form-group form-buttons">
              <button type="submit" className="secondary-btn">Submit Request</button>
              <button type="button" className="secondary-btn" onClick={handleCloseForm}>Close</button>
            </div>
          </form>
        </div>
      )}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>✅ Thank you! Your request has been received. We will get back to you soon.</p>
            <button onClick={() => setShowPopup(false)} className="primary-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDevelopment;
