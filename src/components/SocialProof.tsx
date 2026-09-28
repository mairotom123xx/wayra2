import React from 'react';
import { Quote, Sparkles, MapPin, Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B3802A] block mb-2">
          Testimonio y confianza
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          La experiencia de quienes confían en Sumaq Alquileres Cusco
        </h2>

        {/* Real Testimonial card */}
        <div className="relative bg-[#F9FAFB] p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm text-left sm:text-center">
          <div className="flex items-center justify-center gap-1 text-[#B3802A] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#B3802A]" />
            ))}
          </div>

          <div className="w-12 h-12 mx-auto mb-4 text-[#B3802A]/80 flex items-center justify-center">
            <Quote className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-lg sm:text-xl text-gray-800 italic mb-6 leading-relaxed">
              &ldquo;Trabajar con Sumaq Alquileres Cusco en nuestros eventos y bodas en Cusco y el Valle Sagrado ha sido una tranquilidad total. La puntualidad en el montaje de los toldos estructurales es impecable: siempre están listos horas antes del itinerario, y la limpieza de las sillas vestidas y mesas redondas es insuperable, con mantelería y acabados perfectamente cuidados. Son aliados clave para cualquier organizador exigente.&rdquo;
            </p>

            <div className="border-t border-gray-200 pt-4 text-xs sm:text-sm text-gray-500">
              <span className="font-semibold text-gray-900 block text-base">Renato Valdivia Choque</span>
              <span className="text-gray-600 font-medium">Director de Producción y Event Planner</span>
              <span className="block text-[#B3802A] font-medium text-xs mt-0.5">Cusco Imperial Weddings & Corporate Events</span>
            </div>
          </div>
        </div>

        {/* Information Cards: Catálogo y acabados / Cobertura y flete */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          
          {/* Card 1: Catálogo y acabados */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:border-[#B3802A]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#B3802A] uppercase tracking-wider block mb-1">
                Catálogo y acabados
              </span>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                Estado impecable y limpieza certificada
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Todas nuestras sillas vestidas, sillas plásticas, mesas redondas, tablones y telas de entelado se encuentran en impecable estado de mantenimiento y limpieza. Cada pieza es lavada, desinfectada y minuciosamente revisada antes de salir hacia tu evento.
              </p>
            </div>
          </div>

          {/* Card 2: Cobertura y flete */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:border-[#B3802A]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-[#FBF8F1] border border-[#EBD9B4] text-[#B3802A] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#B3802A] uppercase tracking-wider block mb-1">
                Cobertura y flete
              </span>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-2">
                Transporte, montaje y desmontaje integral
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Realizamos el servicio completo de transporte, montaje puntual y desmontaje en todo Cusco ciudad, el Valle Sagrado (Urubamba, Ollantaytambo, Pisac, Maras, Yucay) y zonas aledañas, adaptándonos a los accesos y horarios de cada local.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
