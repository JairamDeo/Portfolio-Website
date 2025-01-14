import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 text-white p-2"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-cyan-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="md:ml-12 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            I’m Jairam Deo, a passionate Full Stack Developer specializing in
            the MERN stack. I love building scalable applications and crafting
            user-friendly, responsive designs. My focus lies in creating
            impactful, innovative solutions for real-world problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
