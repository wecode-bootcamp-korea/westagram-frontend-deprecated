const changeButtonStatus = (validationCheckFunction, inputName, value) => {
  let loginButton = document.querySelector('.login_button button');
  if (validationCheckFunction(inputName, value)) loginButton.disabled = false;
  else loginButton.disabled = true;
};

const validationFunctions = (() => {
  const validationFlag = {
    username: false,
    password: false
  }
  return {
    isIdAndPasswordMinOnce: function (inputName, value) {
      if (value) validationFlag[inputName] = true;
      else validationFlag[inputName] = false;
      return validationFlag.username && validationFlag.password;
    },
    isIdHasAtAndPasswordMinFive: function (inputName, value) {
      if (inputName === 'username' && value.includes('@')) validationFlag[inputName] = true;
      if (inputName === 'password' && value.length > 4) validationFlag[inputName] = true;
      return validationFlag.username && validationFlag.password;
    }
  }
})();

const loginForm = document.querySelector('.login_form');

loginForm.addEventListener('keyup', ({
  target: {
    name,
    value
  }
}) => changeButtonStatus(validationFunctions.isIdHasAtAndPasswordMinFive, name, value));