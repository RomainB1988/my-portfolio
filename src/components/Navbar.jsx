import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Nom à gauche */}
      <div className="text-xl font-bold">Romain Buisine</div>

      {/* Menu pour mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Boutons à droite */}
      <ul className={`md:flex items-center space-x-6 absolute md:static bg-gray-900 md:bg-transparent top-14 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li className="hidden md:block">
          {/* Bouton Télécharger mon CV (visible sur desktop) */}
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Télécharger mon CV
          </a>
        </li>
      </ul>

      {/* Bouton CV visible en mobile */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          📄 Télécharger CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
