import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css"; // Custom styles

const projects = [
  { id: 1, title: "Project One", details: "Details about Project One" },
  { id: 2, title: "Project Two", details: "Details about Project Two" },
  { id: 3, title: "Project Three", details: "Details about Project Three" },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Left Side: Cards */}
      <div className="left">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 0.5 }}
          >
            <div className="card-content">
              <div className="card-front">
                <img src="https://via.placeholder.com/150" alt="Placeholder" className="logo" />
              </div>
              <div className="card-back">
                <p>{project.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Side: Company Info */}
      <div className="right">
        <h1>Welcome to Ernestwell</h1>
        <p>Providing cutting-edge technical solutions to power your business.</p>
        <button className="portfolio-btn">View Portfolio</button>
      </div>
    </div>
  );
};

export default Portfolio;

