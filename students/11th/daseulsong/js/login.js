'use strict';

const loginBox = document.querySelector('.login__main__idPw');
const id = document.querySelector('.login__idPw--id');
const pw = document.querySelector('.login__idPw--pw');
const loginBtn = document.querySelector('.login__btn--blue');

[id, pw].forEach((item) => {
  item.addEventListener('keyup', () => {
    id.value && pw.value
      ? (loginBtn.style.backgroundColor = '#00008b')
      : (loginBtn.style.backgroundColor = '#5fabf3');
  });
});
