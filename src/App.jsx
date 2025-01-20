import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (engine) => {
    // Charger les plugins et presets nécessaires pour tsParticles
    try {
      await loadFull(engine); // Charge tous les modules nécessaires
    } catch (error) {
      console.error("Erreur lors de l'initialisation de tsParticles :", error);
    }
  };

  return (
    <Router>
  <div className="relative min-h-screen">
    {/* Particles en arrière-plan */}
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: {
      color: { value: "#000000" }, // Fond noir
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50, // Nombre de particules
        density: {
          enable: true,
          area: 800, // Répartition dans une zone
        },
      },
      color: { value: "#ffffff" }, // Couleur des particules
      links: {
        enable: true, // Lien entre les particules
        color: "#ffffff",
        distance: 150, // Distance des connexions
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Vitesse des particules
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      size: {
        value: { min: 1, max: 3 }, // Taille des particules
      },
      opacity: {
        value: 0.6, // Transparence des particules
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Effet d'attraction
        },
        onClick: {
          enable: true,
          mode: "push", // Ajouter des particules au clic
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
          quantity: 4, // Nombre de particules ajoutées
        },
      },
    },
    detectRetina: true,
  }}
/>


    {/* Contenu principal */}
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
