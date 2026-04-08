"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 pb-0 selection:bg-[#4169E1] selection:text-white">
      
      {/* Intro Section */}
      <section id="all-projects" className="py-[clamp(56px,8vw,112px)] px-[clamp(24px,6vw,80px)] max-w-[1400px] mx-auto scroll-mt-24 border-b border-white/10">
        <h1 className="font-space font-black text-6xl md:text-[84px] leading-[0.95] tracking-tighter uppercase text-white mb-20 md:w-[90%]">
          WE ARE <span className="text-[#4169E1]">ARCHITECTS</span> OF VISUAL REVENUE.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sunday's Portrait - Moved to top on mobile */}
          <div className="lg:col-span-5 relative order-first mb-16 lg:mb-0">
            <div className="relative aspect-[4/5] w-full bg-zinc-900 overflow-hidden grayscale contrast-125">
              <Image 
                src="/sunday-odafe.png" 
                alt="Sunday Odafe - Founder of EzeeAD" 
                fill 
                className="object-cover object-center scale-105" 
                priority
              />
            </div>
            {/* Subtle floating badge or tagline */}
            <div className="absolute -bottom-6 -left-6 bg-[#4169E1] text-white p-8 md:p-10 hidden md:block z-20">
              <span className="font-space font-black text-2xl uppercase tracking-tighter block leading-none">SUNDAY<br />ODAFE</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold mt-2 block opacity-70">FOUNDER & LEAD DESIGNER</span>
            </div>
          </div>

          {/* Sunday's Story */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <span className="uppercase text-xs tracking-[0.3em] font-bold text-[#4169E1]">The Leadership</span>
            </div>
            
            <div className="flex flex-col gap-8 text-[#FAFAFA] text-xl md:text-2xl font-light leading-relaxed font-inter">
              <p className="font-space font-bold text-white text-3xl md:text-4xl mb-2">
                Sunday Odafe founded EzeeAD after witnessing too many brilliant Nigerian businesses lose to mediocre competitors simply because they looked unprofessional.
              </p>
              
              <p className="text-gray-400">
                As a multi-disciplinary designer specializing in brand identity, UI/UX, and digital design, Sunday saw entrepreneurs pouring everything into their products and services, only to be judged and dismissed in three seconds because their visual identity didn't match the quality of their work.
              </p>

              <p className="text-gray-400">
                EzeeAD was born from a simple mission: to give Nigerian businesses the professional brand presence they deserve, one that commands respect, builds trust, and drives revenue. From his base in Lagos, Sunday and the EzeeAD team have helped clients increase their online presence by an average of 300%+, secure funding, and charge premium prices with confidence.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-[clamp(56px,8vw,112px)] px-[clamp(24px,6vw,80px)] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "INTENTIONAL MINIMALISM", 
              desc: "Every pixel must serve a purpose. We strip away the unnecessary until only pure impact remains." 
            },
            { 
              title: "STRATEGIC POSITIONING", 
              desc: "We research your market thoroughly, ensuring your new visual identity bypasses the competition." 
            },
            { 
              title: "FLAWLESS EXECUTION", 
              desc: "From digital interfaces to physical merchandise, our production quality is relentlessly uncompromising." 
            }
          ].map((val, i) => (
            <div key={i} className="border-t border-white/20 pt-8">
              <span className="text-[#4169E1] font-bold block mb-4">0{i + 1}</span>
              <h3 className="font-space font-black text-2xl uppercase mb-4">{val.title}</h3>
              <p className="text-gray-400">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
