const button = document.getElementsByClassName('loginBtn')[0];
const input = document.getElementsByClassName('input')[0];
const name = document.getElementsByClassName("inputName")[0];
const pw = document.getElementsByClassName("inputPw")[0];

function changeColor() {
    if(name.value && pw.value) {
        button.removeAttribute('disabled');
        button.style.backgroundColor='#0095F6';
    } 
}

input.addEventListener('keyup', changeColor);

button.onclick=function() {
    window.location.href="../main.html";
}
