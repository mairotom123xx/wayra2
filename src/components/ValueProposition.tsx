import React from 'react';
import { Armchair, Layers, Tent, Sparkles, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section id="propuesta" className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Intro statement */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B3802A] block mb-2">
            Nuestros 4 Servicios Especializados
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-5">
            Puntualidad, limpieza y calidad garantizada en cada evento en Cusco.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            En Sumaq Alquileres Cusco nos concentramos exclusivamente en los 4 elementos indispensables para equipar y embellecer tu fiesta, boda o reunión corporativa con el estándar más alto.
          </p>
        </div>

        {/* The 4 core services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Service 1: Alquiler de Sillas */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#B3802A]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-5">
                <Armchair className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3802A] block mb-1">
                Servicio 01
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Alquiler de Sillas
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">
                Sillas vestidas y plásticas para eventos
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sillas ergonómicas, estables y limpias. Disponibles con elegantes fundas vestidas para matrimonios y galas, o en modelo plástico reforzado para reuniones y fiestas.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#B3802A]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Limpieza e inspección previa</span>
            </div>
          </div>

          {/* Service 2: Alquiler de Mesas */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#B3802A]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3802A] block mb-1">
                Servicio 02
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Alquiler de Mesas
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">
                Mesas redondas y tablones
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mesas redondas para banquetes y tablones rectangulares de gran capacidad. Estructuras sólidas, completamente desinfectadas y firmemente niveladas.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#B3802A]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Estructura firme y nivelada</span>
            </div>
          </div>

          {/* Service 3: Instalación de Toldos */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#B3802A]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-5">
                <Tent className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3802A] block mb-1">
                Servicio 03
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Instalación de Toldos
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">
                Toldos estructurales para eventos y fiestas
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Estructuras metálicas modulares con lonas blancas impermeables. Máxima seguridad y protección contra lluvia, sol y viento en cualquier espacio de Cusco.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#B3802A]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Montaje seguro y resistente</span>
            </div>
          </div>

          {/* Service 4: Decoración y Entelado */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#B3802A]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3802A] block mb-1">
                Servicio 04
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Decoración y Entelado
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">
                Arreglos y decoración profesional con telas
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Entelado artístico de techos, paredes y columnas con telas limpias y vaporosas. Diseños armoniosos que elevan la ambientación de cualquier evento.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#B3802A]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Telas impecables y planchadas</span>
            </div>
          </div>

        </div>

        {/* 3 Pillars: Puntualidad, Limpieza y Calidad en Cusco */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">
                Puntualidad en el montaje
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Instalamos todo con suficiente anticipación para que tu equipo o familia reciba a sus invitados sin ninguna prisa ni contratiempo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">
                Limpieza e higiene estricta
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Sillas, mesas, toldos y telas pasan por un exhaustivo proceso de lavado, revisión y desinfección antes de cada entrega en Cusco.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">
                Calidad y seguridad
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Estructuras metálicas firmes, fijaciones seguras para exteriores y mobiliario resistente pensado para la comodidad de tus asistentes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
