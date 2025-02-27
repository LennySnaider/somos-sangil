/**
 * frontend/src/components/News.jsx
 * Sección de noticias destacadas con tarjetas informativas.
 * @version 1.0.0
 * @updated 2025-02-27
 */
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const News = () => {
  const [showAll, setShowAll] = useState(false);

  const initialNews = [
    {
      title: "Avances en el sistema de seguridad",
      excerpt:
        "Continuaremos con la revisión y actualización de los protocolos de seguridad, implementando tecnología avanzada en accesos y perímetro para mejorar la seguridad del fraccionamiento y el club, garantizando bienestar para todos.",
      date: "18 Feb 2025",
      image: "/img/1.jpg",
    },
    {
      title: "Nuevo boletín mensual: ¿SABÍAS QUÉ?",
      excerpt:
        'Proponemos lanzar el boletín mensual "¿Sabías Qué?" para mantener a la comunidad informada sobre temas relevantes, novedades y acciones importantes.',
      date: "10 Feb 2025",
      image: "/img/2.jpg",
    },
    {
      title: "Mejoras en el Bar Hoyo 19",
      excerpt:
        "Proponemos mejorar el Bar Hoyo 19 para optimizar su servicio y crear un ambiente más agradable, brindando una experiencia única a nuestros visitantes.",
      date: "05 Feb 2025",
      image: "/img/3.jpg",
    },
  ];

  const additionalNews = [
    {
      title: "Mejoras en la señalética urbana",
      excerpt:
        "Continuaremos con la actualización de la señalética urbana conforme a los reglamentos municipales y de protección civil, mejorando la seguridad vial y la estética del fraccionamiento.",
      date: "01 Feb 2025",
      image: "/img/4.jpg",
    },
    {
      title: "Nueva estrategia de cuidado de arbolado",
      excerpt:
        "Continuaremos con la estrategia de cuidado del arbolado, enfocándonos en prevenir el regreso de plagas y asegurar la salud de nuestros árboles a largo plazo.",
      date: "28 Ene 2025",
      image: "/img/5.jpg",
    },
    {
      title: "Re-ingeniería del restaurante",
      excerpt:
        "Continuaremos con la reingeniería del restaurante, optimizando los procesos operativos y administrativos para mejorar la experiencia del cliente y aumentar la satisfacción.",
      date: "20 Ene 2025",
      image: "/img/6.jpg",
    },
  ];

  const news = showAll ? [...initialNews, ...additionalNews] : initialNews;

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Últimas Noticias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/300/200"; // Fallback a imagen placeholder
                }}
              />
              <div className="p-6">
                <span className="text-sm text-green-600 block mb-2">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="text-green-700 font-medium hover:text-green-800 transition flex items-center"
                >
                  Leer más <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block border border-green-700 text-green-700 px-6 py-3 rounded font-medium hover:bg-green-50 transition"
          >
            {showAll ? "Ver menos noticias" : "Ver todas las noticias"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
