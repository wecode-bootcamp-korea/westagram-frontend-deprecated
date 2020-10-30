const form = document.querySelector(".user-form")
const IdInput = document.querySelector(".user-id")
const passwordInput = document.querySelector(".password")
const loginBtn = document.querySelector(".login-btn")
const loginSuccess = document.querySelector(".after-login")
const loginWelcome = document.querySelector(".login-welcome")

let timerId


form.addEventListener("keyup", function(e) {
    let userPassword = passwordInput.value
    loginBtn.style.backgroundColor = userPassword.length > 6 ? "#4e5dfc" : "";
})

form.addEventListener("submit", function(e) {

    let userId = IdInput.value
    let userPassword = passwordInput.value

    validationEmail(userId)
    validationPassword(userPassword)
    login()
})

function validationEmail(userId) {
    let checkedEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    return checkedEmail.test(userId);
}

function validationPassword(userPassword) {
    let checkedPassword = /^[A-Za-z0-9]{6,12}$/
    return checkedPassword.test(userPassword);
}

function login() {
    const emailFailed = document.querySelector(".email-failed")
    const passwordFailed = document.querySelector(".password-failed")
    if (validationEmail() && validationPassword()) {
        loginSuccess.style.display = "block"
        timerId = setTimeout(function() { window.location = "main.html" }, 1000)
    } else if (!validationEmail()) {
        emailFailed.classList.add("show-success")
        setTimeout(() => emailFailed.classList.remove("show-success"), 2000);
    } else if (!validationPassword()) {
        passwordFailed.classList.add("show-success")
        setTimeout(() => passwordFailed.classList.remove("show-success"), 2000);
    }
}