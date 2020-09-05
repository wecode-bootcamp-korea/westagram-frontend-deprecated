"use strict";

const idInput = document.getElementsByClassName("idPasswordForm")[0];
const pwInput = document.getElementsByClassName("idPasswordForm")[1];
const btnInput = document.getElementsByClassName("loginInput")[0];
const btnColor = document.getElementsByClassName("loginBtn")[0];

btnInput.addEventListener("keyup", function () {
  if (idInput.value && pwInput.value) {
    btnColor.style.backgroundColor = "#0295F6";
  } else {
    btnColor.style.backgroundColor = "#C1DFFC";
  }
});
