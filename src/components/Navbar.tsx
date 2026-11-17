"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Trabajos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false en servidor e hidratación, true en cliente: evita desajustes de icono
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-11 h-11 -mx-1 flex items-center justify-center rounded-full text-text-muted hover:text-text transition-colors"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menú móvil: bloquea el scroll del fondo y se cierra con Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        aria-label="Principal"
        className={`relative z-10 backdrop-blur-xl backdrop-saturate-[180%] transition-colors duration-300 ${
          isOpen ? "bg-bg" : "bg-nav"
        } ${scrolled && !isOpen ? "shadow-[0_1px_0_var(--color-border)]" : ""}`}
      >
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 h-12 flex items-center justify-between">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="text-[19px] font-semibold tracking-[-0.02em] text-text"
          >
            Webers
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] text-text-muted hover:text-text transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center h-8 px-4 rounded-full bg-button text-white text-[14px] hover:bg-button-hover transition-colors"
            >
              Hablemos
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-text"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="menu-movil"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.28, 0.11, 0.32, 1] }}
            className="md:hidden fixed inset-0 top-12 bg-bg"
          >
            <ul className="px-8 pt-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i, ease: [0.28, 0.11, 0.32, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[28px] font-semibold tracking-[-0.02em] text-text"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
