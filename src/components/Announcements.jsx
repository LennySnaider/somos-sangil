/**
 * frontend/src/components/Announcements.jsx
 * Slider de comunicados oficiales con navegación y transición automática.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Announcements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const announcements = [
    {
      title: "Remodelación de la Casa Club",
      content:
        "Nos complace anunciar que iniciaremos la remodelación de la Casa Club por etapas, de acuerdo con el presupuesto aprobado, para mejorar la experiencia de todos los socios.",
      date: "20 Feb 2025",
    },
    {
      title: "Renovación de los permisos de pozos",
      content:
        "Estamos trabajando en la renovación de los permisos para asegurar el abastecimiento de agua de nuestro club y residencial.",
      date: "15 Feb 2025",
    },
    {
      title: "Actualización de reglamentos",
      content:
        "El comité está revisando y actualizando todos los reglamentos del Residencial y del Club para mejorar nuestra convivencia.",
      date: "10 Feb 2025",
    },
  ];

  // Cambio automático de slides cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === announcements.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1
    );
  };

  return (
    <section id="announcements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comunicados Oficiales
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-md bg-gray-50">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 p-8 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <span className="text-sm text-green-600 block mb-2">
                  {announcement.date}
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  {announcement.title}
                </h3>
                <p className="text-gray-700">{announcement.content}</p>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} className="text-green-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} className="text-green-700" />
          </button>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-4 space-x-2">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
