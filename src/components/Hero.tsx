import React from 'react';
import { IMAGES } from '../assets/images';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('cotizacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed contextual metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#8B4D24] mb-4">
              <span>Catering Corporativo</span>
              <span aria-hidden="true">·</span>
              <span>Cusco</span>
              <span aria-hidden="true">·</span>
              <span>10 a 40 personas</span>
            </div>

            {/* The ONLY H1 of the page */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3A1B0B] leading-[1.15] text-balance mb-6">
              Haz que tus reuniones en Cusco destaquen con café de especialidad.
            </h1>

            {/* Subtitle from brief */}
            <p className="text-lg sm:text-xl text-[#552912] leading-relaxed max-w-2xl mb-8">
              Elevamos el estándar de tus eventos corporativos con café trazable, desayunos frescos y un servicio puntual que cuida cada detalle.
            </p>

            {/* Main conversion CTA button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] active:bg-[#552912] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4D24]"
              >
                Solicitar cotización para mi evento
              </button>

              <span className="text-xs sm:text-sm text-[#785E4F] self-center sm:self-auto">
                Respuesta en menos de 24 horas hábiles
              </span>
            </div>

            {/* Trust bullet strip (unboxed, clean typography) */}
            <div className="mt-10 pt-8 border-t border-[#E4D4C0] grid grid-cols-3 gap-4 text-xs sm:text-sm text-[#552912]">
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-[#3A1B0B]">Origen 100%</span>
                <span className="text-[#785E4F]">La Convención, Cusco</span>
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-[#3A1B0B]">10 a 40</span>
                <span className="text-[#785E4F]">Asistentes por reunión</span>
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-[#3A1B0B]">Puntualidad</span>
                <span className="text-[#785E4F]">Garantizada en tu agenda</span>
              </div>
            </div>
          </div>

          {/* Hero visual asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#E4D4C0] shadow-xl bg-[#F3ECE2]">
              <img
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/10">
                <span className="font-semibold block">Café de especialidad en tu reunión</span>
                <span className="text-white/80">Extracción fresca y servicio con menaje incluido</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
