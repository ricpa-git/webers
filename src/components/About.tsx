"use client";

import { motion } from "framer-motion";

const highlights = [
  "Equipo multidisciplinar de diseñadores y desarrolladores",
  "Metodologías ágiles adaptadas a cada proyecto",
  "Código limpio, escalable y bien documentado",
  "Comunicación transparente en todo momento",
];

const values = [
  {
    num: "01",
    title: "Resultados primero",
    description:
      "Cada decisión de diseño y código está pensada para cumplir tus objetivos de negocio.",
  },
  {
    num: "02",
    title: "Innovación constante",
    description:
      "Nos mantenemos al día con las últimas tecnologías y tendencias del sector.",
  },
  {
    num: "03",
    title: "Colaboración cercana",
    description:
      "Trabajamos codo a codo contigo en cada fase del proyecto, sin sorpresas.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row: label + big decorative number */}
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-[11px] text-primary/60 tracking-[0.2em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-ibm-mono)" }}
            >
              04 / Nosotros
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-text leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Un equipo que vive
              <br />
              <span className="text-primary">la web.</span>
            </h2>
          </motion.div>

          {/* Decorative large number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block select-none"
            aria-hidden
          >
            <span
              className="text-[9rem] font-bold leading-none text-border/10 tracking-tighter"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              
            </span>
          </motion.div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text + checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-muted text-lg leading-relaxed mb-4">
              En Webers somos un equipo apasionado por el desarrollo web.
              Combinamos creatividad, tecnología y estrategia para crear
              experiencias digitales que marcan la diferencia.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              Desde landing pages hasta plataformas complejas, cada proyecto
              recibe la misma atención al detalle y compromiso con la calidad.
            </p>

            <div className="space-y-0">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-4 py-3.5 border-b border-border/20"
                >
                  <span
                    className="text-primary/50 text-xs pt-0.5 shrink-0 tabular-nums"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    //
                  </span>
                  <span className="text-text-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                className="group flex gap-6 p-7 bg-surface border border-border/30 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] transition-all duration-300"
              >
                <span
                  className="text-2xl font-bold text-border/40 group-hover:text-primary/30 transition-colors shrink-0 leading-none mt-0.5 tabular-nums"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {value.num}
                </span>
                <div>
                  <h3
                    className="text-base font-bold text-text mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
