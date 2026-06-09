# PuraCepa Catering — Web Corporativa

Web corporativa premium para **PuraCepa Catering** (Córdoba, España), construida con Astro 6, React, Tailwind CSS v4 y desplegada en GitHub Pages con dominio propio.

**Dominio:** https://puracepa-catering.es

---

## Stack técnico

- **[Astro 6](https://astro.build/)** — generación estática (SSG), SEO óptimo, cero JS por defecto
- **[@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)** — React 19 para islas interactivas (menú móvil, formulario, galería)
- **[Tailwind CSS v4](https://tailwindcss.com/)** via `@tailwindcss/postcss`
- **[Web3Forms](https://web3forms.com/)** — formulario de contacto estático
- **[Astro:assets](https://docs.astro.build/en/guides/images/)** — optimización automática de imágenes a WebP
- **[Fontsource](https://fontsource.org/)** — fuentes self-hosted (Cormorant Garamond + Inter)
- **[GitHub Pages](https://pages.github.com/)** + **[withastro/action](https://github.com/withastro/action)** — deploy automático

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

---

## Variables de entorno

Copia `.env.example` a `.env` y rellena los valores:

```bash
cp .env.example .env
```

| Variable | Descripción |
|----------|-------------|
| `PUBLIC_WEB3FORMS_KEY` | Clave de acceso de Web3Forms (obtener en https://web3forms.com) |

En GitHub Actions, añade `PUBLIC_WEB3FORMS_KEY` como **Repository Secret** en:
`Settings → Secrets and variables → Actions → New repository secret`

---

## Estructura del proyecto

```
src/
├── assets/          # Imágenes locales (si se descargan de Unsplash)
├── components/
│   ├── home/        # Secciones de la Home
│   ├── ContactForm.tsx
│   ├── Header.astro / MobileMenu.tsx
│   ├── Footer.astro
│   ├── SEO.astro
│   └── WhatsAppButton.astro
├── data/            # Contenido editable sin tocar maquetación
│   ├── menus.ts     # ← Edita aquí los menús y precios
│   ├── services.ts  # ← Edita aquí los servicios
│   ├── testimonials.ts
│   └── process.ts
├── layouts/
│   └── Layout.astro # Layout base con SEO, fonts, JSON-LD
├── pages/           # Rutas (file-based routing)
│   ├── index.astro
│   ├── catering-cordoba.astro
│   ├── catering-bodas-cordoba.astro
│   ├── catering-eventos-corporativos-cordoba.astro
│   ├── comuniones-cordoba.astro
│   ├── menus-catering-cordoba.astro
│   ├── contacto.astro
│   ├── aviso-legal.astro
│   ├── politica-privacidad.astro
│   └── politica-cookies.astro
└── styles/
    └── global.css   # Tokens de diseño Tailwind v4
public/
├── CNAME            # Dominio personalizado para GitHub Pages
├── robots.txt
└── favicon.svg
```

---

## Personalización rápida

### Datos de contacto
Busca y sustituye `PLACEHOLDER` en los archivos del proyecto:
- Teléfono: `+34XXXXXXXXX` → número real
- Email: `info@puracepa-catering.es` → email real
- WhatsApp: URL en `src/components/WhatsAppButton.astro`

### Menús y precios
Edita **`src/data/menus.ts`** — cambia nombres de platos, precios y descripciones sin tocar la maquetación.

### Testimonios
Edita **`src/data/testimonials.ts`** con las reseñas reales antes de publicar.

### Imágenes
Consulta **`IMAGES.md`** para ver todas las imágenes utilizadas y sus fuentes.

---

## Despliegue en GitHub Pages con dominio propio

### 1. Configuración del repositorio

1. Ve a `Settings → Pages` en tu repositorio de GitHub
2. En **Source**, selecciona `GitHub Actions`
3. Haz push a la rama `main` — el workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

### 2. DNS — Configuración en tu proveedor de dominio

Configura estos registros en el panel de tu proveedor de dominio (e.g., Arsys, OVH, Namecheap):

**Apex domain (`puracepa-catering.es`) — 4 registros A:**
```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

**Subdominio www — 1 registro CNAME:**
```
CNAME  www  TU-USUARIO.github.io
```
*(Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub)*

### 3. Dominio personalizado en GitHub

1. En el repositorio: `Settings → Pages → Custom domain`
2. Escribe `puracepa-catering.es` y guarda
3. Activa **"Enforce HTTPS"** (puede tardar unos minutos en estar disponible)

El archivo `public/CNAME` garantiza que el dominio persiste en cada despliegue.

### 4. Secret para el formulario

En `Settings → Secrets and variables → Actions → New repository secret`:
- Nombre: `PUBLIC_WEB3FORMS_KEY`
- Valor: tu clave de Web3Forms

---

## SEO y rendimiento

- JSON-LD `LocalBusiness/Caterer` en todas las páginas
- Imágenes optimizadas automáticamente a WebP por `astro:assets`
- `sitemap-index.xml` generado por `@astrojs/sitemap`
- `robots.txt` con referencia al sitemap
- Todas las URLs canónicas apuntan a `puracepa-catering.es`
- Transiciones de página con `<ClientRouter />` (view transitions)

---

## Páginas legales

Los textos de **Aviso Legal**, **Política de Privacidad** y **Política de Cookies** son orientativos.
**Deben ser revisados por un abogado** antes de publicar el sitio y completados con los datos reales del titular.
