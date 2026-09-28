import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#292524]">
      {/* Semantic Header */}
      <Header />

      {/* Semantic Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Value Proposition & Target Needs */}
        <ValueProposition />

        {/* 3 Concrete Benefits */}
        <Benefits />

        {/* 3 Steps How It Works */}
        <HowItWorks />

        {/* Social Proof (Corporate Testimonial reserved & marked [POR CONFIRMAR]) */}
        <SocialProof />

        {/* Primary Conversion Lead Form */}
        <QuoteForm onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
