// btn , userId , userPassword
"use strict";

const pw = document.getElementById("userPassword");
const btn = document.querySelector(".logInButton");

pw.addEventListener("keydown", function (event) {
  const id = document.getElementById("userId").value;

  if (id != null && pw.value.length > 1) {
    btn.removeAttribute("disabled");
    btn.classList.add("changBtn");
  } else {
    btn.classList.remove("changBtn");
  }
});
