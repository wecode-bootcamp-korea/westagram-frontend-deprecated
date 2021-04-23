const thisIsButton = document.getElementsByClassName("loginButton")[0];
const inputId = document.getElementsByClassName("idInput")[0];
const inputPw = document.getElementsByClassName("passwordInput")[0];

inputId.addEventListener("keyup", function() {

    let inputIdLength = inputId.value.length;
    let inputPwLength = inputPw.value.length;

    if (inputIdLength>1 && inputPwLength>1) {
        thisIsButton.style.backgroundColor = "blue"
    }

    if (inputIdLength<2 || inputPwLength<2) {
        thisIsButton.style.backgroundColor = "rgb(175, 217, 245)"
    }
})

inputPw.addEventListener("keyup", function() {

    let inputIdLength = inputId.value.length;
    let inputPwLength = inputPw.value.length;

    if (inputIdLength>1 && inputPwLength>1) {
        thisIsButton.style.backgroundColor = "blue"
    }

    if (inputIdLength<2 || inputPwLength<2) {
        thisIsButton.style.backgroundColor = "rgb(175, 217, 245)"
    }
})