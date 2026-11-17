"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Proyecto destacado dentro de una ventana de navegador que se "construye"
 * con el scroll: estructura → diseño → lanzamiento (captura de la web publicada).
 * Con "Reducir movimiento" activado se muestra directamente la web publicada.
 */

const PROJECT = {
  name: "Pablo Gordo Barbería",
  url: "https://webersdev.com/",
  domain: "webersdev.com",
  screenshot: "/proyectos/pablo-gordo-barberia.png",
};

const steps = [
  {
    title: "Estructura",
    text: "Marca, servicios y reserva de cita, todo en la primera pantalla.",
  },
  {
    title: "Diseño",
    text: "Bodoni y Montserrat sobre tonos piedra: el oficio clásico del barbero.",
  },
  {
    title: "Lanzamiento",
    text: "Publicada, rápida en móvil y con reserva de citas online.",
  },
];

// Paleta real del proyecto
const pg = {
  black: "#141211",
  charcoal: "#1e1b19",
  line: "#34302c",
  lineStrong: "#736a60",
  ash: "#a39a8e",
  greige: "#b8ac9c",
  stone: "#e4ddd3",
  ivory: "#f2eee8",
};

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

/** Preferencia "Reducir movimiento", segura para SSR e hidratación. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCE_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  );
}

type Opacity = MotionValue<number> | number;

/** Progreso 0→1 de `v` dentro del tramo [a, b]. */
const between = (v: number, a: number, b: number) => Math.min(1, Math.max(0, (v - a) / (b - a)));

/* ─── Fase 1 · Estructura (wireframe) ─── */
function WireframeLayer() {
  const bar = "rounded-full bg-skeleton";
  return (
    <div className="absolute inset-0 bg-bg flex flex-col px-[5cqw] py-[2.6cqw]">
      {/* Navegación */}
      <div className="flex items-center justify-end gap-[3cqw]">
        <div className="flex-1" />
        <div className={`${bar} h-[0.9cqw] w-[8cqw]`} />
        <div className={`${bar} h-[0.9cqw] w-[13cqw]`} />
        <div className="flex-1 flex justify-end">
          <div className="h-[2.8cqw] w-[12cqw] rounded-[0.4cqw] bg-skeleton" />
        </div>
      </div>

      {/* Bloque central */}
      <div className="flex-1 flex flex-col items-center justify-center gap-[2.2cqw]">
        <div className={`${bar} h-[0.8cqw] w-[19cqw]`} />
        <div className="relative w-[30cqw] aspect-[1.6] rounded-[0.8cqw] border-2 border-dashed border-field-border/60 flex items-center justify-center">
          <svg aria-hidden className="absolute inset-0 w-full h-full text-skeleton" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="relative bg-bg px-[1cqw] text-[max(9px,1.3cqw)] text-text-muted">Logotipo</span>
        </div>
        <div className={`${bar} h-[2cqw] w-[40cqw] mt-[1.4cqw]`} />
        <div className="flex gap-[1.2cqw] mt-[1.4cqw]">
          <div className="h-[3.8cqw] w-[16cqw] rounded-[0.4cqw] bg-skeleton" />
          <div className="h-[3.8cqw] w-[14cqw] rounded-[0.4cqw] border-2 border-skeleton" />
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-skeleton pt-[1.8cqw] flex items-center justify-between">
        <div className={`${bar} h-[0.9cqw] w-[9cqw]`} />
        <div className={`${bar} h-[0.9cqw] w-[12cqw]`} />
        <div className={`${bar} h-[0.9cqw] w-[13cqw]`} />
      </div>
    </div>
  );
}

/* ─── Fase 2 · Diseño (maqueta con marca, retícula y guía de estilo) ─── */
function DesignLayer({ opacity }: { opacity: Opacity }) {
  const mont = "font-[family-name:var(--font-montserrat)]";
  const bodoni = "font-[family-name:var(--font-bodoni)]";
  return (
    <motion.div
      style={{ opacity, background: pg.black, color: pg.ivory }}
      className="absolute inset-0 flex flex-col px-[5cqw] py-[2.6cqw]"
    >
      {/* Retícula de 12 columnas, como en la herramienta de diseño */}
      <div aria-hidden className="absolute inset-y-0 inset-x-[5cqw] grid grid-cols-12 gap-[1.6cqw] pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ background: "rgb(242 238 232 / 0.025)" }} />
        ))}
      </div>

      {/* Navegación */}
      <div className={`relative flex items-center ${mont}`}>
        <div className="flex-1" />
        <div className="flex gap-[2.8cqw] text-[max(6px,0.85cqw)] font-semibold tracking-[0.2em]" style={{ color: pg.greige }}>
          <span>SERVICIOS</span>
          <span className="hidden @[480px]:inline">HORARIO Y UBICACIÓN</span>
        </div>
        <div className="flex-1 flex justify-end">
          <span
            className="px-[1.5cqw] py-[0.9cqw] text-[max(6px,0.85cqw)] font-bold tracking-[0.2em]"
            style={{ background: pg.ivory, color: pg.black }}
          >
            RESERVAR CITA
          </span>
        </div>
      </div>

      {/* Bloque central */}
      <div className="relative flex-1 flex flex-col items-center justify-center">
        <span className={`${mont} text-[max(6px,0.85cqw)] font-semibold tracking-[0.25em]`} style={{ color: pg.ash }}>
          CUBAS DE LA SAGRA, MADRID
        </span>
        <div className="relative mt-[2cqw] flex flex-col items-center">
          <span className={`${bodoni} text-[17cqw] leading-[0.82] tracking-[-0.04em]`}>PG</span>
          <span
            className={`${mont} absolute top-[38%] whitespace-nowrap text-[max(8px,2.2cqw)] font-bold tracking-[0.3em] pl-[1cqw] pr-[0.7cqw]`}
            style={{ background: pg.black }}
          >
            PABLO GORDO
          </span>
          <span className={`${mont} mt-[1.2cqw] text-[max(6px,1.1cqw)] font-medium tracking-[0.6em]`}>BARBERÍA</span>
        </div>
        <span className={`${bodoni} italic mt-[3cqw] text-[max(12px,3.3cqw)] leading-none`}>
          Oficio, calma y un buen corte.
        </span>
        <div className={`${mont} mt-[3cqw] flex gap-[1.1cqw] text-[max(6px,0.85cqw)] font-bold tracking-[0.2em]`}>
          <span className="px-[2.6cqw] py-[1.3cqw]" style={{ background: pg.ivory, color: pg.black }}>
            RESERVAR CITA
          </span>
          <span className="px-[2.6cqw] py-[1.3cqw] border" style={{ borderColor: pg.lineStrong }}>
            VER SERVICIOS
          </span>
        </div>
      </div>

      {/* Guía de estilo flotante */}
      <div
        className="absolute left-[2cqw] bottom-[2cqw] rounded-[1cqw] border p-[1.4cqw] flex flex-col gap-[1cqw] shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
        style={{ background: pg.charcoal, borderColor: pg.line }}
      >
        <div className="flex gap-[0.6cqw]">
          {[pg.black, pg.lineStrong, pg.greige, pg.stone, pg.ivory].map((c) => (
            <span
              key={c}
              className="w-[2.6cqw] h-[2.6cqw] min-w-3 min-h-3 rounded-full border"
              style={{ background: c, borderColor: pg.line }}
            />
          ))}
        </div>
        <div className="flex items-baseline gap-[1.2cqw]" style={{ color: pg.stone }}>
          <span className={`${bodoni} italic text-[max(11px,1.9cqw)] leading-none`}>Aa</span>
          <span className={`${mont} text-[max(7px,0.9cqw)] font-semibold tracking-[0.12em]`}>Bodoni Moda</span>
          <span className={`${mont} text-[max(7px,0.9cqw)] font-semibold tracking-[0.12em]`} style={{ color: pg.ash }}>
            Montserrat
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Fase 3 · Lanzamiento (captura de la web publicada) ─── */
function LiveLayer({ opacity }: { opacity: Opacity }) {
  return (
    // El fondo coincide con el de la captura (#141211): las franjas sobrantes no se notan
    <motion.div style={{ opacity, background: pg.black }} className="absolute inset-0 overflow-hidden">
      <Image
        src={PROJECT.screenshot}
        alt=""
        width={2545}
        height={1273}
        // Original sin recomprimir: máxima nitidez (62 KB)
        unoptimized
        draggable={false}
        // Llena la ventana centrada: en 16:10 solo recorta márgenes laterales vacíos
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
      />
    </motion.div>
  );
}

function StepProgress({ fill }: { fill: Opacity }) {
  return (
    <div aria-hidden className="h-[2px] w-full rounded-full bg-border overflow-hidden">
      <motion.div style={{ scaleX: fill }} className="h-full origin-left bg-text" />
    </div>
  );
}

export default function BuildReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Transformaciones con función (no con arrays): así Framer Motion no las acelera con
  // ScrollTimeline nativo, que mide el scroll de toda la página e ignora `target`.
  const scale = useTransform(scrollYProgress, (v) => 0.9 + 0.1 * between(v, 0, 0.22));
  const design = useTransform(scrollYProgress, (v) => between(v, 0.3, 0.45));
  const live = useTransform(scrollYProgress, (v) => between(v, 0.62, 0.78));
  const fill0 = useTransform(scrollYProgress, (v) => between(v, 0, 0.3));
  const fill1 = useTransform(scrollYProgress, (v) => between(v, 0.3, 0.6));
  const fill2 = useTransform(scrollYProgress, (v) => between(v, 0.6, 0.9));

  const fills = reduce ? [1, 1, 1] : [fill0, fill1, fill2];

  return (
    <section aria-label={`Proyecto destacado: ${PROJECT.name}`} className="bg-bg">
      <div ref={ref} className={`relative ${reduce ? "py-20" : "h-[260vh]"}`}>
        <div
          className={`${
            reduce ? "" : "sticky top-12 h-[calc(100svh-3rem)]"
          } flex flex-col items-center justify-center gap-8 px-5 sm:px-8 py-8`}
        >
          {/* Ventana de navegador */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.28, 0.11, 0.32, 1] }}
            className="w-[min(1000px,100%,calc((100svh_-_19rem)*1.55))]"
          >
            <motion.div
              style={{ scale: reduce ? 1 : scale }}
              className="rounded-[14px] sm:rounded-[18px] border border-border bg-bg overflow-hidden shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)] dark:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]"
              role="img"
              aria-label={`Web de ${PROJECT.name} en tres fases: estructura, diseño y la web publicada.`}
            >
              <div className="h-8 sm:h-10 flex items-center gap-3 px-3.5 border-b border-border bg-bg-alt">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="w-2.5 h-2.5 rounded-full bg-skeleton" />
                  <span className="w-2.5 h-2.5 rounded-full bg-skeleton" />
                  <span className="w-2.5 h-2.5 rounded-full bg-skeleton" />
                </div>
                <div className="mx-auto h-5 sm:h-6 w-[40%] max-w-60 rounded-md bg-control flex items-center justify-center text-[11px] sm:text-[12px] text-text-muted">
                  {PROJECT.domain}
                </div>
                <div className="w-[42px]" aria-hidden />
              </div>
              <div className="@container relative aspect-[4/5] sm:aspect-[16/10] bg-bg overflow-hidden">
                {!reduce && <WireframeLayer />}
                {!reduce && <DesignLayer opacity={design} />}
                <LiveLayer opacity={reduce ? 1 : live} />
              </div>
            </motion.div>
          </motion.div>

          {/* Pasos */}
          <div className="w-full max-w-[1000px]">
            <ol className="grid grid-cols-3 gap-4 sm:gap-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex flex-col gap-3">
                  <StepProgress fill={fills[i]} />
                  <div>
                    <h2 className="text-[15px] sm:text-[17px] font-semibold text-text">{step.title}</h2>
                    <p className="hidden sm:block text-[15px] leading-[1.4] text-text-muted mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[14px] text-text-muted">{PROJECT.name}, Cubas de la Sagra</p>
              <a
                href={PROJECT.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-link hover:underline underline-offset-4"
              >
                Visitar la web
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
