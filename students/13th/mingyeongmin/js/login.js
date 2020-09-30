const loginPageInit = () => {
  const loginForm = document.querySelector('.login-form');
  const idInput = document.querySelector('.id-input');
  const pwInput = document.querySelector('.pw-input');
  const loginBtn = document.querySelector('.login-btn');

  const checkIfInputEmpty = () => {
    const isValid = idInput.value && pwInput.value;

    if (isValid) loginBtn.classList.replace('inactive', 'active');
    if (!isValid) loginBtn.classList.replace('active', 'inactive');
    loginBtn.disabled = !isValid;
  };

  const validateInput = () => {
    if (idInput.value.includes('@') && pwInput.value.length > 4) {
      alert('validated!');
      return;
    }
    alert('please check pw and id');
  };

  loginForm.addEventListener('keyup', checkIfInputEmpty);
  loginForm.addEventListener('submit', validateInput);
};

loginPageInit();
