# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Webers** — Web corporativa de una empresa de desarrollo web. Landing page con estilo dark/terminal — fondo oscuro, acentos azules con glows, toques monospace. Secciones: Hero, Servicios, Portfolio, Sobre nosotros, Testimonios, Contacto y Footer.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4 (con `@theme inline` para tokens de diseño)
- **Animations**: Framer Motion
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
│   ├── globals.css    # Tokens de diseño (colores, fuentes) via @theme inline
│   ├── layout.tsx     # Root layout (metadata SEO, fuentes Google)
│   └── page.tsx       # Página principal, compone todas las secciones
└── components/
    ├── Navbar.tsx      # Navegación fija con menú móvil animado
    ├── Hero.tsx        # Hero con gradiente, stats y CTAs
    ├── Services.tsx    # Grid de servicios con iconos y animaciones stagger
    ├── Portfolio.tsx   # Grid de proyectos con cards y overlay hover
    ├── About.tsx       # Sección sobre nosotros con valores y highlights
    ├── Testimonials.tsx # Testimonios con rating de estrellas
    ├── Contact.tsx     # Formulario de contacto + info de contacto
    └── Footer.tsx      # Footer con links, redes sociales y copyright
```

## Design System

### Color Palette — Dark Terminal Theme (defined in `globals.css`)
- **Bg**: `#0B0F19` (fondo principal) / **Bg Light**: `#0F1629` (secciones alternadas)
- **Surface**: `#111827` (cards) / **Surface Light**: `#1F2937` (elementos internos)
- **Border**: `#374151` (bordes sutiles, siempre con `/50` opacity)
- **Primary**: `#3B82F6` / **Primary Dark**: `#1D4ED8` / **Primary Light**: `#60A5FA`
- **Accent**: `#06B6D4` (cyan — gradientes texto, detalles)
- **Text**: `#F1F5F9` / **Text Muted**: `#94A3B8`

### Conventions
- Estilo visual "terminal": fondos oscuros, glows azules sutiles, fuente mono para badges/stats
- Logo usa `Terminal` icon + cursor parpadeante (`terminal-cursor` class)
- Section badges con estilo comando: `/servicios`, `/portfolio`, etc. (font-mono, border)
- Hover effects usan `shadow-[0_0_Xpx_rgba(59,130,246,0.Y)]` para glow azul
- Todos los componentes usan `"use client"` por las animaciones de Framer Motion
- Animaciones con `whileInView` y `viewport={{ once: true }}` para scroll reveal
- Iconos de redes sociales son SVGs inline (no lucide) por compatibilidad con v1+
- Bordes siempre con `border-border/50` para sutileza

## Important Notes

- **Idioma**: Todo el contenido está en español
- **SEO**: Metadata configurada en `layout.tsx`, lang="es"
- **Responsive**: Mobile-first con breakpoints `sm:`, `md:`, `lg:`
- **No hay backend**: El formulario de contacto es solo frontend por ahora
- Antes de usar un icono de Lucide, verificar que existe en la versión instalada
