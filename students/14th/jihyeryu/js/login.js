const id = document.getElementById("id");
const pw = document.getElementById("pw");
const btn = document.getElementById("login-btn");

function checkLogin (){
    if(id.value !=="" && pw.value !==""){
        console.log("+_+");
        btn.style.backgroundColor='#0095f6';
    }else {
        btn.style.backgroundColor='rgb(201, 224, 249)';
        console.log("*_*");
    }
}

id.addEventListener('keyup', checkLogin);
pw.addEventListener('keyup', checkLogin);

