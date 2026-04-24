"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MatrixRain from "./MatrixRain";

const stats = [
  { value: "50+", label: "Proyectos" },
  { value: "98%", label: "Satisfacción" },
  { value: "4+", label: "Años" },
  { value: "24/7", label: "Soporte" },
];

const lines = ["CREAMOS", "WEBS QUE", "IMPULSAN."];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg scanlines"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
        <div className="absolute inset-0 dot-grid opacity-[0.12]" />
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-primary/[0.055] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span
            className="text-[11px] text-text-muted/50 tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-ibm-mono)" }}
          >
            Est. 2026
          </span>
          <div className="w-12 h-px bg-border/50" />
          <span
            className="text-[11px] text-primary/60 tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-ibm-mono)" }}
          >
            Madrid · España
          </span>
        </motion.div>

        {/* Massive heading */}
        <div className="relative">
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 + i * 0.13,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-[clamp(3.2rem,9vw,9.5rem)] font-bold leading-[0.92] tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {i === 1 ? (
                  <>
                    <span className="text-text">WEBS </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      QUE
                    </span>
                  </>
                ) : i === 2 ? (
                  <>
                    <span className="text-text/90">IMPULSAN</span>
                    <span className="text-primary">.</span>
                  </>
                ) : (
                  <span className="text-text">{line}</span>
                )}
              </motion.h1>
            </div>
          ))}

          {/* Rotating ring — decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="absolute -right-2 top-4 hidden lg:flex items-center justify-center w-52 h-52"
          >
            <div className="absolute inset-0 border border-primary/15 rounded-full spin-slow" />
            <div className="absolute inset-5 border border-border/30 rounded-full spin-slow-reverse" />
            <div className="absolute inset-10 border border-accent/10 rounded-full spin-slow" />
            <div className="text-center select-none">
              <div
                className="text-[10px] text-text-muted/40 tracking-widest uppercase mb-1"
                style={{ fontFamily: "var(--font-ibm-mono)" }}
              >
                disponibles
              </div>
              <div
                className="text-3xl font-bold text-primary/80"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                24/7
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex flex-col md:flex-row items-start md:items-center gap-10 max-w-5xl"
        >
          <p className="text-text-muted text-lg leading-relaxed max-w-sm">
            Diseño moderno, desarrollo a medida y estrategia digital. Hacemos
            que tu presencia online destaque.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-primary border border-primary transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-px"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Empezar proyecto
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-text-muted border border-border/60 hover:text-text hover:border-border transition-all"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Ver trabajo
            </a>
          </div>
        </motion.div>

        {/* Stats bar
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-8 border-t border-border/25 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 pr-8 ${i > 0 ? "pl-8 border-l border-border/25" : ""}`}
            >
              <div
                className="text-4xl font-bold text-text leading-none mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[11px] text-text-muted/60 uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-ibm-mono)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent pointer-events-none" />
    </section>
  );
}
