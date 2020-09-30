"use strict";

const userId = document.getElementsByTagName("input")[0];
const userPw = document.getElementsByTagName("input")[1];
const loginBtn = document.querySelector("button");
const idPw = document.querySelector(".login");

idPw.addEventListener("keyup", function () {
  const isValid =
    userId.value.length > 0 &&
    userId.value.includes("@") &&
    userPw.value.length > 4;

  isValid
    ? (loginBtn.style.backgroundColor = "#0095F6")
    : (loginBtn.style.backgroundColor = "#b2dffc");
});

/*keydown, keypress event는 다음 key가 눌려야 그 직전 event가 종료된 것으로 인식하는듯하다.
keydown/keypress를 사용할 경우, 예상보다 key를 한번 더 눌러야 배경색이 변경된다.*/
