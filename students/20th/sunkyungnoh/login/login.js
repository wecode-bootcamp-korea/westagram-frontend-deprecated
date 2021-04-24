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
    if (inputID.value && inputPW.value) {
        loginBtn.removeAttribute('disabled');
        loginBtn.classList.add('active');  
    } else {
        loginBtn.setAttribute('disabled', 'true');
        loginBtn.classList.remove('active')
    }
};

const login = () => {
    inputLogin.forEach(input => {
        input.addEventListener('input', active)
        input.addEventListener('input', () => moveToUpside(input))
    })
};

login();
