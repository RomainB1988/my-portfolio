import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
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
];

function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Mes Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
