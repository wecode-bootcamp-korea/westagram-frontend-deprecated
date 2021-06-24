'use strict';

// 로그인 버튼 활성화
// addEventListener( 'keyup', () => {
//   let loginId = document.getElementById('loginId').value; 
//   let loginPw = document.getElementById('loginPw').value;
//   let loginBtn = document.getElementsByClassName('loginBtn')[0];

//   let loginBtnColor = loginBtn.style; 
  
//   return (loginId !=="") && (loginPw !=="") ? loginBtnColor.backgroundColor = "#0096f6" : loginBtnColor.backgroundColor = "#C0DFFD"; 
// });

// 유효성 검사
addEventListener( 'keyup', () => {
  let loginId = document.getElementById('loginId').value; 
  let findAt = loginId.indexOf('@')
  const loginPw = document.getElementById('loginPw').value;
  const loginBtn = document.getElementsByClassName('loginBtn')[0];

  const loginBtnColor = loginBtn.style; 
  
  return (findAt !== -1) && (loginPw.length >= 5) ? loginBtnColor.backgroundColor = "#0096f6" : loginBtnColor.backgroundColor = "#C0DFFD"; 
});