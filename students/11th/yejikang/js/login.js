const loginButton = document.querySelector('.loginBtn');
const loginForm = document.querySelector('.loginForm');
const userId=document.querySelector('.user-id');
const userPw = document.querySelector('.user-pw');

function init(){
    loginButton.disabled = true;
}

init();

function setEnabledButton() {
     loginButton.disabled =  (userId.value && userPw.value)? false : true ; 
}

loginForm.addEventListener('keyup',setEnabledButton);

loginButton.addEventListener('click', function(){
     console.log(userId.value,userPw.value);   
});