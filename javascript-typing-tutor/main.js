var phrase = generatePhrase('omae wa mou shindeiru');
var index = 0;
var keystrokes = 0;

function generatePhrase(string) {
  var $phraseContainer = document.querySelector('h1');

  for (var i = 0; i < string.length; i++) {
    var $span = document.createElement('span');

    if (i === 0) {
      $span.setAttribute('class', 'current-char');
    }

    $span.textContent = string[i];
    $phraseContainer.appendChild($span);
  }

  var $phrase = document.querySelectorAll('span');

  return $phrase;
}

document.addEventListener('keydown', function (event) {
  keystrokes++;

  if (index === phrase.length - 1) {
    event.preventDefault();
    phrase[index].className = 'correct';
    endPrompt();

    return;
  }

  if (event.key === phrase[index].textContent) {
    phrase[index].className = 'correct';
    index++;
  } else {
    phrase[index].className = 'current-char incorrect';
    return;
  }

  if (index < phrase.length) {
    phrase[index].className = 'current-char';
  }
});

function endPrompt() {
  var $accuracy = document.querySelector('.accuracy');
  var percentage = (phrase.length / keystrokes) * 100;
  var $modal = document.querySelector('.modal-off');
  var $reset = document.querySelector('.reset');

  $accuracy.textContent = 'Accuracy: ' + percentage.toFixed(2) + '%';
  $modal.className = 'modal-on';

  $reset.addEventListener('click', function (event) {
    $modal.className = 'modal-off';
    phrase[0].className = 'current-char';
    index = 0;
    keystrokes = 0;

    for (var i = 1; i < phrase.length; i++) {
      phrase[i].removeAttribute('class');
    }
  });
}
