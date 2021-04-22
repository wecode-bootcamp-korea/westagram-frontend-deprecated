const loginButton = document.querySelector(".loginBtn");
const inputID = document.querySelector(".inputID");
const inputPW = document.querySelector(".inputPW");

function inputValueCheck() {
    if (!(inputID.value == "") && !(inputPW.value == "")) {
        loginButton.style.backgroundColor = "#0095F6";
    } else {
        loginButton.style.backgroundColor = "#c4e1fb";
    }
};

inputID.addEventListener("keyup", inputValueCheck);
inputPW.addEventListener("keyup", inputValueCheck);