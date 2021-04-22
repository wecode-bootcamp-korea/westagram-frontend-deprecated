const id = document.getElementById ("userId");
const pw = document.getElementById ("userPw");


function activeButton(loginButton){
    console.log("active");
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#1997F3";
}

function nonActiveButton(loginButton){
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#B2DFFC";
}

function actLogin(){
    const loginButton = document.getElementById("userLoginBtn");
    id.value.length >= 1  && pw.value.length >=6 ? activeButton(loginButton)
      : nonActiveButton(loginButton)
}

const eventCheck = document.querySelector("form");
eventCheck.addEventListener("keyup", actLogin)

