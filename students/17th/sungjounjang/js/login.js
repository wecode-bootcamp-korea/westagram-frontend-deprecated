const loginBtn = document.getElementById("loginBtn")
const inputId = document.getElementById("inputId")
const inputPW = document.getElementById("inputPW")

inputId.addEventListener('keyup', function(e) {
    let validationId = inputId.value
    let validationPW = inputPW.value

    if (validationId.indexOf("@") === -1) {
        loginBtn.style.backgroundColor = "rgb(197,225, 251)";
        return
    }
    if (validationPW.length < 5) {
        loginBtn.style.backgroundColor = "rgb(197,225, 251)";
        return
    }

    inputId.value === '' || inputPW.value === '' ? loginBtn.style.backgroundColor = "rgb(197,225, 251)" : loginBtn.style.backgroundColor = "#0095f6"
})

inputPW.addEventListener('keyup', function(e) {
    let validationId = inputId.value
    let validationPW = inputPW.value

    if (validationId.indexOf("@") === -1) {
        loginBtn.style.backgroundColor = "rgb(197,225, 251)";
        return
    }
    if (validationPW.length < 5) {
        loginBtn.style.backgroundColor = "rgb(197,225, 251)";
        return
    }

    inputId.value === '' || inputPW.value === '' ? loginBtn.style.backgroundColor = "rgb(197,225, 251)" : loginBtn.style.backgroundColor = "#0095f6"
})