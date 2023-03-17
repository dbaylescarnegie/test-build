import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  // If you want pagination, add the following:
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // If you want navigation buttons, add the following:
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
