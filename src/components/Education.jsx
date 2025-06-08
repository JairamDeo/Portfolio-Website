import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Award, Calendar, MapPin, TrendingUp } from "lucide-react";

const educationData = [
  {
    id: 1,
    icon: <GraduationCap className="w-8 h-8" />,
    title: "B.Tech in Information Technology",
    institution: "Yeshwantrao Chavan College of Engineering",
    location: "Nagpur",
    duration: "Dec 2021 - June 2024",
    grade: "6.64 CGPA",
    gradeType: "CGPA",
    level: "Bachelor's",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20",
    highlights: ["Information Technology", "Engineering Degree", "3 Years Program Direct Second Year"],
    percentage: 66.4
  },
  {
    id: 2,
    icon: <Award className="w-8 h-8" />,
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
    percentage: 88.86
  },
  {
    id: 3,
    icon: <School className="w-8 h-8" />,
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
    percentage: 77.40
  }
];

const EducationCard = ({ education, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered = hoveredIndex === index;
  
  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: index * 0.2, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  }), [index]);


  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl">
        
        {/* Animated Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${education.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Floating Orbs */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${education.color} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
              {education.icon}
            </div>
            
            <div className="text-right">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                {education.level}
              </span>
            </div>
          </div>

          {/* Title & Institution */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {education.title}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <School className="w-4 h-4" />
              <span className="text-lg font-medium">{education.institution}</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{education.duration}</span>
              </div>
            </div>
          </div>

          {/* Grade Display */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-2xl font-bold bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
                {education.grade}
              </span>
            </div>

          </div>

          {/* Highlights */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {education.highlights.map((highlight, i) => (
                <motion.span
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.1 * i }}
                  className="px-3 py-1 bg-slate-700/70 text-gray-300 rounded-full text-xs font-medium border border-slate-600/50 hover:border-purple-500/50 transition-colors"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${education.color} opacity-20 blur-xl`} />
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }), []);

  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }), []);

  return (
    <section id="education" className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-pink-500 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Building a strong foundation through quality education and continuous learning
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {educationData.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">7+</div>
              <div className="text-sm text-gray-400">Years of Study</div>
            </div>
            <div className="w-px h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">3</div>
              <div className="text-sm text-gray-400">Qualifications</div>
            </div>
            <div className="w-px h-8 bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">IT</div>
              <div className="text-sm text-gray-400">Specialization</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;