"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    quote: "EzeeAD delivered a world-class brand identity for our tech startup. Their punctuality and professionalism were truly top-notch.",
    name: "Tobi Emmanuel",
    title: "Founder, TechPay Nigeria",
    image: "/clients/tobi-emmanuel.png"
  },
  {
    rating: 5,
    quote: "Professional, creative, and incredibly reliable. They transformed our visual presence and actually deliver on what they promise.",
    name: "Blessing Amaka",
    title: "Director, Lagos Fashion House",
    image: "/clients/blessing-amaka.png"
  },
  {
    rating: 5,
    quote: "The most reliable branding agency in Lagos. They handled our complex project with extreme care and attention to detail.",
    name: "Ibrahim Suleiman",
    title: "CEO, CloudSync Africa",
    image: "/clients/ibrahim-suleiman.png"
  }
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F9F9F9] py-24 px-[clamp(24px,6vw,80px)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space font-black text-[#0A0A0A] text-[clamp(32px,4vw,48px)] uppercase tracking-[0.1em]"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-inter italic text-[#333333] text-lg leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                   {/* Fallback pattern if image is missing */}
                   <div className="absolute inset-0 bg-[#4169E1]/10 flex items-center justify-center font-space font-black text-[#4169E1]">
                     {t.name.charAt(0)}
                   </div>
                </div>
                <div>
                  <h4 className="font-space font-black text-[#0A0A0A] text-sm uppercase tracking-[0.1em]">
                    {t.name}
                  </h4>
                  <p className="font-inter text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-space font-black text-[#0A0A0A]/40 uppercase tracking-[0.2em] text-sm">
            Join 40+ businesses that chose EzeeAD
          </p>
        </motion.div>
      </div>
    </section>
  );
}
