'use strict';

const idName = document.querySelector('#idName');
const pwd = document.querySelector('#pw');
const btn = document.querySelector('button');

function login() {
  if  ((idName.value.includes('@')) && (4< pwd.value.length)) {
    btn.disabled = false;
    btn.className = 'activeBtn';
  };
};

idName.addEventListener('keyup', function() {
  login();
});

pwd.addEventListener('keyup', function() {
  login();
});
