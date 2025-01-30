import React from "react";

const projects = [
  {
    id: 1,
    title: "Dashboard Météo",
    description: "Tableau interactif pour consulter la météo et les prévisions.",
    technologies: ["HTML", "CSS", "JavaScript", "Openweathermap API"],
    image: "/images/dashboard-meteo.PNG",
    github: "https://github.com/RomainB1988/dashboard-meteo",
    demo: "https://romainb1988.github.io/dashboard-meteo/",
  },
  {
    id: 2,
    title: "Glass Collect",
    description: "Application web pour localiser les points de collecte et recycler le verre facilement.",
    technologies: ["Ruby on Rails", "PostgreSQL", "Stimulus", "Mapbox"],
    image: "/images/Glasscollect.PNG",
    github: "https://github.com/catherine-guyot/glass_collect",
  },
  {
    id: 3,
    title: "Random Quote Generator",
    description: "Une application web simple pour générer des citations aléatoires avec un design épuré.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/randomquotegenerator.PNG",
    github: "https://github.com/RomainB1988/random-quote-generator",
    demo: "https://romainb1988.github.io/random-quote-generator/",
  },
  {
    id: 4,
    title: "Galerie d'images",
    description: "Une galerie interactive permettant de rechercher, enregistrer et explorer des images grâce à une interface moderne.",
    technologies: ["React.js", "JavaScript", "Unsplash API"],
    image: "/images/galerie-images-thumbnail.PNG",
    github: "https://github.com/RomainB1988/galerie-images",
    demo: "https://romainb1988.github.io/galerie-images/",
  },
  {
    id: 5,
    title: "To-Do List Avancée",
    description: "Une application de gestion de tâches avec animations, carte interactive et agenda.",
    technologies: ["React", "Tailwind", "Framer Motion", "Leaflet", "React Calendar"],
    image: "/images/todo-list-advanced.PNG",
    github: "https://github.com/RomainB1988/todo-list-advanced",
    demo: "https://romainb1988.github.io/todo-list-advanced/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 relative text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-white">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-wrapper flex justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="card relative w-full max-w-sm h-96">
                {/* Face Avant */}
                <div className="front-card absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <p className="text-sm mt-2">{project.description}</p>
                </div>
                {/* Face Arrière */}
                <div className="back-card absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center transform rotate-y-180">
                  <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                  <p className="text-sm mb-4">Technologies utilisées :</p>
                  <ul className="text-sm list-disc list-inside">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
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
