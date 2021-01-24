// btn , userId , userPassword
"use strict";
// const btn = document.getElementsByClassName("logInButton")[0]

// btn.addEventListener("keyup", function() {
//  const pw = document.getElementById("userPassword").value;
//  const id = document.getElementById("userId").value;

//   if (pw && id) {
//   btn.re
//   btn.style.backgroundColor="#0095F6";
//   return
//   }
// }

// const btn = document.getElementsByClassName("logInButton")[0];
// const input = document.getElsmentsByClassName("input");
// const id = document.getElementById("userId");
// const pw = document.getElementById("userPassword");

// function changebtn() {
//   if (id.value && pw.value) {
//     btn.removeAttribute("disabled");
//     btn.style.backgroundColor = "#0095F6";
//   }
// }

// pw.addEventListener("keyup", function());

const pw = document.getElementById("userPassword");
const btn = document.getElementsByClassName("logInButton")[0];

pw.addEventListener("keydown", function (event) {
  const id = document.getElementById("userId").value;
  const pwd = document.getElementById("userPassword").value;

  if (id != null && pwd.length > 1) {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "#0095F6";
  } else {
    // btn.removeAttribute("enabled");
    btn.style.backgroundColor = "#b2dffc";
  }
});
