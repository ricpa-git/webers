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
  title: "Webers — Desarrollo Web Profesional",
  description:
    "Creamos experiencias digitales únicas. Diseño web moderno, desarrollo a medida y soluciones digitales para tu negocio.",
  keywords: ["desarrollo web", "diseño web", "webers", "páginas web", "aplicaciones web"],
  openGraph: {
    title: "Webers — Desarrollo Web Profesional",
    description: "Creamos experiencias digitales únicas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
