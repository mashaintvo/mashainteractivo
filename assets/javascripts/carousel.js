// DOM Elements
let carouselBullets = document.querySelectorAll(".carousel-indicator__button");
let carouelWrapper = document.querySelector(".carousel");
let carouselItemList = document.querySelectorAll(".carousel-item");
let carouselWrapper = document.querySelector(".carousel-wrapper");
let previewImages = document.querySelectorAll(".preview-image__items");
let buttonAutoplayCarousel = document.querySelector(
  ".button-autoplay-carousel"
);
let buttonPauseCarousel = document.querySelector(".button-pause-carousel");

// Declare variables
let activeIndex;
let translateVal = 0;
let timeInterval;

// init function that add active class to elements
function init() {
  activeIndex = 0;
  carouselBullets[activeIndex].classList.add("carousel-indicator--active");
  carouselItemList[activeIndex].classList.add("carousel-item--active");
  previewImages[activeIndex].classList.add("preview-image--active");
}

// Carousel Bullet Click Function
carouselBullets.forEach(function (bullet, index) {
  bullet.addEventListener("click", function () {
    if (index == 0) {
      translateVal = 0;
    } else {
      translateVal = index * (-1 * 100);
    }

    // Remove Active Class
    carouselBullets[activeIndex].classList.remove("carousel-indicator--active");
    carouselItemList[activeIndex].classList.remove("carousel-item--active");
    previewImages[activeIndex].classList.remove("preview-image--active");

    // Add active Class
    bullet.classList.add("carousel-indicator--active");
    carouselItemList[index].classList.add("carousel-item--active");
    carouselWrapper.style.transform = "translateX(" + `${translateVal}%` + ")";
    previewImages[index].classList.add("preview-image--active");
    activeIndex = index;
  });
});

// Window Load
window.addEventListener("load", init());