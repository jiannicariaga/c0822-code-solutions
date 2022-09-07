var toggle = true;
var $container = document.querySelector('.container-light');
var $lightBulb = document.querySelector('.light-bulb-on');

$lightBulb.addEventListener('click', function () {
  toggle = !toggle;

  if (toggle) {
    $container.className = 'container-light';
    $lightBulb.className = 'light-bulb-on';
  } else {
    $container.className = 'container-dark';
    $lightBulb.className = 'light-bulb-off';
  }
});
