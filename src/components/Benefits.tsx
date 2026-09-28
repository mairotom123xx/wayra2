import React from 'react';
import { IMAGES } from '../assets/images';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B3802A] block mb-2">
            Nuestros compromisos fundamentales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Tres razones para confiar en Sumaq Alquileres Cusco
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Puntualidad, limpieza y calidad asegurada en sillas, mesas, toldos estructurales y entelado para que disfrutes de tu evento sin preocupaciones.
          </p>
        </div>

        {/* The 3 concrete benefits paired with visuals */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* Benefit 1: Limpieza e imagen impecable */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs sm:text-sm font-bold text-[#B3802A] uppercase tracking-wider mb-2 block">
                01. Limpieza rigurosa
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Mobiliario y telas 100% limpios y cuidados
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Cada silla vestida, silla plástica, mesa y tela de entelado es inspeccionada, lavada y desinfectada minuciosamente antes de cada entrega. Te garantizamos fundas blancas impecables, superficies de mesas sin manchas y telas planchadas listas para lucir en tu celebración.
              </p>
              <div className="p-4 bg-gray-50 border-l-4 border-[#B3802A] rounded-r-lg text-xs sm:text-sm text-gray-700">
                <strong className="font-semibold text-gray-900">El beneficio para tu evento:</strong> Espacios pulcros y elegantes que transmiten respeto y distinción a tus invitados desde el primer instante.
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                <img
                  src={IMAGES.sillasYMesas.src}
                  alt={IMAGES.sillasYMesas.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[360px] object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Benefit 2: Calidad y resistencia estructural */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-1">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                <img
                  src={IMAGES.toldosEstructurales.src}
                  alt={IMAGES.toldosEstructurales.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[360px] object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-2">
              <span className="text-xs sm:text-sm font-bold text-[#B3802A] uppercase tracking-wider mb-2 block">
                02. Calidad estructural
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Toldos estructurales seguros y mobiliario resistente
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Nuestros toldos cuentan con estructuras metálicas firmes y lonas impermeables de primera línea, diseñadas para brindar máxima protección contra la lluvia, el sol y las corrientes de aire en Cusco. Las mesas y sillas ofrecen firmeza y estabilidad en todo momento.
              </p>
              <div className="p-4 bg-gray-50 border-l-4 border-[#B3802A] rounded-r-lg text-xs sm:text-sm text-gray-700">
                <strong className="font-semibold text-gray-900">El beneficio para tu evento:</strong> Seguridad y confort total en cualquier local campestre, jardín o espacio abierto de la región.
              </div>
            </div>
          </div>

          {/* Benefit 3: Puntualidad estricta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs sm:text-sm font-bold text-[#B3802A] uppercase tracking-wider mb-2 block">
                03. Puntualidad en Cusco
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Montaje completado con horas de anticipación
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Sabemos que el horario de tu evento no puede esperar. Trasladamos las sillas, mesas y toldos con puntualidad rigurosa, realizamos el entelado con maestría y dejamos todo listo mucho antes del inicio. Al terminar, retiramos el material de forma ordenada.
              </p>
              <div className="p-4 bg-gray-50 border-l-4 border-[#B3802A] rounded-r-lg text-xs sm:text-sm text-gray-700">
                <strong className="font-semibold text-gray-900">El beneficio para tu evento:</strong> Cero estrés de coordinación operativa. Tu agenda transcurre en calma con cada detalle en su lugar.
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                <img
                  src={IMAGES.decoracionEntelado.src}
                  alt={IMAGES.decoracionEntelado.alt}
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
