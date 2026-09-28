import React from 'react';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#E4D4C0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8B4D24] block mb-2">
          Prueba social
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A1B0B] mb-8">
          La experiencia de quienes confían en Wayra Café
        </h2>

        {/* Space for corporate testimonial strictly marked as [POR CONFIRMAR] */}
        <div className="relative bg-[#F3ECE2] p-8 sm:p-12 rounded-2xl border border-[#E4D4C0] shadow-sm">
          <div className="w-12 h-12 mx-auto mb-4 text-[#8B4D24]/60 flex items-center justify-center">
            <Quote className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="inline-block px-3 py-1 bg-[#FAF7F2] border border-[#E4D4C0] rounded text-xs font-semibold text-[#8B4D24] uppercase tracking-wider mb-4">
              [POR CONFIRMAR]
            </div>
            
            <p className="font-serif text-lg sm:text-xl text-[#3A1B0B] italic mb-6 leading-relaxed">
              &ldquo;[POR CONFIRMAR: Espacio reservado para el testimonio de una empresa o agencia de turismo colaboradora sobre la puntualidad, el servicio de menaje y la calidad del café de especialidad de La Convención.]&rdquo;
            </p>

            <div className="border-t border-[#E4D4C0] pt-4 text-xs sm:text-sm text-[#785E4F]">
              <span className="font-semibold text-[#3A1B0B] block">[POR CONFIRMAR: Nombre del cliente / Cargo]</span>
              <span>[POR CONFIRMAR: Empresa o Agencia de Turismo en Cusco]</span>
            </div>
          </div>
        </div>

        {/* Pending confirmation notice for breakfast packages and delivery coverage */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="bg-[#FAF7F2] p-5 rounded-xl border border-dashed border-[#CEB496]">
            <span className="text-xs font-bold text-[#8B4D24] uppercase tracking-wider block mb-1">
              [POR CONFIRMAR] Paquetes de desayunos
            </span>
            <p className="text-xs sm:text-sm text-[#6F3918]">
              Las opciones específicas de bocadillos, panes artesanales y acompañamientos frescos se confirmarán antes de la publicación definitiva.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-5 rounded-xl border border-dashed border-[#CEB496]">
            <span className="text-xs font-bold text-[#8B4D24] uppercase tracking-wider block mb-1">
              [POR CONFIRMAR] Cobertura de delivery
            </span>
            <p className="text-xs sm:text-sm text-[#6F3918]">
              El perímetro exacto de entrega fuera del centro histórico de Cusco será especificado para eventos fuera del radio principal.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
