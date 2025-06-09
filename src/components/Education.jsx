import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    institution: "Yeshwantrao Chavan College of Engineering",
    location: "Nagpur",
    duration: "Dec 2021 - June 2024",
    grade: "6.64 CGPA",
    gradeType: "CGPA",
    level: "Bachelor's",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20",
    highlights: ["Information Technology", "Engineering Degree", "3 Years Program"],
    percentage: 66.4,
    AosName : "flip-left",
    AosDuration : "2500"
  },
  {
    id: 2,
    icon: Award,
    title: "Diploma in Computer Technology",
    institution: "Dharampeth Polytechnic",
    location: "Nagpur",
    duration: "Aug 2018 - June 2021",
    grade: "88.86%",
    gradeType: "Percentage",
    level: "Diploma",
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-500/20 to-orange-600/20",
    highlights: ["Computer Technology", "Polytechnic Diploma", "3 Years Program"],
    percentage: 88.86,
    AosName : "zoom-in",
    AosDuration : "2500"
  },
  {
    id: 3,
    icon: School,
    title: "10th Standard (SSC)",
    institution: "Somalwar High School, Khamla",
    location: "Nagpur",
    duration: "June 2017 - June 2018",
    grade: "77.40%",
    gradeType: "Percentage",
    level: "Secondary",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/20 to-emerald-600/20",
    highlights: ["Secondary Education", "Maharashtra Board", "Academic Foundation"],
    percentage: 77.40,
    AosName : "flip-right",
    AosDuration : "2500"
  }
];

const EducationCard = React.memo(({ education, index, onHover, }) => {
  const IconComponent = education.icon;
  
  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: index * 0.15, 
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  }), [index]);

  const handleMouseEnter = useCallback(() => onHover(index), [index, onHover]);
  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl h-full" data-aos={education.AosName}
     data-aos-duration={education.AosDuration}>
        
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${education.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Floating Orbs - Responsive */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 lg:mb-6">
            <div className={`p-2 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-r ${education.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </div>
            
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
              {education.level}
            </span>
          </div>

          {/* Title & Institution */}
          <div className="mb-4 lg:mb-6 flex-grow">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
              {education.title}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <School className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg font-medium leading-tight">{education.institution}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span>{education.duration}</span>
              </div>
            </div>
          </div>

          {/* Grade Display */}
          <div className="mb-4 lg:mb-6">
            <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
              {education.grade}
            </span>
          </div>

          {/* Highlights */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {education.highlights.map((highlight, i) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 * i }}
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-700/70 text-gray-300 rounded-full text-xs font-medium border border-slate-600/50 hover:border-purple-500/50 transition-colors"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r ${education.color} opacity-10 blur-xl`} />
        </div>
      </div>
    </motion.div>
  );
});

EducationCard.displayName = 'EducationCard';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }), []);

  const statsVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 1, duration: 0.6 }
    }
  }), []);

  return (
    <section id="education" className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,119,198,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>
      
      {/* Minimal Floating Elements */}
      <div className="absolute top-20 left-10 w-1 h-1 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-pink-500 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-20 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:rounded-2xl">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            Educational Journey
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Building a strong foundation through quality education and continuous learning
          </p>
          
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards - Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              onHover={handleHover}
            />
          ))}
        </motion.div>

        {/* Stats Section - Responsive */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">7+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years of Study</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-400">3</div>
              <div className="text-xs sm:text-sm text-gray-400">Qualifications</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">IT</div>
              <div className="text-xs sm:text-sm text-gray-400">Specialization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;