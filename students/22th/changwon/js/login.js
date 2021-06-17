const logId = document.getElementsByClassName('loginInput')[0];
const logPw = document.getElementsByClassName('loginInput')[1];
const logBt = document.getElementsByClassName('loginButton')[0];

logId.addEventListener('keyup', function() {
  const id = document.getElementById('log').value;
  const pw = document.getElementById('pwd').value;

  if (id.length > 0 && pw .length > 0) {
    logBt.classList.add('loginButtonB');
  } else {
    logBt.classList.remove('loginButtonB');
  }
});

logPw.addEventListener('keyup', function() {
    const id = document.getElementById('log').value;
    const pw = document.getElementById('pwd').value;
  
    if (id.length > 0 && pw .length > 0) {
      logBt.classList.add('loginButtonB');
    } else {
      logBt.classList.remove('loginButtonB');
    }
  });
  
