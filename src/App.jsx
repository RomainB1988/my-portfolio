import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "light") {
      setTheme("dark");
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      setTheme("light");
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar onThemeToggle={toggleTheme} theme={theme} />
        <main className={theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}>
          <Hero theme={theme} />
          <About theme={theme} />
          <Projects theme={theme} />
          <Skills theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;
