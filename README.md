# Intellecto - Portal de Proyectos y Marca Personal

## 🚀 Descripción
**Intellecto** es un universo digital de nivel **Ultra Premium** diseñado para transformar ideas en proyectos innovadores. Este portal sirve como marca personal y portafolio profesional de **Gabriel López**, destacando su experiencia en **Arquitectura Empresarial (TOGAF), Estrategia de TI y Liderazgo de Proyectos**.

La versión actual representa un rediseño completo enfocado en una estética cinematográfica, micro-interacciones fluidas y una jerarquía visual sofisticada.

## ✨ Mejoras UI/UX Recientes
Se ha implementado una evolución visual profunda:
*   **Nueva Paleta de Colores:** Se reemplazó la paleta de colores "Cyber-Neon" por un esquema más corporativo y vibrante, con el rojo/naranja de la marca y un azul cielo como acento secundario.
*   **Profundidad Visual:** Glassmorphism avanzado con capas de desenfoque, bordes luminosos y sombras multinivel.
*   **Micro-interacciones:** Efectos de spotlight dinámico, efectos 3D tilt en tarjetas y transiciones fluidas.
*   **Animaciones Cinematográficas:** Orbs de luz flotantes y entradas coordinadas (stagger animations).

## 🎨 Sistema de Diseño
*   **Tipografía:** 
    *   **Outfit:** Fuente display para títulos, aportando modernidad y carácter.
    *   **Inter:** Fuente para cuerpo de texto, garantizando máxima legibilidad.
*   **Paleta de Colores:** Esquema dual con un tema oscuro por defecto y un tema claro opcional. Los colores primarios son un rojo-naranja vibrante y un azul cielo, aplicados sobre fondos neutros y profundos (oscuro) o claros y limpios (claro).

## 🛠️ Tech Stack
*   **Framework:** [Astro](https://astro.build/) (v4.x)
*   **CMS:** [Decap CMS](https://decapcms.org/) (Headless, Git-based)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Hosting:** [Firebase Hosting](https://firebase.google.com/)
*   **Control de Versiones:** [Git & GitHub](https://github.com/)

## 💻 Despliegue Local
Para ejecutar el proyecto en tu entorno local:

1.  **Modo Desarrollo (Hot Reload):**
    ```bash
    npm run dev
    ```
2.  **Build de Producción:**
    ```bash
    npm run build
    ```
3.  **Previsualizar Producción:**
    ```bash
    npm run preview
    ```

## 🌐 Despliegue en Producción
El despliegue se realiza a través de Firebase Hosting en el proyecto `intellecto-website`.
```bash
firebase deploy --only hosting
```
O de forma automática a través del flujo de CI/CD al hacer push a la rama `main`.

## 📂 Estructura del Proyecto
*   `/src/content`: Colecciones de contenido para Blog y Portafolio.
*   `/src/pages`: Páginas y rutas principales del sitio.
*   `/src/layouts`: Plantilla base del sitio (`Layout.astro`).
*   `/src/components`: Componentes reutilizables de Astro/UI.
*   `/public/admin`: Configuración y punto de entrada para Decap CMS.
*   `/public`: Recursos estáticos (imágenes, favicons, etc.).

## 📝 Historial de Cambios Destacados
*   **2024-07-28:** `feat: Implement Decap CMS and refactor content to collections.`
*   **2024-07-27:** `feat: Implement new red-orange and sky-blue color palette.`
*   **2024-02-15:** `feat: Initial setup with Astro, Tailwind, and Firebase.`
*   **2024-02-14:** `docs: Create initial project structure and README.`

## 👤 Autor
**Gabriel López** - Arquitecto Empresarial y Estratega de TI.

---
*Última actualización: 28 de Julio de 2024*
