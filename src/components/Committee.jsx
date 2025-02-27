/**
 * frontend/src/components/Committee.jsx
 * Presentación del consejo directivo y consejeros del club de golf.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";

const Committee = () => {
  // Datos del Consejo Directivo principal
  const committees = [
    {
      name: "Carlo Alvarez",
      position: "Presidente",
      image: "/img/consejeros/consejero.png",
      motto: "Por mi familia y la tuya, siempre San Gil",
    },
    {
      name: "Manuel Rivadeneyra",
      position: "Vicepresidente",
      image: "/img/consejeros/consejero (5).png",
      motto: "Compromiso y continuidad para San Gil",
    },
    {
      name: "Mónica Hernández",
      position: "Tesorera",
      image: "/img/consejeros/consejero (4).png",
      motto: "Transparencia y orden en cada peso",
    },
    {
      name: "Emmanuel García",
      position: "Secretario",
      image: "/img/consejeros/consejero (7).png",
      motto: "Gestión clara, comunicación efectiva",
    },
  ];

  // Datos de los consejeros adicionales
  const councilMembers = [
    {
      name: "José Manuel Figueroa",
      position: "Vocal de Golf",
      image: "/img/consejeros/consejero (12).png",
      motto: "Impulsar el golf para fortalecer el club",
    },
    {
      name: "José Manuel Castillo",
      position: "Vocal de Tenis",
      image: "/img/consejeros/consejero (9).png",
      motto: "Más tenis, más deporte, más comunidad",
    },
    {
      name: "Alejandro Díaz Coppe",
      position: "Vocal de Seguridad",
      image: "/img/consejeros/consejero (6).png",
      motto: "Prevención y seguridad para todos",
    },
    {
      name: "Daniel Barragán",
      position: "Vocal de Agua",
      image: "/img/consejeros/consejero (2).png",
      motto: "Cuidemos el agua, protejamos San Gil",
    },
    {
      name: "Alma Candelas",
      position: "Vocal de Ecología",
      image: "/img/consejeros/consejero (8).png",
      motto: "Cuidemos juntos nuestro entorno",
    },
    {
      name: "Nico Pinto",
      position: "Vocal de Alimentos y Bebidas",
      image: "/img/consejeros/consejero (3).png",
      motto: "Calidad en tu mesa, tranquilidad en San Gil",
    },
    {
      name: "Héctor Martínez",
      position: "Vocal de Arquitectura",
      image: "/img/consejeros/consejero (10).png",
      motto: "Orden y armonía en nuestro entorno",
    },
    {
      name: "Arnold Valdez",
      position: "Consejero General",
      image: "/img/consejeros/consejero (11).png",
      motto: "Compromiso con el golf, pasión por San Gil",
    },
    {
      name: "Roberto Velasco",
      position: "Consejero General",
      image: "/img/consejeros/consejero (14).png",
      motto: "Unidad y trabajo por nuestra comunidad",
    },
    {
      name: "Alejandro Rosales",
      position: "Consejero General",
      image: "/img/consejeros/consejero (13).png",
      motto: "Sumando esfuerzos por San Gil",
    },
  ];

  return (
    <section id="committee" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Consejo Directivo
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce a los integrantes del Consejo Directivo que trabajan para
          mejorar la experiencia de todos los socios del club.
        </p>

        {/* Directivos principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {committees.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/150/150"; // Fallback a imagen placeholder
                  }}
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-green-600 mb-2">{member.position}</p>
              <p className="text-sm italic">&quot;{member.motto}&quot;</p>
            </div>
          ))}
        </div>

        {/* Consejeros adicionales */}
        <h3 className="text-2xl font-bold text-center mb-8">Consejeros</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {councilMembers.map((member, index) => (
            <div key={index} className="text-center bg-gray-50 p-4 rounded-lg">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/100/100"; // Fallback a imagen placeholder
                  }}
                />
              </div>
              <h4 className="font-bold text-sm">{member.name}</h4>
              <p className="text-green-600 text-xs mb-1">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
