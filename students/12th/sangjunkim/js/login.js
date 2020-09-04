"use strict";

const idInput = document.getElementsByClassName("idPasswordForm")[0];
const pwInput = document.getElementsByClassName("idPasswordForm")[1];
const btnInput = document.getElementsByClassName("loginBtn")[0];
const btnColor = document.getElementsByClassName("loginInput")[0];

btnColor.addEventListener("keyup", function () {
  if (idInput.value.length > 0 && pwInput.value.length > 0) {
    btnInput.style.backgroundColor = "#0295F6";
  }
});
