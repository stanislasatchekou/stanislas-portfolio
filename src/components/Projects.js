import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Chatbot IA", description: "Python, Flask, TensorFlow" },
  { title: "Détection de fraude", description: "Streamlit, Scikit-learn" },
  { title: "Drone control system", description: "C, Linux, Client-Server Arch." }
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Projets</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.2 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
