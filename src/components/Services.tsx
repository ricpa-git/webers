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
      "Webs a medida con las últimas tecnologías. Rápidas, seguras y escalables desde cero.",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Interfaces intuitivas y atractivas que convierten visitantes en clientes reales.",
    color: "text-accent",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Tiendas online optimizadas para vender más, con integración de pasarelas de pago.",
    color: "text-primary-light",
  },
  {
    icon: Smartphone,
    title: "Apps Web Progresivas",
    description:
      "Aplicaciones que funcionan como nativas desde cualquier dispositivo y plataforma.",
    color: "text-accent",
  },
  {
    icon: Search,
    title: "SEO & Rendimiento",
    description:
      "Optimización para buscadores y velocidad de carga. Que te encuentren primero.",
    color: "text-primary",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Soporte continuo, actualizaciones y mejoras para que tu web siempre esté al día.",
    color: "text-primary-light",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span
              className="text-[11px] text-primary/60 tracking-[0.2em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-ibm-mono)" }}
            >
              02 / Servicios
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-text leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Todo lo que necesitas
              <br />
              para destacar online.
            </h2>
          </div>
          <p className="text-text-muted max-w-xs leading-relaxed text-sm md:text-right">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Numbered list */}
        <div>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group flex items-start gap-6 sm:gap-10 py-8 border-b border-border/25 hover:bg-surface/20 transition-colors -mx-6 px-6 cursor-default"
              >
                {/* Number */}
                <span
                  className="text-3xl sm:text-4xl font-bold text-border/35 group-hover:text-primary/25 transition-colors w-12 shrink-0 leading-none pt-1 select-none"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-text group-hover:text-primary transition-colors duration-200 mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>

                {/* Icon */}
                <Icon
                  className={`w-6 h-6 ${service.color} shrink-0 mt-1 opacity-30 group-hover:opacity-80 transition-opacity hidden sm:block`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
