function handleClick(event) {
  console.log('message:', 'button clicked');
  console.log('event object:', event);
  console.log('target property:', event.target);
}

var $buttoneOne = document.querySelector('.click-button');
$buttoneOne.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('message:', 'button hovered');
  console.log('event:', event);
  console.log('target property:', event.target);
}

var $buttonTwo = document.querySelector('.hover-button');
$buttonTwo.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('message:', 'button double-clicked');
  console.log('event:', event);
  console.log('target property:', event.target);
}

var $buttonThree = document.querySelector('.double-click-button');
$buttonThree.addEventListener('dblclick', handleDoubleClick);
