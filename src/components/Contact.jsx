// Contact.jsx
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-left font-semibold mb-2">Nom</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg"
            placeholder="Votre email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left font-semibold mb-2">Message</label>
          <textarea
            className="w-full p-3 border rounded-lg"
            placeholder="Votre message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
