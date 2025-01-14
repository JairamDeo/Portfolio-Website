import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
          {/* Footer Name */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-cyan-400">Jairam Deo</h2>
            <p className="text-lg text-gray-400 mt-2">Software Developer</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://github.com/JairamDeo" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/jairamdeo/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a href="mailto:jairamdeo2002@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
            <a href="tel:+918830973046" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt size={30} className="text-white hover:text-cyan-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Jairam Deo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
