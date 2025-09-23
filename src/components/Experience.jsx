import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Database, Cloud, Monitor, Shield } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Spinovix Software Pvt. Ltd.",
    website: "https://spinovix.com/",
    location: "Nagpur, MH, IN",
    start: "September 2024",
    end: "February 2025",
    duration: "",
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

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-br from-slate-900 via-blue-900 to-black py-20 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="group relative"
            >
              {/* Main Experience Card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-cyan-500/20">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
                      >
                        <Code className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl font-semibold text-yellow-400">
                        {exp.company}
                      </span>
                      <motion.a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group/link"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400 group-hover/link:text-blue-300" />
                        <span className="text-sm text-blue-400 group-hover/link:text-blue-300">Visit Website</span>
                      </motion.a>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        📍 {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        📅 {exp.start} - {exp.end}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full text-green-400">
                        ⏱️ {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"
                    >
                      <div className="text-cyan-400">
                        {highlight.icon}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {highlight.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {exp.description.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border-l-4 border-cyan-500/50 hover:border-cyan-400 hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-200 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
            <span className="text-blue-300">Ready to build amazing web solutions</span>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;