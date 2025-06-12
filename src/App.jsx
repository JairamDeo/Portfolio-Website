import React, { Suspense, lazy } from "react";

// Lazy-loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Education = lazy(() => import("./components/Education"));

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
