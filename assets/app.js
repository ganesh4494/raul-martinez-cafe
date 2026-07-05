/* =========================================================================
   Raúl Martínez — Café. Interacciones del sitio.
   ========================================================================= */

/* ⚠️  CAMBIA ESTE NÚMERO por el WhatsApp real de Raúl.
   Formato internacional SIN "+", SIN espacios, SIN guiones.
   Ej. Venezuela: 58 + 4XXXXXXXXX  ->  "584141234567"                     */
const WHATSAPP_NUMBER = "584140000000";

/* ---- 1. Enlaces a WhatsApp con mensaje prellenado ---- */
(function initWhatsApp() {
  const links = document.querySelectorAll(".js-wa");
  links.forEach((el) => {
    const msg = el.getAttribute("data-wa") || "Hola Raúl, quiero información sobre tu café.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
})();

/* ---- 2. Tema claro / oscuro con memoria ---- */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("rm-theme");
  if (stored) root.setAttribute("data-theme", stored);

  toggle?.addEventListener("click", () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("rm-theme", next);
  });
})();

/* ---- 3. Menú móvil ---- */
(function initMobileNav() {
  const menu = document.getElementById("mobileMenu");
  const open = document.getElementById("navToggle");
  const close = document.getElementById("navClose");
  if (!menu) return;

  const setOpen = (state) => {
    menu.classList.toggle("open", state);
    open?.setAttribute("aria-expanded", String(state));
    document.body.style.overflow = state ? "hidden" : "";
  };

  open?.addEventListener("click", () => setOpen(true));
  close?.addEventListener("click", () => setOpen(false));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
})();

/* ---- 4. Header con sombra al hacer scroll ---- */
(function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---- 5. Reveal al entrar en viewport ---- */
(function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => io.observe(el));
})();

/* ---- 6. Scroll-spy: resalta la sección activa en el menú ---- */
(function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav__links a"));
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href")?.replace("#", "");
    const sec = id && document.getElementById(id);
    if (sec) map.set(sec, a);
  });
  if (!map.size || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = map.get(entry.target);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  map.forEach((_, sec) => io.observe(sec));
})();

/* ---- 7. Botón volver arriba ---- */
(function initToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 700);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
})();

/* ---- 8. Año del footer ---- */
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
