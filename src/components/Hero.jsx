/**
 * frontend/src/components/Hero.jsx
 * Sección principal destacada con logo y llamadas a la acción.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative"
      style={{
        backgroundImage: 'url("/img/golf-course-sunset.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            SOMOS SAN GIL
          </h2>
          <p className="text-lg mb-6 text-white">
            Portal oficial del consejo directivo. Sigamos construyendo juntos
            por el bienestar de nuestra comunidad.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800 transition flex items-center justify-center">
              Últimos Comunicados <ChevronRight size={16} className="ml-2" />
            </button>
            <button className="border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-green-700 transition">
              Área de Miembros
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src="/img/logo.png"
              alt="Logo Somos San Gil"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
