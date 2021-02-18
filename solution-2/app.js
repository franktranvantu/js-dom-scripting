// Alter the callback function to use the event object.
// Using the event object, ensure that the browser's default form submit
// behavior does not occur when the form is submitted.
const form = document.querySelector('form');
const submitButton = form.querySelector('[type=Submit]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});