import React from "react";

const projects = [
  {
    id: 1,
    title: "Dashboard Météo",
    description:
      "Tableau interactif pour consulter la météo et les prévisions.",
    technologies: "HTML, CSS, JavaScript, Openweathermap API",
    image: "/images/dashboard-meteo.PNG",
    github: "https://github.com/RomainB1988/dashboard-meteo",
    demo: "https://romainb1988.github.io/dashboard-meteo/",
  },
  {
    id: 2,
    title: "Glass Collect",
    description:
      "Application web pour localiser les points de collecte et recycler le verre facilement.",
    technologies: "Ruby on Rails, PostgreSQL, Stimulus, Mapbox",
    image: "/images/Glasscollect.PNG",
    github: "https://github.com/catherine-guyot/glass_collect",
  },
  {
    id: 3,
    title: "Random Quote Generator",
    description:
      "Une application web simple pour générer des citations aléatoires avec un design épuré.",
    technologies: "HTML, CSS, JavaScript",
    image: "/images/randomquotegenerator.PNG",
    github: "https://github.com/RomainB1988/random-quote-generator",
    demo: "https://romainb1988.github.io/random-quote-generator/",
  },
  {
    id: 4,
    title: "Galerie d'images",
    description:
      "Une galerie interactive permettant de rechercher, enregistrer et explorer des images grâce à une interface moderne.",
    technologies: "React.js, JavaScript, API Unsplash",
    image: "/images/galerie-images-thumbnail.PNG",
    github: "https://github.com/RomainB1988/galerie-images",
    demo: "https://romainb1988.github.io/galerie-images/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-wrapper flex justify-center">
              <div className="card">
                {/* Face Avant */}
                <div className="front-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <p>{project.technologies}</p>
                </div>
                {/* Face Arrière */}
                <div className="back-card">
                  <h1>{project.title}</h1>
                  <p>Découvrez le projet :</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                      >
                        Voir en ligne
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
