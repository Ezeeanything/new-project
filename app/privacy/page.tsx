import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "At EzeeAD, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you."
    },
    {
      title: "Data We Collect",
      content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: \n\n• Identity Data: Includes first name, last name, username or similar identifier.\n• Contact Data: Includes email address and telephone numbers.\n• Technical Data: Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.\n• Usage Data: Includes information about how you use our website, products and services."
    },
    {
      title: "Pixels & Analytics",
      content: "We use the Meta Pixel and Vercel Analytics to measure the performance of our website and improve our marketing efforts. These tools collect information about your interaction with our site and help us serve more relevant advertisements. You can opt-out of cookies through your browser settings."
    },
    {
      title: "How We Use Your Data",
      content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:\n\n• To register you as a new client.\n• To process and deliver your project.\n• To manage our relationship with you.\n• To improve our website, services, and marketing."
    },
    {
      title: "Your Rights",
      content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, and to withdraw consent."
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
          Privacy <br /> <span className="text-[#4169E1]">Policy.</span>
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
          <h2 className="font-space font-bold text-xl uppercase text-white mb-4">Contact</h2>
          <p className="text-gray-400 font-light">
            If you have any questions about this privacy policy, please contact us at: <br />
            <span className="text-[#4169E1] font-bold mt-2 inline-block">hello@ezeead.com</span>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
