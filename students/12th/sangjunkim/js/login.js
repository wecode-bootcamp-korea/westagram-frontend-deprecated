"use strict";

const thisIsId = document.getElementsByClassName("idPasswordForm")[0];
const thisIsPw = document.getElementsByClassName("idPasswordForm")[1];
const thisIsBtn = document.getElementsByClassName("loginBtn")[0];

document.addEventListener("keyup", function () {
  if (thisIsId.value.length > 0 && thisIsPw.value.length > 0) {
    thisIsBtn.style.backgroundColor = "#0295F6";
  }
});
