"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "TechFlow SaaS",
    category: "Aplicación Web",
    description:
      "Plataforma de gestión de proyectos con dashboard en tiempo real y analíticas avanzadas.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    accent: "border-primary/30",
    tagColor: "text-primary bg-primary/10",
  },
  {
    title: "GreenMarket",
    category: "E-Commerce",
    description:
      "Tienda online de productos ecológicos con sistema de suscripciones y pagos recurrentes.",
    tags: ["React", "Stripe", "Node.js"],
    accent: "border-accent/30",
    tagColor: "text-accent bg-accent/10",
  },
  {
    title: "UrbanStudio",
    category: "Portfolio",
    description:
      "Web de estudio de arquitectura con galería inmersiva y animaciones 3D interactivas.",
    tags: ["Three.js", "GSAP", "Tailwind"],
    accent: "border-primary-light/30",
    tagColor: "text-primary-light bg-primary-light/10",
  },
  {
    title: "FitTrack Pro",
    category: "App Web",
    description:
      "Aplicación de seguimiento fitness con planes personalizados e integración con wearables.",
    tags: ["React", "Firebase", "PWA"],
    accent: "border-accent/30",
    tagColor: "text-accent bg-accent/10",
  },
  {
    title: "NomadBooking",
    category: "Plataforma",
    description:
      "Sistema de reservas para espacios de coworking con mapa interactivo y pagos online.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    accent: "border-primary/30",
    tagColor: "text-primary bg-primary/10",
  },
  {
    title: "Artisan Blog",
    category: "Blog / CMS",
    description:
      "Plataforma de contenido con editor visual, SEO automático y sistema de newsletters.",
    tags: ["Astro", "MDX", "Tailwind"],
    accent: "border-primary-light/30",
    tagColor: "text-primary-light bg-primary-light/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-lg border border-primary/20 mb-4 font-[family-name:var(--font-mono)]">
            /portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Proyectos que{" "}
            <span className="text-primary">hablan por sí solos</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-muted text-lg">
            Cada proyecto es una oportunidad de crear algo extraordinario.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group bg-surface rounded-xl border border-border/50 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.07)]`}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r from-primary via-accent to-primary-light opacity-40 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-text-muted font-[family-name:var(--font-mono)]">
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-text-muted hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-text-muted hover:text-primary transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md font-[family-name:var(--font-mono)] ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
