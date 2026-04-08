"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      accent: "",
      lines: [
        { text: "WHERE", color: "text-[#FAFAFA]" },
        { text: "VISUALS", color: "text-[#FAFAFA]" },
        { text: "MEET REVENUE.", color: "text-[#0A0A0A]" },
      ]
    },
    {
      accent: "",
      lines: [
        { text: "YOUR", color: "text-[#FAFAFA]" },
        { text: "BRAND", color: "text-[#FAFAFA]" },
        { text: "EVOLVED.", color: "text-[#0A0A0A]" },
      ]
    },
    {
      accent: "",
      lines: [
        { text: "DO", color: "text-[#FAFAFA]" },
        { text: "BIGGER", color: "text-[#FAFAFA]" },
        { text: "THINGS.", color: "text-[#0A0A0A]" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100svh] w-full bg-[#4169E1] text-[#FAFAFA] flex flex-col justify-between p-6 md:p-12 overflow-hidden py-20 md:py-12">
      
      {/* Main Massive Typography Area */}
      <main className="flex-1 flex flex-col justify-center items-center w-full z-10 relative pt-12 md:pt-32 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} className="w-full flex flex-col justify-center items-center">
            
            {slides[currentSlide].accent && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="font-space font-bold text-[#0A0A0A] text-lg md:text-3xl mb-4 text-center"
              >
                {slides[currentSlide].accent}
              </motion.div>
            )}
            
            {/* Clamped font sizes to guarantee it never overlaps UI limits */}
            <h1 className="font-space font-black text-[clamp(56px,12vw,140px)] leading-[0.85] tracking-[-0.04em] uppercase text-center mx-auto">
              {slides[currentSlide].lines.map((line, index) => (
                <span key={index} className="block pb-2 md:pb-4">
                  <motion.span 
                    className={`block ${line.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.15, 
                      ease: "easeOut"
                    }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Information Layer */}
      <footer className="w-full relative z-10 flex flex-col md:flex-row justify-center items-center border-b border-white/20 pb-6 mt-8 gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block font-space font-bold text-sm tracking-wide uppercase text-white/90"
        >
        </motion.div>
        
        {/* Pagination Dots - Centered */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group py-2 px-1 cursor-pointer"
            >
              <div 
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  currentSlide === index ? "bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </footer>
      
      {/* Background Subtle Gradient overlay to ensure depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
