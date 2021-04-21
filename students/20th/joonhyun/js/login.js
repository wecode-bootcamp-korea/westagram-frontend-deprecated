const id = document.querySelector (".userId");
const pw = document.querySelector (".userPw");

function actLogin(){
    const loginButton = document.querySelector("#userLogin");
    id.value.length >= 1  && pw.value.length >=6 ? (
    loginButton.style.backgroundColor = "rgb(25,151,243)"
    ) : (
    loginButton.style.backgroundColor = "rgb(178,223,252)"
    )
}
