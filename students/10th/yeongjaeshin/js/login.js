const inputForm = document.querySelector("#input-user-info");
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
      (userInfoValue[0].value.length && userInfoValue[1].value.length) >= 1
        ? ((loginBtn.style.backgroundColor = "#0095f6"),
          (loginBtn.style.cursor = "pointer"))
        : ((loginBtn.style.backgroundColor = "#c0dffd"),
          (loginBtn.style.cursor = "default"));
    });
  }
}

function handleSubmit() {
  for (let i = 0; i < userInfoValue.length; i++) {
    inputForm.addEventListener("submit", function (e) {
      e.preventDefault();
      userInfoValue[0].value === loginInfo.id &&
      userInfoValue[1].value === loginInfo.pw
        ? (location.href = "main.html")
        : (wrongPw.style.visibility = "visible");
    });
  }
}

(function init() {
  handleLoginBtnColor();
  handleSubmit();
})();
