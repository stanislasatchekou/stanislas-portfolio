import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-green-400">Stanislas</div>
        <div className="space-x-6 text-sm hidden md:block">
          <a href="#skills" className="hover:text-green-400">Compétences</a>
          <a href="#projects" className="hover:text-green-400">Projets</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
