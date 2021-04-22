'use strict'

const loginForm = document.querySelector('.loginForm');
const inputLogin = document.querySelectorAll('input');
const inputID = document.querySelectorAll('input')[0];
const inputPW = document.querySelectorAll('input')[1];
const loginBtn = document.querySelector('.login.btn');

const descriptionID = document.querySelectorAll('.form-description')[0];
const descriptionPW = document.querySelectorAll('.form-description')[1];

function moveToUpside(inputType, descriptionType) {
    if (inputType.value) {
        descriptionType.classList.add('focused');
        inputType.classList.add('entered');
    } else {
        descriptionType.classList.remove('focused');
        inputType.classList.remove('entered');
    }
};

inputID.addEventListener('input', () => {moveToUpside(inputID, descriptionID)});
inputPW.addEventListener('input', () => { moveToUpside(inputPW, descriptionPW)});

function active() {
    if (inputID.value && inputPW.value) {
        loginBtn.removeAttribute('disabled');
        loginBtn.classList.add('active');  
    } else {
        loginBtn.setAttribute('disabled', 'disabled');
        loginBtn.classList.remove('active')
    }
};

inputID.addEventListener('input', active);
inputPW.addEventListener('input', active);

