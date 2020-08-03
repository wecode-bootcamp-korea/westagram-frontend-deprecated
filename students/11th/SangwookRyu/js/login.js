const btnOnOffPw = document.getElementsByClassName('login-container')[0];

btnOnOffPw.addEventListener('keyup', function() {
  const id = document.getElementsByClassName('login-id')[0].value;
  const pw = document.getElementsByClassName('password')[0].value;
  let btn = document.getElementsByClassName('login-button')[0];

  btn.disabled = id.length && pw.length > 0 ? false : true;
});
