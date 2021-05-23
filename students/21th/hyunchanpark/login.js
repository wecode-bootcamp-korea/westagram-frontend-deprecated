const loginButton = document.querySelector(".login-button");
const inputEls = document.querySelectorAll("input");
const inputId = document.querySelector("input[type=text]");
const inputPassword = document.querySelector("input[type=password]");

const emailRegExp =
  /[a-zA-Z0-9.-_+!]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}(?:.[a-zA-Z0-9]{2,3})?/;
const passwordRegExp = /[a-zA-Z0-9]{5,100}/;

const validateEmailAndPassword = (email, password) => {
  let isValidEmail = false;
  let isValidPassword = false;

  if (email.match(emailRegExp)) isValidEmail = true;
  if (password.match(passwordRegExp)) isValidPassword = true;

  return isValidEmail && isValidPassword;
};

const opacityAndDisableButton = (value, boolean) => {
  loginButton.style.opacity = value;
  loginButton.disabled = boolean;
};

const handleInputChange = (event) => {
  event.preventDefault();

  validateEmailAndPassword(inputId.value, inputPassword.value)
    ? opacityAndDisableButton(1, false)
    : opacityAndDisableButton(0.3, true);
};

inputEls.forEach((inputEl) => {
  inputEl.addEventListener("keyup", handleInputChange);
});
