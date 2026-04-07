"use client";

import { motion } from "framer-motion";

export default function ClientMarquee() {
  const clients = [
    "Wheels and Keys", "Bonki", "Ventics", "WK Homes", "Primedoor", "Banga",
    "Wheels and Keys", "Bonki", "Ventics", "WK Homes", "Primedoor", "Banga"
  ];

  return (
    <section className="h-[120px] bg-[#0A0A0A] w-full flex items-center overflow-hidden border-y border-white/10 group">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap group-hover:[animation-play-state:paused] min-w-max"
      >
        {clients.map((client, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-space font-bold text-3xl text-white uppercase hover:scale-105 hover:text-[#4169E1] transition-all cursor-default">
              {client}
            </span>
            <span className="text-[#4169E1] text-2xl">•</span>
          </div>
        ))}
         {/* Duplicate for seamless infinite scrolling */}
         {clients.map((client, index) => (
           <div key={`dup-${index}`} className="flex items-center gap-12">
             <span className="font-space font-bold text-3xl text-white uppercase hover:scale-105 hover:text-[#4169E1] transition-all cursor-default">
               {client}
             </span>
             <span className="text-[#4169E1] text-2xl">•</span>
           </div>
         ))}
      </motion.div>
    </section>
  );
}
