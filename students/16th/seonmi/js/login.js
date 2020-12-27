const findId = document.getElementsByClassName('IdInput')[0];
const findPw = document.getElementsByClassName('PasswordInput')[0];
const findLoginBtn = document.getElementsByClassName('loginBtn')[0];

document.addEventListener('keydown', function () {
    findLoginBtn.style.backgroundColor = findId.value && findPw.value ? '#0095F6':'#B2DFFC' ;
    findLoginBtn.style.cursor = findId.value && findPw.value ? 'pointer':'default' ;
    findLoginBtn.disabled = findId.value && findPw.value ? false : true ;
});