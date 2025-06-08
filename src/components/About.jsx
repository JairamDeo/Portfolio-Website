import React from "react";
import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Target, Award, Zap, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import profilePic from "../assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "1.6+ Years",
      subtitle: "Development Experience",
      color: "from-blue-500 to-cyan-500"
    },
    // {
    //   icon: <Award className="w-6 h-6" />,
    //   title: "5+ Projects",
    //   subtitle: "Successfully Delivered",
    //   color: "from-purple-500 to-pink-500"
    // },
    // {
    //   icon: <Zap className="w-6 h-6" />,
    //   title: "MERN Stack",
    //   subtitle: "Specialist",
    //   color: "from-green-500 to-emerald-500"
    // }
  ];

  const skills = [
    "Full Stack Development",
    "Cloud Architecture (AWS)",
    "Database Optimization",
    "API Development",
    "DevOps & Monitoring",
    "Figma Translation To Code"
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-black py-20 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1">
                  <img
                    src={profilePic}
                    alt="Jairam Deo - Full Stack Developer"
                    className="w-full h-full rounded-full object-fit bg-slate-800"
                  />
                </div>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg"
                >
                  <Coffee className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl shadow-lg"
                >
                  <Lightbulb className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Jairam Deo</span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specializing in the MERN stack with expertise in cloud technologies and modern web development.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                I craft scalable, user-centric applications that solve real-world problems. My journey spans from building responsive frontends to architecting robust backend systems, with a strong focus on performance optimization and clean, maintainable code.
              </p>

              <div className="flex items-center gap-2 text-purple-400">
                <Target className="w-5 h-5" />
                <span className="font-medium">Mission: Creating impactful digital solutions that make a difference</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${highlight.color} mb-2`}>
                      {highlight.icon}
                    </div>
                    <h4 className="font-bold text-white text-lg">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Core Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                <span className="text-blue-300">Ready to build something amazing together?</span>
                  <Link to="contact"
                  spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:text-blue-300 cursor-pointer" />
                  </Link>
                <span className="text-2xl">💫</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;