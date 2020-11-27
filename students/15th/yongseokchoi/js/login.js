const loginContainer = document.querySelector('.loginContainer');
const loginId = document.querySelector('.login__id');
const loginPassword = document.querySelector('.login__password');
const loginBTN = document.querySelector('button');
const invalidEmail = document.querySelector('.invalidEmail');
const invalidPassword = document.querySelector('.invalidPassword');

const checkLogin = (resultEmailValidation, resultPasswordValidation) => {
  const activateBtn = resultEmailValidation && resultPasswordValidation;
  loginBTN.style.backgroundColor = activateBtn ? 'tomato' : '#c0dffd';
  loginBTN.setAttribute('disabled', activateBtn ? false : true);
  loginBTN.removeAttribute(activateBtn ? 'disabled' : true);
};

const EmailValidate = () => {
  const email = loginId.value;
  const regExp = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
  if (regExp.test(email)) {
    invalidEmail.innerText = '';
    return true;
  } else if (email.length === 0) {
    invalidEmail.innerText = 'email을 입력해주세요';
    return false;
  } else {
    invalidEmail.innerText = '유효하지 않은 email 입니다';
    return false;
  }
};

const passwordValidate = () => {
  const password = loginPassword.value;
  const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  if (regExp.test(password)) {
    invalidPassword.innerText = '';
    return true;
  } else if (password.length === 0) {
    invalidPassword.innerText = 'password를 입력해주세요';
    return false;
  } else {
    invalidPassword.innerText =
      '숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이여야 합니당!';
    return false;
  }
};

const init = () => {
  const resultEmailValidation = EmailValidate();
  const resultPasswordValidation = passwordValidate();
  checkLogin(resultEmailValidation, resultPasswordValidation);
};

loginId.addEventListener('keyup', init);
loginPassword.addEventListener('keyup', init);
