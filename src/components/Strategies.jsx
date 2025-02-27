/**
 * frontend/src/components/Strategies.jsx
 * Muestra de estrategias y proyectos del comité con iconos explicativos.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";

const Strategies = () => {
  // Datos de las estrategias del comité
  const strategies = [
    {
      title: "Reglamentos",
      description:
        "Revisión y actualización de todos los reglamentos de Residencial y del Club",
      icon: "🔖",
    },
    {
      title: "Vigilancia",
      description:
        "Finalizar la implementación de tecnología en accesos y perímetro para mejorar la seguridad",
      icon: "🔒",
    },
    {
      title: "Casa Club",
      description:
        "Inicio de la remodelación de casa Club, por etapas, de acuerdo con el presupuesto",
      icon: "🏢",
    },
    {
      title: "Pozos",
      description:
        "Renovación de los permisos para asegurar el abastecimiento del recurso más importante",
      icon: "💧",
    },
    {
      title: "Comunicación",
      description:
        'Creación del boletín mensual "¿SABÍAS QUÉ?" para mantener informada a la comunidad',
      icon: "📣",
    },
    {
      title: "Transparencia",
      description:
        "Creación de un portal donde se muestren proyectos, licitaciones y estados financieros",
      icon: "🔍",
    },
  ];

  return (
    <section id="strategies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestras Estrategias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{strategy.icon}</div>
              <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800 transition"
          >
            Ver todas las estrategias
          </a>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
