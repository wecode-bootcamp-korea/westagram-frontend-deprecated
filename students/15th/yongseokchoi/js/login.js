const loginId = document.querySelector('.login__id');
const loginPassword = document.querySelector('.login__password');
const loginBTN = document.querySelector('button');

const checkLogin = () => {
  const idLength = loginId.value.length;
  const passwordLength = loginPassword.value.length;
  if (idLength && passwordLength) {
    loginBTN.style.backgroundColor = 'tomato';
    loginBTN.removeAttribute('disabled');
  } else {
    loginBTN.style.backgroundColor = '#c0dffd';
    loginBTN.setAttribute('disabled', '');
  }
};

loginId.addEventListener('keyup', checkLogin);
loginPassword.addEventListener('keyup', checkLogin);
