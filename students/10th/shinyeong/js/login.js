const form = document.querySelector('.sign-in__form');
const inputId = form.querySelector('.form__email');
const inputPw = form.querySelector('.form__password');
const loginBtn = form.querySelector('button');
const link = form.querySelector('.button-link');

function handleSignIn(e) {
    if (e.keyCode === 13 && (inputId.value && inputPw.value)) {
        form.submit();
    } else {
        if (inputId.value && inputPw.value) {
            loginBtn.style.backgroundColor = '#344f86';
            loginBtn.style.cursor = 'pointer';
            link.setAttribute('href', 'main.html');
        } else {
            loginBtn.style.backgroundColor = '#b2dffc';
            link.setAttribute('href', '#');
        } 
    }
}

form.addEventListener('keyup', handleSignIn);
