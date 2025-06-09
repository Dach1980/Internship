import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import '../../sass/vendor/swiper.scss';
import 'swiper/scss/scrollbar';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

const getReviewsSlider = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.reviews__button-swiper--next',
    prevEl: '.reviews__button-swiper--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    draggable: true,
    dragSize: 394,
  },
  slideClass: 'reviews__item',
  wrapperClass: 'reviews__list',
  breakpoints: {
    [MOBILE_WIDTH]: {
      allowTouchMove: true,
      scrollbar: {
        enabled: false,
      }
    },
    [TABLET_WIDTH]: {
      slidesPerView: 'auto',
      allowTouchMove: true,
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    [DESKTOP_WIDTH]: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },
});

getReviewsSlider.init();
