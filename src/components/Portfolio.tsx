"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  /** Fondo de la "pantalla" de muestra */
  canvas: string;
  /** Color de los bloques dentro de la pantalla */
  ink: string;
  /** Web del proyecto. Si falta, la tarjeta no es enlace */
  url?: string;
  /** Captura real del proyecto (en /public). Si falta, se dibuja una pantalla abstracta */
  image?: {
    src: string;
    /** object-position de la captura dentro de la tarjeta */
    position?: string;
    /** Ampliación para centrar lo importante (1 = sin zoom) */
    zoom?: number;
  };
};

const projects: Project[] = [
  {
    title: "Pablo Gordo Barbería",
    category: "Web corporativa",
    description: "Barbería de barrio en Cubas de la Sagra, con carta de servicios y reserva de citas online.",
    stack: ["WordPress", "Diseño a medida"],
    canvas: "linear-gradient(160deg, #b8ac9c 0%, #736a60 100%)",
    ink: "#f2eee8",
    url: "https://webersdev.com/",
    image: { src: "/proyectos/pablo-gordo-barberia.png", position: "50% 45%", zoom: 1.5 },
  },
  {
    title: "Portfolio de Ricardo",
    category: "Portfolio interactivo",
    description: "Una escena 3D de escritorio con una terminal para explorar experiencia y proyectos.",
    stack: ["Astro", "React", "WebGL"],
    canvas: "linear-gradient(160deg, #c98a4b 0%, #4a2f1c 100%)",
    ink: "#ffe6c7",
    url: "https://portfolio-ricardo-delta.vercel.app/",
    image: { src: "/proyectos/portfolio-ricardo.jpg", position: "50% 55%", zoom: 1.35 },
  },
  {
    title: "UrbanStudio",
    category: "Portfolio",
    description: "Estudio de arquitectura con galería inmersiva y escenas 3D.",
    stack: ["Three.js", "GSAP", "Tailwind"],
    canvas: "linear-gradient(160deg, #5b5b60 0%, #26262a 100%)",
    ink: "#e2e2e6",
  },
  {
    title: "FitTrack Pro",
    category: "App web",
    description: "Planes de entrenamiento personalizados y conexión con wearables.",
    stack: ["React", "Firebase", "PWA"],
    canvas: "linear-gradient(160deg, #f08a3c 0%, #c2452f 100%)",
    ink: "#ffe3cf",
  },
  {
    title: "NomadBooking",
    category: "Plataforma de reservas",
    description: "Reservas de coworking con mapa interactivo y pago online.",
    stack: ["Next.js", "Mapbox", "Prisma"],
    canvas: "linear-gradient(160deg, #3aa6c9 0%, #1b6487 100%)",
    ink: "#d3f1fb",
  },
  {
    title: "Artisan Blog",
    category: "Blog y CMS",
    description: "Editor visual, SEO automático y newsletter integrada.",
    stack: ["Astro", "MDX", "Tailwind"],
    canvas: "linear-gradient(160deg, #a2569b 0%, #5e2a63 100%)",
    ink: "#f6dcf3",
  },
];

/** Captura real asomando como una pantalla sobre el fondo de color del proyecto. */
function ShotPreview({ canvas, image, alt }: { canvas: string; image: NonNullable<Project["image"]>; alt: string }) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: canvas }}>
      <div className="absolute left-8 right-0 top-8 bottom-0 overflow-hidden rounded-tl-[14px] shadow-[0_-2px_24px_rgba(0,0,0,0.25)]">
        <Image
          src={image.src}
          alt={alt}
          fill
          unoptimized
          sizes="23rem"
          draggable={false}
          className="object-cover select-none"
          style={{ objectPosition: image.position ?? "center", transform: `scale(${image.zoom ?? 1})` }}
        />
      </div>
    </div>
  );
}

function ScreenPreview({ canvas, ink }: { canvas: string; ink: string }) {
  return (
    <div aria-hidden className="relative h-full overflow-hidden" style={{ background: canvas }}>
      <div
        className="absolute left-8 right-0 top-8 bottom-0 rounded-tl-[14px] p-5 flex flex-col gap-3"
        style={{ background: "rgb(255 255 255 / 0.12)" }}
      >
        <div className="h-2 w-16 rounded-full" style={{ background: ink, opacity: 0.9 }} />
        <div className="mt-3 h-4 w-3/4 rounded-full" style={{ background: ink }} />
        <div className="h-4 w-1/2 rounded-full" style={{ background: ink }} />
        <div className="mt-auto grid grid-cols-2 gap-3">
          <div className="h-16 rounded-[10px]" style={{ background: ink, opacity: 0.35 }} />
          <div className="h-16 rounded-[10px]" style={{ background: ink, opacity: 0.2 }} />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  // Alinea el carrusel con el contenedor central de 1120px
  const gutter = "max(1.25rem, calc((100vw - 1120px) / 2 + 2rem))";

  return (
    <section id="portfolio" className="bg-bg-alt py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 mb-10 sm:mb-12">
        <h2 className="type-headline text-text text-balance">Proyectos recientes.</h2>
        <p className="type-intro text-text-muted mt-4 max-w-[36rem] text-pretty">
          Webs, tiendas y aplicaciones que hemos diseñado y programado de principio a fin.
        </p>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Proyectos"
        // py: margen para que la sombra y el +1 % del hover no se recorten (overflow-x recorta también en vertical)
        className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory overscroll-x-contain py-6 -my-4 focus-visible:outline-offset-[-2px]"
        style={{ paddingInline: gutter, scrollPaddingInline: gutter }}
      >
        {projects.map((p) => {
          const content = (
            <>
              <div className="p-8 pb-7">
                <p className="text-[14px] text-text-muted">{p.category}</p>
                <h3 className="type-title text-text mt-1.5">{p.title}</h3>
                <p className="text-[17px] text-text-muted mt-3 min-h-[3lh]">{p.description}</p>
                <p className="text-[14px] text-text-muted mt-4">{p.stack.join(", ")}</p>
              </div>
              <div className="relative h-[15rem] mt-auto">
                {p.image ? (
                  <ShotPreview canvas={p.canvas} image={p.image} alt={`Portada de la web ${p.title}`} />
                ) : (
                  <ScreenPreview canvas={p.canvas} ink={p.ink} />
                )}
                {p.url && (
                  // Indicador visual; el enlace es toda la tarjeta
                  <span
                    aria-hidden
                    className="absolute right-5 bottom-5 w-9 h-9 rounded-full bg-white/85 text-[#1d1d1f] flex items-center justify-center backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                )}
              </div>
            </>
          );
          const cardClass =
            "card-lift h-full rounded-[28px] bg-tile-alt overflow-hidden flex flex-col";

          return (
            <li key={p.title} className="snap-start shrink-0 w-[min(82vw,22rem)] sm:w-[23rem]">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} focus-visible:outline-offset-4`}
                >
                  {content}
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              ) : (
                <article className={cardClass}>{content}</article>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Proyecto anterior"
          className="w-11 h-11 rounded-full bg-control text-text flex items-center justify-center transition-opacity duration-200 disabled:opacity-40 disabled:cursor-default hover:enabled:brightness-95 dark:hover:enabled:brightness-125"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Proyecto siguiente"
          className="w-11 h-11 rounded-full bg-control text-text flex items-center justify-center transition-opacity duration-200 disabled:opacity-40 disabled:cursor-default hover:enabled:brightness-95 dark:hover:enabled:brightness-125"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
