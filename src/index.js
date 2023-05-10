import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit, careerSlidesInit } from '/src/modules/sliders';
import { videoBackgroundInit } from '/src/modules/videoBackground';
import { menuControl } from './modules/menuControl';

careerSlidesInit();
menuControl();

sliderInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination'
	}
});


sliderInit('.career__slider', {
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
			slideToClickedSlide: true,
			pagination: {
				el: '.career__slider-pagination'
			},
			autoplay: {
				delay: 3500,
				disableOnInteraction: true,
			},
		},

		576: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: false
		},

		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: false
		},

		1280: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: false
		}
	}
});



videoBackgroundInit();

