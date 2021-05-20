// 태그 지정
const userName = document.querySelector(".userName");
const password = document.querySelector(".password");
const loginButton = document.querySelector(".loginButton");

// 로그인 버튼 활성화
const loginButtonControler = () => {
  // 삼항연산자로 변경해야함
  // if (userName.value && password.value) {
  //   loginButton.classList.remove("lightBlueButton");
  //   loginButton.classList.add("darkBlueButton");
  //   loginButton.disabled = false;
  // } else {
  //   loginButton.classList.remove("darkBlueButton");
  //   loginButton.classList.add("lightBlueButton");
  //   loginButton.disabled = true;
  // }

  // loginButton.disabled = userName.value && password.value ? false : true;

  loginButton.disabled =
    userName.value && password.value ? loginValidation() : true;
};

// 로그인 유효성 검사
const loginValidation = () => {
  const idValidation = userName.value.indexOf("@") < 0 ? false : true;
  const passwordValidation = password.value.trim().length < 5 ? false : true;

  return idValidation && passwordValidation ? false : true;
};

// 로그인
const loginButtonClick = () => {
  alert("loginButtonClick");
};

// 이벤트 추가
userName.addEventListener("keyup", loginButtonControler);
password.addEventListener("keyup", loginButtonControler);
loginButton.addEventListener("click", loginButtonClick);
