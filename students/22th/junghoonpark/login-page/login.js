"use strict";
const westagramId = document.getElementById('typingId');
const westagramPw = document.getElementById('password');
const logInBtn = document.getElementsByClassName('login-btn')[0];

westagramId.addEventListener('keyup', function(){
  if(westagramId.value !== "" && westagramPw.value.length > 5 ){
    logInBtn.style.opacity = '1';
    logInBtn.disabled = false;
  }else{
    logInBtn.style.opacity = '0.2';
    logInBtn.disabled = true;
  }
})

westagramPw.addEventListener('keyup', function(){
  if(westagramPw.value !== "" && westagramId.value.length > 5){
    logInBtn.style.opacity = '1';
    logInBtn.disabled = false;
  }else{
    logInBtn.style.opacity = '0.2';
    logInBtn.disabled = true;
  }
})

function checkValid(){
  
}

// const loginContainer = document.querySelector('#loginWrapper')
// console.log("여기있어요")

// loginContainer.addEventListener('keyup', check)
// console.log("여기도 있어요")
// function check(event){
//   const westagramId = document.querySelector('#typingId').value;
//   const westagramPw = document.querySelector('#password').value;
//   const logInBtn = document.querySelector('.login-btn')[0];
//   if(westagramId !== "" && westagramPw !== "" && westagramID.length > 5 && westagramPw.length > 5) {
//     console.log("여기도오오있어요")
//     logInBtn.style.opacity = '1';
//     logInBtn.disabled = false;
//     } else {
//         logInBtn.disabled = true;
//       }
// }

// const inits = document.getElementById('loginWrapper');
