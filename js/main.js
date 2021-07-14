var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

document.addEventListener("keyup", function (event) {
  // ArrowLeft
  // ArrowRight
  if (event.key === "ArrowLeft") {
    swiper.slidePrev();
  }
  if (event.key === "ArrowRight") {
    swiper.slideNext();
  }
});
