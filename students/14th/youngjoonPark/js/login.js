const button = document.querySelector('.login-btn');
const id = document.querySelector('.id-box');
const pw = document.querySelector('.pw-box');
const loginBox = document.querySelector('.login-boxes');

const changeButtonColor = () => {
  const isUserInfoValid = id.value.length && pw.value.length;
  button.style.backgroundColor = isUserInfoValid ? '#0095F6' : '#BFE0FD';
};

loginBox.addEventListener('keyup', changeButtonColor);
