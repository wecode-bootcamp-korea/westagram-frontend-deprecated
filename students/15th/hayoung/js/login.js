const idInput = document.getElementsByClassName('id'),
passwordInput = document.getElementsByClassName('password'),
loginBtn = document.getElementsByClassName('loginBtn')[0],
loginForm = document.getElementsByClassName('loginForm')[0];

( () => {
    loginForm.addEventListener('keyup',checkLoginBtn);
})();

const checkLoginBtn = () => {
    const isIdOn = idInput.value.length > 0;
    const isPasswordOn = passwordInput.value.length > 0;
    const isValid = isIdOn && isPasswordOn;
    loginBtn.disabled = !isValid;
    loginBtn.style.backgroundColor = isValid ? "#0095f6" : "#b9e0fc";
}


 