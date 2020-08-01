const buttonOnOffPw = document.getElementById('login-container');

buttonOnOffPw.addEventListener('keyup', function(e) {
  const pw = document.getElementById('password').value;
  const id = document.getElementById('login-id').value;
  let btn = document.getElementById('login-button');
  if (id.length > 0 && pw.length > 0) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
});
