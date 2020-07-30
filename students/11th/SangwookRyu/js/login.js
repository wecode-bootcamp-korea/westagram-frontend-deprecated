const buttonOnOffPw = document.getElementById('password');

buttonOnOffPw.addEventListener('keyup', function(e) {
  const pw = document.querySelector("input#password").value;
  const id = document.querySelector("input#login-id").value;
  let btn = document.getElementById('login-button');
  if (id.length > 0 && pw.length > 0) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
});











const buttonOnOffId = document.getElementById('login-id');

buttonOnOffId.addEventListener('keyup', function(e) {
  const pw = document.querySelector("input#password").value;
  const id = document.querySelector("input#login-id").value;
  let btn = document.getElementById('login-button');
  if (id.length > 0 && pw.length > 0) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
});