'use strict';

const idInput = document.querySelector('.loginInputId');
const passwordInput = document.querySelector('.loginInputPassword');
const loginButton = document.querySelector('.loginButton');

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

    if (!idInput.value.includes('@')) {
      alert('이메일 형식이어야 합니다.');
    }
  });
};

const checkValueInInput = function () {
  const idInputValue = idInput.value;
  const passwordInputValue = passwordInput.value;
  const buttonActiveCondition =
    idInputValue.length > 0 && passwordInputValue.length > 0;

  if (buttonActiveCondition) {
    loginButton.classList.add('active');
    loginButton.disabled = false;
  } else {
    loginButton.classList.remove('active');
    loginButton.disabled = true;
  }
};

const activeLoginButton = function () {
  const inputs = [idInput, passwordInput];
  inputs.forEach((input) => input.addEventListener('keyup', checkValueInInput));
  checkIdAndPassword();
};

activeLoginButton();
