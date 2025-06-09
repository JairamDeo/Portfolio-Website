import React, { useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase, FaGit, FaGithub, FaDocker, FaAws, FaCloud } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiAmazonec2, SiAmazons3, SiCloudflare, SiTailwindcss } from "react-icons/si";

// Static skill data optimized for performance
const skillCategories = [
  {
    category: "Programming Languages",
    bgColor: "from-orange-500 to-red-600",
    skills: [
      { name: "Java", icon: FaJava, level: 85, hoverColor: "from-red-500 to-orange-600" },
    ],
  },
  {
    category: "Frontend Technologies", 
    bgColor: "from-blue-500 to-cyan-600",
    skills: [
      { name: "React JS", icon: FaReact, level: 90, hoverColor: "from-cyan-500 to-blue-600" },
      { name: "HTML", icon: FaHtml5, level: 95, hoverColor: "from-orange-500 to-red-500" },
      { name: "CSS", icon: FaCss3Alt, level: 88, hoverColor: "from-blue-500 to-indigo-600" },
      { name: "TailwindCSS", icon: SiTailwindcss, level: 88, hoverColor: "from-blue-500 to-indigo-600" },
      { name: "JavaScript", icon: FaJsSquare, level: 85, hoverColor: "from-yellow-400 to-yellow-600" },
    ],
  },
  {
    category: "Backend Technologies",
    bgColor: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 80, hoverColor: "from-green-500 to-emerald-600" },
      { name: "Express.js", icon: SiExpress, level: 75, hoverColor: "from-gray-700 to-gray-900" },
    ],
  },
  {
    category: "Databases",
    bgColor: "from-purple-500 to-indigo-600",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 82, hoverColor: "from-blue-600 to-blue-800" },
      { name: "MongoDB", icon: SiMongodb, level: 78, hoverColor: "from-green-600 to-green-800" },
      { name: "SQL", icon: FaDatabase, level: 85, hoverColor: "from-indigo-500 to-purple-600" },
    ],
  },
  {
    category: "Cloud & DevOps",
    bgColor: "from-yellow-500 to-orange-600",
    skills: [
      { name: "AWS", icon: FaAws, level: 70, hoverColor: "from-orange-500 to-yellow-600" },
      { name: "EC2", icon: SiAmazonec2, level: 75, hoverColor: "from-orange-600 to-red-500" },
      { name: "S3", icon: SiAmazons3, level: 80, hoverColor: "from-green-500 to-teal-600" },
      { name: "CloudFront", icon: SiCloudflare, level: 65, hoverColor: "from-orange-500 to-red-600" },
      { name: "VPC", icon: FaCloud, level: 70, hoverColor: "from-blue-500 to-indigo-600" },
      { name: "Docker", icon: FaDocker, level: 72, hoverColor: "from-blue-500 to-cyan-600" },
    ],
  },
  {
    category: "Version Control",
    bgColor: "from-gray-700 to-gray-900",
    skills: [
      { name: "Git", icon: FaGit, level: 90, hoverColor: "from-red-500 to-red-700" },
      { name: "GitHub", icon: FaGithub, level: 88, hoverColor: "from-gray-800 to-black" },
    ],
  },
];

const statsData = [
  { number: "6+", label: "Categories", color: "from-blue-400 to-cyan-400" },
  { number: "20+", label: "Technologies", color: "from-purple-400 to-pink-400" },
  { number: "2+", label: "Years Experience", color: "from-green-400 to-emerald-400" }
];

// Optimized SkillCard component
const SkillCard = memo(({ skill, isHovered, onMouseEnter, onMouseLeave }) => {
  const cardClasses = `group/skill relative p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl cursor-pointer border transition-all duration-300 transform ${
    isHovered
      ? `bg-gradient-to-br ${skill.hoverColor} border-white/50 shadow-2xl scale-105 sm:scale-110 -translate-y-1 sm:-translate-y-2`
      : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1'
  }`;

const iconClasses = useMemo(() => {
    return `text-4xl transition-all duration-300 ${
      isHovered
        ? 'text-white scale-125 drop-shadow-2xl filter brightness-110'
        : 'text-white/90 group-hover/skill:scale-110 group-hover/skill:text-white'
    }`;
  }, [isHovered]);  

  const IconComponent = skill.icon;

  return (
    <div
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Skill Icon */}
      <div className="flex justify-center mb-3">
        <div className={iconClasses}>
          <IconComponent />
        </div>
      </div>

      {/* Skill Name */}
      <div className="text-center mb-2 sm:mb-3">
        <h4 className={`font-semibold text-xs sm:text-sm transition-colors duration-300 ${
          isHovered ? 'text-white font-bold' : 'text-white/90 group-hover/skill:text-white'
        }`}>
          {skill.name}
        </h4>
      </div>

      {/* Skill Level Bar */}
      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden backdrop-blur-sm">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isHovered ? 'bg-white shadow-white/50' : 'bg-gradient-to-r from-white/60 to-white/40'
          }`}
          style={{ width: isHovered ? `${skill.level}%` : '0%' }}
        />
      </div>
      
      {/* Skill Level Text */}
      <div className="text-center mt-1 sm:mt-2">
        <span className={`text-xs font-medium transition-colors duration-300 ${
          isHovered ? 'text-white/95 font-bold' : 'text-white/70'
        }`}>
          {isHovered ? `${skill.level}%` : ''}
        </span>
      </div>

      {/* Glow Effects */}
      {isHovered && (
        <>
          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.hoverColor} opacity-20 blur-md -z-10`} />
          <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.hoverColor} opacity-30 blur-xl -z-20 scale-110`} />
        </>
      )}
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

// Optimized CategoryCard component
const CategoryCard = memo(({ category, categoryIndex, hoveredSkill, onSkillHover, onSkillLeave }) => {
  return (
    <motion.div
      className="group relative transform transition-all duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 p-4 sm:p-6 lg:p-8 overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30">
        <div className="relative z-10">
          {/* Category Title */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">
              {category.category}
            </h3>
            <div className={`w-8 sm:w-10 lg:w-12 h-1 ${category.bgColor} rounded-full shadow-lg transition-all duration-500`} />
          </div>

          {/* Skills Grid - Responsive */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            {category.skills.map((skill, skillIndex) => {
              const skillId = `${categoryIndex}-${skillIndex}`;
              return (
                <SkillCard
                  key={skillId}
                  skill={skill}
                  isHovered={hoveredSkill === skillId}
                  onMouseEnter={() => onSkillHover(skillId)}
                  onMouseLeave={onSkillLeave}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

CategoryCard.displayName = 'CategoryCard';

// Optimized StatCard component
const StatCard = memo(({ stat }) => (
  <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
      {stat.number}
    </div>
    <div className="text-white/80 font-medium text-sm sm:text-base">{stat.label}</div>
  </div>
));

StatCard.displayName = 'StatCard';

// Main Skills component
const Skills = memo(() => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = useCallback((skillId) => {
    setHoveredSkill(skillId);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12 lg:py-16 px-4 relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20" />
        {/* Reduced number of floating orbs for performance */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl opacity-30 animate-pulse ${
              ['bg-blue-500/20', 'bg-purple-500/20', 'bg-pink-500/20', 'bg-cyan-500/20'][i]
            }`}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${25 * i}%`,
              top: `${25 * i}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Responsive */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 tracking-tight"
          >
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="w-16 sm:w-20 lg:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-purple-500/50"
          />
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-medium px-4"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Categories - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <CategoryCard
              key={categoryIndex}
              category={category}
              categoryIndex={categoryIndex}
              hoveredSkill={hoveredSkill}
              onSkillHover={handleSkillHover}
              onSkillLeave={handleSkillLeave}
            />
          ))}
        </div>

        {/* Bottom Stats - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center"
        >
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;