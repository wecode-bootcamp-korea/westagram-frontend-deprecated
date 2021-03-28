const inputId = document.querySelector(".login_area_id");
const inputPw = document.querySelector(".login_area_pw");
const loginBtn = document.querySelector(".login_area_btn");

// 로그인 페이지 필수 기능 + 추가 기능 포함

// 로그인 페이지 ID, PW validation
// (ex) id >>> '@' 포함 / pw >>> 5글자 이상)

const activeLoginBtn = () => {
  const idValue = inputId.value;
  const pwValue = inputPw.value;
  if (idValue.length >= 1 && idValue.includes("@") && pwValue.length >= 5) {
    loginBtn.classList.add("pressed");
  } else {
    loginBtn.classList.remove("pressed");
  }
};

inputId.addEventListener("keyup", activeLoginBtn);
inputPw.addEventListener("keyup", activeLoginBtn);
