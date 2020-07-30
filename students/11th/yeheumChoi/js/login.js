// 아이디, 비밀번호(6자이상) 입력시 버튼 활성화
const idText = document.getElementsByClassName("loginidText")[0];
const pwText = document.getElementsByClassName("loginpwText")[0];
const loginBtn = document.getElementsByClassName("loginButton")[0];

loginBtn.disabled = true;

idText.addEventListener("keyup", () => {
  loginBtnColor();
});

pwText.addEventListener("keyup", () => {
  loginBtnColor();
});

function loginBtnColor() {
  if (idText.value.length > 0 && pwText.value.length > 6) {
    loginBtn.setAttribute("style", "opacity: 1");
    loginBtn.disabled = false;
  } else {
    loginBtn.setAttribute("style", "opacity: 0.4");
    loginBtn.disabled = true;
  }
}
