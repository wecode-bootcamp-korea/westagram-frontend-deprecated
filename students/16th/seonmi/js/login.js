const findId = document.getElementsByClassName('IdInput')[0];
const findPw = document.getElementsByClassName('PasswordInput')[0];
const findLoginBtn = document.getElementsByClassName('loginBtn')[0];

document.addEventListener('keyup', function () {
    findLoginBtn.style.backgroundColor = findId.value && findPw.value ? '#0095F6':'#B2DFFC' ;
});