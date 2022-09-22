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
var intervalId = null;
var $heroImage = document.querySelector('.hero-image');
var $chevronLeft = document.querySelector('.chevron-left');
var $chevronRight = document.querySelector('.chevron-right');
var $progressDots = document.querySelector('.progress-dots');
var dots = $progressDots.children;

function startCarousel() {
  intervalId = setInterval(stepImages, 3000);
}

function stepImages() {
  imagesIndex++;

  if (imagesIndex === images.length) {
    imagesIndex = 0;
  }

  $heroImage.src = images[imagesIndex].src;
  $heroImage.alt = images[imagesIndex].alt;
  stepProgressDots();
}

function stepProgressDots() {
  for (var i = 0; i < images.length; i++) {
    if (i === imagesIndex) {
      dots[i].className = 'dot fas fa-circle';
    } else {
      dots[i].className = 'dot far fa-circle';
    }
  }
}

$chevronLeft.addEventListener('click', function (event) {
  clearInterval(intervalId);

  if (imagesIndex === 0) {
    imagesIndex = images.length - 1;
    $heroImage.src = images[imagesIndex].src;
    $heroImage.alt = images[imagesIndex].alt;
  } else {
    imagesIndex--;
    $heroImage.src = images[imagesIndex].src;
    $heroImage.alt = images[imagesIndex].alt;
  }

  stepProgressDots();
  startCarousel();
});

$chevronRight.addEventListener('click', function (event) {
  clearInterval(intervalId);

  if (imagesIndex === images.length - 1) {
    imagesIndex = 0;
    $heroImage.src = images[imagesIndex].src;
    $heroImage.alt = images[imagesIndex].alt;
  } else {
    imagesIndex++;
    $heroImage.src = images[imagesIndex].src;
    $heroImage.alt = images[imagesIndex].alt;
  }

  stepProgressDots();
  startCarousel();
});

$progressDots.addEventListener('click', function (event) {
  var dotClicked;

  clearInterval(intervalId);

  if (event.target.matches('.dot')) {
    dotClicked = event.target.getAttribute('data-dot-id');

    for (var i = 0; i < images.length; i++) {
      if (dots[i].getAttribute('data-dot-id') === dotClicked) {
        imagesIndex = i;
        $heroImage.src = images[i].src;
        $heroImage.alt = images[i].alt;
        dots[i].className = 'dot fas fa-circle';
      } else {
        dots[i].className = 'dot far fa-circle';
      }
    }
  }

  startCarousel();
});

startCarousel();
