// Opening navigation by clikcing nav trigger
// and closing with nav trigger & outside click.
if (document.querySelector(".stretchynav_trigger")) {
  const nav = document.querySelector(".stretchynav");
  const navEl = document.querySelector(".stretchynav_trigger");
  navEl.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("nav-is-visible");
  });
  document.addEventListener("click", function(e) {
    !e.target.matches(".stretchynav_trigger") && !e.target.matches(".stretchynav_trigger span") && nav.classList.remove("nav-is-visible");
  });
}
if ("IntersectionObserver" in window) {
  // Intersection Observer API
  // Changing navigation bg color depending on scroll
  const stretchynavBg = document.querySelector(".stretchynav_bg");
  const projectBg = document.querySelectorAll(".project_background");
  const sections = document.querySelectorAll("article");
  const listAnchor = document.querySelectorAll(".a_item span");

  function liHover(disp) {
    for (let i = 0; i < listAnchor.length; i++) {
      listAnchor[i].style.display = disp;
    }
  }
  const heroSectionOptions = {
    rootMargin: "-270px 0px 0px 0px",
    threshold: 0,
  };
  const heroSectionObserver = new IntersectionObserver(function(entries, heroSectionObserver) {
    entries.forEach((entry) => {
      if (entry.target.className === "hero") {
        if (!entry.isIntersecting) {
          stretchynavBg.classList.add("nav-scrolled");
          liHover("none");
        } else {
          stretchynavBg.classList.remove("nav-scrolled");
          liHover("block");
        }
      }
    });
  }, heroSectionOptions);
  sections.forEach((section) => {
    heroSectionObserver.observe(section);
  });
  projectBg.forEach((bg) => {
    heroSectionObserver.observe(bg);
  });
}
// Smooth scroll
const listItems = document.querySelectorAll(".a_item");
const heroLink = document.querySelector(".hero_link");
heroLink.addEventListener("click", (e) => {
  smoothScroll(e);
});
Array.from(listItems).forEach(function(listItem) {
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
  const targetId = e.currentTarget.getAttribute("href") === "#" ? "header" : e.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
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
const faders = document.querySelectorAll('.fade_in');
const slideOut = document.querySelector('.slide_out');
if (slideOut) {
  slideOut.classList.add('run');
}
if ("IntersectionObserver" in window) {
  const appearOnScrollOptions = {
    threshold: .1
  };
  const appearOnScrollObserver = new IntersectionObserver(function(entries, appearOnScrollObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScrollObserver.unobserve(entry.target);
      }
    });
  }, appearOnScrollOptions);
  faders.forEach(fader => {
    appearOnScrollObserver.observe(fader);
  });
  const lazyImages = document.querySelectorAll('[data-src]');
  const lazyImagesOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
  };

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }
  const lazyImagesObserver = new IntersectionObserver((entries, lazyImagesObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        lazyImagesObserver.unobserve(entry.target);
      }
    });
  }, lazyImagesOptions);
  lazyImages.forEach(image => {
    lazyImagesObserver.observe(image);
  });
} else {
  const lazyLoad = function() {
    let active = false;
    if (active === false) {
      active = true;
      setTimeout(function() {
        faders.forEach(function(fader) {
          if ((fader.getBoundingClientRect().top <= window.innerHeight && fader.getBoundingClientRect().bottom >= 0) && getComputedStyle(fader).display !== "none") {
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
};
/* Encryption function */
/* The anchor element should look like exactly this:
<a data-erot13="yvanf.znpxbavf@tznvy.pbz"><span class="email"></span>Email Me</a> */
function erot13(s) {
  return (s ? s : this).split("").map(function(_) {
    if (!_.match(/[A-za-z]/)) return _;
    var c = Math.floor(_.charCodeAt(0) / 97);
    var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + ((c == 0) ? 64 : 96));
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
/* Encryption function */
// function encRot13(mailString) {
//   var mapArray = [];
//   var elements = "abcdefghijklmnopqrstuvwxyz";
//   var outp = "";
//   for (i = 0; i < elements.length; i++) {
//     var x = elements.charAt(i);
//     var y = elements.charAt((i + 13) % 26);
//     mapArray[x] = y;
//     mapArray[x.toUpperCase()] = y.toUpperCase();
//   }
//   for (i = 0; i < mailString.length; i++) {
//     var c = mailString.charAt(i)
//     outp += (c >= 'A' && c <= 'z' || c >= 'a' && c <= '\' ? mapArray [c] : c)
// }
//   return outp;
// }
// /* Concatenating and redirection mailstring function */
// function decryptMail(encString) {
//   var linkString = "mailto:";
//   var addressString = encRot13(encString);
//   linkString += addressString;
//   document.location.href = linkString;
// }
document.addEventListener("DOMContentLoaded", () => {
  const slidetime = 500;
  const bckButton = document.querySelector(".arrow.left");
  const forwardButton = document.querySelector(".arrow.right");
  const allSlides = [...document.querySelectorAll(".slide")];
  let clickable = true;
  let active = null;
  let newActive = null;

  function initSlider() {
    allSlides.forEach(slide => {
      slide.setAttribute("style", `transition: transform ${slidetime}ms ease;
                   animation-duration: ${slidetime}ms`);
    });
  }

  function changeSlide(forward) {
    if (clickable) {
      clickable = false;
      active = document.querySelector(".activeSlide");
      const activeSlideIndex = allSlides.indexOf(active);
      if (forward) {
        newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
        active.classList.add("slideOutLeft");
        newActive.classList.add("slideInRight", "activeSlide");
      } else {
        newActive = allSlides[
          (activeSlideIndex - 1 + allSlides.length) % allSlides.length];
        active.classList.add("slideOutRight");
        newActive.classList.add("slideInLeft", "activeSlide");
      }
    }
  }
  allSlides.forEach(slide => {
    slide.addEventListener("transitionend", () => {
      if (slide === active && !clickable) {
        clickable = true;
        active.className = "slide";
      }
    });
  });
  //Event Listeners
  forwardButton.addEventListener("click", () => {
    changeSlide(true);
  });
  bckButton.addEventListener("click", () => {
    changeSlide(false);
  });
  //Init the slider
  initSlider();
});