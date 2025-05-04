
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaUser } from "react-icons/fa";
// import { auth, loginWithGoogle, logout } from "../../Firebase";
// import "./navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [userDropdown, setUserDropdown] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       unsubscribe();
//     };
//   }, []);

//   const handleLogout = async () => {
//     await logout();
//     setUser(null);
//     setUserDropdown(false);
//   };

//   const toggleDropdown = (e) => {
//     e.stopPropagation();
//     setUserDropdown((prev) => !prev);
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
//           <li><Link to="/" className="nav-item nav-home" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/profile" className="nav-item" onClick={() => setMenuOpen(false)}>Profile</Link></li>

//           <li className="nav-item nav-services" onClick={() => setDropdownOpen(!dropdownOpen)}>
//             <span>Services+</span>
//             {dropdownOpen && (
//               <ul className="dropdown-menu-nav">
//                 <li><Link to="/web-development" onClick={() => setMenuOpen(false)}>Web Development</Link></li>
//                 <li><Link to="/app-development" onClick={() => setMenuOpen(false)}>App Development</Link></li>
//                 <li><Link to="/cloudsolutions" onClick={() => setMenuOpen(false)}>Cloud Solutions</Link></li>
//                 <li><Link to="/CybersecuritySolutions" onClick={() => setMenuOpen(false)}>Cyber Security</Link></li>
//                 <li><Link to="/ITsupport" onClick={() => setMenuOpen(false)}>IT Support</Link></li>
//                 <li><Link to="/erp-development" onClick={() => setMenuOpen(false)}>ERP Services</Link></li>
//                 <li><Link to="/custom-development" onClick={() => setMenuOpen(false)}>Custom Solutions</Link></li>
//                 <li><Link to="/digitalmarketing" onClick={() => setMenuOpen(false)}>Digital Marketing</Link></li>
//               </ul>
//             )}
//           </li>

//           <li><Link to="/careers" className="nav-item" onClick={() => setMenuOpen(false)}>Careers</Link></li>
//           <li><Link to="/contact" className="nav-item contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//         </ul>

//         {user ? (
//           <div className="user-profile">
//             <img
//               src={user.photoURL || "/default-avatar.png"}
//               alt="User"
//               className="user-logo"
//               onClick={toggleDropdown}
//             />
//             {userDropdown && (
//               <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
//                 <Link to="/profile" className="profile-dropdown-item" onClick={() => setUserDropdown(false)}>
//                   <FaUser style={{ marginRight: "8px" }} /> View Profile
//                 </Link>
//                 <button className="logout-btn" onClick={handleLogout}>Logout</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/sign-in" className="nav-item nav-signin">Sign In</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { auth, logout } from "../../Firebase";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userDropdown, setUserDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          await currentUser.reload(); // Force Firebase to refresh user info
          const updatedUser = auth.currentUser; // Fetch updated user
          console.log("Updated User Photo:", updatedUser?.photoURL); // Debugging log
          setUser({ ...updatedUser }); // Ensures React detects state change
        } catch (error) {
          console.error("Error refreshing user data:", error);
        }
      } else {
        setUser(null);
      }
    });

    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-profile")) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-nav">
          <span className="company-name-nav">Ernestwell</span>
        </Link>

        <div className="menu-toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/profile" className="nav-item" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          
          <li className="nav-item nav-services" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span>Services+</span>
            {dropdownOpen && (
              <ul className="dropdown-menu-nav">
                <li><Link to="/web-development">Web Development</Link></li>
                <li><Link to="/app-development">App Development</Link></li>
                <li><Link to="/AIAgentSolutions">AI Agent</Link></li>
                <li><Link to="/CybersecuritySolutions">Cyber Security</Link></li>
                <li><Link to="/ITsupport">IT Support</Link></li>
                <li><Link to="/erp-development">ERP & CRM</Link></li>
                <li><Link to="/custom-development">Custom Solutions</Link></li>
                <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
                <li><Link to="/ECommerce">E-Commerce Dev</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/careers" className="nav-item" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" className="nav-item contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          {!user && (
            <li className="signin-dropdown">
              <Link to="/sign-in" className="signin-link">Sign In</Link>
            </li>
          )}
        </ul>

        {user ? (
          <div className="user-profile">
            <img
              key={user?.photoURL + Date.now()} // Forces re-render on user change
              src={user?.photoURL || "/default-avatar.png"}
              alt="User"
              className="user-logo"
              onClick={(e) => {
                e.stopPropagation();
                setUserDropdown((prev) => !prev);
              }}
            />
            {userDropdown && (
              <div className="dropdown-content">
                <Link to="/profile" className="profile-dropdown-item" onClick={() => setUserDropdown(false)}>
                  <FaUser style={{ marginRight: "8px" }} /> View Profile
                </Link>
                <Link to="/admin" className="profile-dropdown-item" onClick={() => setUserDropdown(false)}>
                  <FaUser style={{ marginRight: "8px" }} /> admin
                </Link>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
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
