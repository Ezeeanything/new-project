"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, Asterisk } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function WelcomeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="w-full bg-[#FAFAFA] text-[#0A0A0A] py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#4169E1] font-bold">(2)</span>
            <span className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Discover more about us</span>
          </div>
          
          <h2 className="font-space font-black text-6xl md:text-[96px] leading-[1.1] tracking-[-0.02em] mb-8">
            Welcome to<br />our World!
          </h2>
          
          <p className="font-space italic text-2xl md:text-[32px] text-gray-700 max-w-[700px] mx-auto font-light">
            We help our clients to realize the full potential of their brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          {/* Left Column - Image */}
          <div className="lg:col-span-7 relative h-[600px] overflow-hidden group">
            <motion.div style={{ y: imgY, height: "120%" }} className="w-full relative -top-[10%]">
              <Image 
                src="/studio_interior.png"
                alt="Studio Interior"
                fill
                className="object-cover object-center w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            {/* Quote Box Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -left-4 md:-left-8 md:-bottom-12 bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-[600px] z-10"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Asterisk className="w-24 h-24 text-[#4169E1]" />
              </div>
              <p className="font-space font-medium text-xl md:text-2xl leading-[1.6] relative z-10">
                &quot;We believe that the visuals should be both timeless and meaningful, where each visuals convert into sales&quot;
              </p>
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-600 text-base leading-[1.8] mb-6">
                As multidisciplinary architects and designers, we consider the synthesis of aesthetics and function to be at the heart of our work.
              </p>
              <p className="text-gray-600 text-base leading-[1.8] mb-6">
                We collaborate closely with other experts in our field, including brand and graphic designers, photographers, artists, product designers and our professional partners.
              </p>
              <p className="text-gray-600 text-base leading-[1.8]">
                EzeeAD is a design studio specializing in innovative solutions for Nigerian businesses in the tech, finance, and e-commerce sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-[#4169E1]"
            >
              <Asterisk className="absolute -left-[11px] top-1 w-5 h-5 text-[#4169E1] bg-[#FAFAFA]" />
              <p className="text-[#0A0A0A] font-medium text-base leading-[1.8] mb-4">
                EzeeAD was founded in Lagos by creative professionals.
              </p>
              <p className="text-gray-600 text-base leading-[1.8] mb-4">
                Our studio&apos;s unique blend of contemporary brand strategy and classic design principles is balanced with exceptional attention to detail and an appreciation for the context of the project.
              </p>
              <p className="text-gray-600 text-base leading-[1.8]">
                Every project is unique and requires a different strategy, which leads to the creation of highly functional brands that are in line with the specific needs of our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 mt-8"
            >
              <span className="text-[#4169E1] font-bold text-sm">(2/4)</span>
              <span className="text-sm font-semibold text-gray-800">That&apos;s why we offer a full range of Services.</span>
              <a href="#services" className="text-sm font-bold border-b-2 border-[#0A0A0A] pb-0.5 hover:text-[#4169E1] hover:border-[#4169E1] transition-colors ml-1 flex items-center gap-1 group">
                Discover <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Accents */}
      <Plus className="absolute top-20 right-[15%] w-6 h-6 text-[#4169E1]/30" />
      <Plus className="absolute bottom-40 right-10 w-8 h-8 text-[#4169E1]/30" />
      <Asterisk className="absolute top-1/2 left-8 w-6 h-6 text-[#4169E1]/20" />
    </section>
  );
}
