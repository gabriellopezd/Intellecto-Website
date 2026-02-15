# Revalidación de auditoría técnica — Intellecto Website

Fecha: 2026-02-15

## Alcance
Se realizó una revalidación estática del repositorio para verificar el estado de los hallazgos críticos reportados anteriormente (arquitectura, performance, mantenibilidad, UX/UI, accesibilidad, SEO, seguridad).

## Resultado ejecutivo
- Estado general: **la mayoría de hallazgos críticos siguen vigentes**.
- No se observaron correcciones estructurales en:
  - Flujo global de contacto
  - SEO técnico por página
  - hardening de seguridad en headers
  - tokens CSS inválidos
  - carga de fuentes e imágenes no optimizada

## Validación por hallazgo crítico

1. **CTA de contacto global roto fuera de Home** — **Pendiente**
   - Persisten enlaces globales `href="#contact"` en layout y páginas internas.
   - Solo `index` contiene `id="contact"`.

2. **Formulario sin procesamiento real** — **Pendiente**
   - El `<form>` permanece sin `action` ni `method` y sin validaciones mínimas `required`.

3. **SEO técnico incompleto** — **Pendiente**
   - Head base conserva `title` + `description`; no se evidencia `canonical`, OG/Twitter por página.

4. **Imagen de perfil potencialmente rota** — **Pendiente**
   - Referencia a `/images/profile-ceo.png` sin asset correspondiente en `public/`.

5. **Variables CSS no definidas** — **Pendiente**
   - Se siguen usando `--color-border` y `--color-text-primary` en páginas, sin definición en `:root`.

6. **Fuentes no optimizadas por `@import`** — **Pendiente**
   - Continúa `@import` de Google Fonts en `global.css`.

7. **Imágenes remotas en background (Unsplash)** — **Pendiente**
   - Persisten fondos de cards en `index.astro` con URL remotas en estilos inline.

8. **Accesibilidad de menú móvil parcial** — **Pendiente**
   - No se observan `aria-expanded`/`aria-controls` ni manejo explícito de foco/escape.

9. **Sin soporte `prefers-reduced-motion`** — **Pendiente**
   - No se detecta media query para reducir movimiento.

10. **Headers de seguridad en Firebase insuficientes** — **Pendiente**
   - Se mantiene configuración de caché para assets, sin CSP/HSTS/nosniff/XFO.

## Chequeo técnico adicional
- Build de Astro ejecutado correctamente.
- Se detecta warning de CSS: `@import` no está en posición válida respecto a otras reglas generadas.

## Recomendación inmediata
Priorizar en el próximo ciclo:
1) flujo `/contacto` funcional end-to-end,
2) SEO técnico base por página,
3) corrección de assets/tokens,
4) hardening de headers,
5) optimización de imágenes y tipografías.
