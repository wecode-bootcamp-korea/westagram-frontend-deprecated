const loginForm = document.querySelector('.login_form');

const changeButtonStatus = (validationCheckFunction) => {
  const loginButton = loginForm.querySelector('.login_button button'),
    idValue = loginForm.querySelector(`input[name='username']`).value,
    passwordValue = loginForm.querySelector(`input[name='password']`).value;
  loginButton.disabled = !validationCheckFunction(idValue, passwordValue);
};

const validationFunctions = {
  isIdAndPasswordMinOnce: function (idValue, passwordValue) {
    return idValue && passwordValue;
  },
  isIdHasAtAndPasswordMinFive: function (idValue, passwordValue) {
    return idValue.includes('@') && passwordValue.length > 4;
  }
};

loginForm.addEventListener('keyup', () => changeButtonStatus(validationFunctions.isIdAndPasswordMinOnce));