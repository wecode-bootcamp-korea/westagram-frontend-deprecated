/*
현재 id, pw 입력 시 부조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
ex) id >>> '@' 포함 / pw >>> 5글자 이상
*/

const loginBtn = document.querySelector(".login_btn");
let idInfo = document.getElementById("id").value;
let pwdInfo = document.getElementById("pwd").value;

// 두 개의 함수에 같은 변수가 사용된다... 불필요한 중복 발생을 고쳐 줌..

const inspectIdPw = () => {
  idInfo = document.getElementById("id").value;
  pwdInfo = document.getElementById("pwd").value;

  if (idInfo.includes("@") === false) {
    loginBtn.style.backgroundColor = "#c0dffd";
    return;
  }
  if (pwdInfo.length > 4) {
    loginBtn.style.backgroundColor = "#0095f6";
  }
  if (pwdInfo.length <= 4) {
    loginBtn.style.backgroundColor = "#c0dffd";
  }
};

document
  .getElementsByClassName("login_input")[0]
  .addEventListener("keyup", function () {
    inspectIdPw();
  });

document
  .getElementsByClassName("login_input")[1]
  .addEventListener("keyup", function () {
    inspectIdPw();
  });

loginBtn.addEventListener("click", function () {
  if (idInfo.includes("@") === false) {
    alert("전화번호,사용자 이름 또는 이메일을 정확히 입력해주세요!");
    return;
  }

  if (!pwdInfo) {
    alert("비밀번호를 정확히 입력해주세요!");
    return;
  }

  if (pwdInfo.length > 4) {
    alert("로그인에 성공했습니다.");
    location.href = "./main.html";
  }
});
