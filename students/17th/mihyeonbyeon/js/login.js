const $inputContainer = document.querySelector(".input_container");
const $inputID = document.querySelector(".input_id");
const $inputPassword = document.querySelector(".input_password");
const $loginButton = document.querySelector(".login_button");

const validateLogin = () => {
    const isValid = $inputID.value.indexOf("@") !== -1 && $inputPassword.value.length >= 5;
    $loginButton.style.backgroundColor = isValid ? "#0095F6" : "#B9DFFC";
}


$inputContainer.addEventListener("keydown", validateLogin);
