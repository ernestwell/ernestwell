import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Correct icon imports

function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#2E5077]" /> {/* Using the FaPhoneAlt icon */}
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#2E5077]" /> {/* Using the FaEnvelope icon */}
              <span>contact@yourcompany.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
