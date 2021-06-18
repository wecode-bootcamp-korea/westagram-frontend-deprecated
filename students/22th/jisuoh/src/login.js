"use strict";

// 아이디 받아오기
// 패스워드 받아오기
// 버튼 받아오기
// 아이디, 패스워드 각각 한 글자 이상이면
// true -> 버튼 활성화
// false -> 버튼 비활성화
const inputId = document.querySelector(".text-id");
const inputPw = document.querySelector(".pw");
const btn = document.querySelector(".btn-login");

// 1. id @ 없으면 alert 뜨도록
// 2. pw 5글자 이상이어야 함 5글자 미만이면 알람창

function checkValidation() {
  const valueId = inputId.value;
  const valuePw = inputPw.value;

  if (!valueId.includes("@")) alert("@를 포함시켜 주세요!");
  else if (valuePw.length < 5) alert("비밀번호는 5글자 이상이여야 합니다!");
}

function checkMoreThanOneLetter() {
  // input : onChange or onKeyPress 이벤트 걸어서 값이 있는지를 실시간으로 검사
  // 버튼 -> setAttribute('disable', 'disabled');
  // removeAttribute('disable');
  const lengthId = inputId.value.length;
  const lengthPw = inputPw.value.length;

  if (!lengthId || !lengthPw) {
    btn.setAttribute("disabled", "disabled");
  } else {
    btn.removeAttribute("disabled", "disabled");
  }
}

inputId.addEventListener("keyup", checkMoreThanOneLetter);
inputPw.addEventListener("keyup", checkMoreThanOneLetter);
btn.addEventListener("click", checkValidation);
