import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-voice",
  weight: ["400", "500"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Le Rucher de Marquefave",
  description: "Miel artisanal de Saint-Sulpice-la-Pointe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-cream text-bark font-sans antialiased min-h-svh flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
