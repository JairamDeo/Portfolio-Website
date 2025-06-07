import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [allowScroll, setAllowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    let startY = 0;
    let isScrollGesture = false;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      isScrollGesture = false;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      // If user swipes up (negative deltaY) more than 50px, enable scrolling
      if (deltaY < -50 && !isScrollGesture) {
        isScrollGesture = true;
        setAllowScroll(true);
      }
      
      if (allowScroll) {
        // Allow normal scrolling behavior
        return;
      } else {
        // Prevent scrolling if not enabled
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobile, allowScroll]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about, .next-section, section:not(#home)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[710px] sm:h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-black to-blue-900 text-white"
    >
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} />
        <Stars />

        {/* Rotating sphere with visible rotation and complementary color */}
        <motion.mesh
          rotation={[0, 0, 0]}
          animate={{ rotateY: 2 * Math.PI }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#6B21A8"
            emissive="#000000"
            emissiveIntensity={0.8}
          />
        </motion.mesh>
      </Canvas>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Hi, I'm <br />
          <span className="text-yellow-400">Jairam Deo</span>
        </h1>
        <p className="text-2xl mt-4">
          <Typewriter
            words={[
              "A Full Stack Developer",
              "A React Enthusiast",
              "MERN Stack Expert",
            ]}
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

      {/* Scroll Down Arrow - Only on Mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-16 mx-auto z-10"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-white hover:text-yellow-400 transition-colors duration-300 group"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-2 rounded-full border-2 border-white/50 group-hover:border-yellow-400/80 transition-colors"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;