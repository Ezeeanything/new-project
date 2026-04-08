"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Palette, Code, Megaphone, Lightbulb, Handshake } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { name: "Brand Identity", icon: Star, desc: "Building iconic visual systems", price: "From $5k" },
    { name: "UI/UX Design", icon: Palette, desc: "Digital products that convert", price: "From $8k" },
    { name: "Web Development", icon: Code, desc: "High-performance platforms", price: "From $10k" },
    { name: "Digital Marketing", icon: Megaphone, desc: "Data-driven growth", price: "From $3k/mo" },
    { name: "Consultation", icon: Lightbulb, desc: "Strategic design direction", price: "$500/hr" },
    { name: "Design Partnership", icon: Handshake, desc: "Dedicated creative team", price: "Custom" },
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] text-white py-[clamp(56px,8vw,96px)] px-[clamp(24px,6vw,80px)] w-full relative z-10">
      <div className="max-w-[1400px] mx-auto text-center">
         
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
          As a premium design agency, we transform Nigerian businesses through strategic brand identity, stunning UI/UX, powerful web development, and revenue-driven digital marketing—ensuring your brand commands respect in every space that matters.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-[#4169E1] text-white px-12 py-5 rounded-full font-space font-bold uppercase tracking-wider flex items-center gap-3 mx-auto shadow-[0_10px_30px_rgba(65,105,225,0.3)] hover:shadow-[0_20px_40px_rgba(65,105,225,0.4)] transition-all cursor-pointer"
        >
          View our services <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-[#1A1A1A] p-8 md:p-10 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(65,105,225,0.15)] transition-all group border border-white/5 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/0 to-[#4169E1]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="relative z-10 w-8 h-8 text-[#4169E1] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="relative z-10 font-space font-bold text-2xl mb-3">{service.name}</h3>
              <p className="relative z-10 text-gray-400 font-light mb-8 leading-relaxed max-w-[250px]">{service.desc}</p>
              <div className="relative z-10 font-inter text-sm text-gray-500 font-medium tracking-wide uppercase">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
