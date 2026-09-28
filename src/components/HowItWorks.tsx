import React from 'react';
import { SendHorizontal, ClipboardCheck, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('cotizacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B3802A] block mb-2">
            Proceso ágil y transparente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Cómo funciona el alquiler para tu evento
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Tres pasos simples para asegurar el mobiliario, toldos y entelado ideal sin complicaciones.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between hover:border-[#B3802A]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#B3802A]">01</span>
                <div className="w-10 h-10 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center">
                  <SendHorizontal className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                Envía tu solicitud
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Completa el formulario en 1 minuto con la fecha de tu evento, número estimado de invitados y los productos requeridos (sillas vestidas o plásticas, mesas, toldos estructurales o entelado).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold text-[#B3802A]">
              Paso 1 de 3
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between hover:border-[#B3802A]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#B3802A]">02</span>
                <div className="w-10 h-10 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                Recibe tu propuesta a medida
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Te enviamos una cotización detallada con la cantidad exacta de mesas, sillas, medidas de toldo y entelado, costos transparentes de transporte y el horario garantizado de montaje en Cusco.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold text-[#B3802A]">
              Paso 2 de 3
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between hover:border-[#B3802A]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#B3802A]">03</span>
                <div className="w-10 h-10 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                Montaje y disfrute total
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nuestro personal traslada, monta y deja todo listo con horas de anticipación a tu fiesta. Al concluir tu evento, nos encargamos del desmontaje y recojo rápido y ordenado.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-xs font-semibold text-[#B3802A]">
              Paso 3 de 3
            </div>
          </div>

        </div>

        {/* Action row with CTA */}
        <div className="text-center bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 max-w-3xl mx-auto shadow-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            ¿Planeando una fiesta, boda o evento en Cusco?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Asegura el equipamiento y mobiliario con anticipación para tu fecha especial.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-[#B3802A] hover:bg-[#93641B] active:bg-[#744E17] rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B3802A]"
          >
            Solicitar cotización para mi evento
          </button>
        </div>

      </div>
    </section>
  );
};
