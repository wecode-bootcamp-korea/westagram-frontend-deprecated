'use strict';

/* 버튼 활성화 */
const idName = document.querySelector('#idName');
const pwd = document.querySelector('#pw');
const btn = document.querySelector('button');

function login() {
  if  ((idName.value.includes('@')) && (3< pwd.value.length)) {
    btn.disabled = false;
    btn.style.backgroundColor = '#032952';
  };
};

idName.addEventListener('keypress', function() {
  login();
});

pwd.addEventListener('keypress', function() {
  login();
});
