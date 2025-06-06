import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const menuItems = ["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = menuItems.map(item => ({
        id: item.toLowerCase(),
        offset: document.getElementById(item.toLowerCase())?.offsetTop || 0
      }));

      const currentScrollPosition = scrollPosition + 100;

      const currentSection = sections.reduce((acc, section) => {
        if (currentScrollPosition >= section.offset) {
          return section.id;
        }
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.5 }
    }
  };

  const menuItemVariants = {
    hover: { 
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20"
          : "bg-black/70 backdrop-blur-lg"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-lg opacity-20 blur-sm"
              ></motion.div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jairam Deo
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 text-white hover:border-cyan-400 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  variants={menuItemVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === item.toLowerCase()
                        ? "text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-cyan-500/50"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item}
                    {/* Active indicator */}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    {/* Hover effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Decorative Element */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="ml-4 p-2"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden fixed top-0 right-0 h-screen w-80 bg-gradient-to-br from-slate-900 via-blue-900 to-black border-l border-cyan-500/30 shadow-2xl"
              >
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Navigation</h3>
                      <p className="text-xs text-gray-400">Portfolio Menu</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-6">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="closed"
                        animate="open"
                        className="w-full"
                      >
                        <Link
                          to={item.toLowerCase()}
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 w-full py-3 px-4 rounded-xl transition-all duration-300 ${
                            activeSection === item.toLowerCase()
                              ? "text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-cyan-500/50 shadow-lg"
                              : "text-gray-300 hover:text-white hover:bg-white/10 hover:translate-x-2"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            activeSection === item.toLowerCase()
                              ? "bg-cyan-400"
                              : "bg-gray-500"
                          }`}></div>
                          <span className="font-medium">{item}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-cyan-500/20">
                    <p className="text-cyan-300 text-sm font-medium">Ready to collaborate?</p>
                    <p className="text-gray-400 text-xs">Let's build something amazing!</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;