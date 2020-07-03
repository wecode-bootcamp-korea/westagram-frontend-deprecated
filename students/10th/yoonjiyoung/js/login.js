const loginId = document.querySelector(".input__id");
const loginPw = document.querySelector(".input__pw");
const loginBtn = document.querySelector(".login__btn");
const loginForm = document.querySelector(".login__input");

const PAINT_BTN = "login__paintBtn";

//이전 코드
// function paintBtn() {
//   let inputVal = loginId.value;
//   let passwordVal = loginPw.value;
//   if (inputVal.length > 1 && passwordVal.length > 1) {
//     loginBtn.classList.add(PAINT_BTN);
//   }
// }

//삼항연산자 사용 코드

function paintBtn() {
  let inputVal = loginId.value;
  let passwordVal = loginPw.value;
  let btnActive = inputVal.length > 1 && passwordVal.length > 1;
  btnActive
    ? loginBtn.classList.add(PAINT_BTN)
    : loginBtn.classList.remove(PAINT_BTN);
}

function handleBtn(event) {
  event.preventDefault();
  location.href = "file:///Users/yoonjiyoung/Downloads/westagram/main.html?";
  console.log(event);
  console.log(location);
}

loginId.addEventListener("keyup", paintBtn);
loginPw.addEventListener("keyup", paintBtn);
loginForm.addEventListener("submit", handleBtn);
