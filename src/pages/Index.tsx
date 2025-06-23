
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="portfolio-gradient min-h-screen relative">
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <PortfolioSection />
        <ContactSection />
      </div>
      
      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        <div className="floating-orb w-4 h-4 top-1/4 left-1/4 opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb w-6 h-6 top-3/4 left-1/3 opacity-20" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-8 h-8 top-1/2 right-1/4 opacity-25" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;
