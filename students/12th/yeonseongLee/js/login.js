"use strict";

const name = document.getElementsByClassName("idPwdForm")[0];
const password = document.getElementsByClassName("idPwdForm")[1];
const button = document.getElementsByClassName("btn")[0];
const login = document.getElementsByClassName("login")[0];

login.addEventListener("keyup", activate);

function activate() {
  if (name.value.length > 0 && password.value.length > 0) {
    button.style.backgroundColor = "#0095F6";
  } else {
    button.style.backgroundColor = "#C1DFFD";
  }
}
