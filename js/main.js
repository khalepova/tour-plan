var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});

document.addEventListener("keyup", function (event) {
  // ArrowLeft
  // ArrowRight
  if (event.key === "ArrowLeft") {
    hotelSlider.slidePrev();
  }
  if (event.key === "ArrowRight") {
    hotelSlider.slideNext();
  }
  if (event.key === "a") {
    reviewsSlider.slidePrev();
  }
  if (event.key === "d") {
    reviewsSlider.slideNext();
  }
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
