import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const elements = [
    {
      content: "Développeur Full-Stack - React",
      style: "text-5xl font-extrabold text-white mb-4",
    },
    {
      content: "Découvrez mes projets et compétences.",
      style: "text-lg text-gray-300 mb-6",
    },
  ];

  return (
    <motion.section
      id="hero"
      className="h-screen flex flex-col z-50 justify-center items-center text-center"
      initial="hidden"
      animate="visible"
    >
      {elements.map((element, index) => (
        <motion.h1
          key={index}
          custom={index}
          variants={textVariants}
          className={element.style}
        >
          {element.content}
        </motion.h1>
      ))}
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Mes Projets
      </motion.a>
    </motion.section>
  );
}

export default Hero;
