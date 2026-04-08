"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const services = [
    {
      title: "BRAND IDENTITY",
      desc: "We build comprehensive visual ecosystems tailored for market dominance. Through strategic design, we ensure your brand commands attention and creates lasting impact.\n\nLocation: Lagos & Remote\nExperience: 5+ years",
    },
    {
      title: "UI / UX DESIGN",
      desc: "Creating high-conversion digital interfaces. We engineer digital products for exceptional usability and aesthetic dominance, ensuring your platform is both beautiful and functional.",
    },
    {
      title: "ART DIRECTION",
      desc: "Guiding the creative vision for campaigns, shoots, and long-term brand visual strategies to ensure a cohesive and premium output.",
    },
    {
      title: "MERCHANDISE",
      desc: "Physical brand manifestations. High-end apparel and merchandise design that turns your audience into walking billboards.",
    }
  ];

  return (
    <main className="bg-[#0b0c10] min-h-screen pt-32 selection:bg-[#4169E1] selection:text-white flex flex-col overflow-hidden">
      
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full pt-12 pb-24 relative">
        {/* Subtle Ezee Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#4169E1]/30 blur-[120px] rounded-[100%] pointer-events-none z-0" />
        
        <div className="relative z-10 w-full md:w-[90%] lg:w-[80%]">
          <h1 className="font-space font-light text-[clamp(40px,7vw,110px)] leading-[1] tracking-tighter uppercase text-[#FAFAFA] mb-12 mix-blend-screen">
            WE ARE THE TEAM OF <span className="font-bold">VISUAL AND MULTIVERSE</span> ART DESIGNERS
          </h1>
          <Link href="/contact" className="inline-flex items-center justify-center border border-white/40 rounded-full px-6 py-2 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0b0c10] transition-colors">
            Get in touch <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Giant Accordion Section */}
      <section className="w-full border-t border-white/20 flex flex-col relative z-10 pb-20">
        {services.map((svc, idx) => {
          const isOpen = activeAccordion === idx;
          return (
            <div 
              key={idx} 
              className="border-b border-white/20 overflow-hidden cursor-pointer group"
              onClick={() => setActiveAccordion(isOpen ? null : idx)}
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-start md:items-center py-4 md:py-8 transition-colors hover:bg-white/[0.02]">
                
                {/* Giant Numbering */}
                <div className="w-[45%] md:w-[50%] flex-shrink-0">
                   <h2 className={`font-space text-[120px] md:text-[240px] leading-[0.7] tracking-tighter transition-all duration-500 ease-in-out ${isOpen ? "text-white opacity-100" : "text-transparent bg-clip-text bg-white opacity-90 stroke-white"}`} style={isOpen ? {} : { WebkitTextStroke: "2px rgba(255,255,255,0.9)", color: "transparent" }}>
                     0{idx + 1}
                   </h2>
                </div>
                
                {/* Title and Content */}
                <div className="w-[55%] md:w-[50%] flex flex-col justify-center pl-4 md:pl-0 pt-4 md:pt-0">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="font-space font-medium text-xl md:text-4xl uppercase tracking-widest text-[#FAFAFA]">
                      {svc.title}
                    </h3>
                    <button className="text-white/50 group-hover:text-white transition-colors border border-white/20 rounded-full p-2 flex-shrink-0 ml-4">
                      {isOpen ? <Minus className="w-4 h-4 md:w-6 md:h-6" /> : <Plus className="w-4 h-4 md:w-6 md:h-6" />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-sm md:text-base font-inter font-light pt-6 md:pt-10 max-w-[500px] whitespace-pre-line leading-relaxed">
                          {svc.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Feature Block with Extracted Real Portfolio Images */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-8 w-full aspect-video md:aspect-[21/9] bg-[#111111] relative overflow-hidden group">
            <Image 
              src="/team_collaborating.png" 
              alt="EzeeAD Creative Team" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-[#4169E1]/10 mix-blend-overlay"></div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start text-white/70 font-light text-sm md:text-base leading-relaxed">
            <p className="mb-6">
              Our studio operates at the nexus of strategy and aesthetics. We are a collective of multidisciplinary creatives driven by a singular mission: to engineer transformative digital experiences that translate directly into business growth.
            </p>
            <div className="w-12 h-[1px] bg-[#4169E1]"></div>
          </div>
        </div>
      </section>

      {/* Extreme CTA */}
      <section className="w-full flex justify-center items-center py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#4169E1]/20 blur-[100px] rounded-[100%] pointer-events-none z-0" />
        
        <Link href="/contact" className="relative group cursor-pointer z-10 flex flex-col items-center">
          {/* Faux Hand-drawn circle using SVG */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <svg viewBox="0 0 400 150" className="w-[120%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[#FAFAFA]/40 stroke-[2] fill-transparent group-hover:stroke-[#4169E1] transition-colors duration-500" style={{ transformOrigin: 'center' }}>
               <path d="M 200, 20 C 350, 10 380, 50 350, 100 C 300, 140 100, 140 50, 100 C 20, 50 50, 10 200, 20" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="font-space font-light flex items-center gap-4 text-[clamp(40px,8vw,120px)] text-[#FAFAFA] tracking-tighter m-0 relative z-10">
            CONTACT US <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 text-white group-hover:-translate-y-4 group-hover:translate-x-4 transition-transform duration-500" />
          </h2>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
