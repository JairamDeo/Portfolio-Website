import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, TrendingUp, Eye, Code2, MonitorSpeaker, Utensils, Store } from "lucide-react";

const projects = [
  {
    name: "Sakode & Company - B2B Platform",
    category: "Full Stack B2B Application",
    description: "Comprehensive B2B saree trading platform with advanced inventory management and client portal features.",
    detailedDesc: "Built a complete B2B web application for Sakode & Company, a premium saree dealer. Features include dynamic product catalog with 5 specialized categories (Cotton, Shalu, Zari, Fancy, Synthetic), comprehensive admin dashboard for inventory management, and client-focused interface. Implemented advanced image handling with main product images and thumbnail galleries, integrated review system for customer feedback, and responsive design with smooth AOS animations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AOS Animations", "REST API"],
    link: "https://sakode-and-company.vercel.app/",
    achievements: [
      "🛍️ 5-category saree classification system",
      "👨‍💼 Complete admin dashboard with upload functionality",
      "📱 Fully responsive B2B interface",
      "⭐ Integrated customer review system",
      "🖼️ Advanced image management with thumbnails"
    ],
    icon: <Store className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    name: "Centralized Server Monitoring System",
    category: "DevOps & Monitoring",
    description: "Enterprise-grade real-time monitoring solution that transformed system reliability and performance tracking.",
    detailedDesc: "Built a comprehensive monitoring ecosystem that scrapes metrics, aggregates logs, and provides intelligent alerting. Features custom dashboards with real-time visualizations and automated incident response.",
    tech: ["Grafana", "Loki", "Prometheus", "Express.js", "AWS RDS", "S3", "CloudFront"],
    link: "https://github.com/JairamDeo/Server-monitoring-graphana-loki",
    github: "https://github.com/JairamDeo/Server-monitoring-graphana-loki",
    achievements: [
      "🚀 Reduced system downtime by 30%",
      "📊 Improved monitoring accuracy by 25%",
      "☁️ AWS-integrated log storage & archival"
    ],
    icon: <MonitorSpeaker className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Syntax Level-Up Organization Website",
    category: "Full Stack Web Application",
    description: "Complete educational platform with authentication, course management, and personalized learning portals.",
    detailedDesc: "Modern educational website featuring user registration, course enrollment system, and dynamic content management. Built with responsive design and seamless API integration for optimal user experience.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Axios", "JWT"],
    link: "https://syntax-level-up-ten.vercel.app/",
    github: null,
    achievements: [
      "👥 Multi-role user authentication",
      "📚 Dynamic course management",
      "📱 Fully responsive design"
    ],
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    name: "MealMate - Food Delivery Platform",
    category: "MERN Stack Application",
    description: "Full-featured food delivery web application with secure payments and real-time order tracking.",
    detailedDesc: "Complete food ordering ecosystem with restaurant menus, cart management, secure payment processing, and order lifecycle management. Features JWT authentication and robust API architecture.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Payment Gateway"],
    link: "https://meal-mate-app-three.vercel.app/",
    github: null,
    achievements: [
      "🍕 Dynamic menu & cart system",
      "💳 Secure payment integration",
      "🔐 JWT-based authentication"
    ],
    icon: <Utensils className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: "Algorithm Pathfinding Visualizer",
    category: "Interactive Web Application",
    description: "Educational tool for visualizing complex pathfinding algorithms with interactive grid-based interface.",
    detailedDesc: "Interactive platform that demonstrates how algorithms like Dijkstra, A*, BFS, and DFS work in real-time. Features step-by-step visualization, complexity analysis, and customizable grid environments.",
    tech: ["JavaScript", "HTML5", "CSS3", "Canvas API", "Algorithm Implementation"],
    link: "https://alogorithm-visualizer.vercel.app/",
    github: null,
    achievements: [
      "🎯 4 pathfinding algorithms",
      "📱 Cross-device compatibility",
      "📈 Real-time complexity analysis"
    ],
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "AI-Powered Drowsiness Detection",
    category: "Computer Vision & ML",
    description: "Intelligent driver safety system using computer vision to prevent drowsy-driving accidents.",
    detailedDesc: "Advanced machine learning system that monitors driver alertness through facial recognition and eye-tracking. Implements real-time alerts and safety protocols to enhance road safety.",
    tech: ["Python", "OpenCV", "Deep Learning", "TensorFlow", "Computer Vision"],
    link: null,
    github: null,
    achievements: [
      "🛡️ 60% reduction in drowsy accidents",
      "⚡ 50% improved system efficiency",
      "🎯 25% reduced error rates"
    ],
    icon: <Eye className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-600"
  }
];

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered = hoveredIndex === index;
  
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 }
    }
  }), [index]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
              {project.icon}
            </div>
          </div>

          <div className="mb-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {project.name}
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Detailed Description */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.detailedDesc}
            </p>
          </motion.div>

          {/* Achievements */}
          <div className="mb-6">
            <div className="space-y-2">
              {project.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center text-sm text-gray-300"
                >
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="px-2 py-1 bg-slate-700/70 text-gray-300 rounded-md text-xs font-medium border border-slate-600/50 hover:border-purple-500/50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700/70 text-gray-300 rounded-lg font-medium border border-slate-600/50 hover:border-gray-500 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  return (
    <section id="projects" className="bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
            <span className="text-purple-300">More projects coming soon</span>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;