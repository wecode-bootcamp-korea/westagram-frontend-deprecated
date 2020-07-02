const loginBox = document.querySelector(".boxes");
const allInput = document.querySelectorAll("input");

const selectId = document.querySelector(".id-box");
const idPlace = selectId.placeholder;

const selectPw = document.querySelector(".pw-box");
const pwPlace = selectPw.placeholder;

const loginBtn = document.querySelector("button");

loginBox.addEventListener("keyup", function () {
  let selectIdVal = selectId.value;
  let selectPwVal = selectPw.value;
  if (selectIdVal !== "" && selectPwVal !== "") {
    loginBtn.style.backgroundColor = "#007dd7";
  }else{
    loginBtn.style.backgroundColor = "#a5ddff";
  }
});

// if (A) {
//   ("A 실행");
// } else if (!A) {
//   ("B 실행");
// }

// 삼항연산자
// A ? "A 실행" : "B 실행"