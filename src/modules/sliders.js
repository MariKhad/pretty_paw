import { Swiper, Pagination, Autoplay } from 'swiper';


const params = {
	spaceBetween: 20,

	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
	},
	modules: [Autoplay, Pagination]
};

export const sliderInit = (selectorSlider, newParams) => {
	new Swiper(selectorSlider, {
		...params,
		...newParams
	})
};

export function careerSlidesInit() {
	const careerSlides = document.querySelectorAll('.career__image-item');
	careerSlides.forEach((slide, i) => {
		slide.classList.add(`career__image-item_${(i % 2 == 0) ? 'even' : 'odd'}`);
	});
}