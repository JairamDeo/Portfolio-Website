import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Download, ExternalLink,
  Terminal, Database, Code, Cpu,
  Server, Globe, Monitor, Briefcase, 
  ChevronRight, ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      const curPos = window.scrollY;
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          
          if (curPos >= top && curPos <= bottom) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Experience data with full details
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Spinovix Software Pvt Ltd",
      location: "Nagpur, India",
      duration: "Jan 2024 – Dec 2024",
      description: "Led development of scalable web applications using MERN stack technologies.",
      responsibilities: [
        {
          title: "Frontend Development",
          points: [
            "Designed and deployed a fully responsive company website using React.js, improving cross-browser compatibility by 40%",
            "Maintained frontend components with React.js, React Hooks, and Redux, reducing code redundancy by 30%",
            "Implemented modern UI/UX design principles for enhanced user experience"
          ]
        },
        {
          title: "Backend Development",
          points: [
            "Developed scalable applications with the MERN stack, achieving a 25% reduction in server response time",
            "Optimized REST API integration for improved performance",
            "Implemented secure authentication and authorization systems"
          ]
        },
        {
          title: "Team Collaboration",
          points: [
            "Collaborated with a remote agile team, delivering 15+ new features on schedule",
            "Enhanced user experience by 20% through iterative improvements",
            "Participated in daily standups and sprint planning meetings"
          ]
        }
      ]
    },
    {
      title: "Advance Java Summer Intern",
      company: "Cybrix Technologies Pvt Ltd",
      location: "Nagpur, India",
      duration: "Jun 2020 – Jul 2020",
      description: "Specialized in Java desktop application development.",
      responsibilities: [
        {
          title: "Technical Development",
          points: [
            "Completed a 6-week intensive internship specializing in Java Technology",
            "Acquired hands-on experience in Java desktop application development",
            "Focused on user interface design and database integration"
          ]
        },
        {
          title: "Project Implementation",
          points: [
            "Designed and developed a desktop login and signup application",
            "Implemented security features including password encryption",
            "Created customizable theme modes and account management features"
          ]
        }
      ]
    }
  ];

  // Project data with full details
  const projects = [
    {
      title: "Centralized Server Monitoring System",
      tech: ["Grafana", "Loki", "Prometheus", "Express.js"],
      gradient: "from-blue-600/20 to-cyan-600/20",
      border: "hover:border-blue-500/50",
      description: "Enterprise-level monitoring solution for real-time server metrics visualization.",
      features: [
        "Built a comprehensive monitoring platform reducing downtime by 30%",
        "Configured Prometheus for efficient metric collection",
        "Designed intuitive Grafana dashboards increasing monitoring accuracy by 25%",
        "Implemented alert systems for proactive issue detection",
        "Integrated Loki for advanced log management"
      ],
      link: "#"
    },
    {
      title: "Syntax Level-Up Organization Website",
      tech: ["React.js", "Express.js", "MySQL"],
      gradient: "from-purple-600/20 to-pink-600/20",
      border: "hover:border-purple-500/50",
      description: "Educational platform with advanced course management capabilities.",
      features: [
        "Created responsive website with secure user authentication",
        "Achieved 50% increase in course registration efficiency",
        "Developed personalized student portals",
        "Optimized backend reducing API response times by 20%",
        "Implemented real-time progress tracking"
      ],
      link: "#"
    },
    {
      title: "Food Delivery Web Application",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      gradient: "from-green-600/20 to-emerald-600/20",
      border: "hover:border-green-500/50",
      description: "Full-stack food delivery platform with real-time order tracking.",
      features: [
        "Implemented JWT authentication and Express Validator",
        "Increased user engagement by 40% through intuitive UI",
        "Added dynamic menu and cart functionality",
        "Boosted user satisfaction by 35%",
        "Integrated payment gateway and order management"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              JD
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-indigo-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Previous sections remain the same until Experience section */}
      
      {/* Experience Section - Enhanced */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-indigo-400">{exp.title}</h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                      <p className="text-gray-400">{exp.location} • {exp.duration}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  {/* Responsibilities */}
                  <div className="space-y-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="group/item">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                          {resp.title}
                        </h4>
                        <ul className="space-y-2">
                          {resp.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start group-hover/item:text-gray-200">
                              <ChevronRight className="w-5 h-5 mr-2 mt-1 text-indigo-500" />
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${project.gradient} border border-gray-800 ${project.border} transition-all duration-300`}>
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Project Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 mt-1 text-indigo-500" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
    </div>
  );
};

export default Portfolio;