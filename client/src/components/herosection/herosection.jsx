// import React, { useState, useEffect } from "react";
// import "./herosection.css";
// import heroImage from "./images/heroimage.png";

// const HeroSection = () => {
//   const sentences = [
//     "Transforming your ideas into digital reality",  
//     "Empowering businesses with innovative solutions",
//     "Building a smarter future with technology"
//   ];

//   const [text, setText] = useState(sentences[0]);
//   const [sentenceIndex, setSentenceIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (charIndex < sentences[sentenceIndex].length) {
//         setText(sentences[sentenceIndex].slice(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);
//       } else {
//         clearInterval(interval);
//         setTimeout(() => {
//           setCharIndex(0);
//           setSentenceIndex((prev) => (prev + 1) % sentences.length);
//         }, 2000); 
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [sentenceIndex, charIndex]);

//   return (
//     <section className="hero-1">
//       <div className="hero-left">
//         <h1 className="hero-title">
//           <span>{text}</span>
//         </h1>
//         <p className="hero-subtitle">
//           Innovate, create, and launch with cutting-edge technology solutions. We help businesses turn vision into reality.
//         </p>
//         <div className="hero-buttons">
//           <a href="#" className="btn primary">Explore Now</a>
//           <a href="#" className="btn secondary">Get in Touch</a>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={heroImage} alt="Tech Solutions" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React, { useState, useEffect } from "react";
// import "./herosection.css";

// const HeroSection = () => {
//   const sentences = [
//     "Transforming your ideas into digital reality",  
//     "Empowering businesses with innovative solutions",
//     "Building a smarter future with technology"
//   ];

//   const [text, setText] = useState(sentences[0]);
//   const [sentenceIndex, setSentenceIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (charIndex < sentences[sentenceIndex].length) {
//         setText(sentences[sentenceIndex].slice(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);
//       } else {
//         clearInterval(interval);
//         setTimeout(() => {
//           setCharIndex(0);
//           setSentenceIndex((prev) => (prev + 1) % sentences.length);
//         }, 2000); 
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [sentenceIndex, charIndex]);

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">{text}</h1>
//         <p className="hero-subtitle">
//           Innovate, create, and launch with cutting-edge technology solutions that drive growth and seamless digital experiences.
//         </p>
//         <div className="hero-buttons">
//           <a href="#" className="btn primary">Explore Now</a>
//           <a href="#" className="btn secondary">Get in Touch</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import  { useState, useEffect } from "react";
import "./herosection.css";
import WaveSvg from "./images/undraw_articles_visl.svg";
import img from "./images/undraw_content-team_i066.svg";
// import About from "../profile/profile";


const sentences = [
  { text: ["Transforming your ideas into ", "digital reality"], highlight: 1 },
  { text: ["Empowering businesses with ", "innovative solutions"], highlight: 1 },
  { text: ["Building a smarter future with ", "technology"], highlight: 1 },
];

const HeroSection = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState([""]);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex].text;
    const fullText = currentSentence.join("");

    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayText([fullText.slice(0, charIndex + 1)]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sentenceIndex, charIndex]);

  const renderStyledSentence = () => {
    const currentSentence = sentences[sentenceIndex].text;
    const highlightIndex = sentences[sentenceIndex].highlight;

    return (
      <>
        {currentSentence.map((part, index) => (
          <span key={index} className={index === highlightIndex ? "highlight" : "hero-title"}>
            {part}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="hero">
      <img src={WaveSvg} alt="Wave" className="hero-svg" />
      <div className="hero-content">
        <h1 className="hero-text">{renderStyledSentence()}</h1>
        <p className="hero-subtitle">
          Innovate, create, and launch with cutting-edge technology solutions
          that drive growth and seamless digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="/profile" className="btn primary">Explore Now</a>
          <a href="/contact" className="btn secondary">Get in Touch</a>
        </div>
      </div>
      <img src={img} alt="Wave" className="hero-svg1" />
    </section>
  );
};

export default HeroSection;
