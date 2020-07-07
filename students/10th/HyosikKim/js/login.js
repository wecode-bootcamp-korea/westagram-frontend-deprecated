const id = document.getElementsByClassName('id')[0];
const pw = document.getElementsByClassName('pw')[0];
const loginBtn = document.getElementsByClassName('login')[0];
const loginContainer = document.getElementsByClassName('login-container')[0];

changeLoginBtnColor = () => {
  (id.value.length && pw.value.length) >= 1
    ? (loginBtn.style.backgroundColor = '#0095f6')
    : (loginBtn.style.backgroundColor = '#b2dffc');
};

loginContainer.addEventListener('keyup', changeLoginBtnColor);
