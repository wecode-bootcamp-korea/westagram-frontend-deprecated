'use strict'

const loginId = document.querySelector('.loginId');
const loginPassword = document.querySelector('.loginPassword');
const loginBtn = document.querySelector('.loginBtn');

loginId.addEventListener('input', activeBtn);
loginPassword.addEventListener('input', activeBtn);


function activeBtn(){
    let loginIdValue = loginId.value;
    let loginPasswordValue = loginPassword.value;
    if((loginIdValue.length) && (loginPasswordValue.length)){
        
        loginBtn.style.backgroundColor ="rgba(0,149,246,1)";
        
    } else{
        return; 
    }
};




