const slider = document.querySelector('.headerslider');
const slides = slider.querySelectorAll('.headerslider img');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

const links = document.querySelectorAll(".clickButtons a");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    links.forEach(link => {
      link.style.backgroundColor = "";
    });

    link.style.backgroundColor = "#15263E";
  });
});