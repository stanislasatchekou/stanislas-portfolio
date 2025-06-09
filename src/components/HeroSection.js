import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-10 text-center">
      <img 
        src="/profile.png" 
        alt="Stanislas Atchekou" 
        className="mx-auto rounded-full w-32 h-32 mb-4"
      />
      <h1 className="text-4xl font-bold">Stanislas Atchekou</h1>
      <p className="italic mt-2">
        Au croisement de l’intelligence artificielle et de l’ingénierie industrielle<br/>
        <span className="text-sm text-gray-400">At the crossroads of Artificial Intelligence and Industrial Engineering</span>
      </p>
      <div className="mt-4">
        <a href="https://github.com/stanislasatchekou" className="mx-2 text-blue-400 hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/stanislas-atchekou-1165b8222/" className="mx-2 text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
};

export default HeroSection;
