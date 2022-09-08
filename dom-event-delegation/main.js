var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.matches('button')) {
    var $taskListItem = event.target.closest('.task-list-item');

    console.log($taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', handleClick);
