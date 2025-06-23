
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb w-32 h-32 top-20 right-20 opacity-70"></div>
      <div className="floating-orb w-20 h-20 top-1/2 right-1/3 opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <div className="z-10 flex-1">
        <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          Ronaldi
        </h1>
        <div className="text-xl lg:text-2xl text-gray-300 font-light tracking-wide">
          <p>MOBILE DEVELOPER</p>
          <p>UI UX DESIGNER</p>
        </div>
      </div>
      
      <div className="hidden lg:block relative">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-80 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
