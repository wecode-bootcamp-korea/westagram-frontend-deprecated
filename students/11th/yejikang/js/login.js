const loginButton = document.querySelector('.loginBtn');
const loginForm = document.querySelector('.loginForm');
const userId=document.querySelector('.userId');
const userPw = document.querySelector('.userPw');

const init = (function () {
  loginButton.disabled = true;
})();

function setEnabledButton() {
	loginButton.disabled =  (userId.value && userPw.value)? false : true ; 
}

loginForm.addEventListener('keyup',setEnabledButton);