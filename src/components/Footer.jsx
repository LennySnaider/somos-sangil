/**
 * frontend/src/components/Footer.jsx
 * Pie de página con información de contacto, redes sociales y copyright.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <div className="mb-4 md:mb-0 flex items-center">
              <img
                src="/img/logo.png"
                alt="Somos San Gil"
                className="h-12 mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">SOMOS SAN GIL</h2>
                <p className="text-sm mt-1">SIGAMOS CONSTRUYENDO JUNTOS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © 2025 San Gil Golf Club. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-700 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-700 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-700 transition"
            >
              <Twitter size={18} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-green-400 transition">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
