"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura García",
    role: "CEO, TechFlow",
    content:
      "Webers transformó nuestra visión en una plataforma increíble. El equipo entendió nuestras necesidades desde el primer día y entregaron un producto que superó nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Martínez",
    role: "Fundador, GreenMarket",
    content:
      "La tienda online que nos desarrollaron ha triplicado nuestras ventas. El diseño es espectacular y la experiencia de usuario es impecable.",
    rating: 5,
  },
  {
    name: "Ana López",
    role: "Directora, UrbanStudio",
    content:
      "Profesionalidad, creatividad y rapidez. Nuestra web es ahora nuestra mejor carta de presentación. Totalmente recomendables.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-bg">
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
            /testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Lo que dicen{" "}
            <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-muted text-lg">
            La satisfacción de nuestros clientes es nuestra mejor referencia.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="relative bg-surface p-8 rounded-xl border border-border/50 transition-all hover:border-primary/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.07)]"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-light border border-border/50 flex items-center justify-center text-primary font-bold text-sm font-[family-name:var(--font-mono)]">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-text-muted text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
