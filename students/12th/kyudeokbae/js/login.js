const idInput = document.getElementsByClassName("inputIDtext")[0];
const pwInput = document.getElementsByClassName("inputPasswordPw")[0];
const button = document.getElementsByClassName("loginButton")[0];

function changeColor() {
  const condition = idInput.value && pwInput.value;
  if (condition) {
    button.disabled = false;
    button.style.backgroundColor = "#0095f6";
  } else {
    button.disabled = true;
    button.style.backgroundColor = "#B9E0FC";
  }
}

idInput.addEventListener("keyup", changeColor);
pwInput.addEventListener("keyup", changeColor);
