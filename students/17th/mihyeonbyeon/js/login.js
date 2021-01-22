const $inputContainer = document.querySelector(".input_container");
const $inputID = document.querySelector(".input_id");
const $inputPassword = document.querySelector(".input_password");
const $loginButton = document.querySelector(".login_button");

const validateLogin = () => {
    $inputID.value.indexOf("@") !== -1 && $inputPassword.value.length >= 5 ? $loginButton.style.backgroundColor = "#0095F6" : $loginButton.style.backgroundColor = "#B9DFFC";
}

$inputContainer.addEventListener("keydown", validateLogin);
