const getId = document.querySelector(".accountInput");
const getPassword = document.querySelector(".passwordInput");
const loginBtn = document.querySelector(".loginBtn");

function loginBtnFunc() {
  const getIdValue = getId.value;
  const getPasswordValue = getPassword.value;
}

function keyFunc() {
  if (getId.value.includes("@") && getPassword.value.length >= 6) {
    loginBtn.style.backgroundColor = "rgb(0,149,246)";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "rgba(0,149,246,0.3)";
    loginBtn.style.cursor = "default";
    loginBtn.disabled = true;
  }
}

loginBtn.addEventListener("click", loginBtnFunc);
getId.addEventListener("keyup", keyFunc);
getPassword.addEventListener("keyup", keyFunc);
