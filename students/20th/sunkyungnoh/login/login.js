'use strict'

const loginForm = document.querySelector('.loginForm');
const inputLogin = document.querySelectorAll('input');
const inputID = document.querySelectorAll('input')[0];
const inputPW = document.querySelectorAll('input')[1];
const loginBtn = document.querySelector('.login.btn');

function moveToUpside(input) {
    const descriptionType = input.previousElementSibling

    if (input.value) {
        descriptionType.classList.add('focused');
        input.classList.add('entered');
    } else {
        descriptionType.classList.remove('focused');
        input.classList.remove('entered');
    }
};

function active() {
    if (inputID.value.includes('@') && inputPW.value.length >= 6) {
        loginBtn.removeAttribute('disabled');
        loginBtn.classList.add('active');  
    } else {
        loginBtn.setAttribute('disabled', 'true');
        loginBtn.classList.remove('active')
    }
};

// function validation(){
//     if (inputID.value.includes('@')) {
//         alert('ID는 반드시 @를 포함해야합니다.')
//     }
//     if (inputPW.value.length >= 6) {
//         alert('6글자 이상인 비밀번호를 입력해주세요.')
//     }
// }

// loginForm.addEventListener('submit', validation);

const login = () => {
    inputLogin.forEach(input => {
        input.addEventListener('input', active)
        input.addEventListener('input', () => moveToUpside(input))
    })
};

login();
