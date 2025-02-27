/**
 * frontend/src/components/Footer.jsx
 * Pie de página con información de contacto, redes sociales y copyright.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React, { useState } from "react";
import { Facebook, Instagram, Twitter, X } from "lucide-react";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const privacyContent = (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Política de Privacidad</h3>
      <p className="mb-4">Última actualización: 27 de febrero de 2025</p>

      <p className="mb-2">
        Esta Política de Privacidad describe cómo el Club San Gil ("nosotros",
        "nuestro" o "Somos San Gil") recopila, utiliza y comparte la información
        personal que obtenemos a través de nuestro sitio web, instalaciones y
        servicios.
      </p>

      <h4 className="font-bold mt-4 mb-2">Información que recopilamos</h4>
      <p className="mb-2">
        Recopilamos información personal que usted nos proporciona directamente,
        como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Información de contacto (nombre, dirección, correo electrónico,
          teléfono)
        </li>
        <li>Información de membresía</li>
        <li>Información de pago</li>
        <li>Comunicaciones con nosotros</li>
        <li>Preferencias y actividades dentro del club</li>
      </ul>

      <h4 className="font-bold mt-4 mb-2">Cómo utilizamos su información</h4>
      <p className="mb-2">Utilizamos la información que recopilamos para:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Gestionar su membresía y proporcionar nuestros servicios</li>
        <li>
          Comunicarnos con usted sobre eventos, actividades y noticias del club
        </li>
        <li>Procesar pagos y administrar su cuenta</li>
        <li>Mejorar nuestros servicios e instalaciones</li>
        <li>Cumplir con nuestras obligaciones legales</li>
      </ul>

      <h4 className="font-bold mt-4 mb-2">Compartición de información</h4>
      <p className="mb-4">
        No vendemos ni alquilamos su información personal a terceros. Podemos
        compartir su información con proveedores de servicios que nos ayudan a
        operar nuestro negocio y sitio web, siempre bajo estrictos acuerdos de
        confidencialidad.
      </p>

      <h4 className="font-bold mt-4 mb-2">Sus derechos</h4>
      <p className="mb-4">
        Usted tiene derecho a acceder, corregir o eliminar sus datos personales.
        Para ejercer estos derechos, póngase en contacto con nosotros a través
        de comite@somossangil.com.
      </p>

      <h4 className="font-bold mt-4 mb-2">Cambios a esta política</h4>
      <p className="mb-4">
        Podemos actualizar esta política periódicamente. La versión más reciente
        estará disponible en nuestro sitio web.
      </p>
    </div>
  );

  const termsContent = (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Términos de Servicio</h3>
      <p className="mb-4">Última actualización: 27 de febrero de 2025</p>

      <p className="mb-2">
        Estos Términos de Servicio ("Términos") rigen su acceso y uso del sitio
        web de Somos San Gil, así como su membresía y uso de nuestras
        instalaciones y servicios.
      </p>

      <h4 className="font-bold mt-4 mb-2">Aceptación de los términos</h4>
      <p className="mb-4">
        Al acceder o utilizar nuestro sitio web, instalaciones o servicios,
        usted acepta estar sujeto a estos Términos. Si no está de acuerdo con
        estos Términos, no debe acceder o utilizar nuestros servicios.
      </p>

      <h4 className="font-bold mt-4 mb-2">Membresía</h4>
      <p className="mb-4">
        La membresía en el Club San Gil está sujeta a la aprobación y el pago de
        todas las cuotas aplicables. Los miembros deben cumplir con todas las
        reglas y políticas del club, que pueden ser actualizadas periódicamente.
      </p>

      <h4 className="font-bold mt-4 mb-2">Uso del sitio web</h4>
      <p className="mb-4">
        Nuestro sitio web es solo para uso informativo. No garantizamos la
        exactitud, integridad o actualidad de la información presentada. El uso
        del sitio web es bajo su propio riesgo.
      </p>

      <h4 className="font-bold mt-4 mb-2">Propiedad intelectual</h4>
      <p className="mb-4">
        Todo el contenido del sitio web, incluyendo texto, gráficos, logotipos y
        software, está protegido por leyes de propiedad intelectual y pertenece
        a Somos San Gil o sus licenciantes.
      </p>

      <h4 className="font-bold mt-4 mb-2">Limitación de responsabilidad</h4>
      <p className="mb-4">
        En ningún caso Somos San Gil será responsable por daños indirectos,
        incidentales, especiales o consecuentes derivados del uso o la
        imposibilidad de usar nuestros servicios.
      </p>

      <h4 className="font-bold mt-4 mb-2">Modificaciones</h4>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos Términos en cualquier
        momento. Las modificaciones entrarán en vigor inmediatamente después de
        su publicación en el sitio web.
      </p>
    </div>
  );

  return (
    <footer className="bg-blue-800 text-white py-8">
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
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-green-400 transition"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-green-400 transition"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Política de Privacidad */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 rounded-lg w-full max-w-4xl my-8 p-6 relative">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            {privacyContent}
          </div>
        </div>
      )}

      {/* Modal de Términos de Servicio */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 rounded-lg w-full max-w-4xl my-8 p-6 relative">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            {termsContent}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
