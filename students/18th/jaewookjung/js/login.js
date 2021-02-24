const loginBtn = document.querySelector(".submit_btn");
const userId = document.querySelector(".input_id");
const password = document.querySelector(".input_pw");
const showPasswordBtn = document.querySelector(".show_pw");

// 이벤트 콜백함수 정의
function keyupEvent() {
  if (userId.value !== "" && password.value !== "") {
    loginBtn.style.opacity = "1";
  } else {
    loginBtn.style.opacity = "0.3";
  }
}

function showBtn() {
  if (password.value !== "") {
    showPasswordBtn.style.display = "flex";
  } else {
    showPasswordBtn.style.display = "none";
  }
}

// 이벤트 등록
userId.addEventListener("keyup", keyupEvent);

password.addEventListener("keyup", function () {
  keyupEvent();
  showBtn();
});

showPasswordBtn.addEventListener("click", function () {
  if (showPasswordBtn.innerHTML === "비밀번호 표시") {
    password.setAttribute("type", "text");
    showPasswordBtn.innerHTML = "숨기기";
  } else {
    password.setAttribute("type", "password");
    showPasswordBtn.innerHTML = "비밀번호 표시";
  }
});
