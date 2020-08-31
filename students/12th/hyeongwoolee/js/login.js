const loginForm = document.getElementById("userform");
const loginId = document.getElementById("inner__id");
const loginPw = document.getElementById("inner__pw");
const loginBtn = document.getElementById("signin__button");

function activateBtn(e) {
  const idValue = loginId.value;
  const pwValue = loginPw.value;
  if (idValue.length >= 1 && pwValue.length >= 1) {
    loginBtn.style.backgroundColor = "rgba(0, 127, 246, 0.63)";
  } else if (idValue.length < 1 || pwValue.length < 1) {
    loginBtn.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    event.preventDefault();
  }
}

loginId.addEventListener("keyup", activateBtn);
loginPw.addEventListener("keyup", activateBtn);
