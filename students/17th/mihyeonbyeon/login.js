const $inputContainer = document.querySelector(".input-container");
const $inputID = document.querySelector(".input-id");
const $inputPassword = document.querySelector(".input-password");
const $loginButton = document.querySelector(".login-button");

const validateLogin = () => {
    $inputID.value.indexOf("@") !== -1 && $inputPassword.value.length >= 5 ? $loginButton.style.backgroundColor = "#0095F6" : $loginButton.style.backgroundColor = "#B9DFFC";
}

$inputContainer.addEventListener("keydown", validateLogin);