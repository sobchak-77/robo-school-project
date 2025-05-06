export function getSliderChoach() {
  const swiper = new Swiper('.swiper', {
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    draggable: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      701: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      861: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      981: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
