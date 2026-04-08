"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const projects = [
    { title: "Chioma", category: "Luxury Brand Identity", image: "/projects/chioma.jpg" },
    { title: "Cowrywise Merch", category: "Apparel & Illustration", image: "/projects/cowrywise_new.jpg" },
    { title: "Bonki", category: "Super Seed Package", image: "/projects/bonki_new.jpg" },
    { title: "Ventics", category: "AI Platform Identity", image: "/projects/ventics.jpg" },
    { title: "Repay", category: "Fintech Branding", image: "/projects/repay_new.jpg" },
    { title: "Tash", category: "Brand System", image: "/projects/tash_new.png" },
  ];

  const handleNext = () => setCurrentIndex(p => Math.min(p + 1, projects.length - 1));
  const handlePrev = () => setCurrentIndex(p => Math.max(p - 1, 0));

  // Mathematical constraints explicitly mapped to recreate the provided dynamic stacked layout.
  const getLayoutStyles = (offset: number) => {
    switch (offset) {
      case 0:
        return { width: 340, height: 340, x: 0, y: -40, opacity: 1, zIndex: 30 };
      case 1:
        return { width: 280, height: 480, x: 340, y: 0, opacity: 1, zIndex: 20 };
      case -1:
        return { width: 280, height: 480, x: -340, y: 0, opacity: 1, zIndex: 20 };
      case 2:
        return { width: 220, height: 280, x: 620, y: -100, opacity: 1, zIndex: 10 };
      case -2:
        return { width: 220, height: 280, x: -620, y: -100, opacity: 1, zIndex: 10 };
      case 3:
        return { width: 220, height: 160, x: 620, y: 140, opacity: 1, zIndex: 10 };
      case -3:
        return { width: 220, height: 160, x: -620, y: 140, opacity: 1, zIndex: 10 };
      default:
        return { width: 220, height: 160, x: offset > 0 ? 800 : -800, y: offset % 2 === 0 ? -100 : 140, opacity: 0, zIndex: 0 };
    }
  };

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 selection:bg-[#4169E1] selection:text-white overflow-hidden">
      
      {/* === HERO SECTION: FLAT STAGGERED CAROUSEL === */}
      <section className="px-0 relative w-full pt-8 pb-32 flex flex-col items-center border-b border-white/10">
        
        <div className="px-6 md:px-12 max-w-[1400px] w-full mx-auto relative z-20 mb-8 text-center flex flex-col items-center">
          <h1 className="font-space font-black text-[clamp(40px,8vw,100px)] leading-[0.9] tracking-tighter uppercase text-white mb-6">
            THE ARCHIVE.
          </h1>
          <p className="text-gray-400 font-inter text-lg md:text-xl max-w-2xl text-center">
            Explore our curated universe of bleeding-edge design and immersive digital experiences.
          </p>
        </div>

        {/* Dynamic Frame Layout */}
        <div className="relative w-[100vw] h-[400px] md:h-[600px] flex justify-center items-center overflow-visible select-none mt-10">
           {/* Responsive mathematical scaling wrapper */}
           <div className="relative w-full h-full flex items-center justify-center scale-[0.4] sm:scale-[0.55] md:scale-[0.75] xl:scale-100 origin-center transition-transform duration-500">
             
             {projects.map((project, index) => {
               const offset = index - currentIndex;
               const styles = getLayoutStyles(offset);
               const isCenter = offset === 0;

               return (
                 <motion.div
                   key={index}
                   className="absolute overflow-hidden cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-[32px] md:rounded-[40px] border border-white/5"
                   initial={false}
                   animate={{
                     width: styles.width,
                     height: styles.height,
                     x: styles.x,
                     y: styles.y,
                     opacity: styles.opacity,
                     zIndex: styles.zIndex,
                     filter: isCenter ? "brightness(1) grayscale(0)" : "brightness(0.4) grayscale(0.2)"
                   }}
                   transition={{ type: "spring", stiffness: 220, damping: 28, mass: 1 }}
                   onClick={() => setCurrentIndex(index)}
                 >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover pointer-events-none transition-transform duration-[1.5s]" 
                      style={{ transform: isCenter ? "scale(1.05)" : "scale(1)" }}
                      priority={isCenter}
                    />
                 </motion.div>
               )
             })}

             {/* Emulated "Explore Collections" button locked to the bottom of the center card */}
             <motion.a 
                href="#all-projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute z-40 bg-[#111111] hover:bg-[#4169E1] hover:scale-105 text-white px-8 py-5 rounded-full font-inter font-semibold uppercase tracking-widest text-sm transition-all flex items-center shadow-2xl border border-white/10"
                style={{ top: "50%", marginTop: "160px" }} 
             >
                Explore Archive <ArrowRight className="w-5 h-5 ml-3 -rotate-45" />
             </motion.a>

           </div>
        </div>

        {/* Simple Interactive Controls below bounding box */}
        <div className="flex items-center gap-8 mt-16 md:mt-10 z-20">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:bg-[#4169E1] hover:border-[#4169E1] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={currentIndex === projects.length - 1}
            className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:bg-[#4169E1] hover:border-[#4169E1] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* === PROJECT SHOWCASE SECTION (BEHANCE LINKS) === */}
      <section id="all-projects" className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto py-24 md:py-48 scroll-mt-24">
        <div className="flex justify-between items-end mb-20 border-b border-white/20 pb-8">
           <h2 className="font-space font-black text-4xl md:text-6xl text-white uppercase tracking-tighter">
             ALL <span className="text-[#4169E1]">PROJECTS.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, idx) => (
            <motion.a 
              href="https://www.behance.net/odafesunday"
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-[#111111] relative overflow-hidden mb-6 rounded-[20px] md:rounded-[32px]">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay pointing to Behance */}
                <div className="absolute inset-0 bg-[#4169E1]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                   <div className="flex flex-col items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-4">
                       <ArrowRight className="text-white w-8 h-8 -rotate-45" />
                     </div>
                     <span className="text-white font-inter font-bold tracking-widest uppercase text-sm">View Case Study</span>
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-space font-black text-3xl md:text-5xl uppercase tracking-tighter mb-2 group-hover:text-[#4169E1] transition-colors text-white">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
