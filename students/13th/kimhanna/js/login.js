const loginID = document.getElementById("userID");
const loginPW = document.getElementById("userPW");
const loginBtn = document.getElementsByClassName("logBtn")[0];
const loginForm = document.getElementsByClassName("form")[0]

function checklogin() {
  const isValid = loginID.value !== "" && loginPW.value !== ""
  loginBtn.style.backgroundColor = isValid ? "#0095f6" : "#b2dffc"
}

loginForm.addEventListener("keyup",checklogin);
