'use strict';

const button = document.getElementsByClassName("button")[0];
const inputId = document.getElementsByClassName("id")[0];
const inputPassword = document.getElementsByClassName("password")[0];
let buttonOff = button.disabled;

inputId.addEventListener("input", activeButton)
inputPassword.addEventListener("input", activeButton)

function activeButton() {
    const id = inputId.value;
    const password = inputPassword.value;
    buttonOff = (id && password) ? true : false;
    button.style.backgroundColor = (buttonOff) ? "#1F96F7" : "#C0DFFD"
}
