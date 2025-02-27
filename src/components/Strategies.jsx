/**
 * frontend/src/components/Strategies.jsx
 * Muestra de estrategias y proyectos del comité con iconos explicativos.
 * @version 1.0.0
 * @updated 2025-02-27
 */
import React, { useState } from "react";

const Strategies = () => {
  const [showAll, setShowAll] = useState(false);

  // Estrategias iniciales
  const initialStrategies = [
    {
      title: "Reglamentos",
      description:
        "Continuaremos con la revisión y actualización de los reglamentos, alineándolos con las necesidades actuales y las mejores prácticas para una gestión eficiente.",
      icon: "🔖",
    },
    {
      title: "Vigilancia",
      description:
        "Continuaremos con la revisión y actualización de los protocolos de seguridad, implementando tecnología avanzada en accesos y perímetro para mejorar la seguridad.",
      icon: "🔒",
    },
    {
      title: "Casa Club",
      description:
        "Proponemos la remodelación de la Casa Club por etapas para mejorar la experiencia y el valor del club, asegurando un espacio más moderno y funcional para todos.",
      icon: "🏢",
    },
    {
      title: "Pozos",
      description:
        "Continuaremos con la renovación de los permisos de los pozos, asegurando el abastecimiento del recurso más vital, garantizando el acceso al agua para todos.",
      icon: "💧",
    },
    {
      title: "Comunicación",
      description:
        'Proponemos lanzar el boletín mensual "¿Sabías Qué?" para mantener a la comunidad informada sobre temas relevantes, novedades y acciones importantes.',
      icon: "📣",
    },
    {
      title: "Transparencia",
      description:
        "Continuaremos y proponemos crear un portal de transparencia donde se puedan consultar proyectos, licitaciones, avances de obras y estados financieros.",
      icon: "🔍",
    },
  ];

  // Estrategias adicionales
  const additionalStrategies = [
    {
      title: "Arbolado",
      description:
        "Continuaremos con la estrategia de cuidado del arbolado, enfocándonos en prevenir el regreso de plagas y asegurar la salud de nuestros árboles a largo plazo.",
      icon: "🌳",
    },
    {
      title: "Centro de acopio",
      description:
        "Proponemos mejorar el Centro de Acopio para fomentar una comunidad más sustentable y comprometida con el cuidado del medio ambiente.",
      icon: "♻️",
    },
    {
      title: "Composta",
      description:
        "Proponemos un proyecto de generación de composta a partir de los residuos orgánicos de la comunidad, promoviendo prácticas ecológicas y sostenibles.",
      icon: "🍃",
    },
    {
      title: "Comités",
      description:
        "Continuaremos formando comités para atender las problemáticas del fraccionamiento, fomentar la participación activa y dar seguimiento a los existentes.",
      icon: "👥",
    },
    {
      title: "Adquisiciones",
      description:
        "Proponemos la creación de un comité de adquisiciones para fortalecer la supervisión del uso de recursos en asociaciones, asegurando una gestión transparente.",
      icon: "📊",
    },
    {
      title: "Bar Hoyo 19",
      description:
        "Proponemos mejorar el Bar Hoyo 19 para optimizar su servicio y crear un ambiente más agradable, brindando una experiencia única a nuestros visitantes.",
      icon: "🍸",
    },
  ];

  // Combinar estrategias según el estado
  const strategies = showAll
    ? [...initialStrategies, ...additionalStrategies]
    : initialStrategies;

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
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800 transition"
          >
            {showAll ? "Ver menos estrategias" : "Ver todas las estrategias"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
