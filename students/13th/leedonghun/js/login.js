
function activateLoginButton() {
  const loginButton = document.getElementById('login-button');
  if (idBox.value.length > 0 && pwBox.value.length > 5) {
    loginButton.style.backgroundColor = '#0095f6';
    loginButton.style.cursor = 'pointer';
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = '#b2dffc';
    loginButton.disabled = true;
  }
}

const idBox = document.getElementById('username-box');
const pwBox = document.getElementById('pw-box');

idBox.addEventListener('input', activateLoginButton);
pwBox.addEventListener('input', activateLoginButton);

/*
function inputOutlineOnClick(e) {
  e.target.style.outline = '0.5px solid #a8a8a8';
  function revertInputOutline(e) {
    e.target.style.outline = 'none';
  }
  e.target.addEventListener('mouseout', revertInputOutline);
}

idBox.addEventListener('click', inputOutlineOnClick);
pwBox.addEventListener('click', inputOutlineOnClick);
*/


/*
function activateLoginButton() {
  const loginButton = document.getElementById('login-button');
  const idBox = document.getElementById('username-box');
  const pwBox = document.getElementById('pw-box');
  if (idBox.value && pwBox.value) {
    loginButton.style.backgroundColor = '#0095f6';
  } else {
    loginButton.stylebackgroundColor = '#b2dffc';
  }
}*/




