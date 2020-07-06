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
const iDpWinfo = document.querySelector(".login");

iDpWinfo.addEventListener("keyup", function () {
  let idValue = loginID.value;
  let pwValue = loginPW.value;
  if (idValue !== "" && pwValue !== "") {
    loginButtoN.style.backgroundColor = "#0095F6";
  } else if (idValue.length == 0 && pwValue.length == 0) {
    loginButtoN.style.backgroundColor = "rgba(0, 149, 246, 0.3);";
  }
});
