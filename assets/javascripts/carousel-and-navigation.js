document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements for the carousel
    let carouselBullets = document.querySelectorAll(".carousel-indicator__button");
    let carouselWrapper = document.querySelector(".carousel-wrapper");
    let carouselItemList = document.querySelectorAll(".carousel-item");
    let previewImages = document.querySelectorAll(".preview-image__items");
    let buttonAutoplayCarousel = document.querySelector(".button-autoplay-carousel");
    let buttonPauseCarousel = document.querySelector(".button-pause-carousel");

    // Declare variables for the carousel
    let activeIndex;
    let translateVal = 0;
    let timeInterval;

    // Initialize the carousel and start it
    function initCarousel() {
        activeIndex = 0;
        carouselBullets[activeIndex].classList.add("carousel-indicator--active");
        carouselItemList[activeIndex].classList.add("carousel-item--active");
        previewImages[activeIndex].classList.add("preview-image--active");
        startAutoCarousel(); // Start the automatic carousel
    }

    // Function to update the carousel
    function updateCarousel() {
        translateVal = activeIndex * (-1 * 100);

        // Remove Active Class
        carouselBullets.forEach((bullet) => {
            bullet.classList.remove("carousel-indicator--active");
        });
        carouselItemList.forEach((item) => {
            item.classList.remove("carousel-item--active");
        });
        previewImages.forEach((image) => {
            image.classList.remove("preview-image--active");
        });

        // Add Active Class
        carouselBullets[activeIndex].classList.add("carousel-indicator--active");
        carouselItemList[activeIndex].classList.add("carousel-item--active");
        carouselWrapper.style.transform = "translateX(" + `${translateVal}%` + ")";
        previewImages[activeIndex].classList.add("preview-image--active");
    }

    // Function to automatically advance the carousel
    function autoAdvance() {
        if (activeIndex < carouselItemList.length - 1) {
            activeIndex++;
        } else {
            activeIndex = 0;
        }
        updateCarousel();
    }

    // Function to start the automatic carousel
    function startAutoCarousel() {
        timeInterval = setInterval(autoAdvance, 3000); // Change slide every 3 seconds (adjust interval as needed)
    }

    // Function to pause the automatic carousel
    function pauseAutoCarousel() {
        clearInterval(timeInterval);
    }

    // DOM Elements for navigation with active links and smooth scrolling
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Function to remove the "active" class from all links
    function removeActiveClass() {
        navLinks.forEach((link) => link.classList.remove("active"));
    }

    // Function to handle the click on the links
    function handleNavLinkClick(event) {
        event.preventDefault();
        removeActiveClass();
        event.target.classList.add("active");

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth",
        });
    }

    // Add the click event to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavLinkClick);
    });

    // Function to handle the scroll event
    function handleScroll() {
        const fromTop = window.scrollY;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                removeActiveClass();
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Add the scroll event to the document
    window.addEventListener("scroll", handleScroll);

    // Initialize the carousel and navigation when the DOM is fully loaded
    initCarousel();
});
