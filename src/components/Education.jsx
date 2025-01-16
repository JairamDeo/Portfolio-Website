import React, { useEffect } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-blue-400 text-5xl" />,
    title: "B.Tech in Information Technology",
    institution: "Yeshwantrao Chavan College of Engineering, Nagpur",
    duration: "Dec 2021 - June 2024",
    grade: "6.64 CGPA",
    aos: "fade-right",
    position: "top-[20px] left-[10%]",
  },
  {
    id: 2,
    icon: <GiDiploma className="text-yellow-400 text-5xl" />,
    title: "Diploma in Computer Technology",
    institution: "Dharampeth Polytechnic, Nagpur",
    duration: "Aug 2018 - June 2021",
    grade: "88.86% Aggregate",
    aos: "fade-left",
    position: "top-[180px] right-[10%]",
  },
  {
    id: 3,
    icon: <FaSchool className="text-green-400 text-5xl" />,
    title: "10th Standard (SSC)",
    institution: "Somalwar High School, Khamla, Nagpur",
    duration: "June 2017 - June 2018",
    grade: "77.40%",
    aos: "fade-up",
    position: "top-[340px] left-[25%]",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div id="education" className="relative bg-gradient-to-b from-blue-900 to-black px-6 py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-10" data-aos="zoom-in">
        📚 Education
      </h2>

      {/* Desktop/Laptop View */}
      <div className="relative hidden md:block h-[450px] md:h-[500px] w-full mx-auto">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`absolute ${edu.position} max-w-md bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-20`}
            data-aos={edu.aos}
          >
            <div className="flex items-center space-x-4">
              {edu.icon}
              <div className="w-full">
                <h3 className="text-lg md:text-xl font-semibold whitespace-nowrap">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.duration}</p>
                <p className="text-yellow-300 font-bold">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-6 items-center">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-20"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-4">
              {edu.icon}
              <div className="w-full">
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.duration}</p>
                <p className="text-yellow-300 font-bold">{edu.grade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
