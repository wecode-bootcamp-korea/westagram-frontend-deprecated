'user strict';

const id = document.querySelector('.loginName');
const password = document.querySelector('.loginPassword');
const loginBtn = document.querySelector('.loginButton');

function login() {
  if  ((id.value.includes('@')) && (3 < password.value.length)) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = 'var(--loginBtnColor)';
  };
};

id.addEventListener('keypress', function() {
  login();
});

password.addEventListener('keypress', function() {
  login();
});