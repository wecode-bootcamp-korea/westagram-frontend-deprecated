const loginId = document.querySelector('#loginId');
const loginPw = document.querySelector('#loginPw');
const loginBtn = document.querySelector('.login__btn');

let loginIdValue = 0;
let loginPwValue = 0;

loginId.addEventListener('keyup', function(e) {
    loginIdValue = this.value; 
    changeLoginBtnColor();
});  

loginPw.addEventListener('keyup', function(e) {
    loginPwValue = this.value;
    changeLoginBtnColor();
});

function changeLoginBtnColor() {
   console.log(loginIdValue.length, loginPwValue.length)
   return (loginIdValue.length >= 1 && loginPwValue.length >= 1) ? loginBtn.classList.add('login__color') : loginBtn.classList.remove('login__color');
}