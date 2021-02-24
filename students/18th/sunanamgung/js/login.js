// added in ES 5
// use this for Vanilla JavaScript.
'use strict';

<!-- id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요. 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로! -->


function hasData() {
  var user = document.getElementById("user");
  var pw = document.getElementById("password");
  if (user.length !=== 0 && pw.length !===0) {
    
  } else {

  }
}


function doLogin(hasLetter) {
  return(hasLetter ? 'true':'false');
}
