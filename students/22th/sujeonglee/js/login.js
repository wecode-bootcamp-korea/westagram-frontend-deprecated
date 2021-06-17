'use strict';

addEventListener( 'keyup', () => {
  const loginId = document.getElementById('loginId').value; 
  const loginPw = document.getElementById('loginPw').value;
  const loginBtn = document.getElementsByClassName('loginBtn')[0];

  const loginBtnColor = loginBtn.style;
  
  return (loginId !=="") && (loginPw !=="") ? loginBtnColor.backgroundColor = "#0096f6" : loginBtnColor.backgroundColor = "#C0DFFD"; 
});
