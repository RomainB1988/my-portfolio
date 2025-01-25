import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xgnee7l", // Service ID
        "template_mnvcvok", // Template ID
        {
          name: formData.name, // Correspond au champ {{name}}
          email: formData.email, // Correspond au champ {{email}}
          message: formData.message, // Correspond au champ {{message}}
        },
        "MDtxYDeR2T78R25z1" // User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true); // Affiche un message de succès
          setFormData({ name: "", email: "", message: "" }); // Réinitialise le formulaire
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

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

        <div className="w-full max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
          <form onSubmit={handleSubmit}>
            {/* Nom */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
                required
              />
            </div>
            {/* Message */}
            <div className="mb-6">
              <label className="block text-left font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300"
                required
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
          {success && (
            <p className="mt-6 text-green-500">Votre message a été envoyé avec succès !</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
