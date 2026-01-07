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

export const metadata: Metadata = {
  title: "Jahanzaib Ali | Senior Software Engineer & Full-Stack Developer",
  description: "Experienced Full-Stack Developer specializing in React, React Native, Node.js, Python, and modern web & mobile technologies",
  keywords: ["frontend developer", "backend developer", "full stack", "react", "react native", "nodejs", "python", "django", "portfolio", "web developer", "mobile developer", "team leader"],
    icons: {
      icon: "/images/favicon.png",
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
