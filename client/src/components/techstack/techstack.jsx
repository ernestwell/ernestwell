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
  "DevOps/Clouds"
];

const techStacks = {
  "Programming Languages": [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJs, name: "JavaScript" },
    { icon: faPython, name: "Python" },
    { icon: faC, name: "C++" },
    { icon: faPhp, name: "PHP" },
    { icon: faJava, name: "Java" },
    { icon: faGolang, name: "Go" },
  ],
  "Frameworks": [
    { icon: faNodeJs, name: "Node.js" },
    { icon: faReact, name: "React" },
    { icon: faVuejs, name: "Vue.js" },
    { icon: faAngular, name: "Angular" },
    { icon: faBootstrap, name: "Bootstrap" },
  ],
  "User Interface": [
    { icon: faBootstrap, name: "Bootstrap" },
    { icon: faReact, name: "React UI" },
    { icon: faVuejs, name: "Vue UI" },
  ],
  "Database": [
    { icon: faDatabase, name: "MySQL" },
    { icon: faDatabase, name: "PostgreSQL" },
    { icon: faDatabase, name: "MongoDB" },
  ],
  "Quality Assurance": [
    { icon: faShieldAlt, name: "Selenium" },
    { icon: faShieldAlt, name: "JUnit" },
    { icon: faShieldAlt, name: "Cypress" },
  ],
  "DevOps/Clouds": [
    { icon: faAws, name: "AWS" },
    { icon: faDocker, name: "Docker" },
    { icon: faGitAlt, name: "Git" },
    { icon: faCloud, name: "Cloud" },
  ],
  "Blockchain": [
    { icon: faCube, name: "Ethereum" },
    { icon: faCube, name: "Solidity" },
    { icon: faCube, name: "Hyperledger" },
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const techCount = techStacks[activeTab].length;
  const columns = techCount >= 5 ? 4 : techCount;
  const rows = techCount > 4 ? Math.ceil(techCount / 5) : 1;

  return (
    <div className="tech-stack-container">
      <section className="tech-stack-section">
        <h2 className="tech-stack-title">Our Tech Stack</h2>
        <p className="tech-stack-description">
          Fourchain integrates industry-leading technologies to make your application unique and futuristic.
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

        <div className="tech-stack-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, auto)`, justifyContent: "center" }}>
          {techStacks[activeTab].map((tech, index) => (
            <div key={index} className="tech-icon-container">
              <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
