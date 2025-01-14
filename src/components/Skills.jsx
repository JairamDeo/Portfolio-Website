import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

// Skill categories with official icons and colors
const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava size={50} style={{ color: "#f89820" }} /> },
    ],
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React JS", icon: <FaReact size={50} style={{ color: "#61DBFB" }} /> },
      { name: "HTML", icon: <FaHtml5 size={50} style={{ color: "#E34F26" }} /> },
      { name: "CSS", icon: <FaCss3Alt size={50} style={{ color: "#1572B6" }} /> },
      { name: "JavaScript", icon: <FaJsSquare size={50} style={{ color: "#F7DF1E" }} /> },
    ],
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={50} style={{ color: "#83CD29" }} /> },
      { name: "Express.js", icon: <SiExpress size={50} style={{ color: "#ffffff" }} /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", icon: <FaDatabase size={50} style={{ color: "#00758F" }} /> },
      { name: "MySQL", icon: <SiMysql size={50} style={{ color: "#00758F" }} /> },
      { name: "NoSQL", icon: <FaNodeJs size={50} style={{ color: "#E64C3C" }} /> },
      { name: "MongoDB", icon: <SiMongodb size={50} style={{ color: "#47A248" }} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 to-black py-16 p-2 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full shadow-md group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition">
                      {skill.icon}
                    </div>
                    <p className="mt-2 text-lg text-white group-hover:text-cyan-400 transition">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
