/**
 * src/components/FloatingButtons.jsx
 * Botones flotantes para volver arriba y contacto WhatsApp con efecto pulsante.
 * @version 1.0.0
 * @updated 2025-02-27
 */
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón de scroll cuando el usuario baja
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5215569660712?text=Hola%2C%20quiero%20informaci%C3%B3n.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <div className="relative">
        {/* Botón de WhatsApp circular con efecto pulsante */}
        <button
          onClick={openWhatsApp}
          className="bg-green-600 text-white w-12 h-12 rounded-full shadow-md hover:bg-green-700 transition-all flex items-center justify-center relative"
          aria-label="WhatsApp contacto"
        >
          <MessageCircle size={20} />

          {/* Efecto pulsante (animación) */}
          <span className="absolute w-full h-full rounded-full bg-green-600 animate-ping opacity-75"></span>
        </button>

        {/* Burbuja con texto "Live" */}
        <div className="absolute -top-6 -right-1 bg-white px-2 py-0.5 rounded-full shadow-sm text-xs font-medium">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            online
          </span>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-950 text-white w-12 h-12 rounded-full shadow-md hover:bg-blue-900 transition-all flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
