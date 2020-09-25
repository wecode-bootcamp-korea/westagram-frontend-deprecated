// 1. id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// - 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
function turnBlue() {
  const id = document.getElementById("login-id");
  const pw = document.getElementById("password");
  const btn = document.getElementById("btn");
  
  if (id.value.length >= 1 && pw.value.length >= 1 ) {
    btn.style.backgroundColor = '#0096F6';
  }else {
    btn.style.backgroundColor =  '#BDDCFA';
  }
}