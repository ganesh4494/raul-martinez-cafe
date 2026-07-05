# Raúl Martínez — Café de especialidad

Sitio web de una sola página (landing) para **Raúl Martínez**, caficultor y
*Q Arabica Grader* venezolano. Vende café, cursos y asesorías; **todos los
botones llevan a WhatsApp** (sin pasarela de pago).

Inspirado en el estilo editorial de Onyx Coffee Lab, con identidad propia:
paleta cálida de saco de café, tipografía *Fraunces + Hanken Grotesk* y una
capa técnica en monoespaciada (*IBM Plex Mono*) que refleja el mundo del
laboratorio de cata / Q Grader.

## Estructura

```
raul-martinez-cafe/
├── index.html            ← la página (todo el contenido)
├── assets/
│   ├── styles.css        ← diseño (colores, tipografía, temas claro/oscuro)
│   └── app.js            ← WhatsApp, tema, menú móvil, animaciones
├── images/               ← pon aquí tus fotos (ver el .txt dentro)
└── README.md
```

## ⚙️ Lo único que DEBES cambiar para publicar

### 1. Número de WhatsApp  ← imprescindible
Abre `assets/app.js` y cambia la primera línea:

```js
const WHATSAPP_NUMBER = "584140000000";   // ← pon el número real de Raúl
```

Formato internacional **sin +, sin espacios ni guiones**.
Venezuela: `58` + número. Ej.: `+58 414-123-4567` → `"584141234567"`.

Con eso, cada botón abre WhatsApp con un mensaje ya escrito según la sección
(comprar café, reservar curso, asesorar finca, etc.).

### 2. Fotos (recomendado, es lo que lo hace "nivel Onyx")
Mete tus fotos en la carpeta `images/` con los nombres indicados en
`images/LEER-antes-de-poner-fotos.txt`. Si no pones fotos, la página se ve
igual de bien con ilustraciones de respaldo.

### 3. Textos, cafés y precios
Todo el contenido está en `index.html`, en español y fácil de editar:
- **Cafés:** busca la sección `<!-- TIENDA -->`. Cambia nombre, notas de cata,
  altura, origen y puntaje SCA. Los precios dicen "Ref." (referencia); pon el
  precio real o déjalo para cerrarlo por WhatsApp.
- **Cursos / Asesorías:** secciones `<!-- CURSOS -->` y `<!-- ASESORÍAS -->`.
- **Historia:** sección `<!-- HISTORIA -->`.

## Ver la página
Doble clic en `index.html` para abrirla en el navegador. Para ver las fotos y
las tipografías necesitas conexión a internet (las fuentes vienen de Google
Fonts). Para una versión 100% offline, descarga las fuentes y enlázalas local.

## Publicar (elige una)
- **Netlify / Vercel (gratis):** arrastra la carpeta a netlify.com/drop, o
  conéctala a un repo. Listo en segundos.
- **cPanel / hosting propio:** sube el contenido de la carpeta a `public_html`.
- **GitHub Pages:** sube el repo y activa Pages sobre la rama principal.

No hay build ni dependencias: es HTML, CSS y JS puro.

## Personalizar el diseño
- **Colores:** en `assets/styles.css`, bloque `:root` (claro) y el de tema
  oscuro. Cambia `--accent` (brasa), `--honey`, `--leaf`.
- **Tema:** el botón de sol/luna alterna claro/oscuro y recuerda la elección.

---
Café de especialidad venezolano ☕ — de la montaña a la taza.
