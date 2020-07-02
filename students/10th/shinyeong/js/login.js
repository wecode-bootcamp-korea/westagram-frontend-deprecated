const form = document.querySelector('.sign-in__form');
const inputId = form.querySelector('.form__email');
const inputPw = form.querySelector('.form__password');
const loginBtn = form.querySelector('button');
const link = form.querySelector('.button-link');


function handleSignIn() {
    if (inputId.value && inputPw.value) {
        loginBtn.style.backgroundColor = '#344f86';
        loginBtn.style.cursor = 'pointer';
        link.setAttribute('href', 'main.html');
        handleEnterBtn();
    } else {
        loginBtn.style.backgroundColor = '#b2dffc';
        link.setAttribute('href', '#');
    } 
}

function handleEnterBtn() {
    const keyCode = window.event.keyCode;
    if (keyCode == 13 ) {
        form.submit();
    }
}

function init() {
    inputId.addEventListener('keyup', handleSignIn);
    inputPw.addEventListener('keyup', handleSignIn);
}

init();










// const form = document.querySelector('.signIn__form');
// const inputId = form.querySelector('.form__email');
// const inputPw = form.querySelector('.form__password');
// const link = form.querySelector('.button-link');
// const loginBtn = form.querySelector('button');

// let idValue = "";
// let pwValue = "";

// function getIdData(idText) {
//     idValue = idText;
//     activeLogin(idValue, pwValue);
// }

// function getPwData(pwText) {
//     pwValue = pwText;
//     activeLogin(idValue, pwValue);
// }

// function activeLogin(idText, pwText) {
//     if (idText && pwText) {
//         loginBtn.style.backgroundColor = '#344f86';
//         loginBtn.style.cursor = 'pointer';
//         link.setAttribute('href', 'main.html');
//     } else if (!(idText && pwText)) {
//         loginBtn.style.backgroundColor = '#b2dffc';
//         link.setAttribute('href', '#');
//     }
// }




/*
function handleFormSubmit(event) {
    event.preventDefault();
}

function init() {
    form.addEventListener("submit", handleFormSubmit());
}

init();
*/
