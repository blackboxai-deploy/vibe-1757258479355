"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Electrical Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Lightning Bolts */}
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-yellow-400 opacity-60 animate-pulse transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-blue-400 opacity-80 animate-pulse transform rotate-45 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-28 bg-yellow-300 opacity-70 animate-pulse transform rotate-12 animation-delay-2000"></div>
        
        {/* Electrical Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400 rounded-full blur-sm animate-ping animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-ping animation-delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-ping animation-delay-2500"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Company Name with Electric Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span 
            className="bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent animate-pulse"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            YM
          </span>
          <span className="mx-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ENGINEERING
          </span>
          
          {/* Electric Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-blue-400/20 to-yellow-300/20 blur-xl animate-pulse"></div>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional Industrial Maintenance & Automation Services
        </p>

        {/* Services Highlight */}
        <div className="mb-12 text-lg text-gray-400 max-w-2xl mx-auto">
          <p>Specializing in preventive maintenance, PLC programming, electrical installations, and emergency support for industrial machinery</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
          >
            View Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
          </button>
        </div>

        {/* Emergency Contact Highlight */}
        <div className="mt-12 p-4 bg-red-900/20 border border-red-500/30 rounded-lg max-w-md mx-auto">
          <p className="text-red-400 font-semibold animate-pulse">⚡ 24/7 Emergency Call-Out Service</p>
          <p className="text-red-300 text-sm mt-1">Rapid response for downtime-critical clients</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2500 { animation-delay: 2.5s; }
      `}</style>
    </section>
  );
}