"use strict";

const userid_location = document.getElementById("login").children[0];
const userpw_location = document.getElementById("login").children[1];

/*keydown, keypress event는 다음 key가 눌려야 그 직전 event가 종료된 것으로 인식하는듯하다.
keydown, keypress를 사용할 경우, 예상보다 key를 한번 더 눌러야 배경색이 변경됨*/

userid_location.addEventListener("keyup", function (e) {
  const userid = document.getElementById("login").children[0].value;
  const userpw = document.getElementById("login").children[1].value;
  const loginbtn = document.getElementById("login").children[2];

  if (userid.length > 0 && userpw.length > 0) {
    loginbtn.style.backgroundColor = "#0095F6";
  } else loginbtn.style.backgroundColor = "#b2dffc";
});

userpw_location.addEventListener("keyup", function (event) {
  const userid = document.getElementById("login").children[0].value;
  const userpw = document.getElementById("login").children[1].value;
  const loginbtn = document.getElementById("login").children[2];

  if (userid.length > 0 && userpw.length > 0) {
    loginbtn.style.backgroundColor = "#0095F6";
  } else loginbtn.style.backgroundColor = "#b2dffc";
});
