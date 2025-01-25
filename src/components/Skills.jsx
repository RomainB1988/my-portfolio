import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiRuby, SiPostgresql, SiMapbox, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Ruby", icon: <SiRuby className="text-red-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Mapbox", icon: <SiMapbox className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Mes Compétences</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Voici les technologies et outils que j'utilise pour créer des applications performantes.
        </p>
        {/* Carrousel */}
        <motion.div
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="min-w-[150px] flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
