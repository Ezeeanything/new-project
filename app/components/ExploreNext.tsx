"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ExploreNextProps {
  currentPath: string;
}

export default function ExploreNext({ currentPath }: ExploreNextProps) {
  const linksMap: Record<string, { label: string; href: string }[]> = {
    "default": [
      { label: "View Our Portfolio", href: "/portfolio" },
      { label: "Read Client Success Stories", href: "/testimonials" },
      { label: "See Our Services", href: "/services" },
      { label: "Get a Free Quote", href: "/contact" }
    ],
    "/": [
      { label: "View Our Portfolio", href: "/portfolio" },
      { label: "Read Client Success Stories", href: "/testimonials" },
      { label: "See Our Services", href: "/services" },
      { label: "Get a Free Quote", href: "/contact" }
    ],
    "/portfolio": [
      { label: "Start Your Project", href: "/contact" },
      { label: "Read Our Process", href: "/about" },
      { label: "See Pricing Guide", href: "/services" },
      { label: "Book Free Consultation", href: "/contact" }
    ],
    "/services": [
      { label: "View Work Examples", href: "/portfolio" },
      { label: "Read Case Studies", href: "/portfolio" },
      { label: "Get Custom Quote", href: "/contact" },
      { label: "Download Our Brochure", href: "/contact" } // Placeholder
    ]
  };

  const links = linksMap[currentPath] || linksMap["default"];

  return (
    <section className="bg-white py-16 px-[clamp(24px,6vw,80px)] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="font-space font-black text-[#0A0A0A]/20 text-4xl uppercase mb-12 tracking-tighter">
          Explore Next
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href={link.href}
                className="group flex items-center justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-[#4169E1] transition-all duration-300"
              >
                <span className="font-space font-bold text-[#0A0A0A] group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <ArrowRight className="w-5 h-5 text-[#4169E1] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
