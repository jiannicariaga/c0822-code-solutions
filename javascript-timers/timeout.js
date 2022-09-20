var $message = document.querySelector('.message');

function updateHeading() {
  $message.textContent = 'Hello There';
}

setTimeout(updateHeading, 2000);
