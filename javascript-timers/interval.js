var $countdown = document.querySelector('.countdown-display');
var countdownId = null;
var displayValues = ['4', '3', '2', '1', '~Earth Beeeelooowww Us~'];
var displayIndex = 0;

function updateCountdown() {
  displayIndex++;

  if (displayIndex < displayValues.length) {
    $countdown.textContent = displayValues[displayIndex];
  } else {
    clearInterval(countdownId);
  }
}

countdownId = setInterval(updateCountdown, 1000);
