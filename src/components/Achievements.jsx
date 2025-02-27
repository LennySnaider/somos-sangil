// src/components/Achievements.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

const Achievements = () => {
  const achievements = [
    "Reducción del 15% en los gastos administrativos",
    "Renovación de la zona de piscina sin cuotas extraordinarias",
    "Implementación del sistema de seguridad con acceso biométrico",
    "Resolución del 95% de los reportes de mantenimiento",
    "Organización de 6 eventos comunitarios para integración vecinal",
  ];

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Logros
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle
                  className="text-green-600 mr-3 flex-shrink-0 mt-1"
                  size={20}
                />
                <p className="text-gray-800">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
