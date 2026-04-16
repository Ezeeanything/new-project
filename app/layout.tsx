import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ExitIntentPopup from "./components/ExitIntentPopup";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1275589527972014');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1275589527972014&ev=PageView&noscript=1"
          />
        </noscript>
        <Navbar />
        <ScrollProgressBar />
        <ExitIntentPopup />
        {children}
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
        {/* Tawk.to Integration */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/678a87b83a84273260706f9d/1iipu7t93';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
