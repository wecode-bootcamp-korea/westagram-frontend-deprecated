var logInId = document.getElementsByClassName("A")[0];
var logInPassword = document.getElementsByClassName("A")[1];
var logInButton = document.getElementsByClassName("A")[2];

function disableLogInButton() {
  if (
    logInId.value.length > 0 &&
    logInId.value.indexOf("@") != -1 &&
    logInPassword.value.length >= 5
  ) {
    logInButton.disabled = false;
    logInButton.style.backgroundColor = "red";
    console.log("둘다 입력됨");
  } else {
    logInButton.disabled = true;
    logInButton.style.backgroundColor = "blue";
  }
}

logInId.addEventListener("keyup", (e) => disableLogInButton());
logInPassword.addEventListener("keyup", (e) => disableLogInButton());
