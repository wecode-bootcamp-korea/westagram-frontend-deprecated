const idInput = document.getElementsByClassName("login_id")[0]; //.value method는 string 타입으로 변환됨 
const pwInput = document.getElementsByClassName("login_pw")[0];
const btn = document.getElementsByClassName("login_button")[0];
const logInBox = document.getElementsByClassName("box");

logInBox.addEventListener("keyup", changeColor);

function changeColor() {
    if (idInput.value !== "" && pwInput.value !== "") {
        btn.style.backgroundColor = "green";
        document.querySelector(".login_button").removeAttribute("disabled");
    } else {
        btn.style.backgroundColor = "lightblue";
    }
}