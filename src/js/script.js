// Opening navigation by clikcing nav trigger 
// and closing with nav trigger & outside click.
jQuery(document).ready(function(){
	if( $('.stretchynav').length > 0 ) {
		var stretchyNavs = $('.stretchynav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.stretchynav_trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.stretchynav_trigger') && !$(event.target).is('.stretchynav_trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
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
	for(let i = 0; i < listAnchor.length; i++ ) {
		 listAnchor[i].style.display = disp;
	}
}

const heroSectionOptions = {
	rootMargin: "-270px 0px 0px 0px",
	threshold: 0
};
const heroSectionObserver = new IntersectionObserver(function(
	entries, heroSectionObserver
) {
	entries.forEach(entry => {
		if(entry.target.className === "hero") {
			
			if(!entry.isIntersecting) {
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

Array.from(listItems).forEach(function(listItem) {
	listItem.addEventListener('click', (e) => {
		const item = e.target;
		if(item.textContent === "About Me") {
			smoothScroll(e);
		} else if (item.textContent === "My Stack") {
			smoothScroll(e);
		} else if(item.textContent === "Projects") {
			smoothScroll(e);
		} else if(item.textContent === "Contact") {
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
		if(!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
		if(progress < duration) window.requestAnimationFrame(step);
	}

	function linear(t, b, c, d) {
		return c*t/d+b;
	};

	function easeInOutQuad(t, b, c, d) { 
		t /= d/2;
		if(t<1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) -1) +b;
	};
	
}