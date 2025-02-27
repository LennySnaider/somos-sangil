/**
 * frontend/src/components/News.jsx
 * Sección de noticias destacadas con tarjetas informativas.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";
import { ChevronRight } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "Avances en el sistema de seguridad",
      excerpt:
        "Se está finalizando la implementación de tecnología en accesos y perímetro para mejorar la seguridad del fraccionamiento y el club.",
      date: "18 Feb 2025",
      image: "/img/1.jpg",
    },
    {
      title: "Nuevo boletín mensual: ¿SABÍAS QUÉ?",
      excerpt:
        "Lanzamos nuestro boletín informativo mensual para mantener a la comunidad informada sobre temas relevantes. ¡No te lo pierdas!",
      date: "10 Feb 2025",
      image: "/img/2.jpg",
    },
    {
      title: "Mejoras en el Bar Hoyo 19",
      excerpt:
        "Iniciamos el proyecto de mejoramiento del bar del Hoyo 19 para optimizar su servicio y ambiente para todos los socios.",
      date: "05 Feb 2025",
      image: "/img/3.jpg",
    },
  ];

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
          <a
            href="#"
            className="inline-block border border-green-700 text-green-700 px-6 py-3 rounded font-medium hover:bg-green-50 transition"
          >
            Ver todas las noticias
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
