const inputItems = document.querySelector(".input_container");
const inputId = inputItems.querySelector(".id");
const inputPw = inputItems.querySelector(".password");
const logInButton = inputItems.querySelector(".log_in_button");

const loginEventTrue = () => {
    logInButton.disabled = false;
    logInButton.style.cursor = "pointer";
    logInButton.style.backgroundColor = "#0095f6";
};

const loginEventFalse = () => {
    logInButton.disabled = true;
    logInButton.style.cursor = "default";
    logInButton.style.backgroundColor = "#B9DFFC";
};

inputItems.addEventListener("keyup", (logInValid) => {
    const inputValid = inputId.value.length >= 2 && inputPw.value.length >= 5 && inputId.value.includes("@");
    inputValid ? loginEventTrue() : loginEventFalse();
});
