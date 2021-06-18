"use strict";
const form = document.querySelector(".login-form");
const btn = document.querySelector(".btn-login");

function checkValidation() {
  const valueId = inputId.value;
  const valuePw = inputPw.value;

  if (!valueId.includes("@")) {
    alert("@를 포함시켜 주세요!");
  } else if (valuePw.length < 5) {
    alert("비밀번호는 5글자 이상이여야 합니다!");
  }
}

function checkMoreThanOneLetter(e) {
  const inputId = document.getElementsByClassName("text-id")[0].value;
  const inputPW = document.getElementsByClassName("pw")[0].value;

  if (!inputId || !inputPW) {
    btn.setAttribute("disabled", "");
  } else {
    btn.removeAttribute("disabled", "");
  }
}

const init = () => {
  form.addEventListener("keyup", checkMoreThanOneLetter);
  btn.addEventListener("click", checkValidation);
};

init();
