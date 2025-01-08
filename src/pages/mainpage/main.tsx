// import React, { useState } from 'react';
// import { Menu, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';

// const WebsiteStructure = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the mobile menu state

//   // Toggle the mobile menu visibility
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <div className="min-h-screen">
//       {/* Header/Navigation */}
//       <header className="bg-silver shadow-md fixed w-full top-0 z-50">
//       <div className="container">
//           <div className="navbar-content">
//             <div className="navbar-logo">Ernestwell Business Solutions</div>

//             {/* Desktop Navbar */}
//             <nav className="desktop-nav">
//               <a href="#home" className="nav-link">Home</a>
//               <div className="nav-item">
//                 <button className="nav-link">Services <ChevronDown className="dropdown-icon" /></button>
//                 <div className="dropdown">
//                   <a href="#web" className="dropdown-item">Web Development</a>
//                   <a href="#erp" className="dropdown-item">ERP Solutions</a>
//                   <a href="#mobile" className="dropdown-item">Mobile Apps</a>
//                   <a href="#software" className="dropdown-item">Custom Software</a>
//                   <a href="#digital" className="dropdown-item">Digital Marketing</a>
//                   <a href="#cloud" className="dropdown-item">Cloud Solutions</a>
//                   <a href="#security" className="dropdown-item">Cybersecurity</a>
//                   <a href="#support" className="dropdown-item">IT Support</a>
//                 </div>
//               </div>
//               <a href="#portfolio" className="nav-link">Portfolio</a>
//               <a href="#about" className="nav-link">About</a>
//               <a href="#contact" className="nav-link">Contact</a>
//             </nav>

//             {/* Mobile Hamburger Icon */}
//             <div className="mobile-nav-icon">
//               <Menu className="menu-icon" onClick={toggleMenu} />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu (Toggle visibility based on state) */}
//       <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//         <nav className="mobile-nav">
//           <a href="#home" className="mobile-nav-link">Home</a>
//           <div className="mobile-nav-item">
//             <button className="mobile-nav-link">Services <ChevronDown className="dropdown-icon" /></button>
//             <div className="mobile-dropdown">
//               <a href="#web" className="mobile-dropdown-item">Web Development</a>
//               <a href="#erp" className="mobile-dropdown-item">ERP Solutions</a>
//               <a href="#mobile" className="mobile-dropdown-item">Mobile Apps</a>
//               <a href="#software" className="mobile-dropdown-item">Custom Software</a>
//               <a href="#digital" className="mobile-dropdown-item">Digital Marketing</a>
//               <a href="#cloud" className="mobile-dropdown-item">Cloud Solutions</a>
//               <a href="#security" className="mobile-dropdown-item">Cybersecurity</a>
//               <a href="#support" className="mobile-dropdown-item">IT Support</a>
//             </div>
//           </div>
//           <a href="#portfolio" className="mobile-nav-link">Portfolio</a>
//           <a href="#about" className="mobile-nav-link">About</a>
//           <a href="#contact" className="mobile-nav-link">Contact</a>
//         </nav>
//       </div>

//       {/* Hero Section */}
//       <section className="pt-20 pb-12 bg-gradient-to-r from-[#2E5077] to-[#1F3550] text-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Innovative IT Solutions for Your Business
//             </h1>
//             <p className="text-xl mb-8">
//               Transform your business with cutting-edge technology solutions
//             </p>
//             <button className="bg-white text-[#2E5077] px-8 py-3 rounded-lg font-semibold hover:bg-[#c7d5e0] transition duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Service Cards */}
//             {['Web Development', 'ERP Solutions', 'Mobile Apps', 'Custom Software', 
//               'Digital Marketing', 'Cloud Solutions', 'Cybersecurity', 'IT Support'].map((service) => (
//               <div key={service} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
//                 <h3 className="text-xl font-semibold mb-4">{service}</h3>
//                 <p className="text-gray-600 mb-4">
//                   Professional {service.toLowerCase()} solutions tailored to your needs
//                 </p>
//                 <a href={`#${service.toLowerCase()}`} className="text-[#2E5077] flex items-center">
//                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Portfolio Items */}
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
//                 <div className="h-48 bg-gray-200"></div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
//                   <p className="text-gray-600">
//                     Description of project and technologies used
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
//           <div className="max-w-2xl mx-auto">
//             <div className="flex flex-col space-y-4">
//               <div className="flex items-center space-x-4">
//                 <Phone className="h-6 w-6 text-[#2E5077]" />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Mail className="h-6 w-6 text-[#2E5077]" />
//                 <span>contact@yourcompany.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2E5077] text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">YourCompany</h3>
//               <p className="text-silver">
//                 Innovative IT solutions for modern businesses
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Services</h4>
//               <ul className="space-y-2">
//                 <li><a href="#web" className="text-white">Web Development</a></li>
//                 <li><a href="#erp" className="text-white">ERP Solutions</a></li>
//                 <li><a href="#mobile" className="text-white">Mobile Apps</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#about" className="text-white">About Us</a></li>
//                 <li><a href="#contact" className="text-white">Contact Us</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-white">Facebook</a></li>
//                 <li><a href="#" className="text-white">LinkedIn</a></li>
//                 <li><a href="#" className="text-white">Twitter</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default WebsiteStructure;
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../../App.css';  // Importing the CSS file for styling

const WebsiteStructure = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the mobile menu state
  const [showServices, setShowServices] = useState(false); // Track services toggle

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle the visibility of service cards
  const toggleServices = () => setShowServices(!showServices);

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo as Image */}
            <div className="navbar-logo">
              <img src="/path-to-your-logo.png" alt="Logo" className="logo-img" />
            </div>

            {/* Desktop Navbar */}
            <nav className="desktop-nav">
              <a href="#home" className="nav-link">Home</a>
              <button className="nav-link" onClick={toggleServices}>Services</button> {/* Services button */}
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Mobile Hamburger Icon */}
            <div className="mobile-nav-icon" onClick={toggleMenu}>
              <Menu className="menu-icon" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" className="mobile-nav-link">Home</a>
          <button className="mobile-nav-link" onClick={toggleServices}>Services</button> {/* Services button */}
          <a href="#portfolio" className="mobile-nav-link">Portfolio</a>
          <a href="#about" className="mobile-nav-link">About</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
        </nav>
      </div>

      {/* Services Section */}
      <section className={`services-section ${showServices ? 'show' : ''}`}>
        <div className="container">
          <div className="service-card">Web Development</div>
          <div className="service-card">ERP Solutions</div>
          <div className="service-card">Mobile Apps</div>
          <div className="service-card">Custom Software</div>
          <div className="service-card">Digital Marketing</div>
          <div className="service-card">Cloud Solutions</div>
          <div className="service-card">Cybersecurity</div>
          <div className="service-card">IT Support</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Innovative IT Solutions for Your Business</h1>
            <p className="hero-description">Transform your business with cutting-edge technology solutions</p>
            <button className="hero-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">YourCompany</h3>
              <p className="footer-description">Innovative IT solutions for modern businesses</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                <li><a href="#web" className="footer-link">Web Development</a></li>
                <li><a href="#erp" className="footer-link">ERP Solutions</a></li>
                <li><a href="#mobile" className="footer-link">Mobile Apps</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#contact" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-subtitle">Follow Us</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Facebook</a></li>
                <li><a href="#" className="footer-link">LinkedIn</a></li>
                <li><a href="#" className="footer-link">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteStructure;




