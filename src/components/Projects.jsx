import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    name: "Server Monitoring System",
    description: "A monitoring platform using Grafana, Loki, Prometheus, and Express.js.",
    tech: "Grafana, Loki, Prometheus, Express.js",
    link: "https://github.com/JairamDeo/Server-monitoring-graphana-loki",
  },
  {
    name: "Syntax Level-Up Website",
    description: "A responsive website with user authentication and personalized portals.",
    tech: "React.js, Node.js, Express, MySQL",
    link: "https://syntax-level-up-organisation-web-application.vercel.app/",
  },
  {
    name: "Food Delivery App",
    description: "A responsive web app with JWT-based authentication.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    link: "https://meal-mate-app-three.vercel.app/",
  },
  {
    name: "Algorithm Visualization",
    description: "Visualize pathfinding algorithms like Dijkstra, A*, BFS, and DFS.",
    tech: "JavaScript, HTML5, CSS3",
    link: "https://alogorithm-visualizer.vercel.app/",
  },
  {
    name: "Driver Drowsiness Detection System",
    description: "Monitor driver alertness using Python, OpenCV, and machine learning.",
    tech: "Python, OpenCV, Deep Learning",
    link: "#",
  },
];

const Projects = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 to-black py-16 p-2 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-200">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 p-6 rounded-lg shadow-lg group relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              data-aos="fade-up"
            >
              {/* Moving Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-dashed transition-all duration-500"></div>

              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-teal-400 transition duration-300">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-gray-100 transition duration-300">
                {project.description}
              </p>
              <p className="mt-2 text-sm text-gray-400 font-medium group-hover:text-gray-200 transition duration-300">
                {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-transparent text-gray-200 border-2 border-gray-200 px-4 py-2 rounded-md group-hover:bg-teal-500 group-hover:text-gray-800 group-hover:border-teal-500 transition-all duration-300 z-10"
                style={{ position: 'relative', zIndex: 10 }}
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
