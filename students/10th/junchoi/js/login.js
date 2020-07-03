const input = document.querySelector('.login-input');
const loginButton = document.querySelector('.login-input > button');

input.addEventListener('keyup', () => {
  const id = document.querySelector('.login-input .id').value;
  const pw = document.querySelector('.login-input .pw').value;

  const isButtonActive = id.length >= 1 && pw.length >= 1;
  isButtonActive 
    ? loginButton.classList.add('on-login')
    : loginButton.classList.remove('on-login');
});