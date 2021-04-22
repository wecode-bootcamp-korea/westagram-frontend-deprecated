'use strict'

const loginId = document.querySelector('.loginId');
const loginPassword = document.querySelector('.loginPassword');
const loginBtn = document.querySelector('.loginBtn');

function activeBtn(){
let loginIdValue = loginId.value;
  let loginPasswordValue = loginPassword.value;
  if((loginIdValue.length) && (loginPasswordValue.length)){
    loginBtn.classList.add('afterBtnActive');
  } else{
      return; 
  }
};

loginId.addEventListener('input', activeBtn);
loginPassword.addEventListener('input', activeBtn);



