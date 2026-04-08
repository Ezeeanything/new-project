"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      name: "WK Homes",
      category: "Interior Branding",
      image: "/projects/wkhomes.png"
    },
    {
      name: "Ventics AI",
      category: "Identity Ecosystem",
      image: "/projects/ventics_home.jpg"
    },
    {
      name: "WK Homes Tower",
      category: "Physical Signage",
      image: "/projects/wkhomes_corner.jpg"
    }
  ];

  return (
    <section id="work" className="bg-[#0A0A0A] text-[#FAFAFA] py-12 md:py-32 px-6 md:px-12 lg:px-20 w-full relative z-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12 md:mb-20"
        >
          <h2 className="font-space font-black text-4xl md:text-[84px] leading-[0.9] tracking-tighter uppercase text-white">
            OUR WORK.
          </h2>
          <Link href="/portfolio" className="hidden md:flex bg-[#4169E1] text-white px-8 py-4 font-space font-bold uppercase tracking-wider items-center gap-3 hover:bg-white hover:text-[#0A0A0A] transition-colors cursor-pointer">
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Horizontal scroll container (Dynasty Style) */}
        <div className="flex overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory gap-6 md:gap-8 w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-[600px] lg:min-w-[700px] flex-shrink-0 snap-center group cursor-pointer"
            >
              {/* Force fully sharp corners, no clip-paths, no rounding */}
              <div className="w-full aspect-[4/3] bg-zinc-900 relative overflow-hidden mb-6 rounded-none">
                <Image 
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-space font-black text-3xl md:text-5xl uppercase tracking-tighter mb-2 group-hover:text-[#4169E1] transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/portfolio" className="md:hidden w-full bg-[#4169E1] text-white px-8 py-4 font-space font-bold uppercase tracking-wider flex justify-center items-center gap-3 mt-8">
            View All <ArrowRight className="w-5 h-5" />
        </Link>

      </div>
    </section>
  );
}
