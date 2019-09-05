const faders = document.querySelectorAll('.fade_in');
const slideOut = document.querySelector('.slide_out');
slideOut.classList.add('run');
const appearOnScrollOptions = {
	threshold: .1	
};
const appearOnScrollObserver = 
new IntersectionObserver(function(
	entries, appearOnScrollObserver) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
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
	if(!src) {
		return;
	} 
	img.src = src;
}
const lazyImagesObserver = 
new IntersectionObserver((entries, lazyImagesObserver) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
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

