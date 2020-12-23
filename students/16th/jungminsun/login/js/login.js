'use strict';

const inputs = document.querySelectorAll('.fillInput'),
      fillBtn = document.querySelector('.fillBtn');

function inputHandler() {
  const idInput = document.querySelector('.idInput').value,
        pwInput = document.querySelector('.pwInput').value;
  if (idInput !== '' && pwInput !== '') {
    return fillBtn.removeAttribute('disabled');
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', inputHandler);
})