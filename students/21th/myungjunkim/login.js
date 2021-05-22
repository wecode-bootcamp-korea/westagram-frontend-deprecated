const loginContainer = document.querySelector(".login-input");
const loginButton = document.querySelector(".login-button");

loginContainer.addEventListener("keyup", function () {
  const id = document.getElementById("js__input-id"),
    password = document.getElementById("js__input-password");

  function checkValue() {
    loginButton.classList.add("not-disabled");
    loginButton.style.backgroundColor = "#0295f6";
    loginButton.disabled = false;
  }

  id.value.indexOf("@") > 0 && password.value.length > 4
    ? checkValue()
    : loginButton.classList.remove("not-disabled");
});
