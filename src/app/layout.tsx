import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vnexora | Luxury Hospitality Management & Asset Optimization",
  description: "Vnexora partners with hotel owners to unlock hidden revenue, elevate brand positioning, and turn underperforming assets into high-yield destinations.",
};

import { ReactNode } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ToasterProvider } from "@/components/ui/ToasterProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <ToasterProvider />
      </body>
    </html>
  );
}
