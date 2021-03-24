const loginButton = document.getElementsByClassName("login-button")[0];
const loginInfo = document.querySelectorAll(".login-info");
const passwordInput = document.getElementById("password");
const idInput = document.getElementById("id");

loginInfo.forEach(item => item.addEventListener("keyup", function() {
    let passwordValue = passwordInput.value;
    let idValue = idInput.value;

    if(passwordValue !== "" && idValue !== "") {
        loginButton.removeAttribute("disabled");
        loginButton.id = "login-botton-enabled";
    } else {
        loginButton.setAttribute("disabled","");
        loginButton.id = "login-button-disabled";
    }

}));



