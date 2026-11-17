"use client";

import { motion } from "framer-motion";
import { ChevronLink, primaryButton } from "./ui";

const ease: [number, number, number, number] = [0.28, 0.11, 0.32, 1];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  return (
    <section id="inicio" className="bg-bg pt-32 sm:pt-40 text-center">
      <div className="mx-auto max-w-[980px] px-5 sm:px-8">
        <motion.h1 {...rise(0.05)} className="type-hero text-text text-balance">
          Webs que hacen crecer tu negocio.
        </motion.h1>

        <motion.p
          {...rise(0.18)}
          className="type-intro text-text-muted mt-6 max-w-[34rem] mx-auto text-pretty"
        >
          Diseñamos y desarrollamos webs a medida. Rápidas, cuidadas y fáciles
          de usar desde cualquier dispositivo.
        </motion.p>

        <motion.div
          {...rise(0.3)}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-5"
        >
          <a href="#contacto" className={primaryButton}>
            Empezar un proyecto
          </a>
          <ChevronLink href="#portfolio">Ver trabajos</ChevronLink>
        </motion.div>
      </div>
    </section>
  );
}
