"use strict";

let inputId = document.getElementById("userId");
let inputPw = document.getElementById("userPw");
let loginBtn = document.getElementById("btn_login");




inputPw.addEventListener("keyup", function (event) {
  if (inputId.value == "" && inputPw.value == "") {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
});