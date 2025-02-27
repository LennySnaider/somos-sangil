// Modificación en src/components/Contact.jsx
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

              {/* Código QR WhatsApp */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold text-lg mb-4">
                  Contáctanos vía WhatsApp
                </h3>
                <div className="mb-4">
                  <img
                    src="/img/wa.link_test.png"
                    alt="WhatsApp QR Code"
                    className="w-48 h-48 object-contain"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/200/200"; // Fallback a imagen placeholder
                    }}
                  />
                </div>
                <p className="text-center text-gray-600">
                  Escanea el código QR con tu teléfono para contactarnos por
                  WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
