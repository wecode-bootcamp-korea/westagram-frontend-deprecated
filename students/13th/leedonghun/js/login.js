const idBox = document.querySelector('.username-box');
const pwBox = document.querySelector('.pw-box');

function activateLoginButton() {
  const loginButton = document.querySelector('.login-button');
  if (idBox.value.length > 0 && pwBox.value.length > 5) {
    loginButton.style.backgroundColor = '#0095f6';
    loginButton.style.cursor = 'pointer';
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = '#b2dffc';
    loginButton.disabled = true;
  }
}

idBox.addEventListener('input', activateLoginButton);
pwBox.addEventListener('input', activateLoginButton);




