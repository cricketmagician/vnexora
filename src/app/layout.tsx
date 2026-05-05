import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({
  weight: "400",
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vnexora | Luxury Hospitality Management & Asset Optimization",
  description: "Vnexora partners with hotel owners to unlock hidden revenue, elevate brand positioning, and turn underperforming assets into high-yield destinations.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png",       sizes: "any",   type: "image/png" },
    ],
    apple:   [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other:   [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
};

import { ReactNode } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ToasterProvider } from "@/components/ui/ToasterProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { ConsultationPopup } from "@/components/sections/ConsultationPopup";
import { PartnerProvider } from "@/context/PartnerContext";
import { PartnerPopup } from "@/components/sections/PartnerPopup";
import { ServiceInquiryProvider } from "@/context/ServiceInquiryContext";
import { ServiceInquiryPopup } from "@/components/sections/ServiceInquiryPopup";
import { BackButton } from "@/components/ui/BackButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${pinyon.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <ConsultationProvider>
            <PartnerProvider>
              <ServiceInquiryProvider>
                <Navbar />
                <BackButton />
                {children}
                <Footer />
                <ConsultationPopup />
                <PartnerPopup />
                <ServiceInquiryPopup />
              </ServiceInquiryProvider>
            </PartnerProvider>
          </ConsultationProvider>
        </SmoothScroll>
        <ToasterProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
