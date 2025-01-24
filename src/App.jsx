import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    const initializeParticlesEngine = async () => {
      try {
        await loadSlim(initParticlesEngine);
        setEngineLoaded(true);
      } catch (error) {
        console.error("Erreur lors de l'initialisation de tsParticles :", error);
      }
    };

    initializeParticlesEngine();
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        {engineLoaded && (
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: { value: "#000000" },
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: { value: "#ffffff" },
                links: {
                  enable: true,
                  color: "#ffffff",
                  distance: 150,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  outModes: {
                    default: "bounce",
                  },
                },
                size: {
                  value: { min: 1, max: 3 },
                },
                opacity: {
                  value: 0.6,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  grab: {
                    distance: 140,
                    links: {
                      opacity: 1,
                    },
                  },
                  push: {
                    quantity: 4,
                  },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
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
