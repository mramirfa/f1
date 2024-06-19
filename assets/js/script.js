// slid1
const swiper1 = new Swiper(".swiper-container1", {
  loop: false,
  speed: 202,
  effect: "fade",

  autoplay: {
    daly: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});

// slid
const swiper2 = new Swiper(".swiper-container2", {
  loop: false,
  speed: 250,
  spaceBetween: 10,

  breakpoints: {
    530: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.6,
    },
    960: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

const swiper3 = new Swiper(".swiper-container3", {
  loop: false,
  speed: 250,
  spaceBetween: 10,

  breakpoints: {
    530: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.6,
    },
    960: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
});
