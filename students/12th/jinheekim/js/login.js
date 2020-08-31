const loginForm = document.querySelector(".loginForm");
const email = document.querySelector(".email");
const pwd = document.querySelector(".pwd");
const loginBtn = document.querySelector(".loginBtn");

loginForm.addEventListener("keyup", btnHandler);

loginBtn.addEventListener("click", function () {
    location.href = "./main.html";
});

function btnHandler() {
    if (email.value && pwd.value) {
        actBtn();
    } else {
        inactBtn();
    }
}

function actBtn() {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.style.cursor = "pointer";
    loginBtn.removeAttribute("disabled");
}

function inactBtn() {
    loginBtn.style.backgroundColor = "#B9E0FC";
    loginBtn.style.cursor = "default";
    loginBtn.setAttribute("disabled", "");
}