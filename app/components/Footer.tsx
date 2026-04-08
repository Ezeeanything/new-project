"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const InstagramIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const FacebookIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
// Basic globe/web icon to represent Behance to avoid complex SVG paths
const BehanceIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" x2="22" y1="12" y2="12"/></svg>;

export default function Footer() {
  const [state, handleSubmit] = useForm('mjgpzaeg');
  const socials = [
    { Icon: InstagramIcon, url: "https://www.instagram.com/_ezeead?igsh=MW1hN3V3Z3Q5eXhjcw==" },
    { Icon: LinkedinIcon, url: "https://www.linkedin.com/company/ezeeanything-design/?viewAsMember=true" },
    { Icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=100087513810722" },
    { Icon: BehanceIcon, url: "https://www.behance.net/odafesunday" }
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white py-[clamp(56px,8vw,112px)] px-[clamp(24px,6vw,80px)] w-full border-t border-white/10 z-10 relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="mb-6 relative w-[180px] h-[55px]">
              <Image src="/ezeead-logo-new.png" alt="EzeeAD Logo" fill className="object-contain object-left" />
            </div>
            <p className="font-space italic text-gray-500 mb-8 font-light">
              Where Visuals Meet Revenue
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, i) => {
                const { Icon } = social;
                return (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#4169E1] hover:border-[#4169E1] transition-colors group cursor-pointer">
                    <Icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="font-space font-bold text-lg mb-6 uppercase tracking-wider text-gray-400">Navigation</h4>
            <ul className="space-y-4 font-inter text-gray-300">
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-[#4169E1] transition-colors">Contact Us</a></li>
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
            {state.succeeded ? (
              <div className="flex items-center gap-3 text-[#25D366] bg-[#25D366]/10 px-4 py-3 rounded-md border border-[#25D366]/20">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium font-inter">Successfully subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative flex flex-col">
                  <div className="relative w-full">
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Email address" 
                      className="w-full bg-transparent border border-white/20 rounded-md py-3 pl-4 pr-24 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors disabled:opacity-50"
                      disabled={state.submitting}
                    />
                    <button 
                      type="submit"
                      disabled={state.submitting}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4169E1] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded hover:bg-[#3458C4] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? '...' : 'Subscribe'}
                    </button>
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <span className="text-gray-500 text-xs italic">Get design tips & insights</span>
              </form>
            )}
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
