import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Database, Cloud, Monitor, Shield, Calendar, MapPin, Clock, Star, ArrowRight, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Greamio Technologies Pvt. Ltd.",
    website: "https://greamio.com/",
    location: "Nagpur, MH, IN",
    start: "March 2025",
    end: "September 2025",
    duration: "6 months",
    description: [
      "🏗️ Assisted in deployment and management of AWS Infrastructure using Terraform for Infrastructure as Code",
      "🐳 Worked with Docker and Kubernetes for containerization, orchestration, and automation within DevOps practices",
      "📝 Leveraged Git for version control and gained experience in effective collaboration in a process-driven environment",
      "☁️ Contributed to cloud infrastructure scaling and optimization for improved system performance",
      "🔄 Implemented CI/CD pipelines for automated deployment and testing processes",
      "📊 Monitored system performance and implemented logging solutions for better observability"
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Git", "CI/CD", "Infrastructure as Code"],
    highlights: [
      { icon: <Cloud className="w-5 h-5" />, text: "AWS Infrastructure" },
      { icon: <Database className="w-5 h-5" />, text: "Containerization" },
      { icon: <Shield className="w-5 h-5" />, text: "Process-Driven" },
      { icon: <Code className="w-5 h-5" />, text: "IaC with Terraform" }
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Spinovix Software Pvt. Ltd.",
    website: "https://spinovix.com/",
    location: "Nagpur, MH, IN",
    start: "September 2024",
    end: "February 2025",
    duration: "6 months",
    description: [
      "🚀 Architected and deployed the entire company website using React.js and Tailwind CSS, delivering a modern, responsive digital presence",
      "🔐 Engineered secure RESTful APIs with Node.js, Express.js, and JWT authentication, serving 20+ concurrent users with role-based access control",
      "⚡ Optimized MongoDB and MySQL database performance, achieving 20% reduction in query latency through efficient indexing and query optimization",
      "☁️ Implemented microservices architecture on AWS (EC2, S3, RDS, CloudFront) with Docker containerization, maintaining 99.9% uptime",
      "📊 Built comprehensive server monitoring system with Prometheus, Grafana, and Loki, reducing system downtime by 30%",
      "📱 Developed mobile-first responsive interfaces that boosted user engagement by 15% across all platforms"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "Docker", "Tailwind CSS"],
    highlights: [
      { icon: <Monitor className="w-5 h-5" />, text: "99.9% Uptime" },
      { icon: <Database className="w-5 h-5" />, text: "20% Faster Queries" },
      { icon: <Shield className="w-5 h-5" />, text: "20+ Secure Users" },
      { icon: <Code className="w-5 h-5" />, text: "Full Website Development" }
    ]
  },
];

const Experience = memo(() => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="experience" className="bg-gradient-to-br from-slate-900 via-blue-900 to-black py-20 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Building amazing solutions with cutting-edge technologies
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: "spring",
                damping: 20
              }}
              className="group relative"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Main Experience Card */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-cyan-500/25 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                }}
                layout
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                {/* Header Section */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex-1">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg"
                        >
                          <Code className="w-6 h-6 text-white" />
                      </motion.div>
                        <div>
                          <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-xl font-semibold text-yellow-400">
                        {exp.company}
                      </span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap gap-3 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                      <motion.a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group/link backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:text-blue-300" />
                          <span className="text-sm font-medium text-blue-400 group-hover/link:text-blue-300">Visit Website</span>
                          <ArrowRight className="w-3 h-3 text-blue-400 group-hover/link:text-blue-300 group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      </motion.div>
                      
                      <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600/50">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-300">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-slate-600/50">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-300">{exp.start} - {exp.end}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-green-400">{exp.duration}</span>
                    </div>
                      </motion.div>
                  </div>
                </div>

                {/* Key Highlights */}
                  <motion.div 
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.4 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.2)"
                        }}
                        className="group/highlight flex items-center gap-3 p-4 bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        <motion.div 
                          className="text-cyan-400 group-hover/highlight:text-cyan-300 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                        {highlight.icon}
                        </motion.div>
                        <span className="text-sm font-medium text-white group-hover/highlight:text-cyan-100 transition-colors">
                        {highlight.text}
                      </span>
                    </motion.div>
                  ))}
                  </motion.div>

                {/* Achievements */}
                      <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.h4 
                      className="text-xl font-bold text-cyan-300 mb-6 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.span 
                        className="text-3xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        🏆
                      </motion.span>
                      Key Achievements
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 flex-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </motion.h4>
                    <div className="grid gap-4">
                      {exp.description.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.1 * i + 0.7,
                            type: "spring",
                            damping: 20
                          }}
                          whileHover={{ 
                            x: 5,
                            scale: 1.02,
                            boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.2)"
                          }}
                          className="group/achievement flex items-start gap-4 p-4 bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-xl border-l-4 border-cyan-500/50 hover:border-cyan-400 hover:from-slate-800/80 hover:to-slate-700/80 transition-all duration-300 backdrop-blur-sm"
                        >
                          <motion.div 
                            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                          <p className="text-gray-200 leading-relaxed group-hover/achievement:text-white transition-colors">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  </motion.div>

                {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.h4 
                      className="text-xl font-bold text-cyan-300 mb-6 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <motion.span 
                        className="text-3xl"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                      >
                        🛠️
                      </motion.span>
                    Technologies Used
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 flex-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      />
                    </motion.h4>
                    <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            delay: 0.05 * i + 1.0,
                            type: "spring",
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)"
                          }}
                          className="group/tech px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-300 hover:text-cyan-200 rounded-full text-sm font-medium border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            delay: 1.2, 
            type: "spring",
            damping: 20
          }}
          className="text-center mt-16"
        >
          <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-300">
              <motion.span 
                className="text-blue-300 font-semibold text-lg"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to build amazing web solutions
              </motion.span>
              <motion.span 
                className="text-3xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                🚀
              </motion.span>
          </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-gray-400 mt-4 text-sm"
          >
            Let's create something extraordinary together
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;