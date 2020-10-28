const isSubmitContainer = document.querySelector('loginButton');
const isInputContainer = document.querySelector('loginForm');

const loginId = document.getElementsByClassName("inputId").value;
const loginPw = document.getElementsByClassName("inputPw").value;

isSubmitContainer.addEventListener('onkeydown', function() {
    if(loginId == 'a' && loginPw == 'a') {
        alert('로그인 성공');
    } else {
        alert('로그인 실패');
    }
});

isInputContainer();