# Apex Web Studio

Sitio web oficial de **Apex Web Studio** desarrollado con **Astro 5**, **Tailwind CSS v4**, **TypeScript**, **GSAP** y **Lenis**.

![Apex Web Studio Logo](/public/logo.png)

## 🚀 Stack Tecnológico

- **Framework Core**: [Astro 5](https://astro.build/) (TypeScript estricto)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Animaciones & Scroll**: [GSAP](https://gsap.com/) (ScrollTrigger) + [Lenis](https://lenis.darkroom.engineering/)
- **Iconografía**: [Lucide Astro](https://lucide.dev/)
- **Tipografías**: `@fontsource-variable/space-grotesk`, `@fontsource-variable/manrope`, `@fontsource-variable/jetbrains-mono`
- **Contenidos**: Astro 5 Content Layer (`src/content.config.ts` con cargador `glob` y MDX)
- **SEO & Sitemap**: `@astrojs/sitemap`, OpenGraph y esquemas JSON-LD dinámicos
- **Formulario**: Integración asíncrona mediante Fetch con Formspree (`https://formspree.io/f/xvkpwaov`)

---

## 🎨 Sistema Estricto de Color

Siguiendo las especificaciones de diseño, el sitio utiliza **exclusivamente dos colores base**:

- `#0A1633` (Azul Noche)
- `#FFFFFF` (Blanco Puro)

Todas las variantes de elevación, bordes, tarjetas, efectos duotono y fondos se obtienen dinámicamente mediante opacidades CSS (`rgba` / `opacity`), garantizando contraste WCAG 2.1 AA en modo claro y modo oscuro.

---

## 📁 Arquitectura de Content Collections

El sitio gestiona los contenidos dinámicos mediante Astro 5 Content Collections configurado en `src/content.config.ts`:

- `src/content/servicios/`: Archivos MDX con los 5 servicios principales (Desarrollo Web High-End, Tiendas E-commerce, Aplicaciones Web Custom, SEO Técnico & Rendimiento, Mantenimiento & Soporte).
- `src/content/proyectos/`: Archivos MDX con los casos de éxito y métricas clave de cada proyecto.

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos

- **Node.js**: `>= 22.12.0`
- **npm**: `>= 10.0.0`

### Pasos

1. Clonar el repositorio e ingresar a la carpeta:
   ```bash
   git clone https://github.com/kekeminer/apex-web-studio.git
   cd apex-web-studio
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Ejecutar verificación de calidad de código:
   ```bash
   npm run lint
   ```

5. Compilar para producción:
   ```bash
   npm run build
   ```

---

## 📬 Soporte Técnico & Contacto

Para consultas técnicas, asistencia en integración o reporte de incidencias:
- **Correo Electrónico**: `wbtech.agency@gmail.com`
- **Instagram**: [@apex_studioweb](https://www.instagram.com/apex_studioweb/)
- **TikTok**: [@apex_studioweb](https://www.tiktok.com/@apex_studioweb)
