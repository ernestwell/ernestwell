// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";  
// import "./services.css";
// import webDevImage from "./serviceimages/image1.png";
// import mobileDevImage from "./serviceimages/image2.png";
// import erpImage from "./serviceimages/image3.png";
// import customSoftwareImage from "./serviceimages/image4.png";
// import digitalMarketingImage from "./serviceimages/image5.png";
// import cloudSolutionsImage from "./serviceimages/image6.png";
// import cybersecurityImage from "./serviceimages/image7.png";
// import itSupportImage from "./serviceimages/image8.png";


// const servicesData = [
//   { title: "Web Development", description: "Build responsive, high-performing websites tailored to your needs.", image: webDevImage, link: "/web-development" },
//   { title: "Mobile Apps Development", description: "Develop user-friendly mobile apps for iOS and Android platforms.", image: mobileDevImage, link: "/app-development" },
//   { title: "ERP Solutions", description: "Optimize business operations with our ERP system integrations.", image: erpImage, link: "/erp-development" },
//   { title: "Custom Software", description: "Create custom software solutions to meet specific business needs.", image: customSoftwareImage, link: "/custom-development" },
//   { title: "Digital Marketing", description: "Reach your audience effectively through digital marketing strategies.", image: digitalMarketingImage, link: "/digitalmarketing" },
//   { title: "Cloud Solutions", description: "Secure and scalable cloud solutions to manage your data and applications.", image: cloudSolutionsImage, link: "/cloudsolutions" },
//   { title: "Cybersecurity", description: "Protect your business from cyber threats with robust security measures.", image: cybersecurityImage, link: "/CybersecuritySolutions" },
//   { title: "IT Support", description: "Reliable IT support to keep your systems up and running smoothly.", image: itSupportImage, link: "/ITsupport" }
// ];
// const Service = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           } else {
//             entry.target.classList.remove("visible");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const serviceElements = document.querySelectorAll(".service-row");
//     serviceElements.forEach((el) => observer.observe(el));

//     return () => {
//       serviceElements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <section id="services" className="services">
//       <div className="container">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-list">
//           {servicesData.map((service, index) => (
//             <div key={index} className={`service-row ${index % 2 === 0 ? "left" : "right"}`}>
//               <div className="service-image">
//                 <img src={service.image} alt={service.title} />
//               </div>
//               <div className="service-content">
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-description">{service.description}</p>
//                 <Link to={service.link} className="btn-primary">Know More</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
// import React, { useState } from "react";
// import "./services.css";
// import webDevImage from "./serviceimages/web.svg";
// import mobileDevImage from "./serviceimages/mobile.svg";
// import erpImage from "./serviceimages/erp.svg";
// import customSoftwareImage from "./serviceimages/custom.svg";
// import digitalMarketingImage from "./serviceimages/digital.svg";
// import cloudSolutionsImage from "./serviceimages/cloud.svg";
// import cybersecurityImage from "./serviceimages/security.svg";
// import itSupportImage from "./serviceimages/it.svg";

// const servicesData = [
//   {
//     title: "Web Development",
//     description: "Build responsive, high-performing websites tailored to your needs.",
//     image: webDevImage,
//   },
//   {
//     title: "Apps Development",
//     description: "Develop user-friendly mobile apps for iOS and Android platforms.",
//     image: mobileDevImage,
//   },
//   {
//     title: "ERP Solutions",
//     description: "Optimize business operations with our ERP system integrations.",
//     image: erpImage,
//   },
//   {
//     title: "Custom Software",
//     description: "Create custom software solutions to meet specific business needs.",
//     image: customSoftwareImage,
//   },
//   {
//     title: "Digital Marketing",
//     description: "Reach your audience effectively through digital marketing strategies.",
//     image: digitalMarketingImage,
//   },
//   {
//     title: "Cloud Solutions",
//     description: "Secure and scalable cloud solutions to manage your data and applications.",
//     image: cloudSolutionsImage,
//   },
//   {
//     title: "Cybersecurity",
//     description: "Protect your business from cyber threats with robust security measures.",
//     image: cybersecurityImage,
//   },
//   {
//     title: "IT Support",
//     description: "Reliable IT support to keep your systems up and running smoothly.",
//     image: itSupportImage,
//   },
// ];

// const Service = () => {
//   const [expandedCard, setExpandedCard] = useState(null);

//   const toggleCard = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   return (
//     <section id="services" className="services">
//       <div className="container">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-list">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`service-card ${expandedCard === index ? "expanded" : ""}`}
//             >
//               <div className="service-image">
//                 <img src={service.image} alt={service.title} />
//               </div>
//               <card>
//                 <div className="service-content">
//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-description">{service.description}</p>
//                 </div>
//               </card>
//               <div className="go-corner" onClick={() => toggleCard(index)}>
//                 <span className="go-arrow">→</span>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

// import React, { useState } from "react";
// import "./services.css";
// import webDevImage from "./serviceimages/web.svg";
// import mobileDevImage from "./serviceimages/mobile.svg";
// import erpImage from "./serviceimages/erp.svg";
// import customSoftwareImage from "./serviceimages/custom.svg";
// import digitalMarketingImage from "./serviceimages/digital.svg";
// import cloudSolutionsImage from "./serviceimages/cloud.svg";
// import cybersecurityImage from "./serviceimages/security.svg";
// import itSupportImage from "./serviceimages/it.svg";

// const servicesData = [
//   {
//     title: "Web Development",
//     description: "Build responsive, high-performing websites tailored to your needs.",
//     image: webDevImage,
//     className: "web-development-card",
//   },
//   {
//     title: "Apps Development",
//     description: "Develop user-friendly mobile apps for iOS and Android platforms.",
//     image: mobileDevImage,
//     className: "apps-development-card",
//   },
//   {
//     title: "ERP Solutions",
//     description: "Optimize business operations with our ERP system integrations.",
//     image: erpImage,
//     className: "erp-solutions-card",
//   },
//   {
//     title: "Custom Software",
//     description: "Create custom software solutions to meet specific business needs.",
//     image: customSoftwareImage,
//     className: "custom-software-card",
//   },
//   {
//     // title: "Exclusive Service",
//     // description: "Discover something unique and innovative. Let's build the future together!",
//     // image: null,
//     className: "exclusive-service-card",
//   },
//   {
//     title: "IT Support",
//     description: "Reliable IT support to keep your systems up and running smoothly.",
//     image: itSupportImage,
//     className: "it-support-card"
//   },
//   {
//     title: "Cloud Solutions",
//     description: "Secure and scalable cloud solutions to manage your data and applications.",
//     image: cloudSolutionsImage,
//     className: "cloud-solutions-card",
//   },
//   {
//     title: "Cybersecurity",
//     description: "Protect your business from cyber threats with robust security measures.",
//     image: cybersecurityImage,
//     className: "cybersecurity-card",
//   },
//   {
//     title: "Digital Marketing",
//     description: "Reach your audience effectively through digital marketing strategies.",
//     image: digitalMarketingImage,
//     className: "digital-marketing-card",
//   },
// ];

// const Service = () => {
//   const [expandedCard, setExpandedCard] = useState(null);

//   const toggleCard = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   return (
//     <section id="services" className="services">
//       <div className="container">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-list">
//           {servicesData.map((service, index) => {
//             return (
//               <div
//                 key={index}
//                 className={`service-card ${service.className} ${expandedCard === index ? "expanded" : ""}`}
//               >
//                 <div className="service-image">
//                   {service.image && <img src={service.image} alt={service.title} />}
//                 </div>
//                 <div className="service-content">
//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-description">{service.description}</p>
//                   <button className="learn-more-btn">
//                       Learn More
//                       <span className="arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
// import React, { useState } from "react";
// import "./services.css";
// import webDevImage from "./serviceimages/web.svg";
// import mobileDevImage from "./serviceimages/mobile.svg";
// import erpImage from "./serviceimages/erp.svg";
// import customSoftwareImage from "./serviceimages/custom.svg";
// import digitalMarketingImage from "./serviceimages/digital.svg";
// import cloudSolutionsImage from "./serviceimages/cloud.svg";
// import cybersecurityImage from "./serviceimages/security.svg";
// import itSupportImage from "./serviceimages/it.svg";

// const servicesData = [
//   {
//     title: "Web Development",
//     description: "Build responsive, high-performing websites tailored to your needs.",
//     image: webDevImage,
//     className: "web-development-card",
//   },
//   {
//     title: "Apps Development",
//     description: "Develop user-friendly mobile apps for iOS and Android platforms.",
//     image: mobileDevImage,
//     className: "apps-development-card",
//   },
//   {
//     title: "ERP Solutions",
//     description: "Optimize business operations with our ERP system integrations.",
//     image: erpImage,
//     className: "erp-solutions-card",
//   },
//   {
//     title: "Custom Software",
//     description: "Create custom software solutions to meet specific business needs.",
//     image: customSoftwareImage,
//     className: "custom-software-card",
//   },
//   {
//     className: "exclusive-service-card", 
//   },
//   {
//     title: "IT Support",
//     description: "Reliable IT support to keep your systems up and running smoothly.",
//     image: itSupportImage,
//     className: "it-support-card",
//   },
//   {
//     title: "Cloud Solutions",
//     description: "Secure and scalable cloud solutions to manage your data and applications.",
//     image: cloudSolutionsImage,
//     className: "cloud-solutions-card",
//   },
//   {
//     title: "Cybersecurity",
//     description: "Protect your business from cyber threats with robust security measures.",
//     image: cybersecurityImage,
//     className: "cybersecurity-card",
//   },
//   {
//     title: "Digital Marketing",
//     description:"Reach your audience effectively through digital marketing strategies.",
//     image: digitalMarketingImage,
//     className: "digital-marketing-card",
//   },
// ];

// const Service = () => {
//   const [expandedCard, setExpandedCard] = useState(null);

//   const toggleCard = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   return (
//     <section id="services" className="services">
//       <div className="container">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-list">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`service-card ${service.className} ${expandedCard === index ? "expanded" : ""}`}
//               style={{
//                 backgroundColor: service.className === "exclusive-service-card" ? "rgba(46, 80, 119, 0.1)" : "",
//               }}
//               onClick={() => toggleCard(index)}
//             >
//               {service.image && (
//                 <div className="service-image">
//                   <img src={service.image} alt={service.title} />
//                 </div>
//               )}
//               <div className="service-content">
//                 {service.title && <h3 className="service-title-2">{service.title}</h3>}
//                 {service.description && <p className="service-description">{service.description}</p>}
//                 {service.title && (
//                   <button className="learn-more-btn">
//                     Learn More
//                     <span className="arrow">→</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
import "./services.css";
import webDevImage from "./serviceimages/web.svg";
import mobileDevImage from "./serviceimages/mobile.svg";
import erpImage from "./serviceimages/erp.svg";
import customSoftwareImage from "./serviceimages/no.svg";
import digitalMarketingImage from "./serviceimages/digital.svg";
import cloudSolutionsImage from "./serviceimages/cloud.svg";
import cybersecurityImage from "./serviceimages/security.svg";
import itSupportImage from "./serviceimages/it.svg";
import img from "./serviceimages/exclusive.svg";

const servicesData = [
  { title: "Web Development", description: "Build responsive, high-performing websites tailored to your needs.", image: webDevImage, className: "web-development-card", link: "/web-development" },
  { title: "Custom Software", description: "Create custom software solutions to meet specific business needs.", image: customSoftwareImage, className: "custom-software-card", link: "/custom-development" },
  { title: "ERP Solutions", description: "Optimize business operations with our ERP system integrations.", image: erpImage, className: "erp-solutions-card", link: "/erp-development" },
  { title: "Apps Development", description: "Develop user-friendly mobile apps for iOS and Android platforms.", image: mobileDevImage, className: "apps-development-card", link: "/app-development" },
  { title: "SERVICES", description: "Unlock exclusive, tailor-made tech solutions designed for businesses that demand innovation.",image:img, className: "exclusive-service-card", link: "/exclusive-services" },
  { title: "IT Support", description: "Reliable IT support to keep your systems up and running smoothly.", image: itSupportImage, className: "it-support-card", link: "/ITsupport" },
  { title: "Cloud Solutions", description: "Secure and scalable cloud solutions to manage your data and applications.", image: cloudSolutionsImage, className: "cloud-solutions-card", link: "/cloudsolutions" },
  { title: "Cybersecurity", description: "Protect your business from cyber threats with robust security measures.", image: cybersecurityImage, className: "cybersecurity-card", link: "/CybersecuritySolutions" },
  { title: "Digital Marketing", description: "Reach your audience effectively through digital marketing strategies.", image: digitalMarketingImage, className: "digital-marketing-card", link: "/digitalmarketing" }
];

const Service = () => (
  <section id="services" className="services">
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-card ${service.className}`} style={{ backgroundColor: service.className === "exclusive-service-card" }}>
            {service.image && (
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            )}
            <div className="service-content">
              {service.title && <h3 className="service-title-2">{service.title}</h3>}
              {service.description && <p className="service-description">{service.description}</p>}
              {service.title && service.link && (
                <a href={service.link} className="learn-more-btn">
                  Learn More
                  <span className="arrow">➜</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;

