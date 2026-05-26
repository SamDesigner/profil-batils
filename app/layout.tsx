import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optimized Bati Profils Corporate Metadata Strategy
export const metadata: Metadata = {
  title: {
    default: "Bati Profils | Lightweight Steel Framing & Drywall Profiles",
    template: "%s | Bati Profils"
  },
  description: "Bati Profils is a leading manufacturer of high-stability roll-formed steel profiles, drywall channels, and structural frameworks across the Central African industrial sector.",
  keywords: [
    "Bati Profils", 
    "drywall profiles", 
    "steel framing", 
    "galvanized steel channels", 
    "construction materials Central Africa", 
    "Douala steel manufacturing", 
    "profilé de cloison", 
    "ossature métallique"
  ],
  authors: [{ name: "Bati Profils Industrial Team" }],
  metadataBase: new URL("https://batiprofils.net"), 
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    title: "Bati Profils | Structural Steel Profiles & Frameworks",
    description: "Premium manufacturing capabilities and roll-forming solutions for modern drywall partition and ceiling installations in Central Africa.",
    url: "https://batiprofils.net",
    siteName: "Bati Profils",
    images: [
      {
        url: "/images/og-corporate-preview.png", 
        width: 1200,
        height: 630,
        alt: "Bati Profils Corporate Production Plant Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bati Profils | Lightweight Steel Framing Systems",
    description: "High-stability suspended ceiling frameworks and hot-dip zinc galvanized profiles engineered for infrastructure longevity.",
    images: ["/images/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}