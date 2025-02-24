// import React from "react";
// import "./wework.css";
// import { FaRocket, FaBuilding, FaUsers, FaLaptop, FaUniversity, FaShoppingCart } from "react-icons/fa";

// const WeWorkForSec = () => {
//   const services = [
//     { icon: <FaRocket />, title: "Startups" },
//     { icon: <FaBuilding />, title: "Enterprises" },
//     { icon: <FaUsers />, title: "Organizations" },
//     { icon: <FaLaptop />, title: "Individuals" },
//     { icon: <FaUniversity />, title: "Institutions" },
//     { icon: <FaShoppingCart />, title: "Retailers" },
//   ];

//   return (
//     <div className="we-work-for-sec">
//       <div className="we">
//         <h2 className="sec-title">We Work For</h2>
//         <p className="sec-description">
//           We work with diverse <strong>organizations</strong>, <strong>enterprises</strong>, <strong>startups</strong>, <strong>individuals</strong>, and <strong>brands</strong> to create powerful software from an excellent idea.
//         </p>
//         <div className="sec-grid">
//           {services.map((service, index) => (
//             <div className="sec-card" key={index}>
//               <div className="sec-card-content">
//                 <div className="sec-icon">{service.icon}</div>
//                 <h3 className="sec-card-title">{service.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeWorkForSec;
// import React from "react";
// import "./wework.css";
// import {
//   FaRocket,
//   FaBuilding,
//   FaUsers,
//   FaLaptop,
//   FaUniversity,
//   FaShoppingCart,
// } from "react-icons/fa";

// const WeWorkForSec = () => {
//   const services = [
//     { icon: <FaRocket />, title: "Startups" },
//     { icon: <FaBuilding />, title: "Enterprises" },
//     { icon: <FaUsers />, title: "Organizations" },
//     { icon: <FaLaptop />, title: "Individuals" },
//     { icon: <FaUniversity />, title: "Institutions" },
//     { icon: <FaShoppingCart />, title: "Retailers" },
//   ];

//   return (
//     <div className="we-work-for-sec">
//       <div className="we-work-box">
//         <h2 className="sec-title">We Work For</h2>
//         <p className="sec-description">
//           Collaborating with <strong>startups</strong>, <strong>enterprises</strong>, <strong>organizations</strong>, and more to build innovative solutions.
//         </p>
//         <div className="services-row">
//           {services.map((service, index) => (
//             <div className="service-item" key={index}>
//               <div className="service-icon">{service.icon}</div>
//               <h3 className="service-title">{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import "./wework.css";
import { Rocket, Building, Users, User, Landmark, Briefcase } from "lucide-react";

const categories = [
  { name: "Startups", icon: <Rocket /> },
  { name: "Enterprises", icon: <Building /> },
  { name: "Organizations", icon: <Users /> },
  { name: "Individuals", icon: <User /> },
  { name: "Institutions", icon: <Landmark /> },
  { name: "Businesses", icon: <Briefcase /> },
];

const WeWorkFor = () => {
  return (
    <section className="we-work-for">
      <h2 className="title-we sleek-heading">We Work For</h2>
      <p className="description">
        Empowering <span>startups</span>, <span>enterprises</span>, and <span>organizations</span> 
        with innovative digital solutions. We collaborate with visionaries and businesses of all scales 
        to transform ideas into reality and drive impactful growth.
      </p>
      <div className="cards-grid-we">
        {categories.map((category, index) => (
          <div className="work-card center-content" key={index}>
            <div className="icon-we">{category.icon}</div>
            <h3 className="name-we">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeWorkFor;
