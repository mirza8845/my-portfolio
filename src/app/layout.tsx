import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jazzy-portfolio-profile.vercel.app"; // {{TODO: update to custom domain (e.g. https://jahanzaibali.dev) once set}}
const siteTitle = "Jahanzaib Ali — Senior Full-Stack Engineer (React, Next.js, AI)";
const siteDescription =
  "Senior Full-Stack Engineer with 6+ years building AI-powered web and mobile products in React, Next.js, TypeScript, Node.js, and React Native. Available for remote work worldwide.";
// {{TODO: add a real 1200×630 branded card at /public/images/og-image.png}}
const ogImage = "/images/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "full stack engineer",
    "senior software engineer",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "react native",
    "AI integration",
    "LLM",
    "remote developer",
    "portfolio",
  ],
  authors: [{ name: "Jahanzaib Ali" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Jahanzaib Ali",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Jahanzaib Ali — Senior Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
