import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Nom à gauche */}
      <div className="text-xl font-bold">
        Romain Buisine
      </div>

      {/* Boutons à droite */}
      <ul className="flex items-center space-x-6">
        <li>
          <a href="#hero" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          {/* Bouton Télécharger mon CV */}
          <a
            href="/cv.pdf" // Remplacez par le chemin réel de votre CV
            download
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
