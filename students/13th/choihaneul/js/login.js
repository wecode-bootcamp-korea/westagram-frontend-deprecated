const loginBtn = document.querySelector('.login__btn');
const idInput = document.querySelector('.id__box');
const pwdInput = document.querySelector('.password__box');
const loginForm = document.querySelector('.loginForm');

pwdInput.addEventListener('keyup', function (e) {
  let idEnter = idInput.value;
  let pwdEnter = pwdInput.value;

  if (idEnter.length >= 1 && pwdEnter.length >= 1) {
    loginBtn.style.backgroundColor = '#0095f6';
  }
});

function validate() {
  let idEnter = idInput.value;
  let pwdEnter = pwdInput.value;
  
  if (idEnter.indexOf('@') === false) {
    alert('이메일 정보를 올바르게 입력해주세요');
    return false;
  }

  if (pwdEnter.length < 5) {
    alert('비밀번호를 5자 이상 입력해주세요');
    return false;
  }
}

loginForm.addEventListener('submit', validate);
