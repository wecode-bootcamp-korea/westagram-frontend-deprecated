const form = document.querySelector(".user-form")
const IdInput = document.querySelector(".user-id")
const passwordInput = document.querySelector(".password")
const loginBtn = document.querySelector(".login-btn")
const loginSuccess = document.querySelector(".after-login")
const loginWelcome = document.querySelector(".login-welcome")
let loginObj = []
let timerId


form.addEventListener("keyup", function(e) {
    let userPassword = passwordInput.value
    userPassword.length > 6 ? loginBtn.style.backgroundColor = "#4e5dfc" : loginBtn.style.backgroundColor = ""
})

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let userId = IdInput.value
    let userPassword = passwordInput.value
    IdInput.value = ""
    passwordInput.value = ""
    let userInfo = createObj(userId, userPassword)
    if (loginObj.length > 1) {
        return
    }
    loginObj.push(userInfo)
    validation()
})

function createObj(userId, userPassword) {
    return {
        userId,
        userPassword
    }
}

function validation() {
    if (loginObj[0].userId === "immerfernweh_" && loginObj[0].userPassword === "1234") {
        loginSuccess.style.display = "block"
        timerId = setTimeout(function() { window.location = "main.html" }, 1000)

    } else {
        loginSuccess.style.display = ""
    }
}