const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

let slideIndex = 0;

if (slider) {
	function setSlideIndex() {
		document.querySelector('.controls .selected').classList.remove('selected');
		slider.style.transform = 'translate(' + (slideIndex) * -25 + '%)';
	}

	document.querySelectorAll('.controls .slide_indicators li').forEach(function (indicator, ind) {
		indicator.addEventListener('click', function () {
			slideIndex = ind;
			setSlideIndex();
			indicator.classList.add('selected');
		});
	});

	leftArrow.addEventListener('click', function () {
		slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
		setSlideIndex();
		indicatorParents.children[slideIndex].classList.add('selected');

	});

	rightArrow.addEventListener('click', function () {
		slideIndex = (slideIndex < 3) ? slideIndex + 1 : 3;
		setSlideIndex();
		indicatorParents.children[slideIndex].classList.add('selected');

	});

}