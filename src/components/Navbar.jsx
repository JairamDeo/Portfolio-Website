import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const menuItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.toLowerCase(),
        offset: document.getElementById(item.toLowerCase())?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.offset) {
          return section.id;
        }
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-black bg-opacity-70 backdrop-blur-lg z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-500 cursor-pointer transform transition duration-300 hover:scale-110">
            Jairam Deo
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-lg font-medium">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-500"
                        : "text-gray-400"
                    } hover:text-cyan-500 transition-colors`}
                  >
                    {item}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 right-0 h-screen w-64 bg-black bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-500 bg-cyan-500 bg-opacity-10"
                      : "text-gray-400"
                  } hover:text-cyan-500 hover:bg-cyan-500 hover:bg-opacity-10`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;