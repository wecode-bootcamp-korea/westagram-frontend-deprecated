function login_onclick() {
  let id = document.getElementById("email").value;
  const pwd = document.getElementById("password").value;

  if (id === "") {
    alert("이메일을 입력하시오");
    return;
  } else if (pwd === "") {
    alert("비밀번호를 입력하시오");
    return;
  }

  let checkEmail = 0;
  for (i = 0; i < id.length; i++) {
    if (id[i] === "@") {
      checkEmail++;
    }
  }
  if (checkEmail === 0) {
    alert("이메일 형식을 쓰시오.");
    return;
  }

  const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
  if (pattern_kor.test(id)) {
    alert("한글을 입력하셨습니다.");
    return;
  }

  sessionStorage.setItem("id", id);
  location.href = "main.html";
}

const password = document.getElementById("password");
password.addEventListener("keyup", function () {
  const emailData = document.getElementById("email");

  let isBtnActive = emailData.value !== "" && password.value !== "";
  let loginBtn = document.querySelector(".main-body button");

  loginBtn
    ? (loginBtn.style.backgroundColor = "#0095f6")
    : (loginBtn.style.backgroundColor = "skyblue");
});
