/**
 * frontend/src/components/Header.jsx
 * Componente de encabezado principal con navegación responsive y menú móvil.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="Somos San Gil" className="h-12 mr-3" />
          <h1 className="text-2xl font-bold text-green-700">SOMOS SAN GIL</h1>
          <span className="ml-2 text-sm uppercase tracking-widest">
            Consejo directivo
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="font-medium hover:text-green-600 transition"
          >
            Inicio
          </a>
          <a
            href="#announcements"
            className="font-medium hover:text-green-600 transition"
          >
            Comunicados
          </a>
          <a
            href="#news"
            className="font-medium hover:text-green-600 transition"
          >
            Noticias
          </a>
          <a
            href="#committee"
            className="font-medium hover:text-green-600 transition"
          >
            Comité
          </a>
          <a
            href="#strategies"
            className="font-medium hover:text-green-600 transition"
          >
            Estrategias
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-green-600 transition"
          >
            Contacto
          </a>
        </nav>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navegación Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <a href="#home" className="py-2 hover:text-green-600 transition">
              Inicio
            </a>
            <a
              href="#announcements"
              className="py-2 hover:text-green-600 transition"
            >
              Comunicados
            </a>
            <a href="#news" className="py-2 hover:text-green-600 transition">
              Noticias
            </a>
            <a
              href="#committee"
              className="py-2 hover:text-green-600 transition"
            >
              Comité
            </a>
            <a
              href="#strategies"
              className="py-2 hover:text-green-600 transition"
            >
              Estrategias
            </a>
            <a href="#contact" className="py-2 hover:text-green-600 transition">
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
