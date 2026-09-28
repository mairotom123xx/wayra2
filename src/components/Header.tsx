import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4D4C0]/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#3A1B0B] hover:text-[#6F3918] transition-colors focus-visible:ring-2 focus-visible:ring-[#8B4D24] rounded-sm"
          >
            Wayra Café
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#552912]">
            <button
              onClick={() => scrollToSection('propuesta')}
              className="hover:text-[#8B4D24] transition-colors cursor-pointer py-1"
            >
              Propuesta
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-[#8B4D24] transition-colors cursor-pointer py-1"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-[#8B4D24] transition-colors cursor-pointer py-1"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="hover:text-[#8B4D24] transition-colors cursor-pointer py-1"
            >
              Contacto
            </button>
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] active:bg-[#552912] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4D24]"
            >
              Solicitar cotización para mi evento
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#552912] hover:text-[#3A1B0B] focus-visible:ring-2 focus-visible:ring-[#8B4D24] rounded-lg"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E4D4C0] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#552912]">
            <button
              onClick={() => scrollToSection('propuesta')}
              className="text-left py-2 hover:text-[#8B4D24]"
            >
              Propuesta
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left py-2 hover:text-[#8B4D24]"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-left py-2 hover:text-[#8B4D24]"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="text-left py-2 hover:text-[#8B4D24]"
            >
              Contacto
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#8B4D24] hover:bg-[#6F3918] rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Solicitar cotización para mi evento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
