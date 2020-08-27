const passwordInput = document.querySelector('.passwordInput');
const idInput = document.querySelector('.idInput');
const loginBtn = document.querySelector('.loginBtn');

const btnActive = function() {
    const idInputValue = document.querySelector('.idInput').value;
    const passwordInputValue = document.querySelector('.passwordInput').value;

    if (idInputValue && passwordInputValue.length > 5) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.style.cursor = "pointer";
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.style.backgroundColor = "#B9E0FC";
        loginBtn.style.cursor = "default";
        loginBtn.setAttribute("disabled", "");
    }
}

loginBtn.onclick = function() {
    location.href = "./main.html";
}

function init() {
    passwordInput.addEventListener('keyup', btnActive);
    idInput.addEventListener('keyup', btnActive);
}

init();
