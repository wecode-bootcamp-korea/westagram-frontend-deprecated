const idInput = document.querySelector(".id"),
  passwordInput = document.querySelector(".password"),
  loginForm = document.querySelector(".login-box__form"),
  loginButton = loginForm.querySelector(".login-box__button");

function logIn(event) {
  event.preventDefault();
  idInput.value = "";
  passwordInput.value = "";
  loginButton.disabled = true;
}

function checkId(event) {
  const idValue = event.target.value;
  if (idValue && passwordInput.value) {
    return (loginButton.disabled = true);
  }
  idValue.includes("@") && passwordInput.value.length >= 5
    ? (loginButton.disabled = false)
    : (loginButton.disabled = true);
}

function checkPassword(event) {
  const passwordValue = event.target.value;
  if (!passwordValue.length && !idInput.value.length) {
    return (loginButton.disabled = true);
  }
  idInput.value.includes("@") && passwordValue.length >= 5
    ? (loginButton.disabled = false)
    : (loginButton.disabled = true);
}

function checkInfo() {
  idInput.addEventListener("keyup", checkId);
  passwordInput.addEventListener("keyup", checkPassword);
  loginForm.addEventListener("submit", logIn);
}

function init() {
  checkInfo();
}

init();
