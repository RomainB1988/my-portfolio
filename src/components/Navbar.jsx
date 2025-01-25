import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Nom à gauche */}
      <div className="text-xl font-bold">
        Romain Buisine
      </div>

      {/* Boutons à droite */}
      <ul className="flex space-x-6">
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
      </ul>
    </nav>
  );
}

export default Navbar;
