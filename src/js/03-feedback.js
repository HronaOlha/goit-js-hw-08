var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('textarea');

const INPUT_INFO = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

onDataInInput();

function onFormInput() {
  const inputObj = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(INPUT_INFO, JSON.stringify(inputObj));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(INPUT_INFO)));

  e.target.reset();
  localStorage.removeItem(INPUT_INFO);
}

function onDataInInput() {
  const objOfSavedData = JSON.parse(localStorage.getItem(INPUT_INFO));
  if (objOfSavedData) {
    email.value = objOfSavedData.email;
    textarea.value = objOfSavedData.message;
  }
}
