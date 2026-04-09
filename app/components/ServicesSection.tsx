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
        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#1A1A1A] p-8 md:p-10 rounded-2xl border border-white/15 flex flex-col justify-between overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/0 to-[#4169E1]/5 opacity-30 group-hover:opacity-100 transition-opacity" />
          
          <div>
            <service.icon className="relative z-10 w-10 h-10 text-[#4169E1] mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="relative z-10 font-space font-bold text-3xl md:text-3xl mb-3 tracking-tight text-white">{service.name}</h3>
            <p className="relative z-10 text-gray-400 font-light mb-8 leading-relaxed max-w-[280px]">{service.desc}</p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-auto">
            <span className="font-inter text-sm text-gray-500 font-medium tracking-wide uppercase">
              {service.price}
            </span>
            <span className="text-white/20 group-hover:text-[#4169E1] transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>

        {/* BACK SIDE (Information Deep Dive) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-[#4169E1] p-8 md:p-10 rounded-2xl border border-white/20 flex flex-col justify-between shadow-2xl overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
          </div>

          <div>
            <h3 className="relative z-10 font-space font-black text-2xl uppercase tracking-tighter text-white mb-6 border-b border-white/20 pb-4">
              {service.name} Overview
            </h3>
            <ul className="relative z-10 flex flex-col gap-4">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm font-medium leading-tight">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-auto pt-6 flex flex-col gap-4">
            <div className="flex items-end gap-2 text-white">
              <span className="text-xs uppercase tracking-widest opacity-70 mb-1">Starts From</span>
              <span className="text-3xl font-space font-black leading-none">{service.price.split(' ')[1] || service.price}</span>
            </div>
            
            <Link href="/contact" className="w-full bg-white text-[#4169E1] py-4 rounded-xl font-space font-black uppercase tracking-widest text-center hover:bg-[#0A0A0A] hover:text-white transition-all transform active:scale-95 text-xs">
              Secure Project Slot
            </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
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
