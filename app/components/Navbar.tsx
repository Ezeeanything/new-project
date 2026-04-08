"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 px-[clamp(24px,6vw,80px)] transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4' : 'bg-transparent pt-6 md:pt-12'}`}>
        
        <Link href="/" className="relative w-[150px] h-[50px] pointer-events-auto cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          <Image src="/ezeead-logo.png" alt="EzeeAD" fill className="object-contain object-left" priority />
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 p-2 group overflow-hidden pointer-events-auto cursor-pointer focus:outline-none z-50 bg-black/20 rounded-md md:bg-transparent"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <div className="relative w-8 h-8">
               <span className="absolute top-1/2 left-0 w-8 h-1 bg-white block rotate-45 transition-transform duration-300"></span>
               <span className="absolute top-1/2 left-0 w-8 h-1 bg-white block -rotate-45 transition-transform duration-300"></span>
            </div>
          ) : (
            <>
              <span className="w-8 h-1 bg-white block group-hover:w-6 transition-all duration-300"></span>
              <span className="w-8 h-1 bg-white block"></span>
              <span className="w-8 h-1 bg-white block group-hover:w-6 transition-all duration-300"></span>
            </>
          )}
        </button>
      </header>
      
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
