const idInput = document.getElementsByClassName("login-form__input")[0];
const pwInput = document.getElementsByClassName("login-form__input")[1];
const submitBtn = document.querySelector(".login-form__button");
const OPACITY = "login-form__button--opacity";

function removeOpacity(isEveryInputValueExists) {
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

function checkInputValue() {
  const idInputValue = idInput.value;
  const pwInputValue = pwInput.value;
  const isEveryInputValueExists = idInputValue && pwInputValue ? true : false;
  removeOpacity(isEveryInputValueExists);
}

function init() {
  submitBtn.disabled = true;
}

idInput.addEventListener("keyup", checkInputValue);
pwInput.addEventListener("keyup", checkInputValue);
init();
