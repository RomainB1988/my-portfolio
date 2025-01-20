import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex flex-col z-50 justify-center items-center text-center from-purple-700 via-blue-500 to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Bienvenue sur mon Portfolio
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Découvrez mes projets et compétences.
      </p>
      <a href="#projects">
        <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200">
          Mes Projets
        </button>
      </a>
    </motion.section>
  );
}

export default Hero;
