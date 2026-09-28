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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 hover:text-[#B3802A] transition-colors focus-visible:ring-2 focus-visible:ring-[#B3802A] rounded-sm"
          >
            Sumaq Alquileres Cusco
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button
              onClick={() => scrollToSection('propuesta')}
              className="hover:text-[#B3802A] transition-colors cursor-pointer py-1"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-[#B3802A] transition-colors cursor-pointer py-1"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="hover:text-[#B3802A] transition-colors cursor-pointer py-1"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="hover:text-[#B3802A] transition-colors cursor-pointer py-1"
            >
              Cotización
            </button>
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B3802A] hover:bg-[#93641B] active:bg-[#744E17] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B3802A]"
            >
              Solicitar cotización para mi evento
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#B3802A] rounded-lg"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-base font-medium text-gray-700">
            <button
              onClick={() => scrollToSection('propuesta')}
              className="text-left py-2 hover:text-[#B3802A]"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-left py-2 hover:text-[#B3802A]"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-left py-2 hover:text-[#B3802A]"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="text-left py-2 hover:text-[#B3802A]"
            >
              Cotización
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('cotizacion')}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#B3802A] hover:bg-[#93641B] rounded-lg shadow-sm"
            >
              Solicitar cotización para mi evento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
