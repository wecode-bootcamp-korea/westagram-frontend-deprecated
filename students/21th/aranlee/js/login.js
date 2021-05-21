//console.log 지우기, 삼항연산자로 바꾸기
//CSS 정렬, 뺄거 빼고 미디어 쿼리적용
//HTML 시멘틱태그 많이쓰기
//form- 정리 (click& keyup event2개 쓸때)
//

const inputId = document.querySelector("#idValue");
const inputPassword = document.querySelector("#passwordValue");
const checkButton = document.getElementsByClassName("loginButton")[0];
const form = document.querySelector("#submit");
checkButton.disabled = true;

//아이디 받아와서, 아이디 비밀번호 1이상일때 버튼 작동
inputId.addEventListener("keyup", () => {
  if (inputId.value.length > 0 && inputPassword.value.length > 0) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
});
//비밀번호 받아와서 아이디 비밀번호 1이상일때 버튼 작동
inputPassword.addEventListener("keyup", () => {
  if (inputPassword.value.length > 0 && inputId.value.length > 0) {
    checkButton.disabled = false;
  } else {
    checkButton.disabled = true;
  }
});
//버튼 클릭했을때 아이디 비밀번호 값이 다 있을때 메인으로 이동
checkButton.addEventListener("click", () => {
  if (inputPassword.value.length > 0 && inputId.value.length > 0) {
    document.location.href = "main.html";
  }
});
//엔터눌렀을때 아이디 비밀번호 값이 다 있을때 메인으로 이동
checkButton.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    document.location.href = "main.html";
  }
});
//form 작동시 다시 돌아가지 않게 (main으로 넘거가게)
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
