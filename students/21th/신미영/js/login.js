const label = document.getElementsByTagName('label');
const id = document.querySelector('#idInput');
const password = document.querySelector('#passwordInput');
const toggleButton = document.querySelector('.toggleButton');
const logInButton = document.querySelector('.logInButton');

label[0].addEventListener('click', () => id.focus())
label[1].addEventListener('click', () => password.focus())

id.addEventListener('keyup', () => changeInput(id, label[0]));
password.addEventListener('keyup', () => changeInput(password, label[1]));

function changeInput (input, inputLabel) {
  if (input.value !== '') {
    inputLabel.classList.add('filledLabel');
    input.classList.add('filledInput');
  } else {
    inputLabel.classList.remove('filledLabel');
    input.classList.remove('filledInput');
  }
}

id.addEventListener('keyup', checkValidation);
password.addEventListener('keyup', checkValidation);

function checkValidation() {
  if(id.value.indexOf('@') !== -1 && password.value.length > 5) {
    logInButton.disabled = false;
    logInButton.classList.add('logInButtonOn');
  } else {
    logInButton.disabled = true;
    logInButton.classList.remove('logInButtonOn');
  }
}

password.addEventListener('keyup', function() {
  if (password.value != '') {
    toggleButton.classList.add('toggleButtonOn');
    passwordInput.type = 'password';
    toggleButton.innerText = 'Show';
  } else {
    toggleButton.classList.remove('toggleButtonOn');
  } 
});

toggleButton.addEventListener('click', function() {
  if(toggleButton.innerText === 'Show') {
    password.type = 'text';
    toggleButton.innerText = 'Hide';
  } else {
    password.type = 'password';
    toggleButton.innerText = 'Show';
  }
});