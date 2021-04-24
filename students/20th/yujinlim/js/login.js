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
  const { value, type } = e.target;

  if (type === "email") {
    value ? (isIdExists = true) : (isIdExists = false);
  }
  if (type === "password") {
    value ? (isPwExists = true) : (isPwExists = false);
  }
  const isEveryInputValueExists = isIdExists && isPwExists;
  activateSubmitBtn(isEveryInputValueExists);
}

function init() {
  submitBtn.disabled = true;
  loginInputs.forEach((input) =>
    input.addEventListener("keyup", checkInputValue)
  );
}

init();
