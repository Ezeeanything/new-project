import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EzeeAD | Where Visuals Meet Revenue",
  description: "Award-winning, ultra-premium design agency in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased selection:bg-[#4169E1] selection:text-white`}
    >
      <body className="min-h-full flex flex-col font-inter bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">{children}</body>
    </html>
  );
}
