'use strict';
const button = document.getElementsByClassName("log_button")[0];

// document.addEventListener("keyup", activate)
function activate() {
    const name = document.getElementsByClassName("textid")[0];
    const password = document.getElementsByClassName("pass")[0];

    if (name.children[0].value.length > 0 && password.children[0].value.length > 0) {
        alert ("Login successfully");
    }
}