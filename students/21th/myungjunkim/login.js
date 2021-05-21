const loginContainer = document.querySelector(".js__login-input");
const loginButton = document.querySelector(".js__login-button");

loginContainer.addEventListener("keyup", function () {
  const id = document.getElementById("js__input-id"),
    password = document.getElementById("js__input-password"),
    button = document.querySelector(".js__login-button");

  function checkValue() {
    loginButton.classList.add("not-disabled");
    button.disabled = false;
  }

  id.value.length > 4 && password.value.length > 4
    ? checkValue()
    : loginButton.classList.remove("not-disabled");
});
