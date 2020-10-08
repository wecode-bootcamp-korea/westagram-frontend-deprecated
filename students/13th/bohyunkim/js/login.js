const loginButton = document.getElementsByClassName("login-submit")[0];
const idInput = document.getElementsByClassName("input-field")[0];
const pwInput = document.getElementsByClassName("input-field")[1];
const targetDiv = document.querySelector(".login-info");

targetDiv.addEventListener("keyup", function () {
    let idInputValue = idInput.value;
    let pwInputValue = pwInput.value;

    if (idInputValue.length >= 1 && pwInputValue.length >= 1) {
        loginButton.style.backgroundColor = "rgb(0, 149, 246)";
    } else {
        loginButton.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    }
}
);

// pwInput.addEventListener("key-up", function () {
//     let idInputLength = idInput.value.length;
//     let pwInputLength = pwInput.value.length;

//     (idInputLength >= 1 && pwInputLength >= 1) 
//     ? loginButton.style.backgroundColor = "rgb(0, 149, 246)"
//     : loginButton.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
// }
// );


