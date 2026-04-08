"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientMarquee() {
  const clients = [
    { name: "WK Homes", logo: "/clients/wk_homes_logo.png" },
    { name: "Sistysis", logo: "/clients/sistysis_logo.png" },
    { name: "Wheels and Keys", logo: "/clients/wheels_and_keys_logo.png" },
    { name: "Primedoor", logo: "/clients/primedoor_logo.png" },
    { name: "Ventics", logo: "/clients/ventics_logo.png" },
    { name: "Banga", logo: "/clients/banga_logo.png" },
    { name: "Chioma", logo: "/clients/chioma_logo.png" },
  ];

  return (
    <section className="bg-[#FAFAFA] text-[#0A0A0A] w-full flex items-center border-y border-gray-200 min-h-[80px] md:min-h-[100px] py-4 md:py-6">
      <div className="flex-1 overflow-hidden flex items-center w-full relative">
        {/* Gradients for smooth fade in/out on scroll edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap pl-8 w-max"
        >
          {/* Loop Array multiple times to ensure continuous seamless scroll */}
          {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer px-4">
               <div className="relative h-8 md:h-12 w-[120px] md:w-[200px]">
                 <Image 
                   src={client.logo} 
                   alt={`${client.name} Logo`} 
                   fill 
                   className="object-contain filter brightness-0" 
                 />
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
