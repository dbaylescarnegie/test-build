import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Swiper('.carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
