const idInput = document.body.querySelector(".userId");
const pwdInput = document.body.querySelector(".userPassword");
const loginBtn = document.body.querySelector(".login_btn");

// 로그인 버튼 색 변경 함수
const buttonColorChange = () => {
  return idInput.value.includes("@") && pwdInput.value.length >= 5
    ? (loginBtn.style.backgroundColor = "rgb(84,160,229)")
    : (loginBtn.style.backgroundColor = "rgb(185,221,251)");
};

// 요소 이벤트 리스너
idInput.addEventListener("keyup", buttonColorChange);
pwdInput.addEventListener("keyup", buttonColorChange);
