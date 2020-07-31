// login button
const loginButton = document.getElementsByClassName("login-button")[0]
  .children[0];

loginButton.addEventListener("click", () => {
  // id, pw value check
  const idValue = document.getElementsByClassName("login-id")[0].children[0]
    .value;
  const pwValue = document.getElementsByClassName("login-password")[0]
    .children[0].value;

  if (!idValue) {
    alert("전화번호, 사용자 이름 또는 이메일을 입력하세요");
    return;
  }
  if (!pwValue) {
    alert("비밀번호를 입력하세요");
    return;
  }
});

// activate login button

const idInput = document.getElementsByClassName("login-id")[0].children[0];
const passwordInput = document.getElementsByClassName("login-password")[0]
  .children[0];

idInput.addEventListener("keyup", () => {
  const idValue = idInput.value;
  const pwValue = passwordInput.value;
  console.log(idValue.length);
  console.log(pwValue.length);
  if (idValue.length >= 1 && pwValue.length >= 1) {
    loginButton.style.backgroundColor = "#0095F6";
  } else {
    loginButton.style.backgroundColor = "#c0dcfc";
  }
});

passwordInput.addEventListener("keyup", () => {
  const idValue = idInput.value;
  const pwValue = passwordInput.value;
  console.log(idValue.length);
  console.log(pwValue.length);
  if (idValue.length >= 1 && pwValue.length >= 1) {
    loginButton.style.backgroundColor = "#0095F6";
  } else {
    loginButton.style.backgroundColor = "#c0dcfc";
  }
});
