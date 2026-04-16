"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown it this session
    const sessionShown = sessionStorage.getItem("ezee_exit_intent_shown");
    if (sessionShown) setHasShown(true);

    const handleMouseOut = (e: MouseEvent) => {
      if (hasShown) return;

      // Trigger if mouse leaves toward the top of the window
      if (e.clientY <= 0 || e.clientY <= 5) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("ezee_exit_intent_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => document.removeEventListener("mouseleave", handleMouseOut);
  }, [hasShown]);

  const closePopup = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-[600px] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]"
          >
            {/* Left side accent or design area (optional, user requested 600x400 card) */}
            <div className="hidden md:flex w-1/3 bg-[#4169E1] p-10 flex-col justify-end text-white">
               <h4 className="font-space font-black text-2xl uppercase leading-none mb-4">EzeeAD</h4>
               <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Premium Design Agency</p>
            </div>

            <div className="flex-1 p-8 md:p-12 relative">
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-4">
                <h3 className="font-space font-black text-[#0A0A0A] text-3xl mb-2 leading-none uppercase">
                  Wait! Before <br /> You Go...
                </h3>
                <p className="font-inter text-[#4169E1] font-bold text-lg mb-8">
                  Get a FREE brand audit worth ₦50,000
                </p>

                <form className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all font-inter"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4169E1] transition-all font-inter"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#4169E1] text-white font-space font-black uppercase tracking-widest rounded-xl hover:bg-[#0A0A0A] transition-all transform active:scale-95 shadow-lg shadow-[#4169E1]/20 mt-2"
                  >
                    Get My Free Audit
                  </button>
                </form>

                <p className="text-[10px] text-gray-400 text-center mt-6 font-medium uppercase tracking-[0.2em]">
                  No spam. We respect your inbox.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
