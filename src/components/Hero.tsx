"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import MatrixRain from "./MatrixRain";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Grid + glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-primary bg-surface-light/80 backdrop-blur-sm rounded-lg border border-border/50 font-[family-name:var(--font-mono)]"
        >
          <ChevronRight className="w-4 h-4 text-accent" />
          <span className="text-text-muted">$</span> building<span className="text-accent">_</span>digital<span className="text-accent">_</span>experiences
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-text leading-tight"
        >
          Creamos webs que
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            impulsan tu negocio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-muted leading-relaxed"
        >
          Diseño moderno, desarrollo a medida y estrategia digital.
          Hacemos que tu presencia online destaque.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
          >
            Empezar un proyecto
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-text-muted border border-border rounded-lg transition-all hover:text-text hover:border-primary/40 hover:bg-surface-light/50"
          >
            Ver nuestro trabajo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Proyectos" },
            { value: "98%", label: "Satisfacción" },
            { value: "4+", label: "Años de experiencia" },
            { value: "24/7", label: "Soporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-text font-[family-name:var(--font-mono)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light to-transparent" />
    </section>
  );
}
