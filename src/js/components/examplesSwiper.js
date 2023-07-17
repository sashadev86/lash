import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.examples__swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
  slidesPerView: 1,
  navigation: {
    nextEl: ".examples__button-next",
    prevEl: ".examples__button-prev",
  },
});
