document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const slideshowImages = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            displaySlide(index);
        });
    });

    function displaySlide(index) {
        slideshowImages[currentSlide].classList.remove("active");
        slideshowImages[index].classList.add("active");
        currentSlide = index;
    }

    function autoRotate() {
        const nextSlide = (currentSlide + 1) % slideshowImages.length;
        displaySlide(nextSlide);
    }

    setInterval(autoRotate, 3000);
});
