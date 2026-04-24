import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
      suppressHydrationWarning
      className={`${syne.variable} ${ibmPlexMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
