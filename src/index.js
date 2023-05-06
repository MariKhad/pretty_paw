import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from '/src/modules/sliders';


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
		},

		576: {
			slidesPerView: 2,
			spaceBetween: 20,
			slideToClickedSlide: true,
			pagination: {
				enable: false,
			}
		},

		680: {
			slidesPerView: 3,
			spaceBetween: 20,
			slideToClickedSlide: true,
		},

		980: {
			slidesPerView: 3,
			spaceBetween: 26,
			slideToClickedSlide: true,
		},

		1280: {
			slidesPerView: 4,
			spaceBetween: 30,
			slideToClickedSlide: true,
		}
	}
});

const videoBg = document.querySelector('.video-bg');

videoBg.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;
