import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "./ernest logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="company-name">ErnestWell</span>
        </Link>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item nav-home">Home</Link></li>
          <li><Link to="/portfolio" className="nav-item">Profile</Link></li>
          
          <li 
              className="nav-item nav-services"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span onClick={() => setDropdownOpen(!dropdownOpen)}>Services+</span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/web-development">Web Development</Link></li>
                  <li><Link to="/app-development">App Development</Link></li>
                  <li><Link to="/cloudsolutions">Cloud Solutions</Link></li>
                  <li><Link to="/CybersecuritySolutions">Cyber Security</Link></li>
                  <li><Link to="/ITsupport">IT Support</Link></li>
                  <li><Link to="/erp-development">ERP Services</Link></li>
                  <li><Link to="/custom-development">Custom Solutions</Link></li>
                  <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
                </ul>
              )}
          </li>


          <li><Link to="/careers" className="nav-item">Careers</Link></li>
          <li><Link to="/contact" className="nav-item contact">Contact</Link></li>
          <li><Link to="/sign-in" className="nav-item nav-signin">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;








