import React from "react";
import { motion } from "framer-motion";

function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const lines = [
    "Développeur full-stack formé au Wagon,",
    "j'ai acquis une solide expertise en Ruby on Rails, JavaScript, et en développement web full-stack.",
    "Passionné par la création d'applications performantes et intuitives,",
    "je maîtrise tout le processus, de l'architecture backend à l'intégration front-end.",
    "En recherche d'une alternance pour consolider mes compétences et contribuer activement à des projets innovants.",
    "Découvrez mes réalisations et compétences à travers ce portfolio.",
  ];

  return (
    <section id="about" className="py-16 text-center bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          À Propos de Moi
        </motion.h2>
        <div className="text-lg text-gray-700 leading-relaxed">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className="mb-4"
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
