"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientados a resultados",
    description:
      "Cada decisión de diseño y desarrollo está pensada para cumplir tus objetivos de negocio.",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    description:
      "Nos mantenemos al día con las últimas tendencias y tecnologías del sector.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Colaboración cercana",
    description:
      "Trabajamos codo a codo contigo en cada fase del proyecto. Sin sorpresas.",
    color: "text-primary-light",
  },
];

const highlights = [
  "Equipo multidisciplinar de diseñadores y desarrolladores",
  "Metodologías ágiles adaptadas a cada proyecto",
  "Código limpio, escalable y bien documentado",
  "Comunicación transparente en todo momento",
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-lg border border-primary/20 mb-4 font-[family-name:var(--font-mono)]">
              /nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
              Un equipo que vive{" "}
              <span className="text-primary">la web</span>
            </h2>
            <p className="mt-6 text-text-muted text-lg leading-relaxed">
              En Webers somos un equipo apasionado por el desarrollo web.
              Combinamos creatividad, tecnología y estrategia para crear
              experiencias digitales que marcan la diferencia.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Desde landing pages hasta plataformas complejas, cada proyecto
              recibe la misma atención al detalle y compromiso con la calidad.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group flex gap-5 p-6 bg-surface rounded-xl border border-border/50 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.07)] hover:-translate-y-0.5"
                >
                  <div className="shrink-0">
                    <Icon className={`w-7 h-7 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text mb-1">
                      {value.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
