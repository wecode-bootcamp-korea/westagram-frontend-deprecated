const id = document.getElementById("loginId");
const pw = document.getElementById("loginPw");
const btn = document.getElementById("btn");
const inputBox = document.querySelector(".input-box");

inputBox.addEventListener("keyup", function () {
  let idContent = id.value;
  let pwContent = pw.value;
  let IsButtonActive = idContent !== "" && pwContent !== "";
  IsButtonActive
    ? (btn.style.backgroundColor = "#1495F6")
    : (btn.style.backgroundColor = "#b3dffd");
});
