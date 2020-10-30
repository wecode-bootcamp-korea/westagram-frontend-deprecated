const loginId = document.getElementsByClassName("id")[0];
const loginPw = document.getElementsByClassName("pw")[0];
const loginButton = document.getElementsByClassName("main__login")[0];
const inputBox = document.getElementsByClassName("inputBox")[0];

loginButton.disabled = true;
inputBox.addEventListener("keyup", function () {
  if (loginId.value.length >= 4 && loginPw.value.length >= 4) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "orange";
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "rgba(255, 127, 0, 0.4)";
  }
});
