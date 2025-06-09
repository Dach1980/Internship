import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import '../../sass/vendor/swiper.scss';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

const getProgramsSlider = new Swiper('.programs__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.programs__button-swiper--next',
    prevEl: '.programs__button-swiper--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
    dragSize: 394,
  },
  slideClass: 'programs__item',
  wrapperClass: 'programs__list',
  breakpoints: {
    [MOBILE_WIDTH]: {
      allowTouchMove: true,
      scrollbar: {
        enabled: false,
      }
    },
    [TABLET_WIDTH]: {
      allowTouchMove: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    [DESKTOP_WIDTH]: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

getProgramsSlider.init();
