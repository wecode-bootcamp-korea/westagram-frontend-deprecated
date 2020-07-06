const loginEvent = document.getElementsByClassName("loginbutton")[0];

loginEvent.addEventListener("click", function () {
  const id = document.getElementsByClassName("loginId")[0].value;
  const password = document.getElementsByClassName("loginPw")[0].value;

  if (!id) {
    alert("아이디를 입력해주세요!");
    return;
  }
  if (!password) {
    alert("비밀번호를 입력해주세요!");
    return;
  }
  alert("로그인 성공!!");
});

const loginID = document.querySelector(".loginId");
const loginPW = document.querySelector(".loginPw");
const loginButtoN = document.querySelector(".loginbutton");
const iDpWinfo = document.querySelector(".id-pw-box");

iDpWinfo.addEventListener("keyup", function () {
  let idValue = loginID.value;
  let pwValue = loginPW.value;
  if (idValue !== "" && pwValue !== "") {
    loginButtoN.style.backgroundColor = "red";
  }
});
