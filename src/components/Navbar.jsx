import React from "react";

function Navbar({ onThemeToggle, theme }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-md bg-gray-900 text-white p-4 z-50">
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
      </ul>
    </nav>
  );
}

export default Navbar;
