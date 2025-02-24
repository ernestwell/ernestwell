import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2E5077] shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-silver hover:text-white cursor-pointer">
            YourCompany
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-silver hover:text-white font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-silver hover:text-white focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2E5077] shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-silver hover:text-white font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
