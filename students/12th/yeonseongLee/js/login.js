'use strict';

const name = document.getElementsByClassName("idPwdForm")[0];
const password = document.getElementsByClassName("idPwdForm")[1];
const button = document.getElementsByClassName("btn")[0];

document.addEventListener("keyup", activate)

function activate() {
if (name.value.length > 0 && password.value.length > 0) {
    button.style.backgroundColor = "#0095F6"
}
}

