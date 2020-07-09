const loginBtn = document.getElementsByClassName("loginbutton")[0];
const loginID = document.getElementsByClassName("loginId")[0];
const loginPW = document.getElementsByClassName("loginPw")[0];
const loginButtoN = document.getElementsByClassName("loginbutton")[0];
const iDpWinfo = document.getElementsByClassName("login")[0];

loginBtn.addEventListener("click", function () {
  const id = loginID.value;
  const password = loginPW.value;

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

iDpWinfo.addEventListener("keyup", function () {
  let idValue = loginID.value;
  let pwValue = loginPW.value;
  let a = loginButtoN.classList.add("loginbutton-blue");
  let b = loginButtoN.classList.remove("loginbutton-blue");

  /* if (idValue !== "" && pwValue !== "") {
    loginButtoN.classList.add("loginbutton-blue");
    // loginButtoN.style.backgroundColor = "#0095F6";
  } else {
    loginButtoN.classList.remove("loginbutton-blue"); //리무브
  } */

  idValue > 1 ? (pwValue > 1 ? a : b) : b;
});
