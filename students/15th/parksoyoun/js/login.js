const loginButton = document.getElementsByTagName("button")[0];
const idInput = document.getElementById("loginId");
const passwordInput = document.getElementById("loginPwd");

function setButtonActive () {
    loginButton.style.backgroundColor = "#0095f6";
    loginButton.removeAttribute("disabled");
    loginButton.style.cursor = "pointer";
}
function setButtonDeactive () {
    loginButton.style.backgroundColor = "#c5e0fc ";
    loginButton.setAttribute("disabled","");
    loginButton.style.cursor="default";
}
function buttonActive () {
    const inputId = idInput.value;
    const inputPassword = passwordInput.value;
    (inputId && inputPassword) ? setButtonActive() : setButtonDeactive() ;
}
idInput.addEventListener("keyup",buttonActive);
passwordInput.addEventListener("keyup",buttonActive);