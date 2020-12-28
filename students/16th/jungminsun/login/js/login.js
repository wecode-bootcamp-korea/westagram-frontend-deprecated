'use strict';

const inputs = document.querySelectorAll('.loginInput'),
      loginBtn = document.querySelector('.loginBtn');

function inputHandler() {
  const idInput = document.querySelector('.idInput').value,
        pwInput = document.querySelector('.pwInput').value;
  if (idInput.indexOf('@') !== -1 && pwInput.length >= 5) {
    loginBtn.removeAttribute('disabled');
    loginBtn.setAttribute("active", "");
    return;
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', inputHandler);
})