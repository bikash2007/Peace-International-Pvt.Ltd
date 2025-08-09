import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Structure", href: "/structure" },
    { name: "Gallery", href: "/gallery" },
    { name: "Information", href: "/information" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section - Responsive */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img
                className="h-8 w-auto sm:h-10 md:h-32"
                src="/logo.png"
                alt="Peace International"
              />
              <div className="ml-2 sm:ml-3">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-[#004876] leading-tight">
                  Peace International
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block leading-tight">
                  Committed to Serving and Skill & Safe Abroad Employment
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.href
                    ? "text-white bg-[#004876] shadow-md"
                    : "text-gray-700 hover:text-[#004876] hover:bg-[#004876]/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#004876] hover:bg-gray-100 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-white bg-[#004876]"
                      : "text-gray-700 hover:text-[#004876] hover:bg-[#004876]/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 px-3">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#004876] text-white font-medium rounded-lg hover:bg-[#003660] transition-colors duration-200 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
