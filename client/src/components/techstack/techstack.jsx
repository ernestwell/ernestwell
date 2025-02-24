// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faCss3Alt,
//   faJs,
//   faBootstrap,
//   faNodeJs,
//   faPython,
//   faPhp,
//   faJava,
//   faGolang,
// } from "@fortawesome/free-brands-svg-icons";
// import { faC } from "@fortawesome/free-solid-svg-icons";
// import "./TechStack.css";

// const categories = [
//   "Programming Languages",
//   "Frameworks",
//   "User Interface",
//   "Database",
//   "Quality Assurance",
//   "DevOps/Clouds",
//   "Blockchain",
// ];

// const techIcons = [
//   { icon: faHtml5, name: "HTML" },
//   { icon: faCss3Alt, name: "CSS" },
//   { icon: faJs, name: "JavaScript" },
//   { icon: faBootstrap, name: "Bootstrap" },
//   { icon: faNodeJs, name: "Node.js" },
//   { icon: faGolang, name: "Go" },
//   { icon: faPython, name: "Python" },
//   { icon: faC, name: "C++" },
//   { icon: faPhp, name: "PHP" },
//   { icon: faJava, name: "Java" },
// ];

// const TechStack = () => {
//   const [activeTab, setActiveTab] = useState(categories[0]);

//   return (
//     <div className="tech-stack-container">
//       <section className="tech-stack-section">
//         <h2 className="tech-stack-title">Our Tech Stack</h2>
//         <p className="tech-stack-description">
//           Fourchain integrates industry-leading technologies to make your application unique and futuristic.
//         </p>

//         <div className="tech-stack-tabs">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`tab-button ${activeTab === category ? "active-tab" : ""}`}
//               onClick={() => setActiveTab(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="tech-stack-grid">
//           {techIcons.map((tech, index) => (
//             <div key={index} className="tech-icon-container">
//               <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
//               <span className="tech-name">{tech.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TechStack;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faNodeJs,
  faPython,
  faPhp,
  faJava,
  faGolang,
  faReact,
  faVuejs,
  faAngular,
  faAws,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase, faShieldAlt, faCloud, faCube } from "@fortawesome/free-solid-svg-icons";
import "./TechStack.css";

const categories = [
  "Programming Languages",
  "Frameworks",
  "User Interface",
  "Database",
  "Quality Assurance",
  "DevOps/Clouds",
];

const techStacks = {
  "Programming Languages": [
    { icon: faHtml5, name: "HTML", color: "#E34F26" },
    { icon: faCss3Alt, name: "CSS", color: "#1572B6" },
    { icon: faJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: faPython, name: "Python", color: "#3776AB" },
    { icon: faC, name: "C++", color: "#00599C" },
    { icon: faPhp, name: "PHP", color: "#777BB4" },
    { icon: faJava, name: "Java", color: "#007396" },
    { icon: faGolang, name: "Go", color: "#00ADD8" },
  ],
  "Frameworks": [
    { icon: faNodeJs, name: "Node.js", color: "#68A063" },
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: faVuejs, name: "Vue.js", color: "#4FC08D" },
    { icon: faAngular, name: "Angular", color: "#DD0031" },
    { icon: faBootstrap, name: "Bootstrap", color: "#7952B3" },
  ],
  "User Interface": [
    { icon: faBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: faReact, name: "React UI", color: "#61DAFB" },
    { icon: faVuejs, name: "Vue UI", color: "#4FC08D" },
  ],
  "Database": [
    { icon: faDatabase, name: "MySQL", color: "#4479A1" },
    { icon: faDatabase, name: "PostgreSQL", color: "#336791" },
    { icon: faDatabase, name: "MongoDB", color: "#47A248" },
  ],
  "Quality Assurance": [
    { icon: faShieldAlt, name: "Selenium", color: "#43B02A" },
    { icon: faShieldAlt, name: "JUnit", color: "#25A162" },
    { icon: faShieldAlt, name: "Cypress", color: "#17202C" },
  ],
  "DevOps/Clouds": [
    { icon: faAws, name: "AWS", color: "#FF9900" },
    { icon: faDocker, name: "Docker", color: "#2496ED" },
    { icon: faGitAlt, name: "Git", color: "#F05032" },
    { icon: faCloud, name: "Cloud", color: "#00ADEF" },
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const techCount = techStacks[activeTab].length;
  const columns = techCount === 8 ? 4 : techCount >= 6 ? 4 : techCount;
  const rows = Math.ceil(techCount / columns);

  return (
    <div className="tech-stack-container">
      <section className="tech-stack-section">
        <h2 className="tech-stack-title">Our Technologies</h2>
        <p className="tech-stack-description">
          We use modern technologies to build scalable, secure, and high-performance solutions.
        </p>

        <div className="tech-stack-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? "active-tab" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          className="tech-stack-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: `repeat(${columns}, 1fr)`, 
            gridTemplateRows: `repeat(${rows}, auto)`, 
            justifyContent: "center" 
          }}
        >
          {techStacks[activeTab].map((tech, index) => (
            <div key={index} className="tech-icon-container">
              <FontAwesomeIcon icon={tech.icon} className="tech-icon" style={{ color: tech.color }} />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
