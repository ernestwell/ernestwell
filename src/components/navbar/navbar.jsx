// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const servicesList = [
//     "Web Development", 
//     "Mobile Apps Development", 
//     "ERP Solutions", 
//     "Custom Software",
//     "Digital Marketing", 
//     "Cloud Solutions", 
//     "Cybersecurity", 
//     "IT Support"
//   ];

//   // Scroll event to change navbar color
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);
//   const toggleServices = () => setServicesOpen((prev) => !prev);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <h2 className="navbar-logo">ErnestWell</h2>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li><Link to="/" className="nav-link">Home</Link></li>
//           <li><Link to="/about" className="nav-link">About</Link></li>

//           <li className="nav-item">
//             <span className="nav-link" onClick={toggleServices}>Services</span>
//             {servicesOpen && (
//               <ul className="dropdown">
//                 {servicesList.map((service, index) => (
//                   <li key={index} className="dropdown-item">{service}</li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
//           <li><Link to="/apply-jobs" className="nav-link">Apply Jobs</Link></li>
//           <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
//         </ul>

//         <div className="menu-icon" onClick={toggleMenu}>
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from "./ernest logo.png"; // Ensure the logo image is placed in the correct directory

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        
        {/* Logo and Company Name (Moved to Left) */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="company-name">ErnestWell</span>
        </Link>

        {/* Toggle Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item nav-home">Home</Link></li>
          <li><Link to="/portfolio" className="nav-item">Portfolio</Link></li>
          <li><Link to="/services" className="nav-item nav-services">Services+</Link></li>
          <li><Link to="/careers" className="nav-item">Careers</Link></li>
          <li><Link to="/contact" className="nav-item contact">Contact</Link></li>
          <li><Link to="/signin" className="nav-item nav-signin">Sign In</Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;







