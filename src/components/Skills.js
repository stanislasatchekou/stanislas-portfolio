import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Python", "TensorFlow", "OpenAI", "Streamlit", "TIA Portal",
  "MATLAB", "VHDL", "Project Management", "Agile", "Scrum"
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-gray-800 rounded-lg p-4 text-center shadow-md"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
