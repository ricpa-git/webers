import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fuentes del proyecto destacado (Pablo Gordo Barbería), solo para la fase "Diseño" de BuildReveal
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  preload: false,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Webers — Desarrollo Web Profesional",
  description:
    "Diseñamos y desarrollamos webs a medida en Madrid. Rápidas, cuidadas y fáciles de usar.",
  keywords: ["desarrollo web", "diseño web", "webers", "páginas web", "aplicaciones web"],
  openGraph: {
    title: "Webers — Desarrollo Web Profesional",
    description: "Webs a medida, rápidas y cuidadas.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${bodoni.variable} ${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
