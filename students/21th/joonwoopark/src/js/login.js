const inputId = document.querySelector('.login-id');
const inputPassword = document.querySelector('.login-password');
const loginButton = document.querySelector('.login-button');

let idValue, passwordLength;

const validateInputLength = (name, e) => {
  name === 'id' ? (idValue = e.target.value) : (passwordLength = e.target.value.length);
  logginedID = idValue;
  console.log(logginedID);
  if (idValue.length > 0 && idValue.includes('@') && passwordLength > 0) {
    loginButton.classList.add('active');
    loginButton.removeAttribute('disabled');
  } else {
    loginButton.classList.remove('active');
    loginButton.setAttribute('disabled', 'disabled');
  }
};

inputId.addEventListener('input', (e) => validateInputLength('id', e));
inputPassword.addEventListener('input', (e) => validateInputLength('password', e));
loginButton.addEventListener('click', () => {
  window.location = '/main.html';
});
