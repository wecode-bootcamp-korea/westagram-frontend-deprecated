window.onload = function () {
  const inputId = document.getElementById('inputId');
  const inputPassword = document.getElementById('inputPassword');
  const loginBtn = document.getElementById('loginBtn');

  inputId.addEventListener('keyup', () => {
    valueCheck();
  });
  inputPassword.addEventListener('keyup', () => {
    valueCheck();
  });
  function valueCheck() {
    let inputIdValue = inputId.value;
    let inputPasswordValue = inputPassword.value;

    if (inputIdValue || inputPasswordValue) {
      loginBtn.classList.add('active');
    } else {
      loginBtn.classList.remove('active');
    }
  }
};
