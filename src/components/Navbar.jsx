import React from "react";

function Navbar({ onThemeToggle, theme }) {
  return (
    <nav className="fixed top-0 w-full bg-opacity-70 backdrop-blur-md bg-gray-900 text-white p-4 z-50">
      <ul className="flex justify-around items-center">
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
          <button
            onClick={onThemeToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {theme === "dark" ? "Mode Clair" : "Mode Sombre"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
