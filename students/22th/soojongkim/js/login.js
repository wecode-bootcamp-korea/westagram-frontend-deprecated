'use strict';

let inputId = document.getElementById("userId");
let inputPw = document.getElementById("userPw");


inputId.addEventListener('keyup', function (event) {
    if (inputId.value.length == "" && inputPw.value == "") {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
});

inputPw.addEventListener('keyup', function (event) {
    if (inputId.value == "" && inputPw.value == "") {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
});