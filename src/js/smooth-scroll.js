/* =========== IMPORTS ========== */
import { qs, qsa } from "./utils";
// Smooth scroll
export function smoothScrollWrapper() {
  const listItems = qsa(".a_item");
  const heroLink = qs(".hero_link");
  heroLink.addEventListener("click", (e) => {
    smoothScroll(e);
  });
  Array.from(listItems).forEach(function (listItem) {
    listItem.addEventListener("click", (e) => {
      const item = e.target;
      if (item.textContent === "About Me") {
        smoothScroll(e);
      } else if (item.textContent === "My Stack") {
        smoothScroll(e);
      } else if (item.textContent === "Projects") {
        smoothScroll(e);
      } else if (item.textContent === "Contact") {
        smoothScroll(e);
      }
    });
  });
  function smoothScroll(e) {
    e.preventDefault();
    const targetId =
      e.currentTarget.getAttribute("href") === "#"
        ? "header"
        : e.currentTarget.getAttribute("href");
    const targetPosition = qs(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutQuad(progress, startPosition, distance, duration)
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function linear(t, b, c, d) {
      return (c * t) / d + b;
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  }
}
