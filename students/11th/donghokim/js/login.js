const changeButtonStatus = (validationCheckFunction, inputName, value) => {
  let loginButton = document.querySelector('.login_button button');
  if (validationCheckFunction(inputName, value)) loginButton.disabled = false;
  else loginButton.disabled = true;
};

const isIdAndPasswordMinOnce = (() => {
  const validationFlag = {
    username: false,
    password: false
  }
  return (inputName, value) => {
    if (value) validationFlag[inputName] = true;
    else validationFlag[inputName] = false;
    return validationFlag.username && validationFlag.password;
  }
})();

const loginForm = document.querySelector('.login_form');

loginForm.addEventListener('keyup', ({
  target: {
    name,
    value
  }
}) => changeButtonStatus(isIdAndPasswordMinOnce, name, value));