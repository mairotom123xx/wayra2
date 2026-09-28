import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl border border-[#E4D4C0] shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        <div className="flex items-center justify-between pb-4 border-b border-[#E4D4C0]">
          <div className="flex items-center gap-2 text-[#8B4D24]">
            <ShieldCheck className="w-5 h-5" />
            <h3 id="privacy-title" className="font-serif text-xl font-bold text-[#3A1B0B]">
              Aviso de Privacidad
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#552912] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
            aria-label="Cerrar aviso de privacidad"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-xs sm:text-sm text-[#552912] leading-relaxed">
          <p>
            En <strong>Wayra Café</strong>, valoramos y respetamos la confidencialidad de tu información personal y corporativa.
          </p>

          <div>
            <h4 className="font-semibold text-[#3A1B0B] mb-1">1. Finalidad del tratamiento de datos</h4>
            <p>
              Los datos solicitados a través del formulario de cotización (nombre, empresa, correo, celular, fecha tentativa y número de personas) se utilizan únicamente para:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
              <li>Elaborar y remitir la cotización del servicio de coffee break.</li>
              <li>Coordinar los detalles operativos y de entrega en Cusco.</li>
              <li>Responder a tus dudas respecto a los requerimientos de tu evento.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#3A1B0B] mb-1">2. No compartición con terceros</h4>
            <p>
              Wayra Café no vende, no arrienda ni transfiere tus datos personales a terceros con fines comerciales o publicitarios.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#3A1B0B] mb-1">3. Tus derechos</h4>
            <p>
              Puedes solicitar en cualquier momento la rectificación o eliminación de tus datos de contacto comunicándote a nuestros canales oficiales de atención en Cusco.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4D4C0] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] rounded-lg transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
