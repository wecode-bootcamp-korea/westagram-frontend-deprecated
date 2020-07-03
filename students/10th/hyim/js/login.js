const id = document.getElementById("loginId");
const pw = document.getElementById("loginPw");
const btn = document.getElementById("btn");
const inputBox = document.querySelector(".input-box");

inputBox.addEventListener("keyup", function () {
  let idContent = id.value;
  let pwContent = pw.value;

  // // 기본적인 조건문
  // if (A === true) {
  //   ("A 실행");
  // } else if (A === false) {
  //   ("B 실행");
  // }

  // // 발전 1
  // if (A) {
  //   ("A 실행");
  // } else if (!A) {
  //   ("B 실행");
  // }

  // // 발전 2 - 삼항연산자
  // A ? "A 실행" : "B 실행";

  // if (idContent !== "" && pwContent !== "") {
  //   btn.style.backgroundColor = "#1495F6";
  // } else {
  //   btn.style.backgroundColor = "#b3dffd";
  // }

  id.addEventListener("keyup", function () {
    const idContent = id.value;
    if (idContent.length > 1) {
      btn.style.backgroundColor = "blue";
    }
  });

  let buttonIsActive = idContent !== "" && pwContent !== "";

  buttonIsActive
    ? (btn.style.backgroundColor = "#1495F6")
    : (btn.style.backgroundColor = "#b3dffd");
});
