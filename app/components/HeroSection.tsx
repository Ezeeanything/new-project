"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100svh] w-full bg-[#0A0A0A] flex flex-col justify-center items-center py-20 px-[clamp(24px,6vw,80px)] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#4169E1]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#4169E1]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center gap-8"
      >
        {/* HEADLINE */}
        <motion.h1 
          variants={itemVariants}
          className="font-space font-black text-white text-[clamp(48px,8vw,72px)] leading-[1.1] tracking-tight max-w-[900px]"
        >
          Transform Your Brand. <br />
          <span className="text-[#4169E1]">Drive Revenue.</span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p 
          variants={itemVariants}
          className="font-inter text-[#CCCCCC] text-[clamp(18px,2vw,24px)] font-light max-w-[800px] leading-relaxed"
        >
          Premium design agency helping Nigerian businesses increase online presence by <span className="text-white font-medium">300%+</span> through strategic brand identity, UI/UX, and web development.
        </motion.p>

        {/* VALUE PROPOSITIONS */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#4169E1]" />
            <span className="font-space font-bold text-lg">
              <AnimatedCounter value={47} suffix="+" /> Projects Delivered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#4169E1]" />
            <span className="font-space font-bold text-lg">
              <AnimatedCounter value={100} suffix="%" /> Client Satisfaction
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#4169E1]" />
            <span className="font-space font-bold text-lg">
              Average <AnimatedCounter value={300} suffix="%" /> ROI
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto"
        >
          <Link 
            href="/portfolio" 
            className="group relative w-full sm:w-auto px-10 py-5 bg-[#4169E1] text-white font-space font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#4169E1]/20 flex items-center justify-center gap-2"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-space font-bold rounded-full transition-all hover:bg-white/5 hover:border-white/40 active:scale-95 flex items-center justify-center"
          >
            Work with us
          </Link>
        </motion.div>

      </motion.div>

      {/* Scroll Progress Indicator (Optional but nice) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
