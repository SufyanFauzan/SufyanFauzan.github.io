let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  document.querySelector(".btn-next").addEventListener("click", nextSlide);
  document.querySelector(".btn-prev").addEventListener("click", prevSlide);
});
