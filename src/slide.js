let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("slides");

showSlides();

function plusSlides(step) {
    if (step < 0) {
        slideIndex -= 2;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
    }

    showSlides();
}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000);
}