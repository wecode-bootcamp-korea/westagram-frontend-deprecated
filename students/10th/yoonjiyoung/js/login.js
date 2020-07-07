const loginId = document.querySelector(".input__id");
const loginPw = document.querySelector(".input__pw");
const loginBtn = document.querySelector(".login__btn");
const loginForm = document.querySelector(".login__input");

//이전 코드
// function paintBtn() {
//   let inputVal = loginId.value;
//   let passwordVal = loginPw.value;
//   if (inputVal.length > 1 && passwordVal.length > 1) {
//     loginBtn.classList.add(PAINT_BTN);
//   }
// }

//삼항연산자 사용 코드
function activateBtn() {
  let inputVal = loginId.value;
  let passwordVal = loginPw.value;
  const PAINT_BTN = "login__paintBtn";
  let btnActive = inputVal.length > 1 && passwordVal.length > 1;
  btnActive
    ? loginBtn.classList.add(PAINT_BTN)
    : loginBtn.classList.remove(PAINT_BTN);
}

function moveToMain(event) {
  event.preventDefault();
  location.href = "file:///Users/yoonjiyoung/Downloads/westagram/main.html?";
}

loginForm.addEventListener("keyup", activateBtn);
loginForm.addEventListener("submit", moveToMain);
