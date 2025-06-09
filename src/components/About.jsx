import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Target, ExternalLink } from "lucide-react";

// Mock profile image - replace with your actual image
import profilePic from "../assets/profile.jpg" 

// Memoized floating icon component
const FloatingIcon = memo(({ Icon, className, animationProps }) => (
  <motion.div
    className={`absolute bg-gradient-to-r p-3 rounded-xl shadow-lg ${className}`}
    {...animationProps}
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.div>
));

FloatingIcon.displayName = 'FloatingIcon';

const About = memo(() => {
  // Memoized static data
  const highlights = useMemo(() => [
    {
      icon: Code,
      title: "1.6+ Years",
      subtitle: "Development Experience",
      color: "from-blue-500 to-cyan-500"
    }
  ], []);

  const skills = useMemo(() => [
    "Full Stack Development",
    "Cloud Architecture (AWS)",
    "Database Optimization",
    "API Development",
    "DevOps & Monitoring",
    "Figma Translation To Code"
  ], []);

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }), []);

  const floatingAnimations = useMemo(() => ({
    code: {
      animate: { y: [0, -10, 0], rotate: [0, 5, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    coffee: {
      animate: { y: [0, 10, 0], rotate: [0, -5, 0] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
    },
    lightbulb: {
      animate: { y: [0, -8, 0], rotate: [0, 8, 0] },
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
    }
  }), []);

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-black py-12 sm:py-16 lg:py-20 text-white relative overflow-hidden"
    >
      {/* Background Effects - Optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image - Responsive */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1">
                  <img
                    src={profilePic}
                    alt="Jairam Deo - Full Stack Developer"
                    className="w-full h-full rounded-full object-fit bg-slate-800"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Icons - Responsive */}
                <FloatingIcon
                  Icon={Code}
                  className="-top-2 -right-2 sm:-top-4 sm:-right-4 from-blue-500 to-cyan-500"
                  animationProps={floatingAnimations.code}
                />
                <FloatingIcon
                  Icon={Coffee}
                  className="-bottom-2 -left-2 sm:-bottom-4 sm:-left-4 from-purple-500 to-pink-500"
                  animationProps={floatingAnimations.coffee}
                />
                <FloatingIcon
                  Icon={Lightbulb}
                  className="top-1/2 -left-3 sm:-left-6 from-green-500 to-emerald-500"
                  animationProps={floatingAnimations.lightbulb}
                />
              </div>
            </div>
          </motion.div>

          {/* Content - Responsive */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 lg:space-y-8 order-2 lg:order-none"
          >
            {/* Introduction */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Jairam Deo</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  A passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specializing in the MERN stack with expertise in cloud technologies and modern web development.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                I craft scalable, user-centric applications that solve real-world problems. My journey spans from building responsive frontends to architecting robust backend systems, with a strong focus on performance optimization and clean, maintainable code.
              </p>

              <div className="flex items-center gap-2 text-purple-400 text-sm sm:text-base">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-medium">Mission: Creating impactful digital solutions that make a difference</span>
              </div>
            </div>

            {/* Highlights - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${highlight.color} mb-2`}>
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white text-base sm:text-lg">{highlight.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{highlight.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Grid - Responsive */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🚀</span>
                Core Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action - Responsive */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                <span className="text-blue-300 text-sm sm:text-base">Ready to build something amazing together?</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 cursor-pointer flex-shrink-0" />
                <span className="text-lg sm:text-2xl">💫</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;