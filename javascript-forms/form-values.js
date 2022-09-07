function handleSubmit(event) {
  var formData = {};

  event.preventDefault();
  formData.name = $form.elements.name.value;
  formData.email = $form.elements.email.value;
  formData.message = $form.elements.message.value;
  console.log('Form Object:', formData);
}

var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', handleSubmit);
