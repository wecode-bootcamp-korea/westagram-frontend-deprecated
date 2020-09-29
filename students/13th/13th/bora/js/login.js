const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("pw-input");
const btn = document.getElementsByClassName("login-submit")[0];

function btnActive() {
    const idVal = idInput.value;
    const pwVal = pwInput.value;

    btn.style.backgroundColor = idVal.length && pwVal.length >= 1 ? "#0096F6" : "#C0DFFD";
};

const input = document.querySelectorAll("input");

input.forEach(function(target) {
    target.addEventListener('keyup', btnActive)
});