/* =========== IMPORTS ========== */
import { stretchyNav, intersectionObserverForNav } from "./navigation";
import { smoothScrollWrapper } from "./smooth-scroll";
import { lazyLoader } from "./lazy-loading";
import { emailObfuscator } from "./email-obfuscation";
import { infiniteSlider } from "./infinite-slider";
import { cl, qs, qsa } from "./utils";

/* ============ CODE =========== */
const projectsSlider = {
  bckButton: qs(".projects-arrow.left"),
  forwardButton: qs(".projects-arrow.right"),
};
export const { bckButton, forwardButton } = projectsSlider;

stretchyNav();
intersectionObserverForNav();
smoothScrollWrapper();
lazyLoader();
emailObfuscator();
infiniteSlider(bckButton, forwardButton);
