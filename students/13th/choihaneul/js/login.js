const loginBtn = document.querySelector('.login__btn');
const idInput = document.querySelector('.id__box');
const pwdInput = document.querySelector('.password__box');

pwdInput.addEventListener('keyup', function (e) {
  let idEnter = idInput.value;
  let pwdEnter = pwdInput.value;
  console.log('connected');

  if (idEnter.length >= 1 && pwdEnter.length >= 1) {
    loginBtn.style.backgroundColor = '#0095f6';
  }
});
