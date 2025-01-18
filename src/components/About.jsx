import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">À Propos de Moi</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Développeur full-stack formé au Wagon, j'ai acquis une solide expertise en Ruby on Rails, JavaScript, et en développement web full-stack.
          Passionné par la création d'applications performantes et intuitives, je maîtrise tout le processus, de l'architecture backend à l'intégration front-end.
          Mon approche privilégie un code structuré, une expérience utilisateur optimale, et des solutions adaptées aux besoins réels.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          En recherche d'une alternance pour consolider mes compétences et contribuer activement à des projets innovants, je suis motivé à évoluer dans un environnement collaboratif et stimulant.
          Découvrez mes réalisations et compétences à travers ce portfolio.
        </p>
      </div>
    </section>
  );
}

export default About;
