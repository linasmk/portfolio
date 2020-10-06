/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/email-obfuscation.js":
/*!*************************************!*\
  !*** ./src/js/email-obfuscation.js ***!
  \*************************************/
/*! exports provided: emailObfuscator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailObfuscator", function() { return emailObfuscator; });
/* =========== IMPORTS ========== */
// Smooth scroll
function emailObfuscator() {
  /* Encryption function */

  /* The anchor element should look exactly like this:
  <a data-erot13="yvanf.znpxbavf@tznvy.pbz"><span class="email"></span>Email Me</a> */
  function erot13(s) {
    return (s ? s : this).split("").map(function (_) {
      if (!_.match(/[A-za-z]/)) return _;
      var c = Math.floor(_.charCodeAt(0) / 97);
      var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
      return String.fromCharCode(k + (c == 0 ? 64 : 96));
    }).join("");
  }

  function erot13_onload(event) {
    var elements = window.document.querySelectorAll("a[data-erot13]");

    for (var j = 0; j < elements.length; j++) {
      var element = elements[j];
      var email = element.dataset.erot13;
      var overwrite = element.dataset.erot13Overwrite !== undefined;

      if (email !== undefined) {
        element.href = "mailto:" + erot13(email);

        if (overwrite) {
          element.innerHTML = erot13(email);
        }
      }
    }
  }

  window.addEventListener("load", erot13_onload);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: bckButton, forwardButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bckButton", function() { return bckButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardButton", function() { return forwardButton; });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/js/navigation.js");
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll */ "./src/js/smooth-scroll.js");
/* harmony import */ var _lazy_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-loading */ "./src/js/lazy-loading.js");
/* harmony import */ var _email_obfuscation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-obfuscation */ "./src/js/email-obfuscation.js");
/* harmony import */ var _infinite_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infinite-slider */ "./src/js/infinite-slider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* =========== IMPORTS ========== */






/* ============ CODE =========== */

var projectsSlider = {
  bckButton: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["qs"])(".projects-arrow.left"),
  forwardButton: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["qs"])(".projects-arrow.right")
};
var bckButton = projectsSlider.bckButton,
    forwardButton = projectsSlider.forwardButton;

Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["stretchyNav"])();
Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["intersectionObserverForNav"])();
Object(_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["smoothScrollWrapper"])();
Object(_lazy_loading__WEBPACK_IMPORTED_MODULE_2__["lazyLoader"])();
Object(_email_obfuscation__WEBPACK_IMPORTED_MODULE_3__["emailObfuscator"])();
Object(_infinite_slider__WEBPACK_IMPORTED_MODULE_4__["infiniteSlider"])(bckButton, forwardButton);

/***/ }),

/***/ "./src/js/infinite-slider.js":
/*!***********************************!*\
  !*** ./src/js/infinite-slider.js ***!
  \***********************************/
/*! exports provided: infiniteSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infiniteSlider", function() { return infiniteSlider; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* =========== IMPORTS ========== */

/* =========== Code ========== */

function infiniteSlider(bckBtn, fwdBtn) {
  document.addEventListener("DOMContentLoaded", function () {
    var slidetime = 500;
    var bckButton = bckBtn;
    var forwardButton = fwdBtn;

    var allSlides = _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".slide"));

    var clickable = true;
    var active = null;
    var newActive = null;

    function initSlider() {
      allSlides.forEach(function (slide) {
        slide.setAttribute("style", "transition: transform ".concat(slidetime, "ms ease;\n                   animation-duration: ").concat(slidetime, "ms"));
      });
    }

    function changeSlide(forward) {
      if (clickable) {
        clickable = false;
        active = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".activeSlide");
        var activeSlideIndex = allSlides.indexOf(active);

        if (forward) {
          newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
          active.classList.add("slideOutLeft");
          newActive.classList.add("slideInRight", "activeSlide");
        } else {
          newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length];
          active.classList.add("slideOutRight");
          newActive.classList.add("slideInLeft", "activeSlide");
        }
      }
    }

    allSlides.forEach(function (slide) {
      slide.addEventListener("transitionend", function () {
        if (slide === active && !clickable) {
          clickable = true;
          active.className = "slide";
        }
      });
    }); //Event Listeners

    forwardButton.addEventListener("click", function () {
      changeSlide(true);
    });
    bckButton.addEventListener("click", function () {
      changeSlide(false);
    }); //Init the slider

    initSlider();
  });
}

/***/ }),

/***/ "./src/js/lazy-loading.js":
/*!********************************!*\
  !*** ./src/js/lazy-loading.js ***!
  \********************************/
/*! exports provided: lazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoader", function() { return lazyLoader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* =========== IMPORTS ========== */
 // Lazy Loading

function lazyLoader() {
  var faders = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".fade_in");
  var slideOut = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".slide_out");

  if (slideOut) {
    slideOut.classList.add("run");
  }

  if ("IntersectionObserver" in window) {
    var preloadImage = function preloadImage(img) {
      var src = img.getAttribute("data-src");

      if (!src) {
        return;
      }

      img.src = src;
    };

    var appearOnScrollOptions = {
      threshold: 0.1
    };
    var appearOnScrollObserver = new IntersectionObserver(function (entries, appearOnScrollObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScrollObserver.unobserve(entry.target);
        }
      });
    }, appearOnScrollOptions);
    faders.forEach(function (fader) {
      appearOnScrollObserver.observe(fader);
    });
    var lazyImages = document.querySelectorAll("[data-src]");
    var lazyImagesOptions = {
      threshold: 0,
      rootMargin: "0px 0px 300px 0px"
    };
    var lazyImagesObserver = new IntersectionObserver(function (entries, lazyImagesObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          lazyImagesObserver.unobserve(entry.target);
        }
      });
    }, lazyImagesOptions);
    lazyImages.forEach(function (image) {
      lazyImagesObserver.observe(image);
    });
  } else {
    var lazyLoad = function lazyLoad() {
      var active = false;

      if (active === false) {
        active = true;
        setTimeout(function () {
          faders.forEach(function (fader) {
            if (fader.getBoundingClientRect().top <= window.innerHeight && fader.getBoundingClientRect().bottom >= 0 && getComputedStyle(fader).display !== "none") {
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

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! exports provided: stretchyNav, intersectionObserverForNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stretchyNav", function() { return stretchyNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectionObserverForNav", function() { return intersectionObserverForNav; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* =========== IMPORTS ========== */

/* ============ CODE =========== */

var stretchyNav = function stretchyNav() {
  /* Opening navigation by clikcing nav trigger
  and closing with nav trigger & outside click. */
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".stretchynav_trigger")) {
    var nav = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".stretchynav");
    var navEl = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".stretchynav_trigger");
    navEl.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("nav-is-visible");
    });
    document.addEventListener("click", function (e) {
      !e.target.matches(".stretchynav_trigger") && !e.target.matches(".stretchynav_trigger span") && nav.classList.remove("nav-is-visible");
    });
  }
};
var intersectionObserverForNav = function intersectionObserverForNav() {
  /* Intersection Observer API:
     Changing navigation background color depending on scroll */
  var stretchynavBg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".stretchynav_bg");
  var projectBg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".project_background");
  var sections = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])("article");
  var listItemSpan = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".a_item span");
  var listItem = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".a_item");

  function liHover(disp, padding) {
    for (var i = 0; i < listItemSpan.length; i++) {
      listItemSpan[i].style.display = disp;
      listItem[i].style.padding = padding;
    }
  }

  var heroSectionOptions = {
    rootMargin: "-250px 0px 0px 0px",
    threshold: 0.1
  };
  var heroSectionObserver = new IntersectionObserver(function (entries, heroSectionObserver) {
    entries.forEach(function (entry) {
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
  }, heroSectionOptions);
  sections.forEach(function (section) {
    heroSectionObserver.observe(section);
  });
  projectBg.forEach(function (bg) {
    heroSectionObserver.observe(bg);
  });
};

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*\
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/*! exports provided: smoothScrollWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrollWrapper", function() { return smoothScrollWrapper; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* =========== IMPORTS ========== */
 // Smooth scroll

function smoothScrollWrapper() {
  var listItems = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qsa"])(".a_item");
  var heroLink = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(".hero_link");
  heroLink.addEventListener("click", function (e) {
    smoothScroll(e);
  });
  Array.from(listItems).forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      var item = e.target;

      if (item.textContent === "About Me") {
        smoothScroll(e);
      } else if (item.textContent === "My Stack") {
        smoothScroll(e);
      } else if (item.textContent === "Projects") {
        smoothScroll(e);
      } else if (item.textContent === "Prototypes") {
        smoothScroll(e);
      }
    });
  });

  function smoothScroll(e) {
    e.preventDefault();
    var targetId = e.currentTarget.getAttribute("href") === "#" ? "header" : e.currentTarget.getAttribute("href");
    var targetPosition = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["qs"])(targetId).offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 500;
    var start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function linear(t, b, c, d) {
      return c * t / d + b;
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  }
}

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: qs, qsa, bid, bcn, btn, cl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return qs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qsa", function() { return qsa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bid", function() { return bid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bcn", function() { return bcn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btn", function() { return btn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cl", function() { return cl; });
/* ======================================
=============== UTILS ===================
======================================= */

/* ============ Selector Functions ========== */
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}
function bid(selector) {
  return document.getElementById(selector);
}
function bcn(selector) {
  return document.getElementsByClassName(selector);
}
function btn(selector) {
  return document.getElementsByTagName(selector);
}
/* =============== Console Log ================== */

function cl() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map