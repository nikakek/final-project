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
    var cardContent = this.getElementsByClassName('card-content')[0];
    cardContent.classList.add('hidden');
    
    var heading = document.createElement('h2');
    heading.innerHTML = 'New Heading ' + (this.getAttribute('data-index') || '');
    
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'New Paragraph ' + (this.getAttribute('data-index') || '');
    
   // cards
    if (this.id === 'card1') {
      heading.innerHTML = 'Graphichs Design';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';

    } else if (this.id === 'card2') {
      heading.innerHTML = 'Best Service';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card3') {
      heading.innerHTML = 'Best Service';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card4') {
      heading.innerHTML = 'Pixel Perfect';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card5') {
      heading.innerHTML = 'Unique Ideas';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card6') {
      heading.innerHTML = 'Design Analysis';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card7') {
      heading.innerHTML = 'Fully Managed';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }else if (this.id === 'card8') {
      heading.innerHTML = 'Helpful Support';
      paragraph.innerHTML = 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor';

      heading.style.color = 'white';
      heading.style.fontSize = '18px';
      heading.style.marginTop = '100px';
      paragraph.style.color = '#ECECEC';
      paragraph.style.fontSize = '12px';
      paragraph.style.width = '200px';
      paragraph.style.margin = 'auto';
    }
    // Add more conditions for other cards
    
    this.appendChild(heading);
    this.appendChild(paragraph);
  });

  cards[i].addEventListener('mouseout', function () {
    var cardContent = this.getElementsByClassName('card-content')[0];
    cardContent.classList.remove('hidden');
    
    this.removeChild(this.lastElementChild);
    this.removeChild(this.lastElementChild);
  });
}