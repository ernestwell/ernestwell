// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./navbar.css";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <Link to="/" className="logo-nav">
//           <span className="company-name-nav">ErnestWell</span>
//         </Link>

//         <div className="menu-toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li><Link to="/" className="nav-item nav-home">Home</Link></li>
//           <li><Link to="/profile" className="nav-item">Profile</Link></li>
          
//           <li 
//               className="nav-item nav-services"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <span onClick={() => setDropdownOpen(!dropdownOpen)}>Services+</span>
//               {dropdownOpen && (
//                 <ul className="dropdown-menu-nav">
//                   <li><Link to="/web-development">Web Development</Link></li>
//                   <li><Link to="/app-development">App Development</Link></li>
//                   <li><Link to="/cloudsolutions">Cloud Solutions</Link></li>
//                   <li><Link to="/CybersecuritySolutions">Cyber Security</Link></li>
//                   <li><Link to="/ITsupport">IT Support</Link></li>
//                   <li><Link to="/erp-development">ERP Services</Link></li>
//                   <li><Link to="/custom-development">Custom Solutions</Link></li>
//                   <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
//                 </ul>
//               )}
//           </li>


//           <li><Link to="/careers" className="nav-item">Careers</Link></li>
//           <li><Link to="/contact" className="nav-item contact">Contact</Link></li>
//           <li><Link to="/sign-in" className="nav-item nav-signin">Sign In</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <Link to="/" className="logo-nav">
//           <span className="company-name-nav">Ernestwell</span>
//         </Link>

//         <div className="menu-toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li><Link to="/" className="nav-item nav-home">Home</Link></li>
//           <li><Link to="/profile" className="nav-item">Profile</Link></li>
          
//           <li 
//               className="nav-item nav-services"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <span onClick={() => setDropdownOpen(!dropdownOpen)}>Services+</span>
//               {dropdownOpen && (
//                 <ul className="dropdown-menu-nav">
//                   <li><Link to="/web-development">Web Development</Link></li>
//                   <li><Link to="/app-development">App Development</Link></li>
//                   <li><Link to="/cloudsolutions">Cloud Solutions</Link></li>
//                   <li><Link to="/CybersecuritySolutions">Cyber Security</Link></li>
//                   <li><Link to="/ITsupport">IT Support</Link></li>
//                   <li><Link to="/erp-development">ERP Services</Link></li>
//                   <li><Link to="/custom-development">Custom Solutions</Link></li>
//                   <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
//                 </ul>
//               )}
//           </li>

//           <li><Link to="/careers" className="nav-item">Careers</Link></li>
//           <li><Link to="/contact" className="nav-item contact">Contact</Link></li>
//         </ul>

//         <Link to="/sign-in" className="nav-item nav-signin">Sign In</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { auth, loginWithGoogle, logout } from "../../Firebase"; // Import Firebase functions
// import "./navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

//   useEffect(() => {
//     // Handle scroll event for navbar effect
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);

//     // Listen for authentication state changes
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       unsubscribe();
//     };
//   }, []);

//   const handleSignIn = async () => {
//     const userData = await loginWithGoogle();
//     setUser(userData);
//   };

//   const handleSignOut = async () => {
//     await logout();
//     setUser(null);
//     setProfileDropdownOpen(false);
//   };

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <Link to="/" className="logo-nav">
//           <span className="company-name-nav">Ernestwell</span>
//         </Link>

//         <div className="menu-toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li><Link to="/" className="nav-item nav-home">Home</Link></li>
//           <li><Link to="/profile" className="nav-item">Profile</Link></li>

//           <li 
//             className="nav-item nav-services"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <span onClick={() => setDropdownOpen(!dropdownOpen)}>Services+</span>
//             {dropdownOpen && (
//               <ul className="dropdown-menu-nav">
//                 <li><Link to="/web-development">Web Development</Link></li>
//                 <li><Link to="/app-development">App Development</Link></li>
//                 <li><Link to="/cloudsolutions">Cloud Solutions</Link></li>
//                 <li><Link to="/CybersecuritySolutions">Cyber Security</Link></li>
//                 <li><Link to="/ITsupport">IT Support</Link></li>
//                 <li><Link to="/erp-development">ERP Services</Link></li>
//                 <li><Link to="/custom-development">Custom Solutions</Link></li>
//                 <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
//               </ul>
//             )}
//           </li>

//           <li><Link to="/careers" className="nav-item">Careers</Link></li>
//           <li><Link to="/contact" className="nav-item contact">Contact</Link></li>
//         </ul>

//         {user ? (
//           <div className="user-profile">
//             <img
//               src={user.photoURL || "/default-avatar.png"}
//               alt="User"
//               className="user-logo"
//               onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
//             />
//             {profileDropdownOpen && (
//               <div className="profile-dropdown">
//                 <p>{user.displayName}</p>
//                 <p onClick={handleSignOut}>Log Out</p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button className="nav-signin" onClick={handleSignIn}>Sign In</button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { auth, loginWithGoogle, logout } from "../../Firebase"; // Import Firebase auth functions
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    // Handle navbar scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Listen for authentication changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    const userData = await loginWithGoogle();
    setUser(userData);
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setProfileDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-nav">
          <span className="company-name-nav">Ernestwell</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item nav-home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/profile" className="nav-item" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          
          {/* Services Dropdown */}
          <li 
            className="nav-item nav-services"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Services+</span>
            {dropdownOpen && (
              <ul className="dropdown-menu-nav">
                <li><Link to="/web-development" onClick={() => setMenuOpen(false)}>Web Development</Link></li>
                <li><Link to="/app-development" onClick={() => setMenuOpen(false)}>App Development</Link></li>
                <li><Link to="/cloudsolutions" onClick={() => setMenuOpen(false)}>Cloud Solutions</Link></li>
                <li><Link to="/CybersecuritySolutions" onClick={() => setMenuOpen(false)}>Cyber Security</Link></li>
                <li><Link to="/ITsupport" onClick={() => setMenuOpen(false)}>IT Support</Link></li>
                <li><Link to="/erp-development" onClick={() => setMenuOpen(false)}>ERP Services</Link></li>
                <li><Link to="/custom-development" onClick={() => setMenuOpen(false)}>Custom Solutions</Link></li>
                <li><Link to="/digitalmarketing" onClick={() => setMenuOpen(false)}>Digital Marketing</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/careers" className="nav-item" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" className="nav-item contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Authentication Section */}
        {user ? (
          <div className="user-profile">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User"
              className="user-logo"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            />
            {profileDropdownOpen && (
              <div className="profile-dropdown">
                <p>{user.displayName}</p>
                <p onClick={handleSignOut}>Log Out</p>
              </div>
            )}
          </div>
        ) : (
          <Link to="/sign-in" className="nav-item nav-signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;








