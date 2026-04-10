import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Agreement",
      content: "By engaging EzeeAD for design services, you agree to be bound by these Terms and Conditions. These terms govern the professional relationship between EzeeAD and its clients during the planning, execution, and delivery of design projects."
    },
    {
      title: "Design Ownership",
      content: "Upon full payment for the services rendered, the client owns the final high-resolution design files and assets. EzeeAD retains the right to display the work in our portfolio, case studies, and marketing materials to demonstrate our expertise."
    },
    {
      title: "Payment Terms",
      content: "Projects require a 50% upfront commitment fee before work commences. The remaining 50% balance is due upon project completion and before the final handover of source files. All payments are non-refundable once the creative process has begun."
    },
    {
      title: "Revisions",
      content: "Our standard packages include up to two rounds of major revisions unless otherwise specified in your project quote. Additional revisions beyond this scope will be billed at our standard hourly rate of $500/hr."
    },
    {
      title: "Confidentiality",
      content: "We respect the competitive nature of your business. EzeeAD will not disclose any sensitive business information shared during the project lifecycle to third parties without your explicit written consent."
    }
  ];

  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#4169E1] selection:text-white">
      <Navbar />
      
      <div className="max-w-[1000px] mx-auto pt-32 md:pt-48 pb-24 px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase text-xs tracking-[0.3em] font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <h1 className="font-space font-black text-6xl md:text-[100px] leading-[0.9] tracking-tighter uppercase text-white mb-20">
          Terms <br /> <span className="text-[#4169E1]">Conditions.</span>
        </h1>

        <div className="flex flex-col gap-16">
          {sections.map((section, idx) => (
            <div key={idx} className="border-t border-white/10 pt-10">
              <span className="text-[#4169E1] font-bold block mb-4 tracking-widest text-xs">0{idx + 1}</span>
              <h2 className="font-space font-bold text-2xl md:text-3xl uppercase text-white mb-6">
                {section.title}
              </h2>
              <p className="text-gray-400 font-inter font-light text-lg leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-white/5 border border-white/10 rounded-2xl">
          <h2 className="font-space font-bold text-xl uppercase text-white mb-4">Legal Notice</h2>
          <p className="text-gray-400 font-light">
            EzeeAD reserves the right to update these terms at any time. Significant changes will be communicated to active clients. <br />
            Last updated: April 10, 2026
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
