import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Spinovix Software Pvt Ltd",
    start: "Jan 2024",
    end: "Dec 2024",
    description: [
      "Developed scalable MERN stack applications.",
      "Optimized REST APIs, reducing response time by 25%.",
      "Designed and deployed a responsive website using React.js.",
    ],
  },
  {
    role: "Java Intern",
    company: "Cybrix Technologies Pvt Ltd",
    start: "Jun 2020",
    end: "Jul 2020",
    description: [
      "Specialized in Java technology during a 6-week internship.",
      "Built a desktop login/signup application with secure authentication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-blue-900 to-black py-16 text-white p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-black bg-opacity-60 p-6 rounded-lg shadow-lg border-l-4 border-cyan-500"
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} at <span className="text-yellow-400">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400">{exp.start} - {exp.end}</p>
              <ul className="mt-4 list-disc pl-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="mt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
