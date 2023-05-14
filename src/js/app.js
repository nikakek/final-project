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






var cards = document.getElementsByClassName('card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function () {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = "New paragraph";
        this.setAttribute('data-paragraph', paragraph.innerHTML);
    });

    cards[i].addEventListener('mouseout', function () {
        this.removeAttribute('data-paragraph');
    });
}