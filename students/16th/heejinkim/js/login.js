const loginId = document.querySelector(".js-id"),
    loginPw = document.querySelector(".js-pw"),
    loginBtn = document.querySelector(".js-btn");

function changeColor() {
    if (loginId.value !== "" && loginPw.value !== "") {
        loginBtn.classList.add("changecolor");
    } else {
        loginBtn.classList.remove("changecolor");
    }
}

loginId.addEventListener("keyup",changeColor);
loginPw.addEventListener("keyup",changeColor);