import React from 'react';
import { Coffee, Clock, ShieldCheck } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section id="propuesta" className="py-16 md:py-24 bg-[#F3ECE2] border-y border-[#E4D4C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Intro statement */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8B4D24] block mb-2">
            Nuestra propuesta de valor
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#3A1B0B] tracking-tight leading-snug mb-5">
            Llevamos la excelencia del café de especialidad de La Convención directamente a tu evento, con puntualidad garantizada y toda la logística resuelta.
          </h2>
          <p className="text-base sm:text-lg text-[#552912] leading-relaxed">
            Diseñado para empresas y agencias de turismo en Cusco que organizan reuniones, capacitaciones o eventos corporativos para grupos de 10 a 40 personas y buscan un servicio a la altura de sus invitados.
          </p>
        </div>

        {/* 3 Pillars addressing the core problem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#E4D4C0] text-[#8B4D24] flex items-center justify-center mb-6">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
              Adiós al café genérico
            </h3>
            <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
              Escapa de las soluciones convencionales e impersonales. Ofrece a tu equipo y clientes café de especialidad con perfil de taza memorable, tostado y molido en su punto justo.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#E4D4C0] text-[#8B4D24] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
              Puntualidad rigurosa
            </h3>
            <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
              Sabemos que la agenda de tu reunión no espera. Montamos el coffee break minutos antes del receso programado para que todo esté listo cuando tus invitados hagan una pausa.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#E4D4C0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#E4D4C0] text-[#8B4D24] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3A1B0B] mb-3">
              Cero enredos logísticos
            </h3>
            <p className="text-sm sm:text-base text-[#6F3918] leading-relaxed">
              Llevamos todo el menaje necesario, insumos y montaje para que tu equipo se concentre únicamente en los objetivos de la reunión o capacitación.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
