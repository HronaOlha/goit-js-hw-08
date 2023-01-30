var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('textarea');

const inputObj = {
  email: '',
  message: '',
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

onDataInInput();

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(e) {
  inputObj[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
}

function onDataInInput() {
  const objOfSavedData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (objOfSavedData) {
    email.value = objOfSavedData.email;
    textarea.value = objOfSavedData.message;
  }
}
