const inputBox = document.querySelector('.login-input-box');
const loginButton = document.querySelector('.login-input-box > button');

inputBox.addEventListener('keyup', () => {
  const id = document.querySelector('.login-input-box .id').value;
  const pw = document.querySelector('.login-input-box .pw').value;

  const isButtonActive = id.length >= 1 && pw.length >= 1;
  isButtonActive 
    ? loginButton.classList.add('on-login')
    : loginButton.classList.remove('on-login');
});