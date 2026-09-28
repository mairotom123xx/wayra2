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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Contextual metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#B3802A] mb-4">
              <span>Sillas</span>
              <span aria-hidden="true">·</span>
              <span>Mesas</span>
              <span aria-hidden="true">·</span>
              <span>Toldos</span>
              <span aria-hidden="true">·</span>
              <span>Entelado</span>
              <span aria-hidden="true">·</span>
              <span>Cusco</span>
            </div>

            {/* The ONLY H1 of the page */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] text-balance mb-6">
              Haz que tus fiestas y eventos en Cusco destaquen con mobiliario impecable y montaje puntual.
            </h1>

            {/* Subtitle focused strictly on the 4 services */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              Especialistas en alquiler de sillas vestidas y plásticas, mesas redondas y tablones, instalación de toldos estructurales y decoración con entelado profesional en Cusco.
            </p>

            {/* Main conversion CTA button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-[#B3802A] hover:bg-[#93641B] active:bg-[#744E17] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B3802A]"
              >
                Solicitar cotización para mi evento
              </button>

              <span className="text-xs sm:text-sm text-gray-500 self-center sm:self-auto">
                Respuesta rápida en menos de 24 horas hábiles
              </span>
            </div>

            {/* Trust bullet strip: Puntualidad, Limpieza, Calidad */}
            <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-xs sm:text-sm text-gray-600">
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-gray-900">Limpieza</span>
                <span className="text-gray-500">Mobiliario y telas 100% limpios</span>
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-gray-900">Calidad</span>
                <span className="text-gray-500">Estructuras firmes y seguras</span>
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-gray-900">Puntualidad</span>
                <span className="text-gray-500">Montaje listo antes de tu hora</span>
              </div>
            </div>
          </div>

          {/* Hero visual asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100">
              <img
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm bg-black/50 backdrop-blur-md p-3.5 rounded-lg border border-white/10">
                <span className="font-semibold block text-white">Sumaq Alquileres Cusco</span>
                <span className="text-white/90">Sillas vestidas y plásticas, mesas, toldos estructurales y entelado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
