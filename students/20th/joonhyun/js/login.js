const id = document.getElementById ("userId");
const pw = document.getElementById ("userPw");


function actLogin(){
    const loginButton = document.getElementById("userLoginBtn");
    id.value.length >= 1  && pw.value.length >=6 ? (
    loginButton.style.backgroundColor = "#1997F3"
    ) : (
    loginButton.style.backgroundColor = "#B2DFFC"
    );
}
const eventCheck = document.querySelector("form");
eventCheck.addEventListener("keyup", actLogin)

