'use strict';

const inputId = document.querySelector('.input-id');
const inputPw = document.querySelector('.input-pw');
const loginBtn = document.querySelector('.loginForm__btn');

// Change Button Color
const changeBtn = () => {
    const inputIdValue = inputId.value.length;
    const inputPwValue = inputPw.value.length;
    if (inputIdValue > 0 && inputPwValue > 5) {
        loginBtn.classList.add('change-btn')
    } else {
        loginBtn.classList.remove('change-btn')
    }
}

inputId.addEventListener('input', changeBtn);
inputPw.addEventListener('input', changeBtn);