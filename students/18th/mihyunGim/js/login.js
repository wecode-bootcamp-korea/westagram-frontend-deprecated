// const logo =document.querySelector('.logo')
const text = document.querySelector('.inputName')
const password = document.querySelector('.inputPassword')
const logInBtn = document.querySelector('.logInBtn')

function changeInputColor() {
    console.log("dPQJ")
    if (text.value && password.value) {
        logInBtn.style.background = "rgb(0,149,246)"
    }
    if (!text.value || !password.value) {
        logInBtn.style.background = "rgb(178,223,252)"
    }
}

password.addEventListener('keyup', changeInputColor)
text.addEventListener('keyup', changeInputColor)