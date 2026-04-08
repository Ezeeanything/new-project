"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out quart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOut * value));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [value, duration]);

  return <div ref={ref}>{count}</div>;
};

export default function RevenueSection() {
  return (
    <section id="revenue" className="bg-[#FAFAFA] text-[#0A0A0A] py-[clamp(56px,8vw,112px)] px-[clamp(24px,6vw,80px)] w-full relative z-10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-2 mb-12">
          <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-[#4169E1]">WHAT REVENUE MEANS TO US</span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space font-black text-6xl md:text-[84px] leading-[1.1] tracking-[-0.02em] mb-20 max-w-[800px]"
        >
          What Revenue<br />Means To Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column Image */}
          <div className="relative h-[500px] md:h-[600px] w-full rounded-tr-[120px] overflow-hidden group shadow-2xl">
            <Image 
              src="/team_collaborating.png"
              alt="Design Team Collaborating"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark Protective Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 md:opacity-100" />
            
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-8 md:bottom-12 left-6 md:left-12 font-space font-bold text-3xl md:text-5xl text-white leading-[1.2] drop-shadow-2xl z-10 pr-6"
            >
              and we really do<br />convert visuals<br />into revenue
            </motion.h3>
          </div>

          {/* Right Column Stats Grid */}
          <div className="flex flex-col justify-center gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 md:p-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="font-space font-black text-6xl md:text-[84px] text-[#4169E1] leading-none mb-4 flex">
                <Counter value={300} />%<span className="text-[#4169E1]">+</span>
              </div>
              <p className="text-gray-600 font-medium text-lg">Average increase in online presence</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="font-space font-black text-5xl md:text-6xl text-[#0A0A0A] leading-none mb-4 flex">
                  <Counter value={100} duration={1.5} />%
                </div>
                <p className="text-gray-500 font-medium h-[48px]">Client satisfaction rate</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="font-space font-black text-5xl md:text-6xl text-[#0A0A0A] leading-none mb-4 flex">
                  <Counter value={47} duration={2.5} /><span className="text-[#4169E1]">+</span>
                </div>
                <p className="text-gray-500 font-medium h-[48px]">Projects delivered across Nigeria</p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
