var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handleClick(event) {
  var $dataView = event.target.getAttribute('data-view');

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }

  for (var j = 0; j < $views.length; j++) {
    if ($views[j].getAttribute('data-view') === $dataView) {
      $views[j].className = 'view';
    } else {
      $views[j].className = 'view hidden';
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
