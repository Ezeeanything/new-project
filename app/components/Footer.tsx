"use client";

import { Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Asterisk } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-8 px-4 md:px-8 w-full border-t border-white/10 z-10 relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Asterisk className="w-8 h-8 text-[#4169E1]" />
              <span className="font-space font-bold text-3xl tracking-tight">EzeeAD</span>
            </div>
            <p className="font-space italic text-gray-500 mb-8 font-light">
              Where Visuals Meet Revenue
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Linkedin, Twitter, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#4169E1] hover:border-[#4169E1] transition-colors group cursor-pointer">
                  <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="font-space font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Navigation</h4>
            <ul className="space-y-4 font-inter text-gray-300">
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="font-space font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-4 font-inter text-gray-300">
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col">
            <h4 className="font-space font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-4 font-inter text-gray-300 mb-8">
              <li><a href="mailto:info@ezeead.com" className="hover:text-[#4169E1] transition-colors">info@ezeead.com</a></li>
              <li><a href="tel:+2348129620479" className="hover:text-[#4169E1] transition-colors">+234 812 962 0479</a></li>
              <li>Lagos, Nigeria</li>
            </ul>

            <h4 className="font-space font-bold text-sm mb-4 uppercase tracking-wider text-gray-400">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-transparent border border-white/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors"
                />
                <button 
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4169E1] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded hover:bg-[#3458C4] transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              <span className="text-gray-500 text-xs italic">Get design tips & insights</span>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-inter text-sm text-gray-500">
          <div>© 2026 EzeeAD. All rights reserved.</div>
          <div className="hidden md:block">Crafted with excellence in Lagos, Nigeria</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
