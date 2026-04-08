import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EzeeAD | Premium Design Agency Lagos | Where Visuals Meet Revenue",
  description: "EzeeAD is an ultra-premium design agency in Lagos, Nigeria, specializing in Brand Identity, UI/UX Design, and Digital Strategy for African tech startups and businesses.",
  keywords: [
    "Design Agency Lagos", 
    "Brand Identity Nigeria", 
    "UI/UX Design Lagos", 
    "Web Design Nigeria", 
    "EzeeAD Lagos", 
    "Digital Design Africa",
    "Logo Design Lagos",
    "UX Research Nigeria",
    "Brand Strategy Africa"
  ],
  authors: [{ name: "Sunday Odafe" }],
  creator: "Sunday Odafe",
  publisher: "EzeeAD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EzeeAD | Where Visuals Meet Revenue",
    description: "Award-winning, ultra-premium design agency in Lagos, Nigeria.",
    url: "https://ezeead.com",
    siteName: "EzeeAD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EzeeAD Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EzeeAD | Premium Design Agency",
    description: "Ultra-premium design agency in Lagos, Nigeria.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased selection:bg-[#4169E1] selection:text-white scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "EzeeAD",
              "image": "https://ezeead.com/ezeead-logo.png",
              "url": "https://ezeead.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Lagos",
                "addressRegion": "LA",
                "postalCode": "",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.5244,
                "longitude": 3.3792
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/_ezeead",
                "https://www.linkedin.com/company/ezeeanything-design"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-inter bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
