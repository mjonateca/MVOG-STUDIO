# MVOG · Boutique Development Studio

Sitio web premium para MVOG SRL — promotora boutique de villas de autor en República Dominicana.

## Stack
- Next.js 14 (App Router) · TypeScript
- Tailwind CSS · Framer Motion
- Toggle de idioma ES/EN (persistido en localStorage)
- Imágenes reales de Casa 174 optimizadas en `/public/villa`

## Desarrollo
```bash
npm install
npm run dev
```

## Producción / Vercel
```bash
npm run build
```
Deploy directo en Vercel: importar el repo, framework Next.js, sin configuración extra.

## Estructura
- `app/page.tsx` — Home (10 secciones del brief)
- `app/projects/casa-174/page.tsx` — Página del proyecto con galería filtrable y lightbox
- `components/` — Header, Hero, SectionLabel, PrincipleCard, ProjectCard, ProcessStep, CTA, Footer, Reveal, ContactForm
- `lib/i18n.ts` — Diccionario completo ES/EN
