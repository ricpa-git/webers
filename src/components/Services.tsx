"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Search,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Webs a medida con las últimas tecnologías. Rápidas, seguras y escalables.",
    color: "text-primary",
    borderHover: "group-hover:border-primary/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Interfaces intuitivas y atractivas que convierten visitantes en clientes.",
    color: "text-accent",
    borderHover: "group-hover:border-accent/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Tiendas online optimizadas para vender más. Integración con pasarelas de pago.",
    color: "text-primary-light",
    borderHover: "group-hover:border-primary-light/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]",
  },
  {
    icon: Smartphone,
    title: "Apps Web Progresivas",
    description:
      "Aplicaciones que funcionan como nativas desde cualquier dispositivo.",
    color: "text-accent",
    borderHover: "group-hover:border-accent/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  },
  {
    icon: Search,
    title: "SEO & Rendimiento",
    description:
      "Optimización para buscadores y velocidad de carga. Que te encuentren.",
    color: "text-primary",
    borderHover: "group-hover:border-primary/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Soporte continuo, actualizaciones y mejoras para que tu web siempre esté al día.",
    color: "text-primary-light",
    borderHover: "group-hover:border-primary-light/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]",
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

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-bg-light">
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
            /servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Todo lo que necesitas para{" "}
            <span className="text-primary">destacar online</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-muted text-lg">
            Ofrecemos soluciones digitales completas para llevar tu negocio al
            siguiente nivel.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative p-8 bg-surface rounded-xl border border-border/50 transition-all hover:-translate-y-1 ${service.borderHover} ${service.glow}`}
              >
                <Icon className={`w-8 h-8 ${service.color} mb-5`} />

                <h3 className="text-lg font-bold text-text mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
