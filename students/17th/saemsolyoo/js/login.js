const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("input", () => {
  const inputId = document.querySelector(".input-id");
  const inputPw = document.querySelector(".input-pw");
  const loginBtn = document.querySelector(".login-btn");

  inputId.value.length > 0 && inputPw.value.length > 0
    ? loginBtn.removeAttribute("disabled")
    : loginBtn.setAttribute("disabled", "disabled");
});
