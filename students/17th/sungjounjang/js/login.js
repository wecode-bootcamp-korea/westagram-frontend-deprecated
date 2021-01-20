const loginBtn = document.getElementById("loginBtn")
const inputId = document.getElementById("inputId")
const inputPW = document.getElementById("inputPW")

inputId.addEventListener('keyup', function(e) {
    inputId.value === '' || inputPW.value === '' ? loginBtn.style.backgroundColor = "rgb(197,225, 251)" : loginBtn.style.backgroundColor = "#0095f6"
})

inputPW.addEventListener('keyup', function(e) {
    inputId.value === '' || inputPW.value === '' ? loginBtn.style.backgroundColor = "rgb(197,225, 251)" : loginBtn.style.backgroundColor = "#0095f6"
})