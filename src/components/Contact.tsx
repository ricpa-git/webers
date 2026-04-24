"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contactInfo = [
  { label: "email", value: "webersdevia@gmail.com", href: "mailto:webersdevia@gmail.com" },
  { label: "tel", value: "+34 600 000 000", href: "tel:+34600000000" },
  { label: "ubicación", value: "Madrid, España", href: null },
  { label: "horario", value: "Lun–Vie 9:00–18:00", href: null },
];

const inputClass =
  "w-full bg-transparent border-b border-border/40 py-3 text-text placeholder:text-text-muted/30 focus:outline-none focus:border-primary/60 transition-colors text-sm";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-28 bg-bg-light">
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
            06 / Contacto
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-text"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Listo para empezar
            <br />
            tu proyecto?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <form className="space-y-0">
              {/* Nombre */}
              <div className="flex items-baseline gap-4 group">
                <span
                  className="text-primary/50 text-xs shrink-0 group-focus-within:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  &gt;_
                </span>
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-[10px] text-text-muted/40 mb-1 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="pt-6" />

              {/* Email */}
              <div className="flex items-baseline gap-4 group">
                <span
                  className="text-primary/50 text-xs shrink-0 group-focus-within:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  &gt;_
                </span>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-[10px] text-text-muted/40 mb-1 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="pt-6" />

              {/* Asunto */}
              <div className="flex items-baseline gap-4 group">
                <span
                  className="text-primary/50 text-xs shrink-0 group-focus-within:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  &gt;_
                </span>
                <div className="flex-1">
                  <label
                    htmlFor="subject"
                    className="block text-[10px] text-text-muted/40 mb-1 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="¿En qué podemos ayudarte?"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="pt-6" />

              {/* Mensaje */}
              <div className="flex items-start gap-4 group">
                <span
                  className="text-primary/50 text-xs shrink-0 mt-6 group-focus-within:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-ibm-mono)" }}
                >
                  &gt;_
                </span>
                <div className="flex-1">
                  <label
                    htmlFor="message"
                    className="block text-[10px] text-text-muted/40 mb-1 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ibm-mono)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <div className="pt-10" />

              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold text-white bg-primary border border-primary hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:-translate-y-px transition-all"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Enviar proyecto
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col justify-between gap-10"
          >
            <div>
              <p className="text-text-muted leading-relaxed mb-10 text-sm">
                Cuéntanos tu idea y te responderemos en menos de 24 horas. Sin
                compromisos, sin letras pequeñas.
              </p>

              <div className="space-y-0">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-4 border-b border-border/20"
                  >
                    <span
                      className="text-[11px] text-text-muted/40 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-ibm-mono)" }}
                    >
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-ibm-mono)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm text-text-muted"
                        style={{ fontFamily: "var(--font-ibm-mono)" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency card */}
            <div className="p-7 border border-primary/25 bg-primary/[0.04]">
              <span
                className="text-[10px] text-primary/60 tracking-widest uppercase block mb-3"
                style={{ fontFamily: "var(--font-ibm-mono)" }}
              >
                // proyecto urgente
              </span>
              <h3
                className="text-lg font-bold text-text mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                ¿Lo necesitas ya?
              </h3>
              <p className="text-sm text-text-muted mb-5 leading-relaxed">
                Llámanos directamente y te atenderemos de inmediato.
              </p>
              <a
                href="tel:+34600000000"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Llamar ahora
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
