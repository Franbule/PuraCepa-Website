# PROMPT PARA CLAUDE CODE — Web corporativa "PuraCepa Catering" (Astro)

## 1. Rol y objetivo

Actúa como **ingeniero frontend senior** especializado en webs de conversión y **SEO local**. Construye desde cero una web corporativa premium para **PuraCepa Catering** (Córdoba, España), enfocada a captar solicitudes de presupuesto para bodas, eventos corporativos, comuniones, bautizos y celebraciones privadas.

La web debe transmitir: confianza, elegancia, profesionalidad, experiencia gastronómica premium y sensación de marca consolidada.

**Antes de escribir código**, genera un plan: estructura de carpetas, lista de componentes/islas con sus props, dependencias y rutas. Luego impleméntalo en fases y deja la app ejecutable con `npm install && npm run dev`.

## 2. Stack técnico (DECISIÓN FIRME)

- **Astro + TypeScript** (genera HTML estático por ruta → SEO y Lighthouse óptimos, cero JS por defecto).
- **`@astrojs/react`** para **islas** solo donde haya interactividad real: menú móvil, formulario y lightbox de galería. Todo lo demás, Astro estático.
- Usa las directivas de hidratación correctas: `client:load` solo en lo crítico, `client:visible`/`client:idle` para lo demás. El botón de WhatsApp y los CTA son enlaces `<a>`, **sin JS**.
- **Tailwind CSS** mediante la integración oficial vigente de Astro (Tailwind v4 con `@tailwindcss/vite`; usa lo que recomiende la documentación actual de Astro).
- **`astro:assets`** (`<Image />` / `<Picture />`) para optimización automática de imágenes (WebP, responsive, dimensiones fijas → sin CLS).
- **`@astrojs/sitemap`** para `sitemap.xml`.
- **`@fontsource`** para fuentes self-hosted (mejor rendimiento y RGPD; nada de Google Fonts CDN).
- **`<ClientRouter />`** (`astro:transitions`) para transiciones de página suaves (toque premium), respetando `prefers-reduced-motion`.
- **Despliegue estático en GitHub Pages con DOMINIO PROPIO** (NO la URL `*.github.io`) mediante la **GitHub Action oficial `withastro/action`** (`.github/workflows/deploy.yml`). Ver sección 12 para la config completa de dominio. Astro genera páginas reales, así que **no hace falta el truco del `404.html`**.

## 3. Criterios de aceptación (Definition of Done)

- `npm install && npm run dev` arranca sin errores ni warnings.
- `npm run build` compila limpio y genera HTML estático por ruta.
- **Lighthouse ≥ 95** en Performance, SEO, Accessibility y Best Practices (móvil).
- Mínimo JS en cliente: solo las islas estrictamente necesarias.
- 100% responsive (breakpoints: móvil 375px, tablet 768px, desktop 1280px).
- Sin Cumulative Layout Shift: todas las imágenes con dimensiones vía `astro:assets`.
- HTML semántico, navegable por teclado, contraste AA, `alt` descriptivo en todas las imágenes.
- Cada ruta tiene su propio `<title>`, `meta description`, canonical y Open Graph.

## 4. Identidad de marca y design tokens

**Nombre:** PuraCepa Catering
**Eslogan:** "Sabor y experiencia para crear recuerdos inolvidables."
**Tono:** elegante, cercano, premium, emocional sin exagerar.

**Paleta (define estos hex exactos como tokens de Tailwind):**
- Fondo marfil: `#FAF7F2`
- Blanco: `#FFFFFF`
- Beige suave: `#E9DECB`
- Negro elegante: `#161412`
- Dorado acento (sutil, no chillón): `#BFA15F`
- Texto secundario: `#6B6560`

**Tipografía:**
- Titulares (serif elegante): **Cormorant Garamond** (`@fontsource/cormorant-garamond`).
- Cuerpo (sans legible): **Inter** (`@fontsource/inter`).
- `font-display: swap`.

**Estética:** mucho espacio en blanco, dorado solo como acento (líneas finas, hover, micro-detalles), nunca relleno. Animaciones suaves al hacer scroll (fade/slide sutil, respetando `prefers-reduced-motion`). Evita por completo apariencia de plantilla barata.

## 5. Rutas (file-based routing en `src/pages/`)

- `/` — Home (todas las secciones de abajo).
- `/catering-cordoba` — Landing SEO general.
- `/catering-bodas-cordoba` — Landing SEO bodas.
- `/catering-eventos-corporativos-cordoba` — Landing SEO corporativo.
- `/comuniones-cordoba` — Landing SEO comuniones.
- `/menus-catering-cordoba` — Página de **menús** de catering (ver sección 6.bis).
- `/contacto` — Página de contacto.
- `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` — Páginas legales.

Cada landing SEO con texto único (no duplicado), su propio H1, CTA a presupuesto y enlazado interno entre ellas + Home. Reutiliza componentes `.astro` para secciones compartidas.

## 6. Secciones de la Home

1. **Header** sticky con logo, nav (Inicio, Servicios, Menús, Bodas, Corporativo, Comuniones, Contacto) y botón **"Solicitar presupuesto"**. Menú hamburguesa accesible en móvil (isla React `client:load`).
2. **Hero** full-screen con imagen de boda elegante (`<Image />`, sin lazy). H1 "PuraCepa Catering", eslogan, subtítulo ("Especialistas en bodas, eventos corporativos, comuniones y celebraciones en Córdoba."), botones "Solicitar presupuesto" + "Ver servicios".
3. **Servicios** — cards: bodas, corporativo, comuniones, bautizos, celebraciones privadas, cócteles. Cada card: imagen, título, descripción breve, hover elegante.
4. **Menús (adelanto en la home)** — muestra 2-3 menús destacados como tarjetas elegantes (nombre + breve descripción + foto gourmet) y un botón **"Ver todos los menús"** que enlaza a `/menus-catering-cordoba`. No vuelques aquí los menús completos, solo el gancho.
5. **Sobre nosotros** — experiencia, calidad, atención personalizada, profesionalidad.
6. **Galería** — grid masonry responsive con lightbox accesible (isla React `client:visible`).
7. **Por qué elegirnos** — 4 bloques: ingredientes de calidad, servicio personalizado, equipo profesional, experiencias memorables.
8. **Testimonios** — tarjetas premium. ⚠️ Marca los datos en el código como `// PLACEHOLDER: sustituir por reseñas reales antes de publicar` (no publicar reseñas inventadas como reales).
9. **Proceso** — 5 pasos: contacto, asesoramiento, propuesta personalizada, organización, celebración.
10. **CTA final** — "Tu evento merece una experiencia inolvidable" + botón "Solicita tu presupuesto".
11. **Contacto** — formulario + teléfono, email, WhatsApp, ubicación Córdoba, mapa opcional (iframe lazy).
12. **Footer** — datos, redes, enlaces legales.

## 6.bis. Página de Menús (`/menus-catering-cordoba`)

El cliente quiere mostrar los **menús de catering**. Crea una página dedicada (mejor para SEO y para enlazar) con presentación tipo carta premium:

- **H1** y texto intro orientado a SEO ("Menús de catering en Córdoba para bodas y eventos...").
- Varios **menús/paquetes** como bloques elegantes. Estructura cada uno con: nombre (p. ej. "Menú Clásico", "Menú Gourmet", "Menú Cóctel", "Menú Comunión"), tipo de evento, y secciones de platos (aperitivos, entrantes, principales, postres, barra/bebidas). Tipografía serif tipo carta de restaurante, mucho aire, dorado como acento en separadores.
- **Precios:** muestra "Desde XX €/persona" o "Presupuesto personalizado" como marcador, NO inventes precios reales. Marca todo el contenido en `/src/data/menus.ts` con `// PLACEHOLDER: sustituir por menús y precios reales del cliente`.
- Opcional: botón "Descargar menús (PDF)" si el cliente aporta el archivo (déjalo preparado, apuntando a `/public`).
- CTA "Solicitar presupuesto" al final y enlaces internos a las landings de bodas/corporativo/comuniones.
- Centraliza los datos de menús en `/src/data/menus.ts` para que se editen sin tocar maquetación.



- **Botón flotante de WhatsApp** persistente, simple `<a>` sin JS (`https://wa.me/34XXXXXXXXX?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20presupuesto`). Número como placeholder.
- **Formulario funcional** como isla React vía **Web3Forms** (campo `access_key` desde variable de entorno; incluye `.env.example`). Astro es estático, así que NO uses Astro Actions (requieren adaptador SSR). Campos: nombre, email, teléfono, tipo de evento, fecha, nº invitados, mensaje. Estados carga/éxito/error + validación.
- **Checkbox de consentimiento RGPD** obligatorio, enlazando a `/politica-privacidad`.
- CTA "Solicitar presupuesto" visible en todas las páginas.

## 8. SEO técnico

- Gestiona `<title>`, `meta description`, canonical y Open Graph desde un componente `<SEO />` reutilizable en el layout, con props por página. **Todas las URLs (canonical, OG, sitemap) deben usar el dominio propio absoluto** (ver sección 12), nunca `localhost` ni `*.github.io`.
- **Meta home:**
  - Title: `PuraCepa Catering | Catering para Bodas y Eventos en Córdoba`
  - Description: `PuraCepa Catering ofrece servicios de catering para bodas, eventos corporativos y celebraciones en Córdoba. Gastronomía premium y experiencias inolvidables.`
- Keywords objetivo, distribuidas con naturalidad: catering cordoba, catering en cordoba, catering bodas cordoba, catering eventos cordoba, empresa catering cordoba, catering comuniones cordoba.
- **JSON-LD `LocalBusiness`/`Caterer`** en el layout con NAP (nombre, dirección Córdoba, teléfono), `url` (dominio propio), `areaServed`, `priceRange`.
- `@astrojs/sitemap` (usa el `site` con el dominio propio) + `robots.txt` en `/public` con la línea `Sitemap:` apuntando al dominio propio.
- Open Graph + Twitter Card con imagen.
- Un solo H1 por página, jerarquía de headings correcta.

## 9. Imágenes

- Stock premium de Unsplash/Pexels. **Descárgalas a `/src/assets`** y sírvelas con `astro:assets` (`<Image />`/`<Picture />`) → WebP, responsive y dimensiones fijas automáticas.
- Distribución: ~70% bodas, ~20% gastronomía, ~10% corporativo.
- Keywords: luxury wedding catering, elegant wedding table, fine dining event, corporate catering event, gourmet food plating, wedding reception elegant lights.
- Estilo coherente: iluminación cálida y natural, calidad alta. Deja un `IMAGES.md` con URL de origen y atribución de cada foto.

## 10. Legal (obligatorio en España)

Crea páginas con texto base (con comentario avisando de que debe revisarlo un profesional y rellenar datos reales): **Aviso legal** (LSSI-CE), **Política de privacidad** (RGPD/LOPDGDD) y **Política de cookies**. Si añades analytics, incluye **banner de cookies** con consentimiento previo.

## 11. Entrega

- Estructura limpia: `src/pages/`, `src/components/`, `src/layouts/`, `src/data/` (servicios, testimonios, proceso centralizados y fáciles de editar), `src/assets/`.
- `README.md` con instalación, desarrollo, build y **despliegue en GitHub Pages con dominio propio** (workflow `withastro/action`, archivo `CNAME`, y los pasos de DNS de la sección 12).
- `.env.example` con las variables necesarias.
- `astro.config.mjs` con integraciones (`react`, `sitemap`, tailwind) y `site` con el dominio propio (sin `base`).

## 12. Dominio propio y despliegue (IMPORTANTE)

El sitio se sirve en un **dominio propio ya comprado**, NO en `usuario.github.io`. Configura todo en consecuencia:

- En `astro.config.mjs`: `site: 'https://TU_DOMINIO'` (p. ej. `https://puracepacatering.es`) y **sin `base`** (la web vive en la raíz del dominio).
- Crea un archivo **`public/CNAME`** que contenga únicamente el dominio sin protocolo (p. ej. `puracepacatering.es`). Astro lo copia a la raíz del build; esto es lo que mantiene el dominio en cada despliegue (si no, GitHub Pages lo resetea).
- Decide **www vs sin www** y fija uno como canónico; el otro debe redirigir (GitHub Pages lo gestiona solo una vez configurado el dominio). Usa el canónico elegido en `site`, `CNAME`, sitemap y JSON-LD de forma consistente.
- En `robots.txt`, la línea `Sitemap:` debe apuntar a `https://TU_DOMINIO/sitemap-index.xml`.
- Workflow `.github/workflows/deploy.yml` con `withastro/action` + deploy a Pages.

**En el README, documenta los pasos de DNS** que debe hacer el usuario en su proveedor (a modo de checklist, no automatizable desde el código):
- Apex (`TU_DOMINIO`): 4 registros `A` a las IPs de GitHub Pages → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Subdominio `www`: registro `CNAME` → `usuario.github.io`.
- En el repo: Settings → Pages → introducir el dominio personalizado y activar **"Enforce HTTPS"**.

⚠️ Sustituye `TU_DOMINIO` por el dominio real en TODOS los sitios antes de hacer build.
