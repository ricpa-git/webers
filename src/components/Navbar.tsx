"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#inicio", label: "Inicio", num: "01" },
  { href: "#servicios", label: "Servicios", num: "02" },
  { href: "#portfolio", label: "Portfolio", num: "03" },
  { href: "#nosotros", label: "Nosotros", num: "04" },
  // { href: "#testimonios", label: "Testimonios", num: "05" },
  { href: "#contacto", label: "Contacto", num: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 border border-primary/50 rotate-45 transition-transform duration-700 group-hover:rotate-[225deg]" />
              <span
                className="text-primary text-xs font-bold relative z-10"
                style={{ fontFamily: "var(--font-ibm-mono)" }}
              >
                W
              </span>
            </div>
            <span
              className="text-base font-bold tracking-wider text-text uppercase"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Webers<span className="text-primary terminal-cursor">_</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors duration-200"
              >
                <span
                  className="text-[10px] text-primary/40 group-hover:text-primary/70 transition-colors tabular-nums"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-text-muted hover:text-primary border border-border/30 hover:border-primary/40 transition-all duration-200"
              aria-label="Cambiar tema"
            >
              {mounted && theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-primary border border-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Hablemos
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-text-muted hover:text-primary transition-colors"
              aria-label="Cambiar tema"
            >
              {mounted && theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-muted hover:text-text transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg/98 backdrop-blur-xl border-b border-border/30"
          >
            <div className="px-6 py-6 space-y-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 py-4 border-b border-border/20 text-text-muted hover:text-text transition-colors"
                >
                  <span
                    className="text-xs text-primary/50 w-7 tabular-nums"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    {link.num}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block mt-5 py-3 text-sm font-semibold text-center text-primary border border-primary/40 hover:bg-primary hover:text-white transition-all"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
