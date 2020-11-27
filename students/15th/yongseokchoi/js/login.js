const loginId = document.querySelector('.login__id');
const loginPassword = document.querySelector('.login__password');
const loginBTN = document.querySelector('button');

const checkLogin = () => {
  const idLength = loginId.value.length;
  const passwordLength = loginPassword.value.length;

  const activateBtn = idLength && passwordLength;
  loginBTN.style.backgroundColor = activateBtn ? 'tomato' : '#c0dffd';
  loginBTN.setAttribute('disabled', activateBtn ? false : true);
  loginBTN.removeAttribute(activateBtn ? 'disabled' : true);
};

loginId.addEventListener('keyup', checkLogin);
loginPassword.addEventListener('keyup', checkLogin);
