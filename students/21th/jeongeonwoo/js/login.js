const emailForm = document.querySelector("#email-input-box");
const passwordForm = document.querySelector("#password-input-box");
const loginButton = document.querySelector("#login-button");

const PWD_CHECK_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
const EAMIL_CHECK_REGEX =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

emailForm.addEventListener("keyup", listener);
passwordForm.addEventListener("keyup", listener);

loginButton.addEventListener("click", () => {
  if (!EAMIL_CHECK_REGEX.test(emailForm.value)) {
    alert("이메일 형식으로 입력 해주세요.");
    emailForm.focus();
    return false;
  }

  if (!PWD_CHECK_REGEX.test(passwordForm.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
    passwordForm.focus();
    return false;
  }

  alert("로그인 되었습니다.");
  location.href = "index.html";
});

function listener() {
  switch (!(emailForm.value && passwordForm.value)) {
    case true:
      loginButton.disabled = true;
      break;
    case false:
      loginButton.disabled = false;
      break;
  }
}
