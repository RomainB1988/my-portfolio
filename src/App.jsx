import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectedDots from "./components/ConnectedDots";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <ConnectedDots />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
