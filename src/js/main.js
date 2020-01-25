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

const faders = document.querySelectorAll('.fade_in');
const slideOut = document.querySelector('.slide_out');

if (slideOut) {
	slideOut.classList.add('run');
}
const appearOnScrollOptions = {
	threshold: .1
};
const appearOnScrollObserver =
	new IntersectionObserver(function (
		entries, appearOnScrollObserver) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScrollObserver.unobserve(entry.target);
			}
		});
	},
		appearOnScrollOptions);

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
const lazyImagesObserver =
	new IntersectionObserver((entries, lazyImagesObserver) => {
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


// Opening navigation by clikcing nav trigger 
// and closing with nav trigger & outside click.
jQuery(document).ready(function () {
	if ($('.stretchynav').length > 0) {
		var stretchyNavs = $('.stretchynav');

		stretchyNavs.each(function () {
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.stretchynav_trigger');

			stretchyNavTrigger.on('click', function (event) {
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function (event) {
			(!$(event.target).is('.stretchynav_trigger') && !$(event.target).is('.stretchynav_trigger span')) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});

// Intersection Observer API
// Changing navigation bg color depending on scroll
const stretchynavBg = document.querySelector('.stretchynav_bg');
const projectBg = document.querySelectorAll('.project_background');
const sections = document.querySelectorAll('article');
const listAnchor = document.querySelectorAll('.a_item span');

function liHover(disp) {
	for (let i = 0; i < listAnchor.length; i++) {
		listAnchor[i].style.display = disp;
	}
}

const heroSectionOptions = {
	rootMargin: "-270px 0px 0px 0px",
	threshold: 0
};
const heroSectionObserver = new IntersectionObserver(function (
	entries, heroSectionObserver
) {
	entries.forEach(entry => {
		if (entry.target.className === "hero") {

			if (!entry.isIntersecting) {
				stretchynavBg.classList.add('nav-scrolled');
				liHover('none');
			} else {
				stretchynavBg.classList.remove('nav-scrolled');
				liHover('block');
			}
		}
	});
}, heroSectionOptions);

sections.forEach(section => {
	heroSectionObserver.observe(section);
});
projectBg.forEach(bg => {
	heroSectionObserver.observe(bg);
});

// Smooth scroll
const listItems = document.querySelectorAll('.a_item');
const iphone = document.querySelector('.iphone_img a');

iphone.addEventListener('click', (e) => {
	smoothScroll(e);
});


Array.from(listItems).forEach(function (listItem) {
	listItem.addEventListener('click', (e) => {
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
	const targetId = e.currentTarget.getAttribute('href') === '#'
		? "header" : e.currentTarget.getAttribute('href');
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
		return c * t / d + b;
	};

	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};

}
/* Encryption function */
/* The anchor element should look like this:
<a data-erot13="yvanf.znpxbavf@tznvy.pbz"><span class="email"></span>Email Me</a> */
function erot13(s) {
  return (s ? s : this).split("").map(function (_) {
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

//# sourceMappingURL=main.js.map
