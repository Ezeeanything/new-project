"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Plus, Asterisk } from "lucide-react";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A]/50 to-[#0A0A0A] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Top Corners */}
      <div className="absolute top-8 left-8">
        <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
          <Asterisk className="w-6 h-6 text-[#4169E1]" />
        </motion.div>
      </div>
      <div className="absolute top-8 right-8">
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <Plus className="w-8 h-8 text-[#4169E1]" />
        </motion.div>
      </div>

      {/* Main Center Content */}
      <motion.div 
        style={{ y, opacity }}
        className="flex-1 flex flex-col items-center justify-center relative z-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-12"
        >
          {/* Gradient Asterisk */}
          <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-white to-[#4169E1] blur-2xl opacity-20 rounded-full" />
             <Asterisk className="w-32 h-32 md:w-48 md:h-48 text-[#4169E1] opacity-90 mix-blend-screen" />
          </div>
        </motion.div>

        <div className="text-center flex flex-col items-center justify-center space-y-1 md:space-y-2 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space font-normal text-4xl md:text-6xl tracking-tight text-white lowercase"
          >
            convert visual
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-space font-bold text-4xl md:text-6xl tracking-[tight] md:tracking-[-0.04em] text-white lowercase"
          >
            to revenue.
          </motion.h2>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-gray-500 uppercase text-[10px] tracking-[0.2em] whitespace-nowrap">Discover more about us</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#4169E1]" />
        </motion.div>
      </motion.div>

      {/* Right Side Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 rotate-90 origin-right translate-x-1/2">
        <span className="uppercase text-xs tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer">Honors</span>
        <span className="text-white/30 text-xs text-center flex items-center justify-center rotate-[-90deg]">↓</span>
      </div>
    </section>
  );
}
