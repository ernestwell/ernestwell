import React, { useState, useEffect } from "react";
import "./herosection.css";
import heroImage from "./images/heroimage.png";

const HeroSection = () => {
  const sentences = [
    "Transforming your ideas into digital reality",  
    "Empowering businesses with innovative solutions",
    "Building a smarter future with technology"
  ];

  const [text, setText] = useState(sentences[0]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < sentences[sentenceIndex].length) {
        setText(sentences[sentenceIndex].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 2000); // Pause before switching sentences
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sentenceIndex, charIndex]);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          <span>{text}</span>
        </h1>
        <p className="hero-subtitle">
          Innovate, create, and launch with cutting-edge technology solutions. We help businesses turn vision into reality.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn primary">Explore Now</a>
          <a href="#" className="btn secondary">Get in Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Tech Solutions" />
      </div>
    </section>
  );
};

export default HeroSection;

