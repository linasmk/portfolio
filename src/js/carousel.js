// const slider = document.querySelector('.slider');
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');
// const indicatorParents = document.querySelector('.controls ul');

// let slideIndex = 0;

// if (slider) {
// 	function setSlideIndex() {
// 		document.querySelector('.controls .selected').classList.remove('selected');
// 		slider.style.transform = 'translate(' + (slideIndex) * -25 + '%)';
// 	}

// 	document.querySelectorAll('.controls .slide_indicators li').forEach(function (indicator, ind) {
// 		indicator.addEventListener('click', function () {
// 			slideIndex = ind;
// 			setSlideIndex();
// 			indicator.classList.add('selected');
// 		});
// 	});

// 	leftArrow.addEventListener('click', function () {
// 		slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
// 		setSlideIndex();
// 		indicatorParents.children[slideIndex].classList.add('selected');

// 	});

// 	rightArrow.addEventListener('click', function () {
// 		slideIndex = (slideIndex < 3) ? slideIndex + 1 : 3;
// 		setSlideIndex();
// 		indicatorParents.children[slideIndex].classList.add('selected');

// 	});

// }
// document.addEventListener("DOMContentLoaded", () => {
//   const slidetime = 500;
//   const bckButton = document.querySelector(".left");
//   const forwardButton = document.querySelector(".right");
//   const allSlides = [...document.querySelectorAll(".slide")];

//   let clickable = true;
//   let active = null;
//   let newActive = null;

//   function initSlider() {
//     allSlides.forEach(slide => {
//       slide.setAttribute(
//         "style",
//         `transition: transform ${slidetime}ms ease;
// 				         	 animation-duration: ${slidetime}ms`
//       );
//     });
//   }
//   function changeSlide(forward) {
//     if (clickable) {
//       clickable = false;
//       active = document.querySelector(".activeSlide");
//       const activeSlideIndex = allSlides.indexOf(active);

//       if (forward) {
//         newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
//         active.classList.add("slideOutLeft");
//         newActive.classList.add("slideInRight", "activeSlide");
//       } else {
//         newActive =
//           allSlides[
//             (activeSlideIndex - 1 + allSlides.length) % allSlides.length
//           ];
//         active.classList.add("slideOutRight");
//         newActive.classList.add("slideInLeft", "activeSlide");
//       }
//     }
//   }

//   allSlides.forEach(slide => {
//     slide.addEventListener("transitionend", () => {
//       if (slide === active && !clickable) {
//         clickable = true;
//         active.className = "slide";
//       }
//     });
//   });
//   //Event Listeners
//   forwardButton.addEventListener("click", () => {
//     changeSlide(true);
//   });

//   bckButton.addEventListener("click", () => {
//     changeSlide(false);
//   });

//   //Init the slider
//   initSlider();
// });

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
  // New
  function changeSlide(forward) {
    if (clickable) {
      clickable = false;
      active = document.querySelector(".active");
      const activeSlideIndex = allSlides.indexOf(active);

      if (forward) {
        newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
        active.classList.add("slideOutLeft");
        newActive.classList.add("slideInRight", "active");
      } else {
        newActive =
          allSlides[
          (activeSlideIndex - 1 + allSlides.length) % allSlides.length
          ];
        active.classList.add("slideOutRight");
        newActive.classList.add("slideInLeft", "active");
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
  //End of new

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
document.querySelector(".projects").style.backgroundColor = "red";
