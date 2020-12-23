'use strict';

// selector
const loginForm = document.querySelector('.login-form');
const inputId = document.querySelector('.login-id');
const validId = document.querySelector('.login-id-valid');
const inputPwd = document.querySelector('.login-pwd');
const validPwd = document.querySelector('.login-pwd-valid');
const loginBtn = document.querySelector('.login-btn');


// 2. [기본구현] ID, PW input 시 로그인 버튼 활성화
// event listener
inputId.addEventListener('input', activeBtn)
inputPwd.addEventListener('input', activeBtn)
loginForm.addEventListener('submit', alertInfo)

inputId.addEventListener('input', validationId)
inputPwd.addEventListener('input', validationPwd)

// function
function activeBtn() {
  if (inputId.value && inputPwd.value) {
    loginBtn.classList.add('active')
  }
  else {
    loginBtn.classList.remove('active')
  }
}

function alertInfo(e) {
  e.preventDefault();
  alert(`ID: ${inputId.value}, PWD: ${inputPwd.value}`)
  location.reload();
}


// 5. [추가구현] ID, PW validation
function validationId() {
  if (inputId.value.length < 6) {
    validId.classList.add('active')
  }
  else {
    validId.classList.remove('active')
  }
}

function validationPwd() {
  const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if (!regex.test(inputPwd.value)) {
    validPwd.classList.add('active')
  }
  else {
    validPwd.classList.remove('active')
  }
}