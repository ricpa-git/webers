"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-bg-light">
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
            /contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            ¿Listo para{" "}
            <span className="text-primary">empezar tu proyecto</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-muted text-lg">
            Cuéntanos tu idea y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-surface border border-border/50 rounded-lg text-text placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-surface border border-border/50 rounded-lg text-text placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-4 py-3 bg-surface border border-border/50 rounded-lg text-text placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 bg-surface border border-border/50 rounded-lg text-text placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
              >
                Enviar mensaje
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 bg-surface rounded-xl border border-border/50">
              <h3 className="text-lg font-bold text-text mb-6">
                Información de contacto
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-light border border-border/50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">Email</div>
                    <div className="text-sm text-text-muted">
                      hola@webers.dev
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-light border border-border/50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">
                      Teléfono
                    </div>
                    <div className="text-sm text-text-muted">
                      +34 600 000 000
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-light border border-border/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">
                      Ubicación
                    </div>
                    <div className="text-sm text-text-muted">
                      Madrid, España
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-light border border-border/50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">Horario</div>
                    <div className="text-sm text-text-muted">
                      Lun - Vie: 9:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA card */}
            <div className="p-6 bg-surface rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.07)]">
              <h3 className="text-lg font-bold text-text mb-2">¿Proyecto urgente?</h3>
              <p className="text-sm text-text-muted mb-4">
                Llámanos directamente y te atenderemos de inmediato.
              </p>
              <a
                href="tel:+34600000000"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
