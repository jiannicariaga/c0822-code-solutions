var $modal = document.querySelector('.modal-container-off');
var $openModal = document.querySelector('.open-modal-btn');
var $closeModal = document.querySelector('.no-btn');
var toggle = false;

function handleClick(event) {
  toggle = !toggle;

  if (toggle) {
    $modal.className = 'modal-container-on';
  } else {
    $modal.className = 'modal-container-off';
  }
}

$openModal.addEventListener('click', handleClick);
$closeModal.addEventListener('click', handleClick);
