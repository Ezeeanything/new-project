"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#4169E1] text-white py-[clamp(56px,8vw,96px)] px-[clamp(24px,6vw,80px)] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-black text-[clamp(48px,12vw,140px)] leading-[0.85] tracking-[-0.04em] uppercase mb-12 md:mb-16"
        >
          <span className="block text-[#0A0A0A]">WANT TO DO</span>
          <span className="block text-white">POWERFUL</span>
          <span className="block text-white">THINGS?</span>
        </motion.h2>

        <Link href="/contact">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ x: 10 }}
            className="bg-[#FAFAFA] text-[#0A0A0A] px-12 md:px-16 py-6 md:py-8 font-space font-black uppercase tracking-widest text-lg md:text-2xl flex items-center gap-4 hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors cursor-pointer rounded-none"
          >
            Get started <ArrowRight className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
          </motion.button>
        </Link>
      </div>
      
      {/* Structural bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
    </section>
  );
}
