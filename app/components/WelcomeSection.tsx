"use client";

import { motion } from "framer-motion";

export default function WelcomeSection() {
  const pills = [
    { 
      text: "Design is", 
      bg: "bg-[#4169E1]", 
      textCol: "text-white", 
      rotate: 5,
      offset: "translate-x-[15%] md:translate-x-[35%]",
      padding: "px-10 py-5 md:px-[40px] md:py-[20px]",
      delay: 0,
      zIndex: 40 // Top
    },
    { 
      text: "not decoration", 
      bg: "bg-[#0A0A0A]", 
      textCol: "text-white", 
      rotate: -3,
      offset: "-translate-x-[10%] md:-translate-x-[28%]",
      padding: "px-12 py-6 md:px-[50px] md:py-[24px]",
      delay: 0.3,
      zIndex: 30
    },
    { 
      text: "it's direction", 
      bg: "bg-[#90EE90]", 
      textCol: "text-black", 
      rotate: 4,
      offset: "translate-x-[5%] md:translate-x-[15%]",
      padding: "px-11 py-5 md:px-[45px] md:py-[20px]",
      delay: 0.6,
      zIndex: 20
    },
    { 
      text: "with purpose", 
      bg: "bg-[#FF8C42]", 
      textCol: "text-black", 
      rotate: -5,
      offset: "-translate-x-[5%] md:-translate-x-[10%]",
      padding: "px-12 py-6 md:px-[48px] md:py-[22px]",
      delay: 0.9,
      zIndex: 10 // Bottom
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] text-[#0A0A0A] py-[clamp(56px,8vw,96px)] px-[clamp(24px,6vw,80px)] relative flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mb-10 md:mb-16"
        >
          <h2 className="font-space font-black text-[10vw] md:text-[80px] lg:text-[110px] xl:text-[130px] leading-[0.8] tracking-[-0.04em] uppercase text-[#4169E1]">
            WHAT DESIGN<br />MEANS TO US
          </h2>
        </motion.div>

        {/* Falling Bricks Pills Area - Natural Flow (De-clustered) */}
        <div className="w-full relative flex flex-col items-center gap-0 mt-8 md:mt-16">
          {pills.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ y: -500, opacity: 0, rotate: 0 }}
              whileInView={{ 
                y: 0, 
                opacity: 1, 
                rotate: pill.rotate 
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                ease: [0.68, -0.55, 0.265, 1.55],
                duration: 0.8,
                delay: pill.delay
              }}
              className={`relative ${pill.bg} ${pill.textCol} ${pill.padding} ${pill.offset} rounded-[50px] shadow-2xl flex items-center justify-center -mt-3 md:-mt-6 first:mt-0 z-[1]`}
              style={{ zIndex: pill.zIndex }}
            >
              {/* Landing "Shake/Wobble" Nested Animation */}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: [0, -2, 2, 0] }}
                viewport={{ once: true }}
                transition={{ 
                  delay: pill.delay + 0.7,
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center"
              >
                <span className="font-space font-bold text-xl md:text-5xl lg:text-7xl xl:text-[80px] tracking-tight whitespace-nowrap leading-none uppercase">
                  {pill.text}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
