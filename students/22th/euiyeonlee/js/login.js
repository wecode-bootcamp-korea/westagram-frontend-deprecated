const button = document.getElementsByClassName('loginButton')[0];
const input = document.getElementsByTagName('input')[0];
const loginId = document.getElementsByClassName('idInput')[0];
const loginPw = document.getElementsByClassName('pwInput')[0];

input.addEventListener('keyup', function loginButtonOn() {

    if(loginId.value && loginPw.value) {
        button.removeAttribute('disabled');
        button.getElementsByClassName.backgroundColor = '#0095f6';
    }
});