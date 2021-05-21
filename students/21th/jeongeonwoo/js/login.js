const emailForm = document.querySelector('#email-input-box');
const passwordForm = document.querySelector('#password-input-box');
const loginButton = document.querySelector('#login-button');

emailForm.addEventListener('keyup', listener);
passwordForm.addEventListener('keyup', listener);

function listener() {
    switch (!(emailForm.value && passwordForm.value)) {
        case true:
            loginButton.disabled = true;
            break;
        case false:
            loginButton.disabled = false;
            break;
    }
}

loginButton.addEventListener('click', () => {
    location.href = "index.html"
});
