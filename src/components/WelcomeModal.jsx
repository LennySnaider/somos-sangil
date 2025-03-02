/**
 * src/components/WelcomeModal.jsx
 * Modal de bienvenida que muestra un anuncio importante al ingresar al sitio.
 * @version 1.0.0
 * @updated 2025-02-27
 */
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Pequeño retraso para mostrar el modal después de que se cargue la página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/img/popup/aununcio_importante.jpg"
            alt="Anuncio Importante - Somos San Gil"
            className="w-full h-auto"
            onError={(e) => {
              e.target.src = "/api/placeholder/500/800";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
