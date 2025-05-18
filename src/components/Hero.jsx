import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-[710px] sm:h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-black to-blue-900 text-white">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <LinkmbientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} />
        <Stars />

        {/* Rotating sphere with visible rotation and complementary color */}
        <motion.mesh
          rotation={[0, 0, 0]}
          animate={{ rotateY: 2 * Math.PI }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#6B21A8" emissive="#000000" emissiveIntensity={0.8} /> {/* Deep pink for contrast */}
        </motion.mesh>

      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Hello, I'm <br/><span className="text-yellow-400">Jairam Deo</span>
        </h1>
        <p className="text-2xl mt-4">
          <Typewriter
            words={["A Full Stack Developer", "A React Enthusiast", "MERN Stack Expert"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <a
          href="/Jairam Deo_Full Stack Developer_Resume.pdf"
          download
          className="mt-6 inline-block bg-gradient-to-r from-purple-800 to-blue-900 text-white px-6 py-3 rounded-md hover:from-purple-700 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </a>

      </motion.div>
    </section>
  );
};

export default Hero;
