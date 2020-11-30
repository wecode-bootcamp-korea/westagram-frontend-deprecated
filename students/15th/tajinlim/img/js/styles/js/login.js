const button = document.getElementsByClassName('form-btn')[0];
const name = document.getElementsByClassName("inputId")[0];
const pw = document.getElementsByClassName("inputPw")[0];

function changeColor() {
    if (name.value && pw.value) {
        button.style.backgroundColor='#0095F6';
    } else {
        button.style.backgroundColor='#C7E0FD';
    }
}

name.addEventListener('keyup',changeColor);
pw.addEventListener('keyup',changeColor);