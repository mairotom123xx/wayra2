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
    <section id="como-funciona" className="py-20 md:py-24 bg-[#F3ECE2] border-t border-[#E4D4C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8B4D24] block mb-2">
            Proceso ágil y transparente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3A1B0B] tracking-tight mb-4">
            Cómo funciona el servicio para tu evento
          </h2>
          <p className="text-base sm:text-lg text-[#552912]">
            Tres pasos simples para asegurar un coffee break memorable sin complicaciones logísticas.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="relative bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#8B4D24]">01</span>
                <div className="w-10 h-10 rounded-lg bg-[#F3ECE2] text-[#8B4D24] flex items-center justify-center">
                  <SendHorizontal className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
                Envía tu solicitud
              </h3>
              <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
                Completa el formulario en 1 minuto indicando el nombre de tu empresa, la fecha tentativa del evento y el número de asistentes (grupos de 10 a 40 personas).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E4D4C0] text-xs font-semibold text-[#8B4D24]">
              Paso 1 de 3
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#8B4D24]">02</span>
                <div className="w-10 h-10 rounded-lg bg-[#F3ECE2] text-[#8B4D24] flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
                Afinamos la propuesta
              </h3>
              <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
                Te enviamos una cotización clara y personalizada ajustada al horario exacto de tu reunión, con la selección de café de La Convención y las opciones de desayunos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E4D4C0] text-xs font-semibold text-[#8B4D24]">
              Paso 2 de 3
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-[#8B4D24]">03</span>
                <div className="w-10 h-10 rounded-lg bg-[#F3ECE2] text-[#8B4D24] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
                Disfruta de tu evento
              </h3>
              <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
                Llegamos con puntualidad estricta al lugar de tu evento en Cusco, realizamos el montaje con menaje completo y dejamos todo impecable para tu receso corporativo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E4D4C0] text-xs font-semibold text-[#8B4D24]">
              Paso 3 de 3
            </div>
          </div>

        </div>

        {/* Action row with CTA */}
        <div className="text-center bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#E4D4C0] max-w-3xl mx-auto shadow-sm">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1B0B] mb-3">
            ¿Tienes un evento corporativo en agenda?
          </h3>
          <p className="text-sm sm:text-base text-[#552912] mb-6">
            Asegura la fecha de tu reunión y eleva la experiencia de tus invitados con café de especialidad.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] active:bg-[#552912] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4D24]"
          >
            Solicitar cotización para mi evento
          </button>
        </div>

      </div>
    </section>
  );
};
