/* =========== IMPORTS ========== */
import { qs, qsa, cl } from "./utils";
/* ============ CODE =========== */

export const stretchyNav = () => {
  /* Opening navigation by clikcing nav trigger
and closing with nav trigger & outside click. */
  if (qs(".stretchynav_trigger")) {
    const nav = qs(".stretchynav");
    const navEl = qs(".stretchynav_trigger");
    navEl.addEventListener("click", (e) => {
      e.preventDefault();
      nav.classList.toggle("nav-is-visible");
    });
    document.addEventListener("click", function (e) {
      !e.target.matches(".stretchynav_trigger") &&
        !e.target.matches(".stretchynav_trigger span") &&
        nav.classList.remove("nav-is-visible");
    });
  }
};
export const intersectionObserverForNav = () => {
  /* Intersection Observer API:
     Changing navigation background color depending on scroll */
  // const nav = qs(".stretchynav");
  // const visibleNav = qs(".nav-is-visible");
  const stretchynavBg = qs(".stretchynav_bg");
  const projectBg = qsa(".project_background");
  const sections = qsa("article");
  const listItemSpan = qsa(".a_item span");
  const listItem = qsa(".a_item");

  function liHover(disp, padding) {
    for (let i = 0; i < listItemSpan.length; i++) {
      listItemSpan[i].style.display = disp;
      listItem[i].style.padding = padding;
    }
  }
  const heroSectionOptions = {
    rootMargin: "-270px 0px 0px 0px",
    threshold: 0,
  };

  const heroSectionObserver = new IntersectionObserver(function (
    entries,
    heroSectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.target.className === "hero") {
        if (!entry.isIntersecting) {
          stretchynavBg.classList.add("js-nav-scrolled");
          liHover("none", 0);
        } else {
          stretchynavBg.classList.remove("js-nav-scrolled");
          liHover("block", "0 calc(1em + 60px) 0 1em");
        }
      }
    });
  },
  heroSectionOptions);
  sections.forEach((section) => {
    heroSectionObserver.observe(section);
  });
  projectBg.forEach((bg) => {
    heroSectionObserver.observe(bg);
  });
};
