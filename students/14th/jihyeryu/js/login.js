const login = document.getElementsByClassName('login')[0]
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const btn = document.getElementById("login-btn");

function checkLogin (){
    const isValid = id.value !=="" && pw.value !=="" 
    isValid ? btn.style.backgroundColor='#0095f6' : btn.style.backgroundColor='rgb(201, 224, 249)'
}

login.addEventListener('keyup', checkLogin);


