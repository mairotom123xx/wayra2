import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  return (
    <footer id="contacto" className="bg-[#3A1B0B] text-[#FAF7F2] pt-16 pb-12 border-t border-[#552912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#552912]/80">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2] block">
              Wayra Café
            </span>
            <p className="text-sm text-[#E4D4C0] max-w-sm leading-relaxed">
              Café de especialidad de La Convención y servicio de coffee break puntual y profesional para eventos corporativos y reuniones en Cusco.
            </p>
            <div className="pt-2 text-xs text-[#CEB496]">
              Atención exclusiva a grupos de 10 a 40 personas.
            </div>
          </div>

          {/* Contact Details (With items marked as [POR CONFIRMAR] according to brief) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#CEB496] mb-4">
              Ubicación y Contacto
            </h4>
            
            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#E4D4C0]">
              <MapPin className="w-4 h-4 text-[#CEB496] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#FAF7F2]">Ubicación estratégica:</span>
                <span>A pasos de la Plaza de Armas, Cusco</span>
                <span className="block text-[#CEB496] text-xs">[POR CONFIRMAR: Dirección exacta del local]</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#E4D4C0]">
              <Phone className="w-4 h-4 text-[#CEB496] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#FAF7F2]">Teléfono / WhatsApp:</span>
                <span>[POR CONFIRMAR: Enlace a WhatsApp empresarial y número telefónico]</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#E4D4C0]">
              <Mail className="w-4 h-4 text-[#CEB496] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#FAF7F2]">Correo oficial:</span>
                <span>[POR CONFIRMAR: Correo corporativo para cotizaciones]</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-[#E4D4C0]">
              <Clock className="w-4 h-4 text-[#CEB496] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#FAF7F2]">Horario de atención:</span>
                <span>[POR CONFIRMAR: Horarios de atención y coordinación de eventos]</span>
              </div>
            </div>
          </div>

          {/* Social and Legal links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#CEB496] mb-4">
              Canales y Legal
            </h4>
            
            <div className="text-xs sm:text-sm text-[#E4D4C0] space-y-2">
              <span className="block font-medium text-[#FAF7F2]">Redes sociales:</span>
              <p className="text-xs text-[#CEB496]">
                [POR CONFIRMAR: Enlaces a Instagram / LinkedIn / Facebook]
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacyModal}
                className="inline-flex items-center gap-2 text-xs text-[#E4D4C0] hover:text-white underline cursor-pointer focus-visible:ring-1 focus-visible:ring-[#CEB496] rounded p-1"
              >
                <Shield className="w-3.5 h-3.5 text-[#CEB496]" />
                Ver Aviso de Privacidad breve
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and brief privacy note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CEB496] gap-4">
          <p>
            © {new Date().getFullYear()} Wayra Café. Todos los derechos reservados. Cusco, Perú.
          </p>
          <p className="text-center sm:text-right text-[11px] text-[#CEB496]/80 max-w-md">
            Aviso de Privacidad: Los datos personales recopilados en esta página se destinan exclusivamente a gestionar solicitudes de cotización corporativa para eventos en Cusco.
          </p>
        </div>

      </div>
    </footer>
  );
};
