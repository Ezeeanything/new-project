"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#4169E1] text-white py-32 md:py-40 px-4 w-full relative overflow-hidden z-10">
      
      {/* Background Animated Gradient / Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-white/30 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-black text-6xl md:text-[96px] leading-[1.05] tracking-[-0.02em] mb-8"
        >
          Want to Elevate<br />Your Brand?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-inter text-2xl text-white/80 max-w-[600px] mb-12 font-light"
        >
          Let's build something extraordinary together
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="bg-white text-[#4169E1] px-14 py-5 rounded-full font-space font-bold uppercase tracking-widest text-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all cursor-pointer"
        >
          Get started <ArrowRight className="w-5 h-5 flex-shrink-0" />
        </motion.button>
      </div>
    </section>
  );
}
