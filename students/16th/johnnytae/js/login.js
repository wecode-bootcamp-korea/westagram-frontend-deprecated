const loginButton = document.getElementsByClassName('loginButton')[0];
const userId = document.getElementsByClassName('userId')[0];
const userPw = document.getElementsByClassName('userPw')[0];

function activateLogin() {
  const filled = userId.value && userPw.value;
  if (!filled) {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = '#b5dcfc';
  } else {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = '#49aafa';
  }
}

userId.addEventListener('keyup', activateLogin);
userPw.addEventListener('keyup', activateLogin);
