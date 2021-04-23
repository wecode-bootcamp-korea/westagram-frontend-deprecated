const loginInputs = Array.from(
  document.getElementsByClassName("login-form__input")
);
const submitBtn = document.querySelector(".login-form__button");
const OPACITY = "login-form__button--opacity";
let isIdExists;
let isPwExists;

function activateSubmitBtn(isEveryInputValueExists) {
  if (isEveryInputValueExists) {
    submitBtn.classList.remove(OPACITY);
    submitBtn.disabled = false;
    return;
  }

  if (!isEveryInputValueExists) {
    submitBtn.classList.add(OPACITY);
    submitBtn.disabled = true;
    return;
  }
}

function checkInputValue(e) {
  const inputValue = e.target.value;
  const inputType = e.target.type;

  if (inputType === "email") {
    inputValue ? (isIdExists = true) : (isIdExists = false);
  }
  if (inputType === "password") {
    inputValue ? (isPwExists = true) : (isPwExists = false);
  }

  const isEveryInputValueExists = isIdExists && isPwExists ? true : false;

  activateSubmitBtn(isEveryInputValueExists);
}

function init() {
  submitBtn.disabled = true;
  loginInputs.forEach((input) =>
    input.addEventListener("keyup", checkInputValue)
  );
}

init();
