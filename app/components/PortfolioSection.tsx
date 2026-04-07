"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      name: "Wheels and Keys",
      category: "Complete Brand Identity",
      client: "Wheels and Keys",
      result: "90% increase in online presence",
      image: "/portfolio_placeholder.png"
    },
    {
      name: "Ventics",
      category: "Brand Identity Design",
      client: "Ventics Inc.",
      result: "Venture funding secured",
      image: "/portfolio_placeholder.png"
    },
    {
      name: "Primedoor",
      category: "Logo Design",
      client: "Primedoor Real Estate",
      result: "Professional market positioning",
      image: "/portfolio_placeholder.png"
    }
  ];

  return (
    <section className="bg-[#FAFAFA] text-[#0A0A0A] py-32 px-4 md:px-8 w-full relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-2 mb-8">
          <span className="text-[#4169E1] font-bold">(5)</span>
          <span className="uppercase text-xs tracking-widest font-semibold text-gray-500">Our Work</span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-black text-6xl md:text-[84px] leading-[1.1] mb-20"
        >
          Our Work
        </motion.h2>

        <div className="flex flex-col gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                {/* Image Side */}
                <div className="lg:col-span-8 relative aspect-video overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100">
                  <Image 
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0A0A0A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-space font-bold uppercase tracking-widest text-lg border-b border-white pb-1 flex items-center gap-2">
                      View Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#4169E1] font-semibold text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-space font-black text-4xl md:text-5xl mb-6">
                    {project.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="text-sm text-gray-500 mb-1 lg:mb-2 uppercase tracking-wide">Result</div>
                    <p className="font-space font-semibold text-lg md:text-xl text-[#0A0A0A] border-l-2 border-[#4169E1] pl-4">
                      "{project.result}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="bg-[#0A0A0A] text-white px-12 py-5 rounded-full font-space font-bold uppercase tracking-wider flex items-center gap-3 mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all cursor-pointer">
            View all works <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
