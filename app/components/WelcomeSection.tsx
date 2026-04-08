"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelcomeSection() {
  const [loopCount, setLoopCount] = useState(0);

  const pills = [
    { 
      text: "Design is", 
      bg: "bg-[#3374F5]", 
      textCol: "text-white", 
      rotate: "-rotate-[12deg] md:-rotate-[20deg]",
      pos: "top-[8%] md:top-[5%] left-[5%] md:left-[10%] z-10"
    },
    { 
      text: "not decoration", 
      bg: "bg-[#0A0A0A]", 
      textCol: "text-white", 
      rotate: "rotate-[4deg] md:rotate-[6deg]",
      pos: "top-[32%] md:top-[30%] right-[5%] md:right-[5%] z-20"
    },
    { 
      text: "it's direction", 
      bg: "bg-[#D6FF79]", 
      textCol: "text-[#0A0A0A]", 
      rotate: "-rotate-[2deg] md:-rotate-[2deg]",
      pos: "top-[58%] md:top-[55%] left-[0%] md:left-[5%] z-30"
    },
    { 
      text: "With purpose", 
      bg: "bg-[#FF7324]", 
      textCol: "text-[#0A0A0A]", 
      rotate: "-rotate-[8deg] md:-rotate-[12deg]",
      pos: "top-[84%] md:top-[80%] right-[0%] md:right-[15%] z-40"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoopCount((prev) => prev + 1);
    }, 6000); // 6 seconds loop: enough time to drop, hold, and fall
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#FAFAFA] text-[#0A0A0A] py-24 md:py-48 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mb-16 md:mb-24 lg:mb-32"
        >
          <h2 className="font-space font-black text-[12vw] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-[0.8] tracking-[-0.04em] uppercase text-[#4169E1]">
            WHAT DESIGN<br />MEANS TO US
          </h2>
        </motion.div>

        {/* Transparent Constraint Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[3/4] md:aspect-[21/9] relative bg-transparent flex items-center justify-center p-0 md:p-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={loopCount}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.3 }
                },
                exit: {
                  transition: { staggerChildren: 0.1, staggerDirection: -1 }
                }
              }}
              className="relative w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] h-full"
            >
              {pills.map((pill, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { y: -600, opacity: 0, scale: 0.9 },
                    visible: { 
                      y: 0, 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        type: "spring", 
                        bounce: 0.35, 
                        duration: 1.2 
                      } 
                    },
                    exit: { 
                      y: 600, 
                      opacity: 0, 
                      transition: { 
                        ease: "easeIn", 
                        duration: 0.6 
                      } 
                    }
                  }}
                  className={`absolute ${pill.pos} ${pill.rotate} ${pill.bg} ${pill.textCol} px-6 py-3 md:px-16 md:py-8 lg:px-20 lg:py-10 rounded-full flex items-center justify-center transition-transform will-change-transform shadow-2xl md:shadow-none`}
                >
                  <span className="font-inter font-bold text-xl md:text-5xl lg:text-7xl xl:text-[80px] tracking-tight whitespace-nowrap leading-none pb-1 md:pb-2 lg:pb-3">
                    {pill.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>


        
      </div>
    </section>
  );
}
