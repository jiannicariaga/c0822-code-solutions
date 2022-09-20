var $heroImage = document.querySelector('.hero-image');
var $progressDots = document.querySelectorAll('.dot');
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

function stepImage() {
  imagesIndex++;

  if (imagesIndex === images.length) {
    imagesIndex = 0;
  }

  $heroImage.src = images[imagesIndex].src;
  $heroImage.alt = images[imagesIndex].alt;

  stepProgressDots(imagesIndex);
}

function stepProgressDots(number) {
  for (var i = 0; i < images.length; i++) {
    if (i === number) {
      $progressDots[i].className = 'fas fa-circle';
    } else {
      $progressDots[i].className = 'far fa-circle';
    }
  }
}

setInterval(stepImage, 3000);
