'use strict';

const idInput = document.querySelector('.login_input_id');
const passwordInput = document.querySelector('.login_input_password');
const loginButton = document.querySelector('.login_button');

//아이디 및 비밀번호 확인
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

//로그인 버튼 활성화 및 색깔 변경
const activeLoginButton = function () {
  passwordInput.addEventListener('keyup', function () {
    const idInputValue = idInput.value;
    const passwordInputValue = passwordInput.value;

    if (idInputValue.length > 0 && passwordInputValue.length > 0) {
      loginButton.disabled = false;
      loginButton.classList.add('active');
    } else {
      loginButton.classList.remove('active');
    }
  });
  checkIdAndPassword();
};

activeLoginButton();
