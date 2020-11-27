const inputId = document.querySelector('.id');
const inputPassword = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

function activeLoginButton() {
  if (inputId.value && inputPassword.value) {
    loginButton.style.backgroundColor = '#1296f7';
    loginButton.removeAttribute('disabled');
  }
}

inputId.addEventListener('keyup', activeLoginButton);
inputPassword.addEventListener('keyup', activeLoginButton);
