import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { LedgerProvider } from "@/lib/providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ledger.psyverse.fun"),
  title: "Life Ledger — the unified system of human time, decisions, and meaning | 生命账簿",
  description:
    "A mirror, a simulator, and a quiet system for your life. Time is non-renewable. Decisions are state changes. Meaning is the residue of attention sustained over time.",
  keywords: [
    "life ledger",
    "time as currency",
    "weeks of your life",
    "tim urban your life in weeks",
    "decision intelligence",
    "opportunity cost",
    "compounding life",
    "meaning of life",
    "philosophical web tool",
    "生命账簿",
    "时间预算",
    "人生周",
    "意义",
    "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Life Ledger · 生命账簿" }],
    title: "Life Ledger — your life is a ledger",
    description:
      "Time is the only currency you cannot earn back. Every decision is an entry. The total is your meaning.",
    url: "https://ledger.psyverse.fun/",
    siteName: "Life Ledger",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Life Ledger — your life is a ledger.",
    description: "A mirror, a simulator, a quiet system. For looking honestly at how a life is spent.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0A0A0C" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <LedgerProvider>
          <Nav />
          {children}
          <Footer />
        </LedgerProvider>
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
