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
//keyup - 사용자가 키를 뗄 때, keydown - 사용자가 키를 처음 눌렀을 때(눌린 동안 계속해서 발생)
id.addEventListener('keyup', checkLogin);
pw.addEventListener('keyup', checkLogin);

