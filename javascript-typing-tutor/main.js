// Check accuracy
// Attempt insert elements

var $phrase = document.querySelectorAll('span');
var $accuracy = document.querySelector('h2');
var $modal = document.querySelector('.modal-off');
var $reset = document.querySelector('.reset');
var index = 0;
var keystrokes = 0;

document.addEventListener('keydown', function (event) {
  if (index === $phrase.length - 1) {
    event.preventDefault();
    gameOver();

    return;
  }

  keystrokes++;

  if (event.key !== $phrase[index].textContent) {
    $phrase[index].className = 'current-char incorrect';

    return;
  }

  $phrase[index].className = 'correct';
  index++;

  if (index < $phrase.length) {
    $phrase[index].className = 'current-char';
  }
});

$reset.addEventListener('click', function (event) {
  $phrase[0].className = 'current-char';
  $modal.className = 'modal-off';
  index = 0;
  keystrokes = 0;

  for (var i = 1; i < $phrase.length; i++) {
    $phrase[i].className = '';
  }
});

function gameOver() {
  var accuracy = ($phrase.length / keystrokes) * 100;
  $phrase[index].className = 'correct';
  $accuracy.textContent = 'Accuracy: ' + accuracy.toFixed(2) + '%';
  $modal.className = 'modal-on';
}
