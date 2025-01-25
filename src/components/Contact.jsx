import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Contactez-moi</h2>
        <p className="text-lg mb-8">
          Une question ou une opportunité ? Envoyez-moi un message et je vous répondrai au plus vite.
        </p>

        {/* Formulaire */}
        <div className="w-full max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full blur-xl opacity-30"></div>

          <form>
            {/* Nom */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Votre message"
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
              ></textarea>
            </div>

            {/* Bouton Envoyer */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
