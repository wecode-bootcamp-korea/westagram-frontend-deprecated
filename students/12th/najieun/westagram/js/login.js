const button = document.getElementsByClassName('loginBtn')[0];
const name = document.getElementsByClassName("inputName")[0];
const pw = document.getElementsByClassName("inputPw")[0];

function changeColor() {
    const nameValue = name.value;
    const pwValue = pw.value;

    if (nameValue && pwValue.length >= 6) {
        button.removeAttribute('disabled');
        button.style.backgroundColor = '#0095F6';
    }
    else {
        button.setAttribute("disabled", "")
        button.style.backgroundColor = '#B9E0FC';
    }

}

name.addEventListener('keyup', changeColor);
pw.addEventListener('keyup', changeColor);



button.addEventListener('click', function () {
    window.location.href = "../main.html";
})