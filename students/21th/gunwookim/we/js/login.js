const userName = document.querySelector(".userName");
const password = document.querySelector(".password");
const loginButton = document.querySelector(".loginButton");

const loginButtonControler = () => {
  loginButton.disabled = loginValidation();
};

const loginValidation = () => {
  const idValidation = userName.value.includes("@") ? true : false;
  const passwordValidation = password.value.trim().length > 5 ? true : false;

  return idValidation && passwordValidation ? false : true;
};

const loginButtonClick = () => {
  alert("loginButtonClick");
};

userName.addEventListener("keyup", loginButtonControler);
password.addEventListener("keyup", loginButtonControler);
loginButton.addEventListener("click", loginButtonClick);
