// btn , userId , userPassword
"use strict";

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
