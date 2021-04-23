'use strict';

const idInput = document.querySelector('.login_input_id');
const passwordInput = document.querySelector('.login_input_password');
const loginButton = document.querySelector('.login_button');

const checkIdAndPassword = function () {
  loginButton.addEventListener('click', function (e) {
    const idInputValue = idInput.value;
    const passwordInputValue = passwordInput.value;

    if (
      idInputValue === 'dydalsdl1414@gmail.com' &&
      passwordInputValue === '1234'
    ) {
      alert('로그인했습니다.');
    } else {
      alert('아이디와 비밀번호를 확인하시기 바랍니다.');
      e.preventDefault();
    }
  });
};

const checkValueInInput = function () {
  const idInputValue = idInput.value;
  const passwordInputValue = passwordInput.value;

  if (idInputValue.length > 0 && passwordInputValue.length > 0) {
    loginButton.disabled = false;
    loginButton.classList.add('active');
  } else {
    loginButton.classList.remove('active');
  }
};

const activeLoginButton = function () {
  idInput.addEventListener('keyup', checkValueInInput);
  passwordInput.addEventListener('keyup', checkValueInInput);
  checkIdAndPassword();
};

activeLoginButton();
