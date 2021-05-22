const loginButton = document.querySelector(".login-button");
const inputEls = document.querySelectorAll("input");
const inputId = document.querySelector("input[type=text]");
const inputPassword = document.querySelector("input[type=password]");

const buttonCondition = () => {
  if (inputId.value.length !== 0 && inputPassword.value.length !== 0) {
    return true;
  } else return false;
};

// 재활용 할 수 있을거 같은데 loginButton -> this?
const opacityAndDisableButton = (value, boolean) => {
  loginButton.style.opacity = value;
  loginButton.disabled = boolean;
};

const handleInputChange = (event) => {
  event.preventDefault();

  buttonCondition()
    ? opacityAndDisableButton(1, false)
    : opacityAndDisableButton(0.3, true);
};

inputEls.forEach((inputEl) => {
  inputEl.addEventListener("keyup", handleInputChange);
});
