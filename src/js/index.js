/* =========== IMPORTS ========== */
import { stretchyNav, intersectionObserverForNav } from "./navigation";
import { smoothScrollWrapper } from "./smooth-scroll";
import { lazyLoader } from "./lazy-loading";
import { emailObfuscator } from "./email-obfuscation";
import { infiniteSlider } from "./infinite-slider";
import { cl } from "./utils";

/* ============ CODE =========== */

stretchyNav();
intersectionObserverForNav();
smoothScrollWrapper();
lazyLoader();
emailObfuscator();
infiniteSlider();
