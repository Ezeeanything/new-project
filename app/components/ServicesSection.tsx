"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Palette, Code, Megaphone, Lightbulb, Handshake, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    name: string;
    icon: any;
    desc: string;
    price: string;
    details: string[];
  };
  idx: number;
}

function ServiceCard({ service, idx }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[400px] perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full text-left transition-all duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#121212] p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col items-start overflow-hidden shadow-2xl group/card">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(65,105,225,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/0 to-[#4169E1]/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 w-full">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover/card:bg-[#4169E1]/10 group-hover/card:border-[#4169E1]/30 transition-all duration-500">
              <service.icon className="w-8 h-8 text-[#4169E1] group-hover/card:scale-110 transition-transform duration-500" />
            </div>
            
            <h3 className="font-space font-bold text-3xl md:text-4xl mb-4 tracking-tight text-white group-hover/card:text-[#4169E1] transition-colors duration-500">
              {service.name}
            </h3>
            
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-6 block w-full">
              {service.desc}
            </p>
          </div>

          <div className="relative z-10 w-full flex items-center justify-between mt-auto pt-6 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Estimated Cost</span>
              <span className="font-space text-lg text-white font-bold">
                {service.price}
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/card:bg-[#4169E1] group-hover/card:border-[#4169E1] transition-all duration-500">
              <ArrowRight className="w-5 h-5 text-white/40 group-hover/card:text-white group-hover/card:translate-x-0.5 transition-all" />
            </div>
          </div>
        </div>

        {/* BACK SIDE (Information Deep Dive) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-[#4169E1] p-8 md:p-10 rounded-3xl border border-white/20 flex flex-col shadow-2xl overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Visual Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />
          
          <div className="relative z-10 mb-8 pb-6 border-b border-white/20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-black block mb-2">Service Breakdown</span>
            <h3 className="font-space font-black text-2xl uppercase tracking-tighter text-white">
              {service.name}
            </h3>
          </div>

          <div className="relative z-10 flex-grow">
            <ul className="flex flex-col gap-5">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4 text-white text-[15px] font-medium leading-snug group/item">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shrink-0 group-hover/item:bg-white transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-white group-hover/item:text-[#4169E1] transition-colors duration-300" />
                  </div>
                  <span className="opacity-90 group-hover/item:opacity-100 transition-opacity">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-auto pt-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Investment</span>
                <span className="text-2xl font-space font-black text-white">{service.price}</span>
              </div>
              <Link 
                href="/contact" 
                className="bg-white text-[#4169E1] px-6 py-4 rounded-xl font-space font-black uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-lg shadow-black/10"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    { 
      name: "Brand Identity", 
      icon: Star, 
      desc: "Building iconic visual systems for global dominance", 
      price: "From $5k",
      details: ["Strategy-driven logo design", "Comprehensive Brand Guidelines", "Typography & Color Ecosystem", "Cultural Positioning Audit"]
    },
    { 
      name: "UI/UX Design", 
      icon: Palette, 
      desc: "Digital products engineered to convert and scale", 
      price: "From $8k",
      details: ["High-Fidelity Wireframing", "Interactive Prototyping", "User Behavior Analytics", "Conversion Rate Optimization"]
    },
    { 
      name: "Web Development", 
      icon: Code, 
      desc: "High-performance tech architecture & platforms", 
      price: "From $10k",
      details: ["Next.js & React Frameworks", "CMS Integration (Headless)", "SEO Tech Infrastructure", "Scalable AWS Deployment"]
    },
    { 
      name: "Digital Marketing", 
      icon: Megaphone, 
      desc: "Data-driven growth & content acquisition", 
      price: "From $3k/mo",
      details: ["Performance Ad Campaigns", "Social Content Strategy", "Growth Loop Architecture", "Weekly Analytics Reporting"]
    },
    { 
      name: "Consultation", 
      icon: Lightbulb, 
      desc: "Strategic design direction for ambitious founders", 
      price: "$500/hr",
      details: ["Market Gap Analysis", "Brand Positioning Sprints", "Creative Direction", "Product Launch Strategy"]
    },
    { 
      name: "Partnership", 
      icon: Handshake, 
      desc: "Your dedicated creative team on retainer", 
      price: "Custom",
      details: ["Unlimited Creative Support", "Priority Response Time", "Strategic Weekly Syncs", "Agile Execution Pipeline"]
    },
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] text-white py-[clamp(56px,8vw,96px)] px-[clamp(24px,6vw,80px)] w-full relative z-10 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto text-center relative">
         
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-black text-6xl md:text-[84px] leading-tight mb-8"
        >
          What We Do
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-inter text-xl text-[#CCCCCC] max-w-[900px] mx-auto leading-relaxed mb-16 font-light"
        >
          As a premium design agency, we transform Nigerian businesses through strategic brand identity, stunning UI/UX, and performance web development.
        </motion.p>

        {/* Services Grid with 3D Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-20">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>

      </div>

      {/* Persistence global style for Perspective */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
