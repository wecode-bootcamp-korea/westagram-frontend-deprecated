const loginID = document.getElementById("userID");
const loginPW = document.getElementById("userPW");
const loginBtn = document.getElementsByClassName("logBtn")[0];

function checklogin() {
  if (loginID.value !== "" && loginPW.value !== "") {
    loginBtn.style.backgroundColor = "#0095f6";
  } else {
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}
loginID.addEventListener("keyup", checklogin);
loginPW.addEventListener("keyup", checklogin);
