import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  return (
    <footer id="contacto" className="bg-[#111317] text-gray-200 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-tight text-white block">
              Sumaq Alquileres Cusco
            </span>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Alquiler de sillas vestidas y plásticas, mesas redondas y tablones, toldos estructurales y entelado profesional en Cusco con puntualidad y limpieza garantizada.
            </p>
            <div className="pt-2 text-xs text-[#D4AF37] font-medium">
              Especialistas en sillas, mesas, toldos y entelado en Cusco.
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37] mb-4">
              Ubicación y Contacto
            </h4>
            
            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Ubicación en Cusco:</span>
                <span>Centro de operaciones logísticas en Cusco. Cobertura en toda la ciudad de Cusco, Valle Sagrado y alrededores.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Teléfono / WhatsApp:</span>
                <a
                  href="tel:+51984123456"
                  className="hover:text-white transition-colors"
                >
                  +51 984 123 456
                </a>
                <span className="block text-gray-400 text-xs mt-0.5">Atención y coordinación directa para eventos</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Correo oficial:</span>
                <a
                  href="mailto:contacto@sumaqalquilerescusco.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@sumaqalquilerescusco.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Horario de atención:</span>
                <span>Lunes a Domingo de 8:00 am a 8:00 pm (Guardia activa de montaje los fines de semana)</span>
              </div>
            </div>
          </div>

          {/* Social and Legal links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37] mb-4">
              Canales y Legal
            </h4>
            
            <div className="text-xs sm:text-sm text-gray-300 space-y-2">
              <span className="block font-medium text-white">Redes sociales oficiales:</span>
              <ul className="space-y-1 text-xs text-gray-300">
                <li>
                  <span className="text-[#D4AF37] font-semibold">Instagram:</span> @sumaqalquilerescusco
                </li>
                <li>
                  <span className="text-[#D4AF37] font-semibold">Facebook:</span> Sumaq Alquileres Cusco
                </li>
                <li>
                  <span className="text-[#D4AF37] font-semibold">TikTok:</span> @sumaqalquilerescusco
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white underline cursor-pointer focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded p-1"
              >
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                Ver Aviso de Privacidad breve
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and brief privacy note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Sumaq Alquileres Cusco. Todos los derechos reservados. Cusco, Perú.
          </p>
          <p className="text-center sm:text-right text-[11px] text-gray-400 max-w-md">
            Aviso de Privacidad: Los datos personales recopilados en esta página se destinan exclusivamente a gestionar solicitudes de cotización de sillas, mesas, toldos y entelado para eventos en Cusco.
          </p>
        </div>

      </div>
    </footer>
  );
};
