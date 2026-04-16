"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "What We Do", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Work with us", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="fixed inset-0 z-40 bg-[#0A0A0A] text-[#FAFAFA] flex flex-col justify-center items-center overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#4169E1_0%,_transparent_50%)]" />

          <nav className="flex flex-col gap-6 md:gap-10 text-center relative z-10 w-full px-6">
            {links.map((link, idx) => {
              const isActive = pathname === link.path;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <Link 
                    href={link.path}
                    onClick={onClose}
                    className="group relative inline-block"
                  >
                    <span 
                      className={`font-space font-black text-5xl md:text-[80px] lg:text-[110px] uppercase tracking-tighter transition-colors duration-500 block ${isActive ? "text-[#4169E1]" : "text-white group-hover:text-[#4169E1]"}`}
                    >
                      {link.name}
                    </span>
                    {/* Hover line indicator */}
                    <span className="absolute -bottom-2 md:-bottom-4 left-0 w-0 h-1 md:h-2 bg-[#4169E1] transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-12 font-space tracking-widest text-white/50 uppercase text-sm"
          >
            EZEEAD STUDIO © 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
