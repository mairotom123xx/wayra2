import React from 'react';
import { IMAGES } from '../assets/images';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8B4D24] block mb-2">
            Lo que gana tu evento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1B0B] tracking-tight mb-4">
            Tres razones concretas para confiar en Wayra Café
          </h2>
          <p className="text-base sm:text-lg text-[#552912]">
            Cada detalle está pensado para transmitir profesionalismo a tus clientes, socios y colaboradores.
          </p>
        </div>

        {/* The 3 concrete benefits paired with visuals */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* Benefit 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs sm:text-sm font-bold text-[#8B4D24] uppercase tracking-wider mb-2 block">
                01. Identidad y calidad superior
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A1B0B] mb-4">
                Café de origen con historia
              </h3>
              <p className="text-base sm:text-lg text-[#552912] leading-relaxed mb-6">
                Servimos café de especialidad de productores de La Convención, con trazabilidad garantizada en cada taza. Tus asistentes degustarán un café de altura con notas sensoriales auténticas, convirtiendo una pausa rutinaria en una experiencia memorable.
              </p>
              <div className="p-4 bg-[#F3ECE2] border-l-4 border-[#8B4D24] rounded-r-lg text-xs sm:text-sm text-[#552912]">
                <strong className="font-semibold text-[#3A1B0B]">El beneficio para tu empresa:</strong> Diferénciate con un catering con relato y orgullo cusqueño que deja una impresión duradera en tus clientes y aliados.
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-[#E4D4C0] shadow-md bg-[#F3ECE2]">
                <img
                  src={IMAGES.beansOrigin.src}
                  alt={IMAGES.beansOrigin.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[360px] object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-1">
              <div className="rounded-xl overflow-hidden border border-[#E4D4C0] shadow-md bg-[#F3ECE2]">
                <img
                  src={IMAGES.corporateEvent.src}
                  alt={IMAGES.corporateEvent.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[360px] object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-2">
              <span className="text-xs sm:text-sm font-bold text-[#8B4D24] uppercase tracking-wider mb-2 block">
                02. Tranquilidad para tu equipo
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A1B0B] mb-4">
                Logística impecable
              </h3>
              <p className="text-base sm:text-lg text-[#552912] leading-relaxed mb-6">
                Olvídate de los imprevistos; entregamos todo el menaje necesario y cumplimos estrictamente con el horario de tu agenda. Todo llega listo, con presentación ordenada y limpia, sin retrasar tus sesiones de capacitación o negociaciones.
              </p>
              <div className="p-4 bg-[#F3ECE2] border-l-4 border-[#8B4D24] rounded-r-lg text-xs sm:text-sm text-[#552912]">
                <strong className="font-semibold text-[#3A1B0B]">El beneficio para tu empresa:</strong> Cero estrés de coordinación operativa. Tu agenda se ejecuta a tiempo y con menaje completo incluido.
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs sm:text-sm font-bold text-[#8B4D24] uppercase tracking-wider mb-2 block">
                03. Respuesta y cercanía inmediata
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A1B0B] mb-4">
                A pasos de la Plaza de Armas
              </h3>
              <p className="text-base sm:text-lg text-[#552912] leading-relaxed mb-6">
                Ubicación estratégica en el corazón de Cusco, facilitando la coordinación y entrega rápida para tu equipo o invitados. Estar cerca significa menor tiempo de traslado y máxima frescura en cada entrega.
              </p>
              <div className="p-4 bg-[#F3ECE2] border-l-4 border-[#8B4D24] rounded-r-lg text-xs sm:text-sm text-[#552912]">
                <strong className="font-semibold text-[#3A1B0B]">El beneficio para tu empresa:</strong> Máxima agilidad para eventos en hoteles, salas de directorio y locales del centro histórico de Cusco.
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-[#E4D4C0] shadow-md bg-[#F3ECE2]">
                <img
                  src={IMAGES.cuscoLocation.src}
                  alt={IMAGES.cuscoLocation.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[360px] object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
