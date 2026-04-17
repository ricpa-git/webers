"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-surface-light border border-border rounded-lg flex items-center justify-center transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-text font-[family-name:var(--font-mono)]">
              Web<span className="text-primary">ers</span><span className="text-primary/70 terminal-cursor">_</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-muted rounded-lg transition-colors hover:text-primary hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-primary/90 rounded-lg border border-primary/30 transition-all hover:bg-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:-translate-y-0.5"
          >
            Hablemos
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-bg border-b border-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-text-muted rounded-lg transition-colors hover:text-primary hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-3 text-sm font-semibold text-center text-white bg-primary/90 rounded-lg border border-primary/30"
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
