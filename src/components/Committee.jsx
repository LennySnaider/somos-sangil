/**
 * frontend/src/components/Committee.jsx
 * Presentación del Planilla directiva y consejeros del club de golf.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React, { useState } from "react";
import { X } from "lucide-react";

const Committee = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Datos del Planilla directiva principal
  const committees = [
    {
      name: "Carlo Alvarez",
      position: "Presidente",
      image: "/img/consejeros/consejero.png",
      motto: "Por mi familia y la tuya, siempre San Gil",
      bio: "45 años, 34 en San Gil. Papá de Maca, Josema y Borja. Licenciatura en Administración Financiera, Maestría en Administración. Empresario en la industria química y de logística. San Gil ha sido mi hogar desde que era niño, y hoy mis hijos también crecen aquí. Conozco de primera mano las necesidades de nuestra comunidad y me comprometo a seguir trabajando por su bienestar.",
    },
    {
      name: "Manuel Rivadeneyra",
      position: "Vicepresidente",
      image: "/img/consejeros/consejero (5).png",
      motto: "Compromiso y continuidad para San Gil",
      bio: "26 años en San Gil. Papá de Ana Sofía, Isabela y Federica. Esposo de Silvana. Ingeniero Industrial. Empresario con 27 años de experiencia. Ex Presidente de CANACINTRA e Industriales de SJR.",
    },
    {
      name: "Mónica Hernández",
      position: "Tesorera",
      image: "/img/consejeros/consejero (4).png",
      motto: "Transparencia y orden en cada peso",
      bio: "44 años, 7 en San Gil. Mamá de Miranda y Marifer. Contadora Pública. 15 años de experiencia en la iniciativa privada.",
    },
    {
      name: "Emmanuel García",
      position: "Secretario",
      image: "/img/consejeros/consejero (7).png",
      motto: "Gestión clara, comunicación efectiva",
      bio: "44 años y 5 en San Gil. Papá de María José y Emmanuel, esposo de Yolanda. Ingeniero en Cibernética. 25 años de experiencia en sector tecnológico.",
    },
  ];

  // Datos de los consejeros adicionales
  const councilMembers = [
    {
      name: "José Manuel Figueroa",
      position: "Vocal de Golf",
      image: "/img/consejeros/consejero (12).png",
      motto: "Impulsar el golf para fortalecer el club",
      bio: "38 años jugando en San Gil. Papá de 2 hijos. Empresario. Golfista apasionado.",
    },
    {
      name: "José Manuel Castillo",
      position: "Vocal de Tenis",
      image: "/img/consejeros/consejero (9).png",
      motto: "Más tenis, más deporte, más comunidad",
      bio: "20 años en San Gil. Licenciatura en Mercadotecnia y Comunicación. 4 años de experiencia en Administración y servicio al cliente.",
    },
    {
      name: "Alejandro Díaz Coppe",
      position: "Vocal de Seguridad",
      image: "/img/consejeros/consejero (6).png",
      motto: "Prevención y seguridad para todos",
      bio: "48 años, 12 en San Gil. Papá de Aranza, esposo de Wendy. Lic. en Administración e Ingeniero Industrial. Empresario, 29 años de experiencia en sector financiero, automotriz y de construcción.",
    },
    {
      name: "Daniel Barragán",
      position: "Vocal de Agua",
      image: "/img/consejeros/consejero (2).png",
      motto: "Cuidemos el agua, protejamos San Gil",
      bio: "72 años, 2 años en San Gil. Papá de Daniel y Rodrigo, esposo de Gloria, abuelo de Andrea y Valeria. Ingeniero Mecánico. Jubilado con 50 años de experiencia en industria minera.",
    },
    {
      name: "Alma Candelas",
      position: "Vocal de Ecología",
      image: "/img/consejeros/consejero (8).png",
      motto: "Cuidemos juntos nuestro entorno",
      bio: "25 en San Gil. Mamá de 3 hijos. Licenciatura en Artes Plásticas. Empresaria. Presidente de la AC Causa Ambiental. Consejera en Adicciones.",
    },
    {
      name: "Nico Pinto",
      position: "Vocal de Alimentos y Bebidas",
      image: "/img/consejeros/consejero (3).png",
      motto: "Calidad en tu mesa, tranquilidad en San Gil",
      bio: "42 años, 3 en San Gil. Papá de Gal e Idan, esposo de Laura. Lic. en Administración de Negocios y Ex militar Israelí. 21 años de experiencia en áreas de seguridad y en restaurantes.",
    },
    {
      name: "Héctor Martínez",
      position: "Vocal de Arquitectura",
      image: "/img/consejeros/consejero (10).png",
      motto: "Orden y armonía en nuestro entorno",
      bio: "2 en San Gil. Papá de dos hijos. Arquitecto. 19 años de experiencia en el ramo de la construcción. Empresario constructor.",
    },
    {
      name: "Arnold Valdez",
      position: "Consejero General",
      image: "/img/consejeros/consejero (11).png",
      motto: "Compromiso con el golf, pasión por San Gil",
      bio: "53 años, 14 en San Gil. Papá de 3 hijos. Empresario. Golfista apasionado.",
    },
    {
      name: "Roberto Velasco",
      position: "Consejero General",
      image: "/img/consejeros/consejero (14).png",
      motto: "Unidad y trabajo por nuestra comunidad",
      bio: "60 años, 6 en San Gil. Papá de tres hijos, esposo de Paola. Contador Público. 35 años de experiencia en empresas bursátiles.",
    },
    {
      name: "Alejandro Rosales",
      position: "Consejero General",
      image: "/img/consejeros/consejero (13).png",
      motto: "Sumando esfuerzos por San Gil",
      bio: "48 años, 3 en San Gil. Papá de tres hijos, y esposo de Eli. Licenciatura en Comercio Internacional. Empresario.",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden"; // Evitar scroll del body
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto"; // Restaurar scroll
  };

  return (
    <section id="committee" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Planilla directiva
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce a los integrantes del Planilla directiva que trabajan para
          mejorar la experiencia de todos los socios del club.
        </p>

        {/* Directivos principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {committees.map((member, index) => (
            <div
              key={index}
              className="text-center cursor-pointer hover:shadow-md p-4 rounded-lg transition-all"
              onClick={() => openModal(member)}
            >
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
            <div
              key={index}
              className="text-center bg-gray-50 p-4 rounded-lg cursor-pointer hover:shadow-md transition-all"
              onClick={() => openModal(member)}
            >
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

      {/* Modal para biografía */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row md:items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 md:mr-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/150/150"; // Fallback a imagen placeholder
                  }}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-2xl">{selectedMember.name}</h3>
                <p className="text-green-600 mb-2">{selectedMember.position}</p>
                <p className="text-sm italic mb-4">"{selectedMember.motto}"</p>
                <p className="text-gray-700">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Committee;
