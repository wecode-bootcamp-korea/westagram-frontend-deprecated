const loginId = document.querySelector('#loginId');
const loginPw = document.querySelector('#loginPw');
const loginBtn = document.querySelector('.login__btn');

let loginIdValue;
let loginPwValue;

loginId.addEventListener('keyup', function(e) {
    loginIdValue = e.target.value; 
    loginBtnColor();
}); 

loginPw.addEventListener('keyup', function(e) {
    loginPwValue = e.target.value;
    loginBtnColor();
});

function loginBtnColor() {
   // console.log(loginIdValue.length, loginPwValue.length)
   return (loginIdValue.length >= 1 && loginPwValue.length >= 1) ? loginBtn.classList.add('login__color') : loginBtn.classList.remove('login__color');
} 

/* function loginBtnColor() {
     console.log(loginIdValue)
   // return (loginIdValue.length >= 1 && loginPwValue.length >=1) ? loginBtn.classList.add('login__color') : loginBtn.classList.remove('login__color');
} */