import React, { useState } from "react";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase, FaGit, FaGithub, FaDocker, FaAws, FaCloud, FaServer } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiAmazonec2, SiAmazons3, SiCloudflare } from "react-icons/si";

const skillCategories = [
  {
    category: "Programming Languages",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    skills: [
      { name: "Java", icon: <FaJava />, level: 85, hoverColor: "from-red-500 to-orange-600" },
    ],
  },
  {
    category: "Frontend Technologies", 
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
    skills: [
      { name: "React JS", icon: <FaReact />, level: 90, hoverColor: "from-cyan-500 to-blue-600" },
      { name: "HTML", icon: <FaHtml5 />, level: 95, hoverColor: "from-orange-500 to-red-500" },
      { name: "CSS", icon: <FaCss3Alt />, level: 88, hoverColor: "from-blue-500 to-indigo-600" },
      { name: "JavaScript", icon: <FaJsSquare />, level: 85, hoverColor: "from-yellow-400 to-yellow-600" },
    ],
  },
  {
    category: "Backend Technologies",
    bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80, hoverColor: "from-green-500 to-emerald-600" },
      { name: "Express.js", icon: <SiExpress />, level: 75, hoverColor: "from-gray-700 to-gray-900" },
    ],
  },
  {
    category: "Databases",
    bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 82, hoverColor: "from-blue-600 to-blue-800" },
      { name: "MongoDB", icon: <SiMongodb />, level: 78, hoverColor: "from-green-600 to-green-800" },
      { name: "SQL", icon: <FaDatabase />, level: 85, hoverColor: "from-indigo-500 to-purple-600" },
    ],
  },
  {
    category: "Cloud & DevOps",
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
    skills: [
      { name: "AWS", icon: <FaAws />, level: 70, hoverColor: "from-orange-500 to-yellow-600" },
      { name: "EC2", icon: <SiAmazonec2 />, level: 75, hoverColor: "from-orange-600 to-red-500" },
      { name: "S3", icon: <SiAmazons3 />, level: 80, hoverColor: "from-green-500 to-teal-600" },
      { name: "CloudFront", icon: <SiCloudflare />, level: 65, hoverColor: "from-orange-500 to-red-600" },
      { name: "VPC", icon: <FaCloud />, level: 70, hoverColor: "from-blue-500 to-indigo-600" },
      { name: "Docker", icon: <FaDocker />, level: 72, hoverColor: "from-blue-500 to-cyan-600" },
    ],
  },
  {
    category: "Version Control",
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    skills: [
      { name: "Git", icon: <FaGit />, level: 90, hoverColor: "from-red-500 to-red-700" },
      { name: "GitHub", icon: <FaGithub />, level: 88, hoverColor: "from-gray-800 to-black" },
    ],
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-xl opacity-70 animate-pulse ${
              i % 4 === 0 ? 'bg-blue-500/30' :
              i % 4 === 1 ? 'bg-purple-500/30' :
              i % 4 === 2 ? 'bg-pink-500/30' : 'bg-cyan-500/30'
            }`}
            style={{
              width: Math.random() * 400 + 200 + 'px',
              height: Math.random() * 400 + 200 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 8 + 12) + 's'
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{
                animation: `slideUp 0.8s ease-out ${categoryIndex * 0.2}s both`
              }}
            >
              {/* Category Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl transition-all duration-500 p-8 overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30">
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Title */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {category.category}
                    </h3>
                    <div className={`w-12 h-1 ${category.bgColor} rounded-full shadow-lg transition-all duration-500`}></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`group/skill relative p-4 rounded-2xl cursor-pointer border transition-all duration-300 transform ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}`
                            ? `bg-gradient-to-br ${skill.hoverColor} border-white/50 shadow-2xl scale-110 -translate-y-2`
                            : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:-translate-y-1'
                        }`}
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          animation: `fadeIn 0.6s ease-out ${(categoryIndex * 0.2) + (skillIndex * 0.1)}s both`
                        }}
                      >
                        {/* Skill Icon */}
                        <div className="flex justify-center mb-3">
                          <div className={`text-4xl transition-all duration-300 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? 'text-white scale-125 drop-shadow-2xl filter brightness-110'
                              : 'text-white/90 group-hover/skill:scale-110 group-hover/skill:text-white'
                          }`}>
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <div className="text-center mb-3">
                          <h4 className={`font-semibold text-sm transition-colors duration-300 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? 'text-white font-bold'
                              : 'text-white/90 group-hover/skill:text-white'
                          }`}>
                            {skill.name}
                          </h4>
                        </div>

                        {/* Skill Level Bar */}
                        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out shadow-sm ${
                              hoveredSkill === `${categoryIndex}-${skillIndex}`
                                ? 'bg-white shadow-white/50'
                                : 'bg-gradient-to-r from-white/60 to-white/40'
                            }`}
                            style={{
                              width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                            }}
                          ></div>
                        </div>
                        
                        {/* Skill Level Text */}
                        <div className="text-center mt-2">
                          <span className={`text-xs font-medium transition-colors duration-300 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? 'text-white/95 font-bold'
                              : 'text-white/70 group-hover/skill:text-white/80'
                          }`}>
                            {hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : 'Hover me'}
                          </span>
                        </div>

                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}`
                            ? `bg-gradient-to-r ${skill.hoverColor} opacity-20 blur-md`
                            : 'opacity-0'
                        } -z-10`}></div>

                        {/* Extra Glow for Hovered Skill */}
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.hoverColor} opacity-30 blur-xl -z-20 scale-110`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "6+", label: "Categories", color: "from-blue-400 to-cyan-400" },
            { number: "20+", label: "Technologies", color: "from-purple-400 to-pink-400" },
            { number: "2+", label: "Years Experience", color: "from-green-400 to-emerald-400" }
          ].map((stat, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .group:hover .group\/skill {
          transform: translateY(-2px);
        }

        .group\/skill:hover {
          transform: translateY(-4px) scale(1.02) !important;
        }
      `}</style>
    </div>
  );
};

export default Skills;