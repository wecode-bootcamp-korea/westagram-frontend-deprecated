const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("input", () => {
  const inputId = document.querySelector(".input-id");
  const inputPw = document.querySelector(".input-pw");
  const loginBtn = document.querySelector(".login-btn");

  const idCondition = inputId.value.length > 0;
  const pwCondition = inputPw.value.length > 6;

  idCondition && pwCondition
    ? loginBtn.removeAttribute("disabled")
    : loginBtn.setAttribute("disabled", "disabled");
});
