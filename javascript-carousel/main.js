var images = [
  {
    src: 'images/001.png',
    alt: 'Bulbasaur'
  },
  {
    src: 'images/004.png',
    alt: 'Charmander'
  },
  {
    src: 'images/007.png',
    alt: 'Squirtle'
  },
  {
    src: 'images/025.png',
    alt: 'Pikachu'
  },
  {
    src: 'images/039.png',
    alt: 'Jigglypuff'
  }
];
var imagesIndex = 0;
var $heroImage = document.querySelector('.hero-image');
// var $chevronLeft = document.querySelector('');
// var $chevronRight = document.querySelector('');
var $progressDots = document.querySelector('.progress-dots');
var dots = $progressDots.children;

function stepCarousel() {
  imagesIndex++;

  if (imagesIndex === images.length) {
    imagesIndex = 0;
  }

  $heroImage.src = images[imagesIndex].src;
  $heroImage.alt = images[imagesIndex].alt;

  for (var i = 0; i < images.length; i++) {
    if (i === imagesIndex) {
      dots[i].className = 'fas fa-circle';
    } else {
      dots[i].className = 'far fa-circle';
    }
  }
}

// $progressDots.addEventListener('click', function (event) {
//   if (event.target.matches('.dot')) {

//   }
// });

setInterval(stepCarousel, 3000);
