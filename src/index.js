import './index.html';
import './page.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit, careerSlidesInit } from '/src/modules/sliders';
import { videoBackgroundInit } from '/src/modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';
import { pageControlInit } from './modules/pageControl';



careerSlidesInit();
menuControl();
videoBackgroundInit();
initScrollTopButton();
locationHover();
pageControlInit();


sliderInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		enabled: true,
	}
});


sliderInit('.career__slider', {
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
			slideToClickedSlide: true,
			pagination: {
				el: '.career__slider-pagination',
				enabled: true,
			},
			autoplay: {
				delay: 3500,
				disableOnInteraction: true,
			}
		},

		576: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: {
				enabled: false
			}
		},


		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: {
				enabled: false
			}
		},

		1280: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				enabled: false
			}
		}
	}
});





