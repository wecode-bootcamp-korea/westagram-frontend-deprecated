const loginBtn = document.querySelector(".submit_btn");
const userId = document.querySelector(".input_id");
const password = document.querySelector(".input_pw");
const showPasswordBtn = document.querySelector(".show_pw");

// 이벤트 콜백함수 정의
function runLoginBtn() {
    userId.value && password.value.length >= 5
        ? (loginBtn.style.opacity = "1")
        : (loginBtn.style.opacity = "0.3");
}

function showBtn() {
    password.value
        ? (showPasswordBtn.style.display = "flex")
        : (showPasswordBtn.style.display = "none");
}

// 이벤트 등록
userId.addEventListener("keyup", runLoginBtn);

password.addEventListener("keyup", function () {
    runLoginBtn();
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
