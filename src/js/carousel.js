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
      slide.setAttribute(
        "style",
        `transition: transform ${slidetime}ms ease;
				         	 animation-duration: ${slidetime}ms`
      );
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
        newActive =
          allSlides[
            (activeSlideIndex - 1 + allSlides.length) % allSlides.length
          ];
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
