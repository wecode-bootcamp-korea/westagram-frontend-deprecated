"use strict";

const loginBtn = document.getElementsByClassName("login_btn")[0];
const idInput = document.getElementsByClassName("login_id")[0];
const pwInput = document.getElementsByClassName("login_pw")[0];
const loginInfo = document.getElementsByClassName("login_info")[0];

loginBtn.disabled = true;

function btnActive() {
  loginBtn.disabled = false;
  loginBtn.style.background = "#0096F6";
}
function btnDisable() {
  loginBtn.disabled = true;
}

loginInfo.addEventListener("keyup", function () {
  if (idInput.value === "" || pwInput.value === "") {
    return btnDisable();
  }
  if (idInput.value !== "" && pwInput.value !== "") {
    return btnActive();
  }
});
