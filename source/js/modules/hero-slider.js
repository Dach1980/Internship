import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import '../../sass/vendor/swiper.scss';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function debounceFunction(callback, timeoutDelay = 300) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const paginationPositionBottom = () => {
  const paginationWrapper = document.querySelector('.hero__pagination');
  const currentSlide = document.querySelector('.hero__item.swiper-slide-active .hero__text-wrapper');

  const isMobileScreen = () => {
    const desktopWidth = window.matchMedia('(max-width: 767px)');
    return desktopWidth.matches;
  };

  if (isMobileScreen()) {
    const elementHeight = currentSlide.clientHeight + 19;
    paginationWrapper.style.bottom = `${elementHeight}px`;
  } else if (!isMobileScreen()) {
    const elementHeight = currentSlide.clientHeight + 59;
    paginationWrapper.style.bottom = `${elementHeight}px`;
  }
};

const debouncedResize = debounceFunction(() => {
  paginationPositionBottom();
}, 2);

const getHeroSlider = new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  effect: 'fade',
  modules: [Pagination],
  pagination: {
    type: 'bullets',
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="hero__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
    },
  },
  slideClass: 'hero__item',
  wrapperClass: 'hero__list',
  breakpoints: {
    [MOBILE_WIDTH]: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: true,
    },
    [TABLET_WIDTH]: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: true,
    },
    [DESKTOP_WIDTH]: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    },
  },
  on: {
    init: function () {
      debouncedResize();
    },
    slideChange: function () {
      debouncedResize();
    },
    slideChangeTransitionEnd: function () {
      debouncedResize();
    },
    resize: function () {
      paginationPositionBottom();
      getHeroSlider.init();
    },
  },
});

getHeroSlider.init();
