import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2E5077] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">YourCompany</h3>
            <p className="text-silver">Innovative IT solutions for modern businesses</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-2">
              <li><a href="#web" className="text-white">Web Development</a></li>
              <li><a href="#erp" className="text-white">ERP Solutions</a></li>
              <li><a href="#mobile" className="text-white">Mobile Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">LinkedIn</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

