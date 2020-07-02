const userInfoValue = document.querySelectorAll(".userinfo");
const loginBtn = document.querySelector("#loginBtn");
const wrongPw = document.querySelector(".wrong");
const loginInfo = {
  id: "admin",
  pw: "admin",
};

function handleLoginBtnColor() {
  for (let i = 0; i < userInfoValue.length; i++) {
    userInfoValue[i].addEventListener("keyup", function () {
      if (
        (userInfoValue[0].value.length && userInfoValue[1].value.length) >= 1
      ) {
        loginBtn.style.backgroundColor = "#0095f6";
        loginBtn.style.cursor = "pointer";
      } else {
        loginBtn.style.backgroundColor = "#c0dffd";
        loginBtn.style.cursor = "default";
      }
    });
  }
}

function handleClick() {
  loginBtn.addEventListener("click", function () {
    for (let j = 0; j < userInfoValue.length; j++) {
      if (
        userInfoValue[0].value === loginInfo.id &&
        userInfoValue[1].value === loginInfo.pw
      ) {
        location.href = "main.html";
      } else {
        wrongPw.style.visibility = "visible";
      }
    }
  });
}

function init() {
  handleLoginBtnColor();
  handleClick();
}

init();
