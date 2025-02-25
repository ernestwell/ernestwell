// import React from "react";
// import { 
//   FaMobileAlt, FaShoppingCart, FaDatabase, FaTools, 
//   FaQuestionCircle
// } from "react-icons/fa";
// import "./appdev.css";
// import image1 from "./appimages/image1.png";
// import image2 from "./appimages/image2.png";
// import image3 from "./appimages/image3.png";
// import image4 from "./appimages/image4.png";

// const services = [
//   {
//     id: 1,
//     title: "Native Mobile Apps",
//     description: "Native mobile apps offer the best performance and user experience on iOS and Android devices. These apps are built specifically for each platform, ensuring smooth navigation, optimal performance, and the ability to fully leverage device features. We provide native app development services that include high-performance mobile solutions tailored to your business needs, with features like push notifications, GPS, and offline capabilities. Services include personalized app design, robust coding, seamless integration, and timely updates.",
//     image: image1,
//     buttons: (
//       <div className="service-buttons">
//         <button className="primary-btn">See Demo</button>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     title: "Cross-Platform Apps",
//     description: "Cross-platform apps are designed to work seamlessly across multiple platforms (iOS, Android, etc.) with a single codebase. We specialize in building cross-platform apps using frameworks like Flutter and React Native, ensuring fast development, cost-effectiveness, and consistent performance across devices. Whether you're targeting a broad audience or looking to simplify your app development process, our cross-platform solutions deliver the best value while maintaining a native-like experience.",
//     image: image2,
//     buttons: (
//       <div className="service-buttons">
//         <button className="primary-btn">See Demo</button>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     title: "E-commerce Mobile Apps",
//     description: "We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience. From product catalogs and shopping cart functionality to secure payment gateways, our e-commerce mobile solutions offer a seamless mobile shopping experience. We focus on mobile optimization to ensure fast load times, easy navigation, and mobile-optimized checkout processes. Our apps come with features like inventory management, real-time tracking, and personalized shopping experiences to enhance user engagement.",
//     image: image3,
//     buttons: (
//       <div className="service-buttons">
//         <button className="primary-btn">See Demo</button>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     title: "Custom Mobile Applications",
//     description: "Our custom mobile applications are designed to meet specific business requirements. Whether you need an internal tool, CRM, or any unique functionality, we offer scalable and secure custom mobile solutions. Our team works closely with you to understand your goals and deliver a mobile app that fits perfectly into your workflow. We provide features like real-time updates, data syncing, third-party integrations, and user-friendly interfaces that ensure high efficiency and a seamless user experience.",
//     image: image4,
//     buttons: (
//       <div className="service-buttons">
//         <button className="primary-btn">See Demo</button>
//       </div>
//     ),
//   },
// ];

// const MobileDevelopment = () => {
//   return (
//     <div className="mobiledev-container">

//       <header className="mobiledev-header">
//         <h1>Expert Mobile App Development Services</h1>
//         <p>Transform your business with high-quality, custom mobile app solutions.</p>
//       </header>
//       <section className="mobiledev-services">
//         {services.map((service, index) => (
//           <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
//             <div className="image-container">
//               <img src={service.image} alt={service.title} />
//             </div>
//             <div className="content-container">
//               <div className="service-icon-container">{service.icon}</div>
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               {service.buttons}
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="faq-section">
//         <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>

//         <details className="faq-item">
//           <summary>Which type of mobile app is best for my business?</summary>
//           <p>If you need a high-performance, platform-specific app, a native mobile app is the best. For broader reach and faster development, cross-platform apps are ideal.</p>
//         </details>
//         <details className="faq-item">
//           <summary>Can my app be upgraded in the future?</summary>
//           <p>Absolutely! We build scalable apps that allow for future upgrades and feature additions as your business grows.</p>
//         </details>
//         <details className="faq-item">
//           <summary>Do you offer maintenance and support?</summary>
//           <p>Yes! We offer ongoing support and maintenance to ensure your app remains up-to-date and secure with regular updates and performance enhancements.</p>
//         </details>
//       </section>


//       <section className="contact-cta">
//         <h2>Ready to Build Your Mobile App?</h2>
//         <p>From startups to established businesses, we offer custom mobile solutions that fit your needs.</p>
//         <button className="contact-btn">Get in Touch</button>
//       </section>
//     </div>
//   );
// };

// export default MobileDevelopment;
// import React, { useState } from "react";
// import { FaQuestionCircle } from "react-icons/fa";
// import "./appdev.css";
// import image1 from "./appimages/image1.png";
// import image2 from "./appimages/image2.png";
// import image3 from "./appimages/image3.png";
// import image4 from "./appimages/image4.png";

// const services = [
//   {
//     id: 1,
//     title: "Native Mobile Apps",
//     description:
//       "Native mobile apps offer the best performance and user experience on iOS and Android devices. These apps are built specifically for each platform, ensuring smooth navigation, optimal performance, and the ability to fully leverage device features. We provide native app development services that include high-performance mobile solutions tailored to your business needs, with features like push notifications, GPS, and offline capabilities. Services include personalized app design, robust coding, seamless integration, and timely updates.",
//     image: image1,
//   },
//   {
//     id: 2,
//     title: "Cross-Platform Apps",
//     description:
//       "Cross-platform apps are designed to work seamlessly across multiple platforms (iOS, Android, etc.) with a single codebase. We specialize in building cross-platform apps using frameworks like Flutter and React Native, ensuring fast development, cost-effectiveness, and consistent performance across devices. Whether you're targeting a broad audience or looking to simplify your app development process, our cross-platform solutions deliver the best value while maintaining a native-like experience.",
//     image: image2,
//   },
//   {
//     id: 3,
//     title: "E-commerce Mobile Apps",
//     description:
//       "We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience. From product catalogs and shopping cart functionality to secure payment gateways, our e-commerce mobile solutions offer a seamless mobile shopping experience. We focus on mobile optimization to ensure fast load times, easy navigation, and mobile-optimized checkout processes. Our apps come with features like inventory management, real-time tracking, and personalized shopping experiences to enhance user engagement.",
//     image: image3,
//   },
//   {
//     id: 4,
//     title: "Custom Mobile Applications",
//     description:
//       "Our custom mobile applications are designed to meet specific business requirements. Whether you need an internal tool, CRM, or any unique functionality, we offer scalable and secure custom mobile solutions. Our team works closely with you to understand your goals and deliver a mobile app that fits perfectly into your workflow. We provide features like real-time updates, data syncing, third-party integrations, and user-friendly interfaces that ensure high efficiency and a seamless user experience.",
//     image: image4,
//   },
// ];

// const MobileDevelopment = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const handleShowForm = (service) => {
//     setSelectedService(service);
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//     setSelectedService(null);
//   };

//   return (
//     <div className="mobiledev-container">
//       <header className="mobiledev-header">
//         <h1>Expert Mobile App Development Services</h1>
//         <p>Transform your business with high-quality, custom mobile app solutions.</p>
//       </header>

//       <section className="mobiledev-services">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}
//           >
//             <div className="image-container">
//               <img src={service.image} alt={service.title} />
//             </div>
//             <div className="content-container">
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               <div className="service-buttons">
//                 <button
//                   className="primary-btn"
//                   onClick={() => handleShowForm(service)}
//                 >
//                   See Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {showForm && (
//         <div className="demo-form-container">
//           <h2>Request a Demo for {selectedService.title}</h2>
//           <form className="demo-form">
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input type="text" id="name" placeholder="Enter your name" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Your Email</label>
//               <input type="email" id="email" placeholder="Enter your email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 placeholder="Enter your message"
//               ></textarea>
//             </div>
//             <div className="form-buttons">
//               <button type="submit" className="primary-btn">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="secondary-btn"
//                 onClick={handleCloseForm}
//               >
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       <section className="faq-section">
//         <h2>
//           <FaQuestionCircle className="faq-icon" /> Frequently Asked Questions
//         </h2>

//         <details className="faq-item">
//           <summary>Which type of mobile app is best for my business?</summary>
//           <p>
//             If you need a high-performance, platform-specific app, a native
//             mobile app is the best. For broader reach and faster development,
//             cross-platform apps are ideal.
//           </p>
//         </details>
//         <details className="faq-item">
//           <summary>Can my app be upgraded in the future?</summary>
//           <p>
//             Absolutely! We build scalable apps that allow for future upgrades
//             and feature additions as your business grows.
//           </p>
//         </details>
//         <details className="faq-item">
//           <summary>Do you offer maintenance and support?</summary>
//           <p>
//             Yes! We offer ongoing support and maintenance to ensure your app
//             remains up-to-date and secure with regular updates and performance
//             enhancements.
//           </p>
//         </details>
//       </section>

//       <section className="contact-cta">
//         <h2>Ready to Build Your Mobile App?</h2>
//         <p>
//           From startups to established businesses, we offer custom mobile
//           solutions that fit your needs.
//         </p>
//         <button className="contact-btn">Get in Touch</button>
//       </section>
//     </div>
//   );
// };

// export default MobileDevelopment;
// import React, { useState } from "react";
// import { FaQuestionCircle } from "react-icons/fa";
// import "./appdev.css";
// import image1 from "./appimages/image1.png";
// import image2 from "./appimages/image2.png";
// import image3 from "./appimages/image3.png";
// import image4 from "./appimages/image4.png";

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
//     setShowPopup(true); // Show popup after form submission or close
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleCloseForm(); // Show popup after form submission
//   };

//   const handlePopupClose = () => {
//     setShowPopup(false); // Manually close the popup when user clicks "Close"
//   };

//   return (
//     <div className="mobiledev-container">
//       <header className="mobiledev-header">
//         <h1>Expert Mobile App Development Services</h1>
//         <p>Transform your business with high-quality, custom mobile app solutions.</p>
//       </header>

//       <section className="mobiledev-services">
//         {services.map((service, index) => (
//           <div key={service.id} className={`mobiledev-service ${index % 2 === 0 ? "reverse" : ""}`}>
//             <div className="image-container"><img src={service.image} alt={service.title} /></div>
//             <div className="content-container">
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//               <button className="primary-btn" onClick={() => handleShowForm(service)}>See Demo</button>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Contact Form */}
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
//             <div className="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
//             </div>

//             {/* Schedule Meeting Option */}
//             <div className="form-group">
//               <input type="checkbox" id="scheduleMeeting" checked={scheduleMeeting} onChange={() => setScheduleMeeting(!scheduleMeeting)} />
//               <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
//             </div>

//             {scheduleMeeting && (
//               <div className="form-group">
//                 <label htmlFor="meetingDate">Select a Date & Time</label>
//                 <input type="datetime-local" id="meetingDate" name="meetingDate" required />
//               </div>
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
//         <h2><FaQuestionCircle className="faq-icon" /> Frequently Asked Questions</h2>
//         <details className="faq-item"><summary>Which type of mobile app is best for my business?</summary><p>If you need a high-performance, platform-specific app, go with native. For cost-effective solutions, choose cross-platform.</p></details>
//         <details className="faq-item"><summary>Can my app be upgraded in the future?</summary><p>Yes! We build scalable apps for future upgrades and feature additions.</p></details>
//         <details className="faq-item"><summary>Do you offer maintenance and support?</summary><p>Yes! We provide ongoing support and maintenance for regular updates.</p></details>
//       </section>

//       <section className="contact-cta">
//         <h2>Ready to Build Your Mobile App?</h2>
//         <p>From startups to enterprises, we offer tailored mobile solutions.</p>
//         <button className="contact-btn">Get in Touch</button>
//       </section>
//     </div>
//   );
// };

// export default MobileDevelopment;
import  { useState } from "react";
import "./appdev.css"; // Make sure to apply updated styles in your appdev.css
import image1 from "../../serviceimages/cloud.svg";
import image2 from "../../serviceimages/custom.svg";
import image3 from "../../serviceimages/erp.svg";
import image4 from "../../serviceimages/no.svg";

const services = [
  { id: 1, title: "Native Mobile Apps", description: "Native mobile apps offer the best performance and user experience on iOS and Android devices. These apps are built specifically for each platform, ensuring smooth navigation, optimal performance, and the ability to fully leverage device features. We provide native app development services that include high-performance mobile solutions tailored to your business needs, with features like push notifications, GPS, and offline capabilities. Services include personalized app design, robust coding, seamless integration, and timely updates.", image: image1 },
  { id: 2, title: "Cross-Platform Apps", description:  "Cross-platform apps are designed to work seamlessly across multiple platforms (iOS, Android, etc.) with a single codebase. We specialize in building cross-platform apps using frameworks like Flutter and React Native, ensuring fast development, cost-effectiveness, and consistent performance across devices. Whether you're targeting a broad audience or looking to simplify your app development process, our cross-platform solutions deliver the best value while maintaining a native-like experience.", image: image2 },
  { id: 3, title: "E-commerce Mobile Apps", description:"We create secure, feature-rich e-commerce mobile apps that provide users with an intuitive shopping experience. From product catalogs and shopping cart functionality to secure payment gateways, our e-commerce mobile solutions offer a seamless mobile shopping experience. We focus on mobile optimization to ensure fast load times, easy navigation, and mobile-optimized checkout processes. Our apps come with features like inventory management, real-time tracking, and personalized shopping experiences to enhance user engagement.", image: image3 },
  { id: 4, title: "Custom Mobile Applications", description: "Our custom mobile applications are designed to meet specific business requirements. Whether you need an internal tool, CRM, or any unique functionality, we offer scalable and secure custom mobile solutions. Our team works closely with you to understand your goals and deliver a mobile app that fits perfectly into your workflow. We provide features like real-time updates, data syncing, third-party integrations, and user-friendly interfaces that ensure high efficiency and a seamless user experience.", image: image4 },
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
    handleCloseForm(); // Close form after submission
    setShowPopup(true); // Show popup after form submission
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Manually close the popup when user clicks "Close"
  };

  return (
    <div className="mobiledev-container">
      <header className="mobiledev-header">
        <h1>Expert Mobile App Development Services</h1>
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

      {/* Contact Form */}
      {showForm && (
        <div className="demo-form-container">
          <h2>Request a Demo for {selectedService.title}</h2>
          <form className="demo-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            {/* <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
            </div> */}

            {/* Schedule Meeting Option */}
            <div className="form-group" style={{ display: "flex", alignItems: "center" }}>
              <input 
                type="checkbox" 
                id="scheduleMeeting" 
                checked={scheduleMeeting} 
                onChange={() => setScheduleMeeting(!scheduleMeeting)} 
                style={{ marginRight: "10px",marginTop:"0px" }} // Adds spacing between checkbox and label
              />
              <label htmlFor="scheduleMeeting">I want to schedule a meeting</label>
            </div>

            {scheduleMeeting && (
                  <div 
                    className="form-group centered" 
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      height: "10vh"
                    }}
                  >
                    <label htmlFor="meetingDate">Select a Date & Time</label>
                    <input 
                      type="datetime-local" 
                      id="meetingDate" 
                      name="meetingDate" 
                      required 
                      style={{ marginTop: "10px" }} // Adds space between label and input
                    />
                  </div>
            )}


            <div className="form-buttons">
              <button type="submit" className="primary-btn">Submit Request</button>
              <button type="button" className="secondary-btn" onClick={handleCloseForm}>Close</button>
            </div>
          </form>
        </div>
      )}

      {/* Success Popup with Manual Close */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>✅ Thank you! Your request has been received. We will get back to you soon.</p>
            <button onClick={handlePopupClose} className="primary-btn">
              Close
            </button>
          </div>
        </div>
      )}

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item"><summary>Which type of mobile app is best for my business?</summary><p>If you need a high-performance, platform-specific app, go with native. For cost-effective solutions, choose cross-platform.</p></details>
        <details className="faq-item"><summary>Can my app be upgraded in the future?</summary><p>Yes! We build scalable apps for future upgrades and feature additions.</p></details>
        <details className="faq-item"><summary>Do you offer maintenance and support?</summary><p>Yes! We provide ongoing support and maintenance for regular updates.</p></details>
      </section>
    </div>
  );
};

export default MobileDevelopment;

