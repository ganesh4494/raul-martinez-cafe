/* v4 — interacciones extra (carrusel de cafés con flechas) */
(function initRail() {
  const rail = document.getElementById("cafeRail");
  if (!rail) return;
  const btns = document.querySelectorAll(".rail-btn[data-rail]");
  if (!btns.length) return;

  const step = () => {
    const card = rail.querySelector(".pcard");
    return card ? card.getBoundingClientRect().width + 24 : rail.clientWidth * 0.8;
  };

  function update() {
    const max = rail.scrollWidth - rail.clientWidth - 2;
    btns.forEach((b) => {
      if (b.dataset.rail === "prev") b.disabled = rail.scrollLeft <= 2;
      else b.disabled = rail.scrollLeft >= max;
    });
  }

  btns.forEach((b) =>
    b.addEventListener("click", () => {
      const dir = b.dataset.rail === "next" ? 1 : -1;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      rail.scrollBy({ left: dir * step(), behavior: reduce ? "auto" : "smooth" });
    })
  );

  rail.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
