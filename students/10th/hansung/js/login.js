const loginBox = document.querySelector(".boxes");
const selectId = document.querySelector(".id-box");
const selectPw = document.querySelector(".pw-box");
const loginBtn = document.querySelector("button");

loginBox.addEventListener("keyup", function () {
  let selectIdVal = selectId.value;
  let selectPwVal = selectPw.value;
  selectIdVal !== "" && selectPwVal !== ""
    ? (loginBtn.style.backgroundColor = "#007dd7")
    : (loginBtn.style.backgroundColor = "#a5ddff");
});
