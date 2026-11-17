# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Webers** — Web corporativa de una empresa de desarrollo web en Madrid. Landing minimalista inspirada en la estética de apple.com: mucho aire, tipografía del sistema, tarjetas grandes sin sombras, modo claro y oscuro que sigue al sistema. Secciones: Hero, Cómo trabajamos (BuildReveal), Servicios, Trabajos, Nosotros, Contacto y Footer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4 (tokens en `@theme` + sobrescritura en `html.dark`)
- **Animations**: Framer Motion (envuelto en `<MotionConfig reducedMotion="user">`)
- **Tema**: next-themes (`attribute="class"`, `defaultTheme="system"`)
- **Icons**: Lucide React (v1+ no incluye iconos de marca; para redes sociales usar SVGs inline)
- **Language**: TypeScript strict

## Commands

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servir build de producción
npm run lint     # ESLint
```

## Architecture

```
src/
├── app/
│   ├── globals.css    # Tokens (colores claro/oscuro), escala tipográfica (type-*), base y reduced-motion
│   ├── layout.tsx     # Root layout (metadata SEO, Inter como respaldo de SF Pro, themeColor)
│   └── page.tsx       # Página principal, compone todas las secciones
└── components/
    ├── ui.tsx           # primaryButton, ChevronLink, Container (piezas compartidas)
    ├── ThemeProvider.tsx # next-themes + MotionConfig
    ├── Navbar.tsx       # Barra translúcida de 48px, menú móvil a pantalla completa, toggle de tema
    ├── Hero.tsx         # Titular centrado + CTAs (única secuencia de carga)
    ├── BuildReveal.tsx  # Elemento firma: ventana de navegador que se construye con el scroll
    ├── Services.tsx     # Rejilla bento con jerarquía (1 grande, 4 medianas, 1 horizontal)
    ├── Portfolio.tsx    # Carrusel horizontal con scroll-snap y botones anterior/siguiente
    ├── About.tsx        # Frase grande + 3 valores
    ├── Contact.tsx      # Formulario con validación y mailto (sin backend) + datos de contacto
    ├── Footer.tsx       # Footer compacto estilo Apple
    └── Testimonials.tsx # Desactivado (comentado), con el estilo antiguo
```

## Design System

### Colores (`globals.css`)
| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `bg` | `#FFFFFF` | `#000000` | Fondo principal |
| `bg-alt` | `#F5F5F7` | `#161617` | Secciones alternas, footer |
| `tile` / `tile-alt` | `#F5F5F7` / `#FFFFFF` | `#1C1C1E` / `#000000` | Tarjetas sobre `bg` / sobre `bg-alt` |
| `text` | `#1D1D1F` | `#F5F5F7` | Texto principal |
| `text-muted` | `#6E6E73` | `#A1A1A6` | Texto secundario (≥4,6:1, **nunca con opacidad**) |
| `link` | `#0066CC` | `#2997FF` | Enlaces de texto |
| `button` | `#0071E3` | `#0071E3` | Botones principales (texto blanco, 4,7:1) |
| `border` / `field-border` | `#D2D2D7` / `#86868B` | `#424245` / `#6E6E73` | Separadores / bordes de campos |

### Tipografía
- Fuente del sistema (`-apple-system`, SF Pro) con Inter de respaldo. Una sola familia.
- Escala: `type-hero`, `type-headline`, `type-title`, `type-intro`; cuerpo a 17px; mínimo 12px.
- Sentence case en todo. Sin etiquetas en mayúsculas, sin monoespaciada, sin numeración decorativa.

### Conventions
- Radio de tarjetas: 28px. Sin sombras salvo en la ventana de BuildReveal y en las tarjetas del carrusel de Trabajos (utilidad `card-lift`: sombra suave + escala 1 % al hover, como apple.com/store).
- Proyectos con `url` en `Portfolio.tsx`: la tarjeta entera es enlace (nueva pestaña) y muestra el botón redondo «›».
- Movimiento solo en: carga del Hero, scroll de BuildReveal y respuesta a acciones (menú, carrusel, formulario). **No** añadir `whileInView` a cada sección.
- Toda animación debe respetar `prefers-reduced-motion` (MotionConfig + CSS + hook en BuildReveal).
- Controles táctiles de al menos 44×44px; foco visible global con `:focus-visible`.
- Comprobar el contraste (4,5:1 mínimo) en ambos temas al añadir colores.

## Important Notes

- **Idioma**: Todo el contenido está en español
- **SEO**: Metadata configurada en `layout.tsx`, lang="es"
- **Responsive**: Mobile-first con breakpoints `sm:`, `md:`, `lg:`
- **No hay backend**: el formulario de contacto valida y abre un `mailto:` con el mensaje
- **Pendiente**: páginas legales (privacidad, aviso legal) enlazadas desde el footer con `#`
- El diseño anterior (estilo terminal) está en el historial de git, commit `c6a03c6`
- Antes de usar un icono de Lucide, verificar que existe en la versión instalada
