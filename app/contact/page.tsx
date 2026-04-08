"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mjgpzaeg');

  return (
    <main className="bg-[#0A0A0A] min-h-screen pt-32 selection:bg-[#4169E1] selection:text-white flex flex-col">
      
      <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full py-24 md:py-48 flex-1">
        <h1 className="font-space font-black text-[clamp(50px,10vw,140px)] leading-[0.9] tracking-tighter uppercase text-white mb-20 text-center md:text-left">
          LET'S TALK <br /><span className="text-[#4169E1]">BUSINESS.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold block mb-4">Direct Email</span>
              <a href="mailto:info@ezeead.com" className="font-space font-bold text-2xl md:text-4xl text-white hover:text-[#4169E1] transition-colors">
                info@ezeead.com
              </a>
            </div>
            
            <div>
              <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold block mb-4">Studio Location</span>
              <p className="font-space font-bold text-2xl md:text-4xl text-white">
                Lagos, Nigeria.
              </p>
            </div>
          </div>

          {/* Connected Formspree Form */}
          <div className="lg:col-span-7">
            {state.succeeded ? (
              <div className="flex flex-col items-start gap-6 border border-white/10 bg-white/[0.02] p-8 md:p-12 rounded-[20px]">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/30">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-space font-black text-3xl md:text-5xl uppercase tracking-tighter text-white">
                  Message Received.
                </h3>
                <p className="text-gray-400 font-inter text-base md:text-lg leading-relaxed">
                  We've successfully secured your inquiry in our system. The EzeeAD creative team will review your project details and respond to your provided email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
                <div className="group relative flex flex-col">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 font-space font-bold text-2xl text-white uppercase outline-none focus:border-[#4169E1] transition-colors placeholder:text-white/20"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-2 font-inter" />
                </div>
                
                <div className="group relative flex flex-col">
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 font-space font-bold text-2xl text-white uppercase outline-none focus:border-[#4169E1] transition-colors placeholder:text-white/20"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-2 font-inter" />
                </div>

                <div className="group relative flex flex-col">
                  <input 
                    type="text" 
                    name="budget"
                    placeholder="PROJECT BUDGET" 
                    className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 font-space font-bold text-2xl text-white uppercase outline-none focus:border-[#4169E1] transition-colors placeholder:text-white/20"
                  />
                  <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-red-500 text-sm mt-2 font-inter" />
                </div>
                
                <div className="group relative flex flex-col">
                  <textarea 
                    name="message"
                    required
                    placeholder="PROJECT DETAILS" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 font-space font-bold text-2xl text-white uppercase outline-none focus:border-[#4169E1] transition-colors placeholder:text-white/20 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-2 font-inter" />
                </div>
                
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="inline-flex self-start bg-[#4169E1] text-white px-12 py-6 font-space font-bold uppercase tracking-widest items-center gap-4 hover:bg-white hover:text-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer mt-8 rounded-none"
                >
                  {state.submitting ? 'SENDING...' : 'SUBMIT INQUIRY'} <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
