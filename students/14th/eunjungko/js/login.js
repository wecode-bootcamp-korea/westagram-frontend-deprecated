const idInput = document.querySelector('.id'),
  pwInput = document.querySelector('.pw'),
  loginBtn = document.querySelector('.loginBtn'),
  loginForm = document.querySelector('.loginForm');

function loginBtnOn() {
  const isActive = idInput.value && pwInput.value;
  loginBtn.disabled = isActive ? 'false' : 'true';
  loginBtn.style.backgroundColor = isActive ? '#469edb' : '#bee1fd';
}

function init() {
  loginForm.addEventListener('keyup', loginBtnOn);
}

init();
