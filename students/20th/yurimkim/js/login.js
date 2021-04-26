'use strict';

const idName = document.querySelector('.idName');
const pwd = document.querySelector('.pw');
const btn = document.querySelector('button');
const loginInput = document.querySelectorAll('.loginInput');

// ID, PW validation
function checkFormInput() {
  if  ((idName.value.includes('@')) && (pwd.value.length > 4)) {
    btn.disabled = false;
    btn.className = 'activeBtn';
  } else {
    btn.disabled = true;
    btn.classList.remove('activeBtn');
  }
};

loginInput.forEach(loginInputBox => {
  loginInputBox.addEventListener('keyup', function() {
    checkFormInput();
  })
})
