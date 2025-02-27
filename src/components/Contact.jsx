/**
 * frontend/src/components/Contact.jsx
 * Formulario de contacto e información para comunicarse con el comité.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contacta con el Comité
          </h2>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Información de contacto */}
              <div>
                <h3 className="font-bold text-lg mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Oficina:</span>
                    <span className="text-gray-600">
                      Casa Club, Planta Alta
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Horario:</span>
                    <span className="text-gray-600">
                      Lun-Vie: 9:00 - 17:00h
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Teléfono:</span>
                    <span className="text-gray-600">(123) 456-7890</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-medium mr-2">Email:</span>
                    <span className="text-gray-600">
                      comite@somossangil.com
                    </span>
                  </p>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div>
                <h3 className="font-bold text-lg mb-4">Enviar Mensaje</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      rows="3"
                      placeholder="Tu mensaje"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
