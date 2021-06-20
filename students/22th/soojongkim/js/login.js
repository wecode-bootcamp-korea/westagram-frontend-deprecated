"use strict";

let inputId = document.getElementById("userId");
let inputPw = document.getElementById("userPw");
let loginBtn = document.getElementById("btn_login");


inputId.addEventListener("keyup", () => {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    loginBtn.disabled = false;

  } else {
    loginBtn.disabled = true;

  }
});


inputPw.addEventListener("keyup", () => {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;

  }
});