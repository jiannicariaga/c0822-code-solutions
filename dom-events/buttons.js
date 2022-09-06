function handleClick(event) {
  console.log('message:', 'button clicked');
  console.log('event object:', 'click');
  console.log('target property:', '.click-button');
}

var $buttoneOne = document.querySelector('[class=\'click-button\']');
$buttoneOne.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('message:', 'button hovered');
  console.log('event:', 'mouseover');
  console.log('target property:', '.hover-button');
}

var $buttonTwo = document.querySelector('[class=\'hover-button\']');
$buttonTwo.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('message:', 'button double-clicked');
  console.log('event:', 'dblclick');
  console.log('target property:', '.double-click-button');
}

var $buttonThree = document.querySelector('[class=\'double-click-button\']');
$buttonThree.addEventListener('dblclick', handleDoubleClick);
