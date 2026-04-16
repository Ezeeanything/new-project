"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Wheels and Keys",
    type: "Brand Identity",
    image: "/projects/wheels_and_keys_realistic.jpg",
    link: "/portfolio/wheels-and-keys"
  },
  {
    title: "Ventics",
    type: "AI Platform Design",
    image: "/projects/ventics_realistic.jpg",
    link: "/portfolio/ventics"
  },
  {
    title: "Primedoor",
    type: "Logo Design",
    image: "/projects/primedoor_realistic.jpg",
    link: "/portfolio/primedoor"
  }
];

export default function PortfolioPreview() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-[clamp(24px,6vw,80px)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-space font-black text-white text-[clamp(40px,5vw,64px)] leading-none uppercase tracking-tighter">
              Recent <br className="hidden md:block" /> Work
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-3 text-white/60 hover:text-white font-space font-bold uppercase tracking-widest text-sm transition-colors"
            >
              See All Projects 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <motion.span 
                  className="text-[#4169E1] font-space font-black text-xs uppercase tracking-[0.3em] mb-2 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  {project.type}
                </motion.span>
                <h3 className="text-white font-space font-black text-3xl mb-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {project.title}
                </h3>
                <Link 
                  href={project.link}
                  className="flex items-center gap-2 text-white/70 hover:text-white font-space font-bold uppercase tracking-widest text-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Glow Edge */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-white/70 font-space font-black uppercase tracking-widest text-sm"
          >
            See All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
