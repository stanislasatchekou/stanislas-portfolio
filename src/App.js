import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
