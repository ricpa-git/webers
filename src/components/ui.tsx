import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/** Botón principal tipo píldora. */
export const primaryButton =
  "inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full bg-button text-white text-[17px] font-normal transition-colors duration-200 hover:bg-button-hover active:scale-[0.98] disabled:opacity-60";

/** Enlace de texto con chevron, al estilo "Más información ›". */
export function ChevronLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-0.5 text-[17px] text-link hover:underline underline-offset-4"
    >
      {children}
      <ChevronRight
        aria-hidden
        className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </a>
  );
}

/** Contenedor horizontal común. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>;
}
