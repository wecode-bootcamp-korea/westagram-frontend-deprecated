const idInput = document.querySelector('.userId');
const pwInput = document.querySelector('.userPw');
const loginButton = document.querySelector('.loginButton');

function changeBtnColor(event) {
  if (idInput.value && pwInput.value) {
    loginButton.style.opacity = 1;
    loginButton.disabled = false;
  } else {
    loginButton.style.opacity = 0.3;
    loginButton.disabled = true;
  }
}

idInput.addEventListener('keyup', changeBtnColor);
pwInput.addEventListener('keyup', changeBtnColor);
