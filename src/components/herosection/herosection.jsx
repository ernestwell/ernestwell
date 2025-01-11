// import React, { useState, useEffect } from 'react';
// import './herosection.css';

// // Import local images
// import image1 from './images/image1.jpg'; 
// import image2 from './images/image2.jpg'; 
// import image3 from './images/image3.jpg'; 

// const Hero = () => {
//   // State to control the current image index
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const images = [image1, image2, image3]; // Use imported images

//   useEffect(() => {
//     // Auto slide every 3 seconds
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [images.length]);

//   return (
//     <div className="hero">
//       <div className="slider">
//         <img src={images[currentIndex]} alt="Slider" className="slider-image" />
//       </div>
//       <div className="hero-content">
//         <h1 className="hero-title">Welcome to Our Website</h1>
//         <p className="hero-description">Explore our services and learn more about what we offer.</p>
//         <button className="hero-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React, { useState, useEffect } from "react";
// import "./herosection.css";
// import Typewriter from "typewriter-effect";

// // Import local images
// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [image1, image2, image3];

//   useEffect(() => {
//     // Change background image every 6 seconds
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 6000);

//     return () => clearInterval(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <div className="hero-section">
//       <div
//         className="background-slider"
//         style={{
//           backgroundImage: `url(${images[currentIndex]})`,
//           transition: "background-image 1s ease-in-out", // Add smooth transition effect
//         }}
//       >
//         <div className="overlay"></div>
//       </div>
//       <div className="hero-content">
//         <h1 className="hero-title">
//           Welcome to <span className="highlight">Our Platform</span>
//         </h1>
//         <p className="hero-description">
//           <Typewriter
//             options={{
//               strings: [
//                 "Innovating the Future with Technology.",
//                 "Empowering Businesses with AI Solutions.",
//                 "Building Smarter Digital Experiences.",
//               ],
//               autoStart: true,
//               loop: true,
//               deleteSpeed: 30,
//               delay: 75,
//             }}
//           />
//         </p>
//         <button className="hero-button">Get Started</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
// import "./herosection.css";
// import heroImage from "./images/heroimage.png";

// const HeroSection = () => {
//   const [text, setText] = useState("");

//   const sentence = "Empowering businesses with AI, automation, and seamless digital transformation.";

//   useEffect(() => {
//     let index = 0;
//     setText("");

//     const interval = setInterval(() => {
//       if (index < sentence.length) {
//         setText((prev) => prev + sentence.charAt(index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100); // Adjust typing speed (100ms per character)

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1 className="hero-title">
//           <span>{text}</span>
//         </h1>
//         <p className="hero-subtitle">
//           Unlock the potential of AI, cloud, and automation to elevate your business.
//         </p>
//         <div className="hero-buttons">
//           <a href="#" className="btn primary">Get Started</a>
//           <a href="#" className="btn secondary">Learn More</a>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={heroImage} alt="Business Solutions" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";
import "./herosection.css";
import heroImage from "./images/heroimage.png";

const HeroSection = () => {
  const [text, setText] = useState("");

  const sentence = "Innovating the digital landscape to drive business success"

  useEffect(() => {
    let index = 0;
    setText("");

    const interval = setInterval(() => {
      if (index < sentence.length) {
        setText((prev) => prev + sentence.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed (100ms per character)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>{text}</span>
        </h1>
        <p className="hero-subtitle">
          Unlock the potential of AI, cloud, and automation to elevate your business.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn primary">Get Started</a>
          <a href="#" className="btn secondary">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Business Solutions" />
      </div>
    </section>
  );
};

export default HeroSection;



