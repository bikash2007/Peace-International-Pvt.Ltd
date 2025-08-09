// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", nameNp: "गृहपृष्ठ", href: "/" },
    { name: "About Us", nameNp: "हाम्रो बारेमा", href: "/about" },
    { name: "Jobs", nameNp: "रोजगारी", href: "/jobs" },
    { name: "Services", nameNp: "सेवाहरू", href: "/services" },
    { name: "Gallery", nameNp: "ग्यालरी", href: "/gallery" },
    { name: "Structure", nameNp: "संरचना", href: "/structure" },
    { name: "Information", nameNp: "जानकारी", href: "/information" },
    { name: "Contact", nameNp: "सम्पर्क", href: "/contact" },
  ];

  const services = [
    { name: "Worker Recruitment", nameNp: "कामदार भर्ती", icon: UserGroupIcon },
    {
      name: "Documentation Processing",
      nameNp: "कागजात प्रशोधन",
      icon: DocumentTextIcon,
    },
    { name: "Visa Assistance", nameNp: "भिसा सहायता", icon: ShieldCheckIcon },
    {
      name: "Training & Orientation",
      nameNp: "प्रशिक्षण र अभिमुखीकरण",
      icon: AcademicCapIcon,
    },
    {
      name: "Travel Arrangements",
      nameNp: "यात्रा व्यवस्था",
      icon: GlobeAltIcon,
    },
    {
      name: "Welfare Monitoring",
      nameNp: "कल्याण अनुगमन",
      icon: BuildingOfficeIcon,
    },
  ];

  const countries = [
    { name: "Malaysia", nameNp: "मलेसिया", flag: "🇲🇾" },
    { name: "Qatar", nameNp: "कतार", flag: "🇶🇦" },
    { name: "Saudi Arabia", nameNp: "साउदी अरब", flag: "🇸🇦" },
    { name: "Dubai, UAE", nameNp: "दुबई, यूएई", flag: "🇦🇪" },
    { name: "Kuwait", nameNp: "कुवेत", flag: "🇰🇼" },
  ];

  const contactInfo = {
    phones: ["+977-5913706", "+977-1-4113707"],
    fax: "+977-1-4113708",
    emails: {
      general: "pce.intlovs@yahoo.com",
      management: "ashdri77@yahoo.com",
      documentation: "peace_doc@yahoo.com",
      pr: "ipeacepr@yahoo.com",
      ticketing: "ticketingpc@yahoo.com",
    },
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-[#1B1948] to-[#004876]"
    >
      {/* Top Wave Design */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full h-12 -mb-1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-lg p-2 mr-3">
                  <img
                    src="/logo.png"
                    alt="Peace International"
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Peace International
                  </h3>
                  <p className="text-blue-200 text-sm">
                    पीस इन्टरनेशनल प्रा. लि.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Nepal's leading manpower recruitment agency, connecting skilled
                workers with international opportunities since 2009.
              </p>
              <div className="bg-[#004876]/30 backdrop-blur-sm rounded-lg p-3 border border-blue-400/20">
                <p className="text-blue-200 text-xs font-medium mb-1">
                  Government Licensed
                </p>
                <p className="text-white font-bold">License No: 11/044/045</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Quick Links
            </h4>
            <p className="text-blue-200 text-sm mb-4">द्रुत लिङ्कहरू</p>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ChevronRightIcon className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link.name}</span>
                    <span className="text-blue-300 text-xs ml-1">
                      • {link.nameNp}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Our Services
            </h4>
            <p className="text-blue-200 text-sm mb-4">हाम्रा सेवाहरू</p>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-[#1e3a8a]/30 rounded p-1.5 mr-2 mt-0.5 group-hover:bg-[#1e3a8a]/50 transition-colors duration-200">
                    <service.icon className="h-3 w-3 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                      {service.name}
                    </p>
                    <p className="text-blue-300 text-xs">{service.nameNp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries We Serve */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">
              Countries We Serve
            </h4>
            <p className="text-blue-200 text-sm mb-4">
              हामीले सेवा गर्ने देशहरू
            </p>
            <ul className="space-y-3">
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="flex items-center group cursor-pointer"
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                    {country.flag}
                  </span>
                  <div>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                      {country.name}
                    </p>
                    <p className="text-blue-300 text-xs">{country.nameNp}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-gradient-to-r from-[#1e3a8a] to-[#004876] rounded-lg p-4 border border-blue-400/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-200 text-xs">Experience</span>
                <span className="text-white font-bold">40+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-xs">Workers Deployed</span>
                <span className="text-white font-bold">2000+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Bar */}
      <div className="bg-[#004876]/50 backdrop-blur-sm border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-[#1e3a8a]/30 rounded-lg p-2 mr-3">
                <MapPinIcon className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <h5 className="text-white font-medium mb-1 text-sm">
                  Office Address
                </h5>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Maiti Marga, Pingalasthan-09
                  <br />
                  Goushala, Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-[#1e3a8a]/30 rounded-lg p-2 mr-3">
                <PhoneIcon className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <h5 className="text-white font-medium mb-1 text-sm">
                  Phone & Fax
                </h5>
                {contactInfo.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-white text-xs block transition-colors duration-200"
                  >
                    📞 {phone}
                  </a>
                ))}
                <p className="text-gray-300 text-xs mt-1">
                  📠 Fax: {contactInfo.fax}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-[#1e3a8a]/30 rounded-lg p-2 mr-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <h5 className="text-white font-medium mb-1 text-sm">
                  Email Contacts
                </h5>
                <a
                  href={`mailto:${contactInfo.emails.general}`}
                  className="text-blue-300 hover:text-white text-xs block transition-colors duration-200"
                >
                  General: {contactInfo.emails.general}
                </a>
                <a
                  href={`mailto:${contactInfo.emails.documentation}`}
                  className="text-blue-300 hover:text-white text-xs block transition-colors duration-200 mt-1"
                >
                  Docs: {contactInfo.emails.documentation}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start">
              <div className="bg-[#1e3a8a]/30 rounded-lg p-2 mr-3">
                <ClockIcon className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <h5 className="text-white font-medium mb-1 text-sm">
                  Business Hours
                </h5>
                <p className="text-gray-300 text-xs">
                  Sun - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                </p>
                <p className="text-blue-300 text-xs mt-1">
                  ⚡ Emergency: On Call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter/CTA Section */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#004876] border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold text-lg">
                🚀 Start Your International Career Today
              </h4>
              <p className="text-blue-200 text-sm">
                विदेशी रोजगारीका लागि आजै सम्पर्क गर्नुहोस्
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/jobs"
                className="bg-white text-[#004876] px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Current Jobs
              </Link>
              <Link
                to={"/contact"}
                className="bg-[#004876]/30 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Developer Credit */}
      <div className="bg-[#1B1948] border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Peace International Pvt. Ltd. All rights
                reserved.
              </p>
              <p className="text-blue-300 text-xs mt-1">
                Licensed by Department of Foreign Employment, Government of
                Nepal
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/information"
                className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
              >
                Recruitment Process
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/services"
                className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
