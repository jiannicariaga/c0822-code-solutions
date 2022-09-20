var $carouselImage = document.querySelector('.carousel-image');
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

function updateCarousel() {
  imagesIndex++;

  if (imagesIndex === images.length) {
    imagesIndex = 0;
  }

  $carouselImage.src = images[imagesIndex].src;
  $carouselImage.alt = images[imagesIndex].alt;
}

setInterval(updateCarousel, 3000);
