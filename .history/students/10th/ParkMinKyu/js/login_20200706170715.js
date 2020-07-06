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

const loginID = document.getElementsByClassName("loginId");
const loginPW = document.getElementsByClassName("loginPw");
const loginButtoN = document.getElementsByClassName("loginbutton");
const iDpWinfo = document.getElementsByClassName("login");

iDpWinfo.addEventListener("keyup", function () {
  let idValue = loginID.value;
  let pwValue = loginPW.value;
  if (idValue !== "" && pwValue !== "") {
    loginButtoN.classList.add("loginbutton-blue");
    // loginButtoN.style.backgroundColor = "#0095F6";
  } else {
    loginButtoN.classList.remove("loginbutton-blue"); //리무브
  }
});
