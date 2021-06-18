"use strict";
const westagramId = document.getElementById('typingId');
const westagramPw = document.getElementById('password');
const logInBtn = document.getElementsByClassName('login-btn')[0];

westagramId.addEventListener('keyup', function(){
  if(westagramId.value !== "" && westagramPw.value.length > 5 ){
    logInBtn.style.opacity = '1';
    logInBtn.disabled = false;
  }
})

westagramPw.addEventListener('keyup', function(){
  if(westagramPw.value !== "" && westagramId.value.length > 5)
  logInBtn.style.opacity = '1';
  logInBtn.disabled = false;
})


