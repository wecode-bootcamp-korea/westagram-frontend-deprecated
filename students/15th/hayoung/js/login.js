const idInput = document.getElementById('id'),
passwordInput = document.getElementById('password'),
loginBtn = document.getElementsByClassName('loginBtn'),
loginForm = document.getElementsByClassName('loginForm');

loginBtn.disabled = true;

let eventStart = () => {
    loginForm.addEventListener('keyup',checkLoginBtn);
}

let checkLoginBtn = () => {
    let isIdOn = idInput.value.length > 0;
    let isPasswordOn = passwordInput.value.length > 0;
    let loginBtnOn = () => {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#0095f6';
    };
    let result = isIdOn ? (isPasswordOn ? loginBtnOn() : null) : null;
}

eventStart();

 