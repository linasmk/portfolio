const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

let slideIndex = 0;

function setSlideIndex() {
	document.querySelector('.controls .selected').classList.remove('selected');
	slider.style.transform = 'translate(' +  (slideIndex) * -33.33333 + '%)';
}

document.querySelectorAll('.controls .slide_indicators li').forEach(function(indicator, ind) {
	indicator.addEventListener('click', function() {
		slideIndex = ind;
		setSlideIndex();
		indicator.classList.add('selected');
	});
});

leftArrow.addEventListener('click', function() {
	slideIndex = (slideIndex > 0) ? slideIndex -1 : 0;
	setSlideIndex();
	indicatorParents.children[slideIndex].classList.add('selected');
	
});

rightArrow.addEventListener('click', function() {
	slideIndex = (slideIndex < 2) ? slideIndex +1 : 2;
	setSlideIndex();
	indicatorParents.children[slideIndex].classList.add('selected');
	
});