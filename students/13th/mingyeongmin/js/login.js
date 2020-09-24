const loginPageInit = () => {
  const loginForm = document.querySelector('.login-form');
  const idInput = document.querySelector('.id-input');
  const pwInput = document.querySelector('.pw-input');
  const loginBtn = document.querySelector('.login-btn');

  const checkIfInputEmpty = () => {
    idInput.value != '' && pwInput.value != ''
      ? loginBtn.classList.replace('inactive', 'active')
      : loginBtn.classList.replace('active', 'inactive');

    idInput.value != '' && pwInput.value != ''
      ? (loginBtn.disabled = false)
      : (loginBtn.disabled = true);
  };

  const validateInput = () => {
    if (idInput.value.includes('@') && pwInput.value.length > 4) {
      alert('validated!');
      return;
    }
    alert('please check pw and id');
  };

  idInput.addEventListener('keyup', checkIfInputEmpty);
  pwInput.addEventListener('keyup', checkIfInputEmpty);
  loginForm.addEventListener('submit', validateInput);
};

loginPageInit();
