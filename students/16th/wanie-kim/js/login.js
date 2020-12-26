'use strict';

const button = document.getElementById("button");
const inputId = document.getElementById("id");
const inputPassword = document.getElementById("password");
let buttonOff = button.disabled;

inputId.addEventListener("input", activeButton)
inputPassword.addEventListener("input", activeButton)

function activeButton() {
    const id = inputId.value;
    const password = inputPassword.value;
    buttonOff = (!id || !password) ? true : false;
    button.style.backgroundColor = (!buttonOff) ? "#1F96F7" : "#C0DFFD"
    console.log(id, password, buttonOff);
}
