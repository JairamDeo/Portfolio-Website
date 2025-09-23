import React, { Suspense, lazy, memo } from "react";

// Lazy-loaded components with better loading
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Education = lazy(() => import("./components/Education"));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg">Loading Portfolio...</p>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

const App = memo(() => {
  return (
    <div className="bg-gray-900 text-white">
      <Suspense fallback={<LoadingSpinner />}>
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
});

App.displayName = 'App';

export default App;
