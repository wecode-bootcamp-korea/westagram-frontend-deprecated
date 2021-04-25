const loginButton = document.querySelector(".loginBtn");
const inputID = document.querySelector(".inputID");
const inputPW = document.querySelector(".inputPW");

function inputValueCheck() {
  if (!(inputID.value == "") && !(inputPW.value == "")) {
    loginButton.classList.replace("btnPassiveColor", "btnActiveColor");
  } else {
    loginButton.classList.replace("btnActiveColor", "btnPassiveColor");
  }
}

function inputValidation() {
  return inputID.value.includes("@") && inputPW.value.length >= 5 ? alert("로그인 성공!") : alert("로그인 정보가 잘못되었습니다.");
}

inputID.addEventListener("keyup", inputValueCheck);
inputPW.addEventListener("keyup", inputValueCheck);
loginButton.addEventListener("click", inputValidation);
