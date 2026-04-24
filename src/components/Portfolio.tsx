"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TechFlow SaaS",
    category: "Aplicación Web",
    description:
      "Plataforma de gestión de proyectos con dashboard en tiempo real y analíticas avanzadas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    accentColor: "text-primary",
    tagColor: "text-primary bg-primary/10",
  },
  {
    title: "GreenMarket",
    category: "E-Commerce",
    description:
      "Tienda online de productos ecológicos con sistema de suscripciones y pagos recurrentes.",
    tags: ["React", "Stripe", "Node.js"],
    accentColor: "text-accent",
    tagColor: "text-accent bg-accent/10",
  },
  {
    title: "UrbanStudio",
    category: "Portfolio",
    description:
      "Web de estudio de arquitectura con galería inmersiva y animaciones 3D interactivas.",
    tags: ["Three.js", "GSAP", "Tailwind"],
    accentColor: "text-primary-light",
    tagColor: "text-primary-light bg-primary-light/10",
  },
  {
    title: "FitTrack Pro",
    category: "App Web",
    description:
      "Aplicación de seguimiento fitness con planes personalizados e integración con wearables.",
    tags: ["React", "Firebase", "PWA"],
    accentColor: "text-accent",
    tagColor: "text-accent bg-accent/10",
  },
  {
    title: "NomadBooking",
    category: "Plataforma",
    description:
      "Sistema de reservas para espacios de coworking con mapa interactivo y pagos online.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    accentColor: "text-primary",
    tagColor: "text-primary bg-primary/10",
  },
  {
    title: "Artisan Blog",
    category: "Blog / CMS",
    description:
      "Plataforma de contenido con editor visual, SEO automático y sistema de newsletters.",
    tags: ["Astro", "MDX", "Tailwind"],
    accentColor: "text-primary-light",
    tagColor: "text-primary-light bg-primary-light/10",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="text-[11px] text-primary/60 tracking-[0.2em] uppercase block mb-4"
            style={{ fontFamily: "var(--font-ibm-mono)" }}
          >
            03 / Portfolio
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Proyectos que hablan
            <br />
            por sí solos.
          </h2>
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group border-b border-border/25 py-7 -mx-6 px-6 hover:bg-surface/25 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-5 sm:gap-8">
                {/* Number */}
                <span
                  className="text-sm text-text-muted/30 group-hover:text-primary/40 transition-colors w-8 shrink-0 pt-1.5 tabular-nums"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-bold text-text group-hover:${project.accentColor} transition-colors duration-200 leading-tight`}
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[11px] font-medium px-2 py-0.5 rounded ${project.tagColor}`}
                            style={{ fontFamily: "var(--font-ibm-mono)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-0.5">
                      <span
                        className="hidden sm:block text-xs text-text-muted/50 group-hover:text-text-muted transition-colors"
                        style={{ fontFamily: "var(--font-ibm-mono)" }}
                      >
                        {project.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-text-muted/30 group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0 duration-200" />
                    </div>
                  </div>

                  {/* Description on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-300 ease-out">
                    <p className="text-sm text-text-muted leading-relaxed pt-3 max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-end"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Tienes un proyecto en mente?
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-light to-transparent pointer-events-none" />
    </section>
  );
}
