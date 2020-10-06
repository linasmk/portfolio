/* =========== IMPORTS ========== */
import { qs, qsa } from "./utils";
// Lazy Loading
export function lazyLoader() {
  const faders = qsa(".fade_in");
  const slideOut = qs(".slide_out");
  if (slideOut) {
    slideOut.classList.add("run");
  }
  if ("IntersectionObserver" in window) {
    const appearOnScrollOptions = {
      threshold: 0.1,
    };
    const appearOnScrollObserver = new IntersectionObserver(function (
      entries,
      appearOnScrollObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScrollObserver.unobserve(entry.target);
        }
      });
    },
    appearOnScrollOptions);
    faders.forEach((fader) => {
      appearOnScrollObserver.observe(fader);
    });
    const lazyImages = document.querySelectorAll("[data-src]");
    const lazyImagesOptions = {
      threshold: 0,
      rootMargin: "0px 0px 300px 0px",
    };

    function preloadImage(img) {
      const src = img.getAttribute("data-src");
      if (!src) {
        return;
      }
      img.src = src;
    }
    const lazyImagesObserver = new IntersectionObserver(
      (entries, lazyImagesObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            preloadImage(entry.target);
            lazyImagesObserver.unobserve(entry.target);
          }
        });
      },
      lazyImagesOptions
    );
    lazyImages.forEach((image) => {
      lazyImagesObserver.observe(image);
    });
  } else {
    const lazyLoad = function () {
      let active = false;
      if (active === false) {
        active = true;
        setTimeout(function () {
          faders.forEach(function (fader) {
            if (
              fader.getBoundingClientRect().top <= window.innerHeight &&
              fader.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(fader).display !== "none"
            ) {
              fader.dataset.src = fader.src;
              fader.dataset.srcset = fader.src;
              fader.classList.add("appear");
            }
            if (faders.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }); //faders.forEach
          active = false;
        }, 500); //setTimeout function
      }
    }; //lazyLoad function
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
}
